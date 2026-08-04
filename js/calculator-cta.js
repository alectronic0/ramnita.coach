/* jshint esversion: 11 */
/**
 * calculator-cta.js
 * Shared CTA drawer logic for the calorie calculator.
 * Used by: index.html, calculator.html
 */
(function () {
  const ctaOverlay      = document.getElementById('cta-overlay');
  const ctaBackdrop     = document.getElementById('cta-backdrop');
  const ctaCloseBtn     = document.getElementById('cta-close-btn');
  const openCtaBtn      = document.getElementById('open-cta-btn');
  const postResultsCta  = document.getElementById('post-results-cta');
  const ctaResultsSummary = document.getElementById('cta-results-summary');
  const hiddenResults   = document.getElementById('hidden-results');
  const ctaForm         = document.getElementById('cta-enquiry-form');
  const ctaFormState    = document.getElementById('cta-form-state');
  const ctaSuccessState = document.getElementById('cta-success-state');

  function openCta() {
    const tdee     = document.getElementById('results-tdee')?.textContent ?? '';
    const calories = document.getElementById('active-deficit-calories')?.textContent ?? '';
    const protein  = document.getElementById('macro-protein')?.textContent ?? '';
    const fat      = document.getElementById('macro-fat')?.textContent ?? '';
    const carbs    = document.getElementById('macro-carb')?.textContent ?? '';
    const duration = document.getElementById('weight-loss-duration')?.textContent ?? '';

    // One line per stat
    const lines = [];
    if (tdee)     lines.push(`Daily Maintenance: <strong>${tdee}</strong>`);
    if (calories) lines.push(`Target (deficit) intake: <strong>${calories}</strong>`);
    if (protein && fat && carbs) lines.push(`Macros: <strong>Protein ${protein} &nbsp;/&nbsp; Fat ${fat} &nbsp;/&nbsp; Carbs ${carbs}</strong>`);
    if (duration) lines.push(`Estimated timeline: <strong>${duration}</strong>`);

    if (ctaResultsSummary) {
      ctaResultsSummary.innerHTML = lines.map(l => `<div class="badge-line">${l}</div>`).join('');
    }

    // Plain text for email hidden field
    let plain = `Maintenance TDEE: ${tdee} | Deficit Target: ${calories}`;
    if (protein) plain += ` | Protein: ${protein}, Fat: ${fat}, Carbs: ${carbs}`;
    if (duration) plain += ` | Est. timeline: ${duration}`;
    if (hiddenResults) hiddenResults.value = plain;

    ctaOverlay?.classList.add('visible');
    document.body.style.overflow = 'hidden';
  }

  function closeCta() {
    ctaOverlay?.classList.remove('visible');
    document.body.style.overflow = '';
  }

  openCtaBtn?.addEventListener('click', openCta);
  ctaCloseBtn?.addEventListener('click', closeCta);
  ctaBackdrop?.addEventListener('click', closeCta);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeCta();
  });

  // Scroll to results only when user explicitly clicks the submit button
  const calcSubmitBtn = document.querySelector('.btn-calc-submit');
  calcSubmitBtn?.addEventListener('click', () => {
    setTimeout(() => {
      const results = document.getElementById('calculator-results');
      if (results) results.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 150);
  });

  // Show CTA band after any successful form submit
  const calcForm2 = document.getElementById('calorie-form');
  calcForm2?.addEventListener('submit', () => {
    setTimeout(() => {
      if (postResultsCta) postResultsCta.classList.add('visible');
    }, 400);
  });

  // CTA enquiry form — fetch submit with inline success state
  ctaForm?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = ctaForm.querySelector('[type="submit"]');
    const original = btn.textContent;
    btn.textContent = 'Sending…';
    btn.disabled = true;

    try {
      await fetch(ctaForm.action, {
        method: 'POST',
        body: new FormData(ctaForm),
        headers: { 'Accept': 'application/json' }
      });
      if (ctaFormState) ctaFormState.style.display = 'none';
      if (ctaSuccessState) ctaSuccessState.style.display = 'block';
    } catch (_) {
      ctaForm.submit();
    }
  });
})();
