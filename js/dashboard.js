// Raminta Coaching — client progress dashboard (beta)
// Reads a JSON data source (data/clients/<id>.json), merges browser-local
// weigh-ins, and renders hand-rolled SVG charts.

(() => {
  const CLIENT_ID = document.body.dataset.client || 'alec';
  const LOCAL_KEY = `rc-local-weighins-${CLIENT_ID}`;

  // Chart palette: data mark green validated for chart use; everything else
  // uses text/surface tokens from the site design system.
  const C = {
    data: '#4d8a52',
    dataSoft: 'rgba(77, 138, 82, 0.10)',
    grid: '#eae7de',
    axisText: '#5b635b',
    surface: '#ffffff',
    up: '#a3552e', // weight moving up (against goal)
  };

  const fmtDate = (iso) =>
    new Date(iso + 'T00:00:00').toLocaleDateString('en-GB', { day: 'numeric', month: 'short' });

  const el = (id) => document.getElementById(id);

  let base = null; // fetched client data
  let range = 'all';

  // ---------- data ----------

  function localEntries() {
    try {
      return JSON.parse(localStorage.getItem(LOCAL_KEY)) || [];
    } catch {
      return [];
    }
  }

  function mergedWeighIns() {
    const byDate = new Map();
    base.weighIns.forEach((w) => byDate.set(w.date, { ...w, source: 'coach' }));
    localEntries().forEach((w) => byDate.set(w.date, { ...w, source: 'local' }));
    return [...byDate.values()].sort((a, b) => a.date.localeCompare(b.date));
  }

  function inRange(list, dateKey) {
    if (range === 'all' || list.length === 0) return list;
    const last = list[list.length - 1][dateKey];
    const cutoff = new Date(last + 'T00:00:00');
    cutoff.setDate(cutoff.getDate() - Number(range));
    return list.filter((d) => new Date(d[dateKey] + 'T00:00:00') >= cutoff);
  }

  // ---------- tiles ----------

  function renderTiles(weighIns, workouts) {
    const unit = base.unit;
    if (weighIns.length) {
      const cur = weighIns[weighIns.length - 1];
      const first = weighIns[0];
      const change = cur.weight - first.weight;
      const goalDiff = cur.weight - base.goalWeight;

      el('stat-current').textContent = `${cur.weight.toFixed(1)} ${unit}`;
      el('stat-current-delta').textContent = `as of ${fmtDate(cur.date)}`;

      const changeEl = el('stat-change');
      changeEl.textContent = `${change > 0 ? '+' : ''}${change.toFixed(1)} ${unit}`;
      changeEl.style.color = change <= 0 ? C.data : C.up;
      el('stat-change-note').textContent = `since ${fmtDate(first.date)}`;

      el('stat-goal').textContent = `${base.goalWeight.toFixed(1)} ${unit}`;
      el('stat-goal-note').textContent =
        goalDiff > 0 ? `${goalDiff.toFixed(1)} ${unit} to go` : 'goal reached 🎉';
    }
    if (workouts.length) {
      const total = workouts.reduce((s, w) => s + w.sessions, 0);
      el('stat-sessions').textContent = (total / workouts.length).toFixed(1);
      el('stat-sessions-note').textContent = `${total} sessions in range`;
    } else {
      el('stat-sessions').textContent = '–';
      el('stat-sessions-note').textContent = '';
    }
  }

  // ---------- shared chart helpers ----------

  function niceTicks(min, max, count = 4) {
    const span = max - min || 1;
    const step0 = span / count;
    const mag = Math.pow(10, Math.floor(Math.log10(step0)));
    const step = [1, 2, 5, 10].map((m) => m * mag).find((s) => s >= step0);
    const lo = Math.floor(min / step) * step;
    const ticks = [];
    for (let v = lo; v <= max + step * 0.5; v += step) ticks.push(+v.toFixed(6));
    return ticks;
  }

  function svgEl(tag, attrs) {
    const node = document.createElementNS('http://www.w3.org/2000/svg', tag);
    for (const [k, v] of Object.entries(attrs)) node.setAttribute(k, v);
    return node;
  }

  function makeTooltip(holder) {
    const tip = document.createElement('div');
    tip.className = 'chart-tip';
    tip.hidden = true;
    holder.appendChild(tip);
    return tip;
  }

  function fillTip(tip, value, label) {
    tip.replaceChildren();
    const v = document.createElement('strong');
    v.textContent = value;
    const l = document.createElement('span');
    l.textContent = label;
    tip.append(v, l);
  }

  // ---------- weight line chart ----------

  function renderWeightChart(data) {
    const holder = el('weight-chart');
    holder.replaceChildren();
    if (data.length < 2) {
      holder.textContent = 'Not enough data in this range yet.';
      return;
    }

    const W = holder.clientWidth || 640;
    const H = 300;
    const pad = { top: 26, right: 64, bottom: 34, left: 48 };
    const iw = W - pad.left - pad.right;
    const ih = H - pad.top - pad.bottom;

    const ys = data.map((d) => d.weight);
    const yMin = Math.min(...ys, base.goalWeight) - 1;
    const yMax = Math.max(...ys) + 1;
    const ticks = niceTicks(yMin, yMax);
    const y = (v) => pad.top + ih - ((v - ticks[0]) / (ticks[ticks.length - 1] - ticks[0])) * ih;
    const x = (i) => pad.left + (i / (data.length - 1)) * iw;

    const svg = svgEl('svg', { width: W, height: H, viewBox: `0 0 ${W} ${H}`, role: 'img' });
    svg.setAttribute('aria-label', `Weight progression from ${data[0].weight} to ${data[data.length - 1].weight} ${base.unit}`);

    // gridlines + y ticks (hairline, solid, recessive)
    ticks.forEach((t) => {
      svg.append(
        svgEl('line', { x1: pad.left, x2: W - pad.right, y1: y(t), y2: y(t), stroke: C.grid, 'stroke-width': 1 }),
      );
      const lbl = svgEl('text', { x: pad.left - 8, y: y(t) + 4, 'text-anchor': 'end', class: 'axis-text' });
      lbl.textContent = t;
      svg.append(lbl);
    });

    // x tick labels (~5, evenly spaced)
    const every = Math.max(1, Math.round(data.length / 5));
    data.forEach((d, i) => {
      if (i % every !== 0 && i !== data.length - 1) return;
      const lbl = svgEl('text', { x: x(i), y: H - 10, 'text-anchor': 'middle', class: 'axis-text' });
      lbl.textContent = fmtDate(d.date);
      svg.append(lbl);
    });

    // goal line (dashed exception is avoided: hairline solid, labelled)
    const gy = y(base.goalWeight);
    svg.append(svgEl('line', { x1: pad.left, x2: W - pad.right, y1: gy, y2: gy, stroke: '#c9bfa8', 'stroke-width': 1 }));
    const goalLbl = svgEl('text', { x: W - pad.right + 6, y: gy + 4, class: 'axis-text' });
    goalLbl.textContent = 'goal';
    svg.append(goalLbl);

    // area wash (~10% opacity) + 2px line
    const pts = data.map((d, i) => `${x(i)},${y(d.weight)}`);
    svg.append(
      svgEl('path', {
        d: `M${pts.join('L')}L${x(data.length - 1)},${pad.top + ih}L${x(0)},${pad.top + ih}Z`,
        fill: C.dataSoft,
      }),
      svgEl('path', {
        d: `M${pts.join('L')}`,
        fill: 'none',
        stroke: C.data,
        'stroke-width': 2,
        'stroke-linejoin': 'round',
        'stroke-linecap': 'round',
      }),
    );

    // end marker: >=8px dot with 2px surface ring + endpoint direct label
    const li = data.length - 1;
    svg.append(
      svgEl('circle', { cx: x(li), cy: y(data[li].weight), r: 5, fill: C.data, stroke: C.surface, 'stroke-width': 2 }),
    );
    const endLbl = svgEl('text', { x: x(li) + 10, y: y(data[li].weight) + 4, class: 'end-label' });
    endLbl.textContent = `${data[li].weight.toFixed(1)} ${base.unit}`;
    svg.append(endLbl);

    // crosshair + hover dot
    const cross = svgEl('line', { y1: pad.top, y2: pad.top + ih, stroke: '#c8cfc8', 'stroke-width': 1 });
    const hoverDot = svgEl('circle', { r: 5, fill: C.data, stroke: C.surface, 'stroke-width': 2 });
    cross.setAttribute('visibility', 'hidden');
    hoverDot.setAttribute('visibility', 'hidden');
    svg.append(cross, hoverDot);

    holder.appendChild(svg);
    const tip = makeTooltip(holder);

    const showIndex = (i) => {
      const d = data[i];
      cross.setAttribute('x1', x(i));
      cross.setAttribute('x2', x(i));
      cross.setAttribute('visibility', 'visible');
      hoverDot.setAttribute('cx', x(i));
      hoverDot.setAttribute('cy', y(d.weight));
      hoverDot.setAttribute('visibility', 'visible');
      fillTip(tip, `${d.weight.toFixed(1)} ${base.unit}`, `${fmtDate(d.date)}${d.source === 'local' ? ' · logged here' : ''}`);
      tip.hidden = false;
      const tx = Math.min(Math.max(x(i) - 45, 0), W - 110);
      tip.style.left = `${tx}px`;
      tip.style.top = `${y(d.weight) - 58}px`;
    };
    const hide = () => {
      cross.setAttribute('visibility', 'hidden');
      hoverDot.setAttribute('visibility', 'hidden');
      tip.hidden = true;
    };

    // the whole plot is the hit target; crosshair snaps to nearest X
    let focusIdx = li;
    svg.addEventListener('pointermove', (ev) => {
      const rect = svg.getBoundingClientRect();
      const px = ev.clientX - rect.left;
      const i = Math.round(((px - pad.left) / iw) * (data.length - 1));
      showIndex(Math.max(0, Math.min(data.length - 1, i)));
    });
    svg.addEventListener('pointerleave', hide);

    // keyboard: focus shows the latest point, arrows step through
    svg.setAttribute('tabindex', '0');
    svg.addEventListener('focus', () => showIndex(focusIdx));
    svg.addEventListener('blur', hide);
    svg.addEventListener('keydown', (ev) => {
      if (ev.key === 'ArrowLeft') focusIdx = Math.max(0, focusIdx - 1);
      else if (ev.key === 'ArrowRight') focusIdx = Math.min(data.length - 1, focusIdx + 1);
      else return;
      ev.preventDefault();
      showIndex(focusIdx);
    });

    // table view
    const tbody = el('weight-table').querySelector('tbody');
    tbody.replaceChildren();
    data.forEach((d) => {
      const tr = document.createElement('tr');
      const td1 = document.createElement('td');
      td1.textContent = fmtDate(d.date) + (d.source === 'local' ? ' *' : '');
      const td2 = document.createElement('td');
      td2.textContent = `${d.weight.toFixed(1)} ${base.unit}`;
      tr.append(td1, td2);
      tbody.appendChild(tr);
    });
  }

  // ---------- workouts bar chart ----------

  function renderWorkoutChart(data) {
    const holder = el('workout-chart');
    holder.replaceChildren();
    if (!data.length) {
      holder.textContent = 'No sessions in this range yet.';
      return;
    }

    const W = holder.clientWidth || 640;
    const H = 240;
    const pad = { top: 18, right: 16, bottom: 34, left: 36 };
    const iw = W - pad.left - pad.right;
    const ih = H - pad.top - pad.bottom;

    const maxV = Math.max(...data.map((d) => d.sessions), 4);
    const y = (v) => pad.top + ih - (v / maxV) * ih;
    const band = iw / data.length;
    const barW = Math.min(24, band - 2); // ≤24px thick, ≥2px gap

    const svg = svgEl('svg', { width: W, height: H, viewBox: `0 0 ${W} ${H}`, role: 'img' });
    svg.setAttribute('aria-label', 'Workouts completed per week');

    for (let t = 0; t <= maxV; t++) {
      svg.append(svgEl('line', { x1: pad.left, x2: W - pad.right, y1: y(t), y2: y(t), stroke: C.grid, 'stroke-width': 1 }));
      const lbl = svgEl('text', { x: pad.left - 8, y: y(t) + 4, 'text-anchor': 'end', class: 'axis-text' });
      lbl.textContent = t;
      svg.append(lbl);
    }

    holder.appendChild(svg);
    const tip = makeTooltip(holder);

    const every = Math.max(1, Math.round(data.length / 6));
    data.forEach((d, i) => {
      const bx = pad.left + i * band + (band - barW) / 2;
      const by = y(d.sessions);
      const h = pad.top + ih - by;
      // rounded 4px data-end, square baseline
      const r = Math.min(4, h);
      const bar = svgEl('path', {
        d: `M${bx},${pad.top + ih} L${bx},${by + r} Q${bx},${by} ${bx + r},${by} L${bx + barW - r},${by} Q${bx + barW},${by} ${bx + barW},${by + r} L${bx + barW},${pad.top + ih} Z`,
        fill: C.data,
        class: 'bar-mark',
        tabindex: '0',
      });
      bar.setAttribute('aria-label', `Week of ${fmtDate(d.weekStart)}: ${d.sessions} sessions`);

      const show = () => {
        bar.classList.add('lift');
        fillTip(tip, `${d.sessions} session${d.sessions === 1 ? '' : 's'}`, `week of ${fmtDate(d.weekStart)}`);
        tip.hidden = false;
        tip.style.left = `${Math.min(Math.max(bx + barW / 2 - 45, 0), W - 110)}px`;
        tip.style.top = `${by - 54}px`;
      };
      const hide = () => {
        bar.classList.remove('lift');
        tip.hidden = true;
      };
      bar.addEventListener('pointerenter', show);
      bar.addEventListener('pointerleave', hide);
      bar.addEventListener('focus', show);
      bar.addEventListener('blur', hide);
      svg.appendChild(bar);

      if (i % every === 0 || i === data.length - 1) {
        const lbl = svgEl('text', { x: bx + barW / 2, y: H - 10, 'text-anchor': 'middle', class: 'axis-text' });
        lbl.textContent = fmtDate(d.weekStart);
        svg.append(lbl);
      }
    });

    const tbody = el('workout-table').querySelector('tbody');
    tbody.replaceChildren();
    data.forEach((d) => {
      const tr = document.createElement('tr');
      const td1 = document.createElement('td');
      td1.textContent = fmtDate(d.weekStart);
      const td2 = document.createElement('td');
      td2.textContent = String(d.sessions);
      tr.append(td1, td2);
      tbody.appendChild(tr);
    });
  }

  // ---------- orchestration ----------

  function renderAll() {
    const weighIns = inRange(mergedWeighIns(), 'date');
    const workouts = inRange(base.workouts, 'weekStart');
    renderTiles(weighIns, workouts);
    renderWeightChart(weighIns);
    renderWorkoutChart(workouts);
  }

  async function init() {
    el('year').textContent = new Date().getFullYear();
    try {
      const res = await fetch(`data/clients/${CLIENT_ID}.json`);
      if (!res.ok) throw new Error(res.statusText);
      base = await res.json();
    } catch {
      el('dash-error').hidden = false;
      return;
    }

    el('client-name').textContent = `${base.name}'s progress`;
    el('client-programme').textContent = base.programme;
    el('weight-unit-label').textContent = ` (${base.unit})`;

    document.querySelectorAll('.range-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.range-btn').forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        range = btn.dataset.range;
        renderAll();
      });
    });

    el('weighin-form').addEventListener('submit', (ev) => {
      ev.preventDefault();
      const form = ev.target;
      const entry = {
        date: form.date.value,
        weight: parseFloat(form.weight.value),
      };
      if (!entry.date || Number.isNaN(entry.weight)) return;
      const entries = localEntries().filter((e) => e.date !== entry.date);
      entries.push(entry);
      localStorage.setItem(LOCAL_KEY, JSON.stringify(entries));
      form.reset();
      renderAll();
    });

    el('clear-local').addEventListener('click', () => {
      localStorage.removeItem(LOCAL_KEY);
      renderAll();
    });

    let resizeTimer;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(renderAll, 150);
    });

    renderAll();
  }

  init();
})();
