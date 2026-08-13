// Raminta Coaching — site interactions

// Opt in to scroll-reveal styling only when JS is available
document.documentElement.classList.add('js');

if (window.SiteContent) {
  if (!document.querySelector('.site-header') && window.SiteContent.header) {
    document.body.insertAdjacentHTML('afterbegin', window.SiteContent.header);
  }
  if (!document.querySelector('.site-footer') && window.SiteContent.footer) {
    document.body.insertAdjacentHTML('beforeend', window.SiteContent.footer);
  }
  

function renderHero(d) {
  return `
    <section class="hero">
      <div class="container hero-inner">
        <div class="hero-copy reveal">
          <p class="eyebrow">${d.eyebrow}</p>
          <h1>${d.h1}</h1>
          <p class="lead">${d.lead}</p>
          <div class="hero-actions">
            <a class="btn btn-primary" href="${d.ctaPrimary.href}" target="_blank" rel="noopener" data-track="hero_cta_click" data-track-label="${d.ctaPrimary.trackLabel}">${d.ctaPrimary.text}</a>
            <a class="btn btn-ghost" href="${d.ctaSecondary.href}" data-track="hero_cta_click" data-track-label="${d.ctaSecondary.trackLabel}">${d.ctaSecondary.text}</a>
          </div>
          <ul class="hero-points">
            ${d.points.map(p => `<li>${p}</li>`).join('\n            ')}
          </ul>
        </div>
        <div class="hero-visual reveal" aria-hidden="true">
          <div class="hero-card">
            <div class="hero-card-leaf">
              <svg aria-hidden="true" viewBox="0 0 64 64" width="52" height="52" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
                <path d="M32 56 C32 34 40 18 56 8 C56 32 46 48 32 56 Z"/>
                <path d="M32 56 C32 40 26 28 12 20 C13 38 21 50 32 56 Z"/>
              </svg>
            </div>
            <p class="hero-card-quote">&ldquo;${d.quote}&rdquo;</p>
            <p class="hero-card-sign">${d.quoteSign}</p>
          </div>
        </div>
      </div>
    </section>`;
}

function renderAbout(d) {
  return `
    <section class="section" id="about">
      <div class="container grid-2">
        <div class="reveal">
          <p class="eyebrow">${d.eyebrow}</p>
          <h2>${d.title}</h2>
          ${d.paragraphs.map(p => `<p>${p}</p>`).join('\n          ')}
          <a class="btn btn-ghost" href="${d.socialLink.href}" target="_blank" rel="noopener">${d.socialLink.text}</a>
        </div>
        <div class="about-side reveal">
          <figure class="photo-frame">
            <img src="${d.image.src}" alt="${d.image.alt}" loading="lazy" onerror="this.parentElement.style.display='none'">
          </figure>
          <div class="about-panel">
          <h3>${d.checklistTitle}</h3>
          <ul class="check-list">
            ${d.checklist.map(item => `<li>${item}</li>`).join('\n            ')}
          </ul>
          </div>
        </div>
      </div>
    </section>`;
}

function renderJourney(d) {
  return `
    <section class="section section-tinted" id="journey">
      <div class="container">
        <div class="section-head reveal">
          <p class="eyebrow">${d.eyebrow}</p>
          <h2>${d.title}</h2>
          <p class="section-sub">${d.subtitle}</p>
        </div>
        <div class="steps">
          ${d.steps.map(step => `
          <article class="step reveal">
            <span class="step-num">${step.num}</span>
            <h3>${step.title}</h3>
            <p>${step.desc}</p>
          </article>`).join('')}
        </div>
      </div>
    </section>`;
}

function renderOnlineCoaching(d) {
  return `
    <section class="section" id="online-coaching">
      <div class="container">
        <div class="section-head reveal">
          <p class="eyebrow">${d.eyebrow}</p>
          <h2>${d.title}</h2>
          <p class="section-sub">${d.subtitle}</p>
        </div>
        <div class="services-grid">
          ${d.services.map(s => `
          <div class="service-card reveal">
            <div class="service-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">${s.svgPath.startsWith('<') ? s.svgPath : `<path d="${s.svgPath}"/>`}</svg>
            </div>
            <h3>${s.title}</h3>
            <p>${s.desc}</p>
          </div>`).join('')}
        </div>
        <div class="center reveal" style="margin-top: 3rem;">
          <a class="btn btn-primary btn-lg" href="${d.cta.href}" target="_blank" rel="noopener">${d.cta.text}</a>
        </div>
      </div>
    </section>`;
}

function renderPersonalTraining(d) {
  return `
    <section class="section section-tinted" id="personal-training">
      <div class="container grid-2">
        <div class="reveal">
          <p class="eyebrow">${d.eyebrow}</p>
          <h2>${d.title}</h2>
          <p class="lead">${d.lead}</p>
          ${d.paragraphs.map(p => `<p>${p}</p>`).join('\n          ')}
          <a class="btn btn-primary" href="${d.cta.href}" data-track="pt_cta_click" data-track-label="${d.cta.trackLabel}">${d.cta.text}</a>
        </div>
        <div class="reveal pt-image-col">
          <figure class="photo-frame">
            <img src="${d.image.src}" alt="${d.image.alt}" loading="lazy" onerror="this.parentElement.style.display='none'">
          </figure>
        </div>
      </div>
      <div class="container map-block reveal">
        <div id="gym-map" class="gym-map" aria-label="Map of training locations in Welwyn Garden City"></div>
        <noscript>
          <p>Enable JavaScript to see the map, or open the locations directly:
            <a href="https://www.google.com/maps/search/?api=1&amp;query=Norton+Gym+26-28+Hyde+Way+Welwyn+Garden+City+AL7+3UQ">Norton Gym</a> &middot;
            <a href="https://www.google.com/maps/search/?api=1&amp;query=Anytime+Fitness+Welwyn+Garden+City">Anytime Fitness Welwyn Garden City</a>
          </p>
        </noscript>
      </div>
    </section>`;
}

function renderNewsletter(d) {
  return `
    <section class="section" id="newsletter">
      <div class="container">
        <div class="section-head reveal">
          <p class="eyebrow">${d.eyebrow}</p>
          <h2>${d.title}</h2>
          <p class="section-sub">${d.subtitle}</p>
        </div>
        <div class="reveal" style="text-align: center; max-width: 700px; margin: 0 auto 3rem auto;">
          <p>${d.description}</p>
        </div>
        <div class="center reveal">
          <a class="btn btn-primary btn-lg" href="${d.cta.href}" target="_blank" rel="noopener">${d.cta.text}</a>
        </div>
      </div>
    </section>`;
}

function renderTestimonials(d) {
  let progressHtml = "";
  if (d.progressPhotos && d.progressPhotos.enabled) {
     progressHtml = `
        <div class="section-head reveal" style="margin-top: 4rem;">
          <h2>Progress Photos</h2>
        </div>
        <div class="cards newsletter-cards">
           ${Array(d.progressPhotos.count).fill(0).map(() => `
           <article class="card reveal" style="min-height: 200px; display: flex; align-items: center; justify-content: center; background: rgba(0,0,0,0.05);">
             <p>[Before / after photo]</p>
           </article>`).join('')}
        </div>`;
  } else if (d.progressPhotos && d.progressPhotos.count) {
     progressHtml = `
        <!-- <div class="section-head reveal" style="margin-top: 4rem;">
          <h2>Progress Photos</h2>
        </div>
        <div class="cards newsletter-cards">
           ${Array(d.progressPhotos.count).fill(0).map(() => `
           <article class="card reveal" style="min-height: 200px; display: flex; align-items: center; justify-content: center; background: rgba(0,0,0,0.05);">
             <p>[Before / after photo]</p>
           </article>`).join('')}
        </div> -->`;
  }
  return `
    <section class="section section-tinted" id="social-proof">
      <div class="container">
        <div class="section-head reveal">
          <p class="eyebrow">${d.eyebrow}</p>
          <h2>${d.title}</h2>
          <p class="section-sub">${d.subtitle}</p>
        </div>
        <div class="testimonials">
          ${d.quotes.map(q => `
          <blockquote class="testimonial reveal">
            <p>"${q.text}"</p>
            <footer>— ${q.author}</footer>
          </blockquote>`).join('')}
        </div>
        ${progressHtml}
      </div>
    </section>`;
}

function renderDifferent(d) {
  return `
    <section class="section" id="different">
      <div class="container">
        <div class="section-head reveal">
          <h2>${d.title}</h2>
          <p class="section-sub">${d.subtitle}</p>
        </div>
        <ul class="diff-list reveal" style="max-width: 700px; margin: 0 auto; list-style: none; padding: 0;">
          ${d.items.map(item => `
          <li style="margin-bottom: 1rem;">${item.type === 'check' ? `<strong>&#10003; ${item.text}</strong>` : `&#10007; ${item.text}`}</li>
          `).join('')}
        </ul>
      </div>
    </section>`;
}

function renderRoadmap(d) {
  return `
    <section class="section section-tinted" id="roadmap">
      <div class="container">
        <div class="section-head reveal">
          <p class="eyebrow">${d.eyebrow}</p>
          <h2>${d.title}</h2>
          <p class="section-sub">${d.subtitle}</p>
        </div>
        <div class="steps">
          ${d.phases.map(phase => `
          <article class="step reveal">
            <span class="step-num">${phase.num}</span>
            <h3>${phase.title}</h3>
            <p>${phase.desc}</p>
          </article>`).join('')}
        </div>
      </div>
    </section>`;
}

function renderAfter12Weeks(d) {
  return `
    <section class="section" id="after-12-weeks">
      <div class="container reveal">
        <div class="section-head">
          <h2>${d.title}</h2>
        </div>
        <div style="max-width: 800px; margin: 0 auto;">
          <p class="lead">${d.lead}</p>
          <ol style="margin-top: 2rem; line-height: 1.6;">
            ${d.options.map((opt, i) => `
            <li${i === 0 ? ' style="margin-bottom: 1.5rem;"' : ''}>${opt}</li>
            `).join('')}
          </ol>
        </div>
      </div>
    </section>`;
}

function renderInPerson(d) {
  return `
    <section class="section section-tinted" id="personal-training">
      <div class="container grid-2">
        <div class="reveal">
          <p class="eyebrow">${d.eyebrow}</p>
          <h2>${d.title}</h2>
          ${d.paragraphs.map(p => `<p>\n            ${p}\n          </p>`).join('\n          ')}
          <a class="btn btn-primary" href="${d.cta.href}" data-track="contact_click" data-track-label="${d.cta.trackLabel}">${d.cta.text}</a>
        </div>
        <div class="about-panel reveal">
          <h3>Where we train</h3>
          <ul class="location-list">
            ${d.gymLocations.map(gym => `
            <li>
              <img class="gym-logo" src="${gym.logo}" alt="${gym.name} logo" width="28" height="28">
              <div>
                <strong>${gym.name}</strong>
                <span>${gym.address}</span>
                <a href="${gym.mapUrl}" target="_blank" rel="noopener">Open in Google Maps</a>
              </div>
            </li>`).join('')}
          </ul>
          <p class="panel-note">${d.panelNote}</p>
        </div>
      </div>
      <div class="container map-block reveal">
        <div id="gym-map" class="gym-map" aria-label="Map of training locations in Welwyn Garden City"></div>
        <noscript>
          <p>Enable JavaScript to see the map, or open the locations directly:
            <a href="https://www.google.com/maps/search/?api=1&amp;query=Norton+Gym+26-28+Hyde+Way+Welwyn+Garden+City+AL7+3UQ">Norton Gym</a> &middot;
            <a href="https://www.google.com/maps/search/?api=1&amp;query=Anytime+Fitness+Welwyn+Garden+City">Anytime Fitness Welwyn Garden City</a>
          </p>
        </noscript>
      </div>
    </section>`;
}

function renderFaq(d) {
  return `
    <section class="section" id="faq">
      <div class="container container-narrow">
        <div class="section-head reveal">
          <p class="eyebrow">${d.eyebrow}</p>
          <h2>${d.title}</h2>
        </div>
        <div class="faq reveal">
          ${d.items.map(item => `
          <details>
            <summary>${item.q}</summary>
            <p>${item.a}</p>
          </details>`).join('')}
        </div>
        
        <div class="faq-disclaimer reveal" style="margin-top: 2rem; padding: 1rem; background: rgba(0,0,0,0.03); border-radius: 8px; font-size: 0.9em;">
          ${d.disclaimer}
        </div>
      </div>
    </section>`;
}

function renderContact(d) {
  return `
    <section class="section" id="contact">
      <div class="container container-narrow">
        <div class="section-head reveal">
          <p class="eyebrow">${d.eyebrow}</p>
          <h2>${d.title}</h2>
          <p class="section-sub">${d.subtitle}</p>
        </div>
        
        <div class="quiz-container reveal" id="lead-quiz-container" style="background: white; padding: 2.5rem; border-radius: 12px; box-shadow: 0 8px 30px rgba(0,0,0,0.08);">
          <form id="lead-quiz-form" onsubmit="event.preventDefault(); window.processQuiz();">
            ${d.quizSteps.map((step, idx) => `
            <!-- Step ${idx + 1} ${idx === d.quizSteps.length - 1 ? '(Final)' : ''} -->
            <div class="quiz-step" id="q-step-${idx + 1}"${idx > 0 ? ' style="display: none;"' : ''}>
              <h3 style="margin-bottom: 1.5rem; font-size: 1.25rem;">${step.question}</h3>
              ${step.options ? `
              <div class="quiz-options" style="display: flex; flex-direction: column; gap: 0.75rem; margin-bottom: 2rem;">
                ${step.options.map((opt, i) => `
                <label style="display: flex; align-items: center; gap: 0.75rem; padding: 1rem; border: 1px solid #eaeaea; border-radius: 8px; cursor: pointer;${idx === 0 ? ' transition: all 0.2s;' : ''}"><input type="radio" name="${step.name}" value="${opt.value}"${i === 0 && idx === 0 ? ' required' : (idx > 0 && i === 0 ? ' required' : '')}> ${opt.text}</label>
                `).join('').trim()}
              </div>` : `
              <div style="display: flex; flex-direction: column; gap: 1rem; margin-bottom: 2rem;">
                ${step.inputs.map(input => `
                <input type="${input.type}" id="${input.id}" name="${input.name}" placeholder="${input.placeholder}" required style="padding: 1rem; border: 1px solid #eaeaea; border-radius: 8px; width: 100%; font-family: inherit;">
                `).join('').trim()}
              </div>`}
            </div>
            `).join('').trim()}

            <!-- Controls -->
            <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid #eaeaea; padding-top: 1.5rem;">
              <button type="button" class="btn btn-ghost" id="quiz-back-btn" style="display: none;" onclick="window.quizBack()">Back</button>
              <div style="flex-grow: 1;"></div>
              <button type="button" class="btn btn-primary" id="quiz-next-btn" onclick="window.quizNext()">Next</button>
              <button type="submit" class="btn btn-primary" id="quiz-submit-btn" style="display: none;">Get My Recommendation</button>
            </div>
          </form>

          <!-- Result Area -->
          <div id="quiz-result" style="display: none; text-align: center; padding: 1rem 0;">
             <h3 id="result-title" style="margin-bottom: 1rem;">${d.resultsConfig.title}</h3>
             <p id="result-desc" style="margin-bottom: 2rem;"></p>
             <a id="result-link" class="btn btn-primary btn-lg" href="#" target="_blank" rel="noopener">${d.resultsConfig.ctaText}</a>
          </div>
        </div>
      </div>
    </section>`;
}

function renderStart(d) {
  return `
    <section class="section cta-band" id="start">
      <div class="container reveal">
        <h2>${d.title}</h2>
        <p>${d.description}</p>
        <div class="hero-actions center">
          <a class="btn btn-light btn-lg" href="${d.ctaPrimary.href}" target="_blank" rel="noopener" data-track="coaching_plans_click" data-track-label="${d.ctaPrimary.trackLabel}">${d.ctaPrimary.text}</a>
          <a class="btn btn-outline-light" href="${d.ctaSecondary.href}">${d.ctaSecondary.text}</a>
        </div>
      </div>
    </section>`;
}


  const mainEl = document.querySelector('main#main-content');
  if (mainEl && window.SiteContent.sections && mainEl.children.length === 0) {
    const s = window.SiteContent.sections;
    const renderers = {
      hero: renderHero,
      about: renderAbout,
      journey: renderJourney,
      onlineCoaching: renderOnlineCoaching,
      personalTraining: renderPersonalTraining,
      newsletter: renderNewsletter,
      testimonials: renderTestimonials,
      different: renderDifferent,
      roadmap: renderRoadmap,
      after12Weeks: renderAfter12Weeks,
      inPerson: renderInPerson,
      faq: renderFaq,
      contact: renderContact,
      start: renderStart
    };
    const htmlParts = [];
    for (const [key, data] of Object.entries(s)) {
      if (typeof data === 'string') { htmlParts.push(data); continue; }
      if (renderers[key]) htmlParts.push(renderers[key](data));
    }
    mainEl.innerHTML = htmlParts.join('\n');
  }

}


// Mobile navigation toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    const open = navMenu.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(open));
  });

  // Close the mobile menu after choosing a link
  navMenu.addEventListener('click', (event) => {
    if (event.target.matches('a')) {
      navMenu.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    }
  });
}

// Scroll-reveal animations
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

// Footer year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();


/**
 * analytics.js — GA4 event tracking for raminta.coach
 *
 * All events are gated behind Consent Mode v2: GA4 only fires
 * them when analytics_storage is granted. This file just sends
 * the events — consent is managed by cookieconsent-config.js.
 *
 * Used by: index.html, calculator.html, store.html, client.html,
 *          thanks.html, 404.html
 */
(function () {
  'use strict';

  // Safe gtag wrapper — no-ops if GA hasn't loaded yet or consent denied
  function track(eventName, params) {
    if (typeof gtag === 'function') {
      gtag('event', eventName, params || {});
    }
  }

  // ── Scroll depth ──────────────────────────────────────────────────────────
  var scrollMilestones = { 25: false, 50: false, 75: false, 100: false };
  window.addEventListener('scroll', function () {
    var scrolled = window.scrollY + window.innerHeight;
    var total    = document.documentElement.scrollHeight;
    var pct      = Math.round((scrolled / total) * 100);

    [25, 50, 75, 100].forEach(function (milestone) {
      if (!scrollMilestones[milestone] && pct >= milestone) {
        scrollMilestones[milestone] = true;
        track('scroll_depth', { depth_percent: milestone });
      }
    });
  }, { passive: true });

  // ── Section viewed (IntersectionObserver) ────────────────────────────────
  var sectionObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        var id = entry.target.id || entry.target.dataset.section || 'unknown';
        track('section_viewed', { section_id: id });
        sectionObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  document.querySelectorAll('section[id], [data-section]').forEach(function (el) {
    sectionObserver.observe(el);
  });

  // ── Nav link clicks ───────────────────────────────────────────────────────
  document.querySelectorAll('.nav-menu a, .site-nav a').forEach(function (link) {
    link.addEventListener('click', function () {
      track('nav_click', {
        link_text: link.textContent.trim(),
        link_href: link.getAttribute('href')
      });
    });
  });

  // ── Outbound links & contact clicks ──────────────────────────────────────
  document.addEventListener('click', function (e) {
    var link = e.target.closest('a[href]');
    if (!link) return;

    var href = link.href || '';

    // Email / tel
    if (href.startsWith('mailto:') || href.startsWith('tel:')) {
      track('contact_click', {
        contact_type: href.startsWith('mailto:') ? 'email' : 'phone',
        contact_value: href.replace(/^(mailto:|tel:)/, '')
      });
      return;
    }

    // External links
    if (link.hostname && link.hostname !== window.location.hostname) {
      track('outbound_link_click', {
        link_url:  href,
        link_text: link.textContent.trim().slice(0, 100),
        link_domain: link.hostname
      });
    }
  });

  // ── Copy-anchor share button ──────────────────────────────────────────────
  document.querySelectorAll('.copy-anchor-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      track('copy_link', {
        anchor: btn.dataset.anchor || 'unknown'
      });
    });
  });

  // ── Calculator events ─────────────────────────────────────────────────────

  // Calculate submitted
  var calcForm = document.getElementById('calorie-form');
  if (calcForm) {
    calcForm.addEventListener('submit', function () {
      var gender   = document.querySelector('input[name="gender"]:checked')?.value ?? '';
      var activity = document.getElementById('calc-activity')?.value ?? '';
      track('calculator_submitted', {
        gender:         gender,
        activity_level: activity
      });
    });
  }

  // Deficit tab selected
  document.querySelectorAll('.deficit-tab').forEach(function (tab) {
    tab.addEventListener('click', function () {
      track('deficit_tab_selected', {
        deficit_kcal: tab.dataset.deficit,
        tab_label:    tab.querySelector('.tab-title')?.textContent ?? ''
      });
    });
  });

  // CTA band viewed (MutationObserver watching for the .visible class)
  var ctaBand = document.getElementById('post-results-cta');
  if (ctaBand) {
    var ctaBandObserver = new MutationObserver(function (mutations) {
      mutations.forEach(function (m) {
        if (m.type === 'attributes' && ctaBand.classList.contains('visible')) {
          track('cta_band_viewed', { page: window.location.pathname });
          ctaBandObserver.disconnect();
        }
      });
    });
    ctaBandObserver.observe(ctaBand, { attributes: true, attributeFilter: ['class'] });
  }

  // CTA drawer opened
  var openCtaBtn = document.getElementById('open-cta-btn');
  if (openCtaBtn) {
    openCtaBtn.addEventListener('click', function () {
      track('cta_drawer_opened', { page: window.location.pathname });
    });
  }

  // CTA enquiry form submitted
  var ctaForm = document.getElementById('cta-enquiry-form');
  if (ctaForm) {
    ctaForm.addEventListener('submit', function () {
      track('cta_form_submitted', {
        goal:     ctaForm.querySelector('[name="goal"]')?.value ?? '',
        interest: ctaForm.querySelector('[name="interest"]')?.value ?? ''
      });
    });
  }

  // ── Store / booking clicks ────────────────────────────────────────────────
  document.querySelectorAll('[data-track]').forEach(function (el) {
    el.addEventListener('click', function () {
      track(el.dataset.track, {
        label: el.dataset.trackLabel || el.textContent.trim().slice(0, 100)
      });
    });
  });

})();


/* ==========================================
   Calorie & Macro Calculator Logic
   ========================================== */
// Raminta Coaching — Calorie & Macro Calculator Logic

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('calorie-form');
  if (!form) return;
  const calcLayout = document.querySelector('.calculator-layout');
  const resultsContainer = document.getElementById('calculator-results');
  const resultsPrompt = resultsContainer.querySelector('.results-prompt');
  const resultsContent = resultsContainer.querySelector('.results-content');

  // Input elements
  const genderToggles = document.getElementsByName('gender');
  const heightUnitToggles = document.getElementsByName('heightUnits');
  const weightUnitToggles = document.getElementsByName('weightUnits');
  const ageInput = document.getElementById('calc-age');
  const activitySelect = document.getElementById('calc-activity');

  // Height Inputs
  const heightCmInput = document.getElementById('calc-height');
  const heightFtInput = document.getElementById('calc-height-ft');
  const heightInInput = document.getElementById('calc-height-in');

  // Weight Inputs
  const weightKgInput = document.getElementById('calc-weight');
  const weightStInput = document.getElementById('calc-weight-st');
  const weightStLbsInput = document.getElementById('calc-weight-st-lbs');
  const weightLbsInput = document.getElementById('calc-weight-lbs');

  // Target Weight Inputs
  const targetWeightKgInput = document.getElementById('calc-target-weight');
  const targetWeightStInput = document.getElementById('calc-target-weight-st');
  const targetWeightStLbsInput = document.getElementById('calc-target-weight-st-lbs');
  const targetWeightLbsInput = document.getElementById('calc-target-weight-lbs');

  // Results displays
  const tdeeDisplay = document.getElementById('results-tdee');
  const safetyWarning = document.getElementById('safety-warning');
  const safetyLimitDisplay = document.getElementById('safety-limit');
  const activeCaloriesDisplay = document.getElementById('active-deficit-calories');

  // Target weight progress graph selectors
  const progressSection = document.getElementById('weight-progress-section');
  const progressDuration = document.getElementById('weight-loss-duration');
  const progressStartVal = document.getElementById('weight-start-val');
  const progressTargetVal = document.getElementById('weight-target-val');
  const progressLossTotal = document.getElementById('weight-loss-total');
  const progressFill = document.querySelector('.weight-progress-fill');
  const progressFlag = document.querySelector('.weight-progress-flag');

  // Deficit tab buttons
  const deficitTabs = document.querySelectorAll('.deficit-tab');

  // Action buttons
  const clearBtn = document.getElementById('calc-clear-btn');

  // Macro displays
  const proteinVal = document.getElementById('macro-protein');
  const fatVal = document.getElementById('macro-fat');
  const carbVal = document.getElementById('macro-carb');

  const proteinBar = document.querySelector('.bar-protein');
  const fatBar = document.querySelector('.bar-fat');
  const carbBar = document.querySelector('.bar-carb');

  // Calculation variables
  let currentBmr = 0;
  let currentTdee = 0;
  let activeDeficitValue = 500; // default standard deficit

  // Keep track of unit modes for dynamic conversion on toggle
  let activeHeightUnit = document.querySelector('input[name="heightUnits"]:checked')?.value || 'cm';
  let activeWeightUnit = document.querySelector('input[name="weightUnits"]:checked')?.value || 'kg';

  // Toggle Height Units (cm vs. ft/in)
  heightUnitToggles.forEach(toggle => {
    toggle.addEventListener('change', (e) => {
      const newUnit = e.target.value;
      if (newUnit === activeHeightUnit) return;
      
      const isFt = newUnit === 'ft';
      
      // Convert height values if there is a previous active unit
      if (activeHeightUnit !== null) {
        if (isFt) {
          const cmVal = parseFloat(heightCmInput.value);
          if (cmVal && !isNaN(cmVal)) {
            const totalInches = cmVal / 2.54;
            let ft = Math.floor(totalInches / 12);
            let inches = Math.round(totalInches % 12);
            if (inches === 12) {
              ft += 1;
              inches = 0;
            }
            heightFtInput.value = ft;
            heightInInput.value = inches;
          }
        } else {
          const ftVal = parseInt(heightFtInput.value, 10);
          const inVal = parseInt(heightInInput.value, 10) || 0;
          if (ftVal && !isNaN(ftVal)) {
            const cmVal = Math.round((ftVal * 12 + inVal) * 2.54);
            heightCmInput.value = cmVal;
          }
        }
      }
      
      // Update UI classes and required attributes
      if (isFt) {
        calcLayout.classList.add('height-mode-ft');
        calcLayout.classList.remove('height-mode-cm');
        heightCmInput.required = false;
        heightFtInput.required = true;
      } else {
        calcLayout.classList.add('height-mode-cm');
        calcLayout.classList.remove('height-mode-ft');
        heightCmInput.required = true;
        heightFtInput.required = false;
      }
      
      activeHeightUnit = newUnit;
    });
  });

  // Toggle Weight Units (kg vs. st+lbs vs. lbs)
  weightUnitToggles.forEach(toggle => {
    toggle.addEventListener('change', (e) => {
      const newUnit = e.target.value; // 'kg', 'st', 'lbs'
      if (newUnit === activeWeightUnit) return;
      
      // Convert weight values if there is a previous active unit
      if (activeWeightUnit !== null) {
        // Current Weight
        let currentValInKg = 0;
        if (activeWeightUnit === 'kg') {
          currentValInKg = parseFloat(weightKgInput.value);
        } else if (activeWeightUnit === 'lbs') {
          const lbsVal = parseFloat(weightLbsInput.value);
          if (lbsVal) currentValInKg = lbsVal * 0.45359237;
        } else if (activeWeightUnit === 'st') {
          const stVal = parseFloat(weightStInput.value);
          const lbsVal = parseFloat(weightStLbsInput.value) || 0;
          if (stVal) currentValInKg = (stVal * 14 + lbsVal) * 0.45359237;
        }
        
        if (currentValInKg && !isNaN(currentValInKg)) {
          if (newUnit === 'kg') {
            weightKgInput.value = Math.round(currentValInKg);
          } else if (newUnit === 'lbs') {
            weightLbsInput.value = Math.round(currentValInKg / 0.45359237);
          } else if (newUnit === 'st') {
            const totalLbs = currentValInKg / 0.45359237;
            let st = Math.floor(totalLbs / 14);
            let lbs = Math.round(totalLbs % 14);
            if (lbs === 14) {
              st += 1;
              lbs = 0;
            }
            weightStInput.value = st;
            weightStLbsInput.value = lbs;
          }
        }

        // Target Weight
        let targetValInKg = 0;
        if (activeWeightUnit === 'kg') {
          targetValInKg = parseFloat(targetWeightKgInput.value);
        } else if (activeWeightUnit === 'lbs') {
          const lbsVal = parseFloat(targetWeightLbsInput.value);
          if (lbsVal) targetValInKg = lbsVal * 0.45359237;
        } else if (activeWeightUnit === 'st') {
          const stVal = parseFloat(targetWeightStInput.value);
          const lbsVal = parseFloat(targetWeightStLbsInput.value) || 0;
          if (stVal) targetValInKg = (stVal * 14 + lbsVal) * 0.45359237;
        }
        
        if (targetValInKg && !isNaN(targetValInKg)) {
          if (newUnit === 'kg') {
            targetWeightKgInput.value = Math.round(targetValInKg);
          } else if (newUnit === 'lbs') {
            targetWeightLbsInput.value = Math.round(targetValInKg / 0.45359237);
          } else if (newUnit === 'st') {
            const totalLbs = targetValInKg / 0.45359237;
            let st = Math.floor(totalLbs / 14);
            let lbs = Math.round(totalLbs % 14);
            if (lbs === 14) {
              st += 1;
              lbs = 0;
            }
            targetWeightStInput.value = st;
            targetWeightStLbsInput.value = lbs;
          }
        }
      }
      
      // Update UI classes and required attributes
      calcLayout.classList.remove('weight-mode-kg', 'weight-mode-st', 'weight-mode-lbs');
      calcLayout.classList.add(`weight-mode-${newUnit}`);
      
      weightKgInput.required = (newUnit === 'kg');
      weightStInput.required = (newUnit === 'st');
      weightLbsInput.required = (newUnit === 'lbs');
      
      activeWeightUnit = newUnit;
    });
  });

  // Handle Form Submission
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Validate form inputs
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    // Retrieve input values
    const age = parseInt(ageInput.value, 10);
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const heightUnit = document.querySelector('input[name="heightUnits"]:checked').value;
    const weightUnit = document.querySelector('input[name="weightUnits"]:checked').value;
    const activityMultiplier = parseFloat(activitySelect.value);

    let weightKg = 0;
    let heightCm = 0;

    // Convert Height to cm
    if (heightUnit === 'ft') {
      const ft = parseInt(heightFtInput.value, 10);
      const inches = parseInt(heightInInput.value, 10) || 0;
      heightCm = (ft * 12 + inches) * 2.54;
    } else {
      heightCm = parseFloat(heightCmInput.value);
    }

    // Convert Weight to kg
    if (weightUnit === 'lbs') {
      const lbs = parseFloat(weightLbsInput.value);
      weightKg = lbs * 0.45359237;
    } else if (weightUnit === 'st') {
      const st = parseFloat(weightStInput.value);
      const lbs = parseFloat(weightStLbsInput.value) || 0;
      weightKg = (st * 14 + lbs) * 0.45359237;
    } else {
      weightKg = parseFloat(weightKgInput.value);
    }

    // Calculate BMR (Mifflin-St Jeor)
    if (gender === 'male') {
      currentBmr = (10 * weightKg) + (6.25 * heightCm) - (5 * age) + 5;
    } else if (gender === 'female') {
      currentBmr = (10 * weightKg) + (6.25 * heightCm) - (5 * age) - 161;
    } else {
      // Other: Average of male (+5) and female (-161) offset constants => -78
      currentBmr = (10 * weightKg) + (6.25 * heightCm) - (5 * age) - 78;
    }

    // Calculate TDEE
    currentTdee = currentBmr * activityMultiplier;

    // Display TDEE
    tdeeDisplay.textContent = `${Math.round(currentTdee).toLocaleString()} kcal`;

    // Show Results Panel
    resultsPrompt.style.display = 'none';
    resultsContent.style.display = 'block';

    // Calculate Deficits and display on tabs
    updateDeficitTabs();

    // Calculate and display active selection details
    calculateActiveGoal();

    // Save inputs to local storage
    saveStateToLocalStorage();
  });

  // Reactive Live Update Helper
  const triggerRecalculationIfActive = () => {
    if (resultsContent.style.display === 'block') {
      form.dispatchEvent(new Event('submit'));
    }
  };

  // Height Blur Synchronisation
  heightCmInput.addEventListener('blur', () => {
    const cmVal = parseFloat(heightCmInput.value);
    if (cmVal && !isNaN(cmVal)) {
      const totalInches = cmVal / 2.54;
      let ft = Math.floor(totalInches / 12);
      let inches = Math.round(totalInches % 12);
      if (inches === 12) {
        ft += 1;
        inches = 0;
      }
      heightFtInput.value = ft;
      heightInInput.value = inches;
      triggerRecalculationIfActive();
    }
  });

  const syncHeightFromImperial = () => {
    const ftVal = parseInt(heightFtInput.value, 10);
    const inVal = parseInt(heightInInput.value, 10) || 0;
    if (ftVal && !isNaN(ftVal)) {
      const cmVal = Math.round((ftVal * 12 + inVal) * 2.54);
      heightCmInput.value = cmVal;
      triggerRecalculationIfActive();
    }
  };
  heightFtInput.addEventListener('blur', syncHeightFromImperial);
  heightInInput.addEventListener('blur', syncHeightFromImperial);

  // Weight (Current) Blur Synchronisation
  weightKgInput.addEventListener('blur', () => {
    const kgVal = parseFloat(weightKgInput.value);
    if (kgVal && !isNaN(kgVal)) {
      const totalLbs = kgVal / 0.45359237;
      weightLbsInput.value = Math.round(totalLbs);
      
      let st = Math.floor(totalLbs / 14);
      let lbs = Math.round(totalLbs % 14);
      if (lbs === 14) {
        st += 1;
        lbs = 0;
      }
      weightStInput.value = st;
      weightStLbsInput.value = lbs;
      triggerRecalculationIfActive();
    }
  });

  weightLbsInput.addEventListener('blur', () => {
    const lbsVal = parseFloat(weightLbsInput.value);
    if (lbsVal && !isNaN(lbsVal)) {
      const kgVal = lbsVal * 0.45359237;
      weightKgInput.value = Math.round(kgVal);
      
      let st = Math.floor(lbsVal / 14);
      let lbs = Math.round(lbsVal % 14);
      weightStInput.value = st;
      weightStLbsInput.value = lbs;
      triggerRecalculationIfActive();
    }
  });

  const syncWeightFromStCurrent = () => {
    const stVal = parseFloat(weightStInput.value);
    const lbsVal = parseFloat(weightStLbsInput.value) || 0;
    if (stVal && !isNaN(stVal)) {
      const totalLbs = stVal * 14 + lbsVal;
      weightLbsInput.value = Math.round(totalLbs);
      weightKgInput.value = Math.round(totalLbs * 0.45359237);
      triggerRecalculationIfActive();
    }
  };
  weightStInput.addEventListener('blur', syncWeightFromStCurrent);
  weightStLbsInput.addEventListener('blur', syncWeightFromStCurrent);

  // Weight (Target) Blur Synchronisation
  targetWeightKgInput.addEventListener('blur', () => {
    const kgVal = parseFloat(targetWeightKgInput.value);
    if (kgVal && !isNaN(kgVal)) {
      const totalLbs = kgVal / 0.45359237;
      targetWeightLbsInput.value = Math.round(totalLbs);
      
      let st = Math.floor(totalLbs / 14);
      let lbs = Math.round(totalLbs % 14);
      if (lbs === 14) {
        st += 1;
        lbs = 0;
      }
      targetWeightStInput.value = st;
      targetWeightStLbsInput.value = lbs;
      triggerRecalculationIfActive();
    }
  });

  targetWeightLbsInput.addEventListener('blur', () => {
    const lbsVal = parseFloat(targetWeightLbsInput.value);
    if (lbsVal && !isNaN(lbsVal)) {
      const kgVal = lbsVal * 0.45359237;
      targetWeightKgInput.value = Math.round(kgVal);
      
      let st = Math.floor(lbsVal / 14);
      let lbs = Math.round(lbsVal % 14);
      targetWeightStInput.value = st;
      targetWeightStLbsInput.value = lbs;
      triggerRecalculationIfActive();
    }
  });

  const syncWeightFromStTarget = () => {
    const stVal = parseFloat(targetWeightStInput.value);
    const lbsVal = parseFloat(targetWeightStLbsInput.value) || 0;
    if (stVal && !isNaN(stVal)) {
      const totalLbs = stVal * 14 + lbsVal;
      targetWeightLbsInput.value = Math.round(totalLbs);
      targetWeightKgInput.value = Math.round(totalLbs * 0.45359237);
      triggerRecalculationIfActive();
    }
  };
  targetWeightStInput.addEventListener('blur', syncWeightFromStTarget);
  targetWeightStLbsInput.addEventListener('blur', syncWeightFromStTarget);

  // Age & Activity Change/Blur Live Updates
  ageInput.addEventListener('blur', () => {
    if (ageInput.value) triggerRecalculationIfActive();
  });
  activitySelect.addEventListener('change', () => {
    triggerRecalculationIfActive();
  });

  // Helper to get current and target weights in kg
  function getWeightsInKg() {
    const weightUnit = document.querySelector('input[name="weightUnits"]:checked').value;
    
    let currentKg = 0;
    if (weightUnit === 'kg') {
      currentKg = parseFloat(weightKgInput.value);
    } else if (weightUnit === 'lbs') {
      const lbs = parseFloat(weightLbsInput.value);
      if (lbs) currentKg = lbs * 0.45359237;
    } else if (weightUnit === 'st') {
      const st = parseFloat(weightStInput.value);
      const lbs = parseFloat(weightStLbsInput.value) || 0;
      if (st) currentKg = (st * 14 + lbs) * 0.45359237;
    }

    let targetKg = 0;
    if (weightUnit === 'kg') {
      targetKg = parseFloat(targetWeightKgInput.value);
    } else if (weightUnit === 'lbs') {
      const lbs = parseFloat(targetWeightLbsInput.value);
      if (lbs) targetKg = lbs * 0.45359237;
    } else if (weightUnit === 'st') {
      const st = parseFloat(targetWeightStInput.value);
      const lbs = parseFloat(targetWeightStLbsInput.value) || 0;
      if (st) targetKg = (st * 14 + lbs) * 0.45359237;
    }

    return { currentKg, targetKg, weightUnit };
  }

  // Format weight values cleanly for nodes in the weight loss graph
  function formatWeightForGraph(kgVal, unit) {
    if (unit === 'kg') {
      return Math.round(kgVal) + ' kg';
    } else if (unit === 'lbs') {
      return Math.round(kgVal / 0.45359237) + ' lbs';
    } else { // 'st'
      const totalLbs = kgVal / 0.45359237;
      const st = Math.floor(totalLbs / 14);
      const lbs = Math.round(totalLbs % 14);
      if (st === 0) return lbs + ' lb';
      if (lbs === 0) return st + ' st';
      return `${st} st ${lbs} lb`;
    }
  }

  // Calculate calories and macros for current selection
  function calculateActiveGoal() {
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const isFemale = gender === 'female';
    const limitFloor = isFemale ? 1200 : 1500; // default for other can also be female limit as baseline

    // Raw calculated target
    let targetCal = currentTdee - activeDeficitValue;
    let isBelowLimit = false;

    if (targetCal < limitFloor) {
      targetCal = limitFloor;
      isBelowLimit = true;
    }

    const roundedCal = Math.round(targetCal);
    activeCaloriesDisplay.textContent = `${roundedCal.toLocaleString()} kcal`;

    // Handle Safety Warning display
    if (isBelowLimit) {
      safetyLimitDisplay.textContent = limitFloor.toString();
      safetyWarning.style.display = 'block';
    } else {
      safetyWarning.style.display = 'none';
    }

    // Calculate and draw target weight progress graph
    const { currentKg, targetKg, weightUnit } = getWeightsInKg();
    if (currentKg && targetKg && targetKg < currentKg) {
      const lossKg = currentKg - targetKg;
      const weeklyRateKg = activeDeficitValue / 1100;
      const weeksNeeded = Math.ceil(lossKg / weeklyRateKg);

      progressStartVal.textContent = formatWeightForGraph(currentKg, weightUnit);
      progressTargetVal.textContent = formatWeightForGraph(targetKg, weightUnit);
      
      if (weightUnit === 'kg') {
        progressLossTotal.textContent = `-${Math.round(lossKg)} kg`;
      } else if (weightUnit === 'lbs') {
        progressLossTotal.textContent = `-${Math.round(lossKg / 0.45359237)} lbs`;
      } else {
        const totalLbs = lossKg / 0.45359237;
        const st = Math.floor(totalLbs / 14);
        const lbs = Math.round(totalLbs % 14);
        if (st === 0) {
          progressLossTotal.textContent = `-${lbs} lb`;
        } else if (lbs === 0) {
          progressLossTotal.textContent = `-${st} st`;
        } else {
          progressLossTotal.textContent = `-${st} st ${lbs} lb`;
        }
      }

      progressDuration.textContent = weeksNeeded === 1 ? '1 week' : `${weeksNeeded} weeks`;

      // Set visually appealing fill percentages (e.g. 60% visually to look like a progress line)
      progressFill.style.width = '60%';
      progressFlag.style.left = '60%';

      progressSection.style.display = 'block';
    } else {
      progressSection.style.display = 'none';
    }

    // Macros math (30% Pro, 30% Fat, 40% Carb split)
    const proteinCal = roundedCal * 0.30;
    const fatCal = roundedCal * 0.30;
    const carbCal = roundedCal * 0.40;

    const proteinG = Math.round(proteinCal / 4);
    const fatG = Math.round(fatCal / 9);
    const carbG = Math.round(carbCal / 4);

    // Update macro values
    proteinVal.textContent = `${proteinG}g`;
    fatVal.textContent = `${fatG}g`;
    carbVal.textContent = `${carbG}g`;

    // Trigger smooth macro bar animation
    setTimeout(() => {
      proteinBar.style.width = '30%';
      fatBar.style.width = '30%';
      carbBar.style.width = '40%';
    }, 50);
  }

  // Update tabs displays based on current calculations
  function updateDeficitTabs() {
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const isFemale = gender === 'female';
    const limitFloor = isFemale ? 1200 : 1500;

    deficitTabs.forEach(tab => {
      const deficit = parseInt(tab.dataset.deficit, 10);
      let calculatedVal = currentTdee - deficit;

      if (calculatedVal < limitFloor) {
        calculatedVal = limitFloor;
      }

      const displayCal = tab.querySelector('.tab-calories');
      displayCal.textContent = `${Math.round(calculatedVal).toLocaleString()} kcal`;
    });
  }

  // Save to Local Storage helper
  function saveStateToLocalStorage() {
    try {
      const state = {
        gender: document.querySelector('input[name="gender"]:checked').value,
        heightUnit: document.querySelector('input[name="heightUnits"]:checked').value,
        weightUnit: document.querySelector('input[name="weightUnits"]:checked').value,
        age: ageInput.value,
        activity: activitySelect.value,
        heightCm: heightCmInput.value,
        heightFt: heightFtInput.value,
        heightIn: heightInInput.value,
        weightKg: weightKgInput.value,
        weightSt: weightStInput.value,
        weightStLbs: weightStLbsInput.value,
        weightLbs: weightLbsInput.value,
        targetWeightKg: targetWeightKgInput.value,
        targetWeightSt: targetWeightStInput.value,
        targetWeightStLbs: targetWeightStLbsInput.value,
        targetWeightLbs: targetWeightLbsInput.value,
        deficit: activeDeficitValue
      };
      localStorage.setItem('raminta_coach_calc_state', JSON.stringify(state));
    } catch (e) {
      console.error('Failed to save state to local storage:', e);
    }
  }

  // Add click listeners to Deficit tab selectors
  deficitTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      deficitTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      activeDeficitValue = parseInt(tab.dataset.deficit, 10);
      
      calculateActiveGoal();
      saveStateToLocalStorage();
    });
  });

  // Load state from Local Storage on init
  function loadStateFromLocalStorage() {
    try {
      const savedState = localStorage.getItem('raminta_coach_calc_state');
      
      if (savedState) {
        const state = JSON.parse(savedState);

        // Restore gender toggle
        if (state.gender) {
          const genderRadio = document.querySelector(`input[name="gender"][value="${state.gender}"]`);
          if (genderRadio) genderRadio.checked = true;
        }

        // Restore height unit toggle
        if (state.heightUnit) {
          const heightRadio = document.querySelector(`input[name="heightUnits"][value="${state.heightUnit}"]`);
          if (heightRadio) {
            heightRadio.checked = true;
            heightRadio.dispatchEvent(new Event('change'));
          }
        }

        // Restore weight unit toggle
        if (state.weightUnit) {
          const weightRadio = document.querySelector(`input[name="weightUnits"][value="${state.weightUnit}"]`);
          if (weightRadio) {
            weightRadio.checked = true;
            weightRadio.dispatchEvent(new Event('change'));
          }
        }

        // Restore numeric inputs
        if (state.age) ageInput.value = state.age;
        if (state.activity) activitySelect.value = state.activity;
        if (state.heightCm) heightCmInput.value = state.heightCm;
        if (state.heightFt) heightFtInput.value = state.heightFt;
        if (state.heightIn) heightInInput.value = state.heightIn;
        if (state.weightKg) weightKgInput.value = state.weightKg;
        if (state.weightSt) weightStInput.value = state.weightSt;
        if (state.weightStLbs) weightStLbsInput.value = state.weightStLbs;
        if (state.weightLbs) weightLbsInput.value = state.weightLbs;
        if (state.targetWeightKg) targetWeightKgInput.value = state.targetWeightKg;
        if (state.targetWeightSt) targetWeightStInput.value = state.targetWeightSt;
        if (state.targetWeightStLbs) targetWeightStLbsInput.value = state.targetWeightStLbs;
        if (state.targetWeightLbs) targetWeightLbsInput.value = state.targetWeightLbs;

        // Restore active deficit value
        if (state.deficit) {
          activeDeficitValue = parseInt(state.deficit, 10);
          deficitTabs.forEach(tab => {
            if (parseInt(tab.dataset.deficit, 10) === activeDeficitValue) {
              tab.classList.add('active');
            } else {
              tab.classList.remove('active');
            }
          });
        }

        // Auto-submit if minimum fields are complete
        const isHeightComplete = state.heightUnit === 'ft' ? state.heightFt : state.heightCm;
        const isWeightComplete = state.weightUnit === 'kg' ? state.weightKg : (state.weightUnit === 'lbs' ? state.weightLbs : state.weightSt);

        if (isHeightComplete && isWeightComplete && state.age) {
          form.dispatchEvent(new Event('submit'));
        }
      }
    } catch (e) {
      console.error('Failed to load state from local storage:', e);
    }
  }

  // Handle Clear Button Click
  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      // Clear input fields
      form.reset();

      // Clear the local storage
      try {
        localStorage.removeItem('raminta_coach_calc_state');
      } catch (e) {
        console.error('Failed to clear local storage:', e);
      }

      // Reset target weight inputs manually because form.reset() clears them
      targetWeightKgInput.value = '';
      targetWeightStInput.value = '';
      targetWeightStLbsInput.value = '';
      targetWeightLbsInput.value = '';

      // Reset unit tracking variables so trigger events run fresh
      activeHeightUnit = null;
      activeWeightUnit = null;

      // Reset unit radio checks in DOM to metric defaults
      const defaultHeightRadio = document.getElementById('height-unit-cm');
      if (defaultHeightRadio) defaultHeightRadio.checked = true;

      const defaultWeightRadio = document.getElementById('weight-unit-kg');
      if (defaultWeightRadio) defaultWeightRadio.checked = true;

      const defaultGenderRadio = document.getElementById('gender-female');
      if (defaultGenderRadio) defaultGenderRadio.checked = true;

      // Re-trigger defaults to set up layout classes and required properties
      if (defaultHeightRadio) defaultHeightRadio.dispatchEvent(new Event('change'));
      if (defaultWeightRadio) defaultWeightRadio.dispatchEvent(new Event('change'));

      // Restore deficit selection to default (Standard 500 kcal)
      activeDeficitValue = 500;
      deficitTabs.forEach(tab => {
        if (parseInt(tab.dataset.deficit, 10) === 500) {
          tab.classList.add('active');
        } else {
          tab.classList.remove('active');
        }
      });

      // Reset results display state
      resultsContent.style.display = 'none';
      resultsPrompt.style.display = 'block';
      progressSection.style.display = 'none';
    });
  }

  // Handle copy link to clipboard
  const copyBtn = document.querySelector('.copy-anchor-btn');
  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      const anchor = copyBtn.dataset.anchor;
      const url = window.location.origin + window.location.pathname + '#' + anchor;
      
      navigator.clipboard.writeText(url).then(() => {
        const linkIcon = copyBtn.querySelector('.icon-link');
        const checkIcon = copyBtn.querySelector('.icon-check');
        
        if (linkIcon && checkIcon) {
          linkIcon.style.display = 'none';
          checkIcon.style.display = 'inline-block';
          
          setTimeout(() => {
            checkIcon.style.display = 'none';
            linkIcon.style.display = 'inline-block';
          }, 2000);
        }
      }).catch(err => {
        console.error('Failed to copy URL to clipboard:', err);
      });
    });
  }

  // Trigger initial defaults manually to set classes and required states on load
  const activeHeightRadio = document.querySelector('input[name="heightUnits"]:checked');
  if (activeHeightRadio) activeHeightRadio.dispatchEvent(new Event('change'));

  const activeWeightRadio = document.querySelector('input[name="weightUnits"]:checked');
  if (activeWeightRadio) activeWeightRadio.dispatchEvent(new Event('change'));

  // Run restoration
  loadStateFromLocalStorage();
});


/* ==========================================
   Calculator CTA Drawer & Form Logic
   ========================================== */

document.addEventListener('DOMContentLoaded', () => {
  if (!document.getElementById('calorie-form')) return;
  (function () {
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

  })();
});


/* ==========================================
   Training Locations Map
   ========================================== */

document.addEventListener('DOMContentLoaded', () => {
// Training-locations map (Leaflet + OpenStreetMap tiles)
//
// ⚠️ COORDINATES: lat/lng below are best estimates — nudge them if a pin
// sits slightly off. Get exact values from Google Maps: right-click the
// spot → the first menu row shows "lat, lng" (click to copy).
const GYM_LOCATIONS = [
  {
    name: 'Norton Gym',
    address: '26–28 Hyde Way, Welwyn Garden City AL7 3UQ',
    lat: 51.7999,
    lng: -0.195,
    icon: 'assets/norton-gym.png',
    mapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Norton+Gym+26-28+Hyde+Way+Welwyn+Garden+City+AL7+3UQ',
  },
  {
    name: 'Anytime Fitness',
    address: 'Welwyn Garden City',
    lat: 51.8025,
    lng: -0.2055,
    icon: 'assets/anytime-fitness.png',
    mapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Anytime+Fitness+Welwyn+Garden+City',
  },
];

const mapEl = document.getElementById('gym-map');

if (mapEl && typeof L !== 'undefined') {
  const map = L.map(mapEl, { scrollWheelZoom: false });

  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  const bounds = [];

  GYM_LOCATIONS.forEach((gym) => {
    const icon = L.divIcon({
      className: 'gym-pin-wrap',
      html: `<div class="gym-pin"><img src="${gym.icon}" alt=""></div><div class="gym-pin-tip"></div>`,
      iconSize: [44, 54],
      iconAnchor: [22, 54],
      popupAnchor: [0, -50],
    });

    const marker = L.marker([gym.lat, gym.lng], { icon, title: gym.name }).addTo(map);

    // Popup content built with DOM APIs (no HTML string interpolation)
    const popup = document.createElement('div');
    popup.className = 'gym-popup';
    const strong = document.createElement('strong');
    strong.textContent = gym.name;
    const addr = document.createElement('span');
    addr.textContent = gym.address;
    const link = document.createElement('a');
    link.href = gym.mapsUrl;
    link.target = '_blank';
    link.rel = 'noopener';
    link.textContent = 'Open in Google Maps';
    popup.append(strong, addr, link);

    marker.bindPopup(popup);
    bounds.push([gym.lat, gym.lng]);
  });

  map.fitBounds(bounds, { padding: [60, 60], maxZoom: 15 });
}

});


/* ==========================================
   Client Progress Dashboard (Beta)
   ========================================== */

document.addEventListener('DOMContentLoaded', () => {
// Raminta Coaching — client progress dashboard (beta)
// Reads a JSON data source (data/clients/<id>.json), merges browser-local
// weigh-ins, and renders hand-rolled SVG charts.

(() => {
  const CLIENT_ID = document.body.dataset.client || 'alec';
  const LOCAL_KEY = `rc-local-weighins-${CLIENT_ID}`;

  // Chart palette: data mark green validated for chart use; everything else
  // uses text/surface tokens from the site design system.
  const C = {
    data: '#6B7A5E',                // Deep Sage
    dataSoft: 'rgba(107, 122, 94, 0.10)', // Soft Sage
    grid: '#E9DFCE',                // Warm Cream border
    axisText: '#5c514b',            // Soft Charcoal Brown
    surface: '#ffffff',
    up: '#B5654A',                  // Terracotta
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
      
      if (window.SiteContent && window.SiteContent.clients && window.SiteContent.clients[CLIENT_ID]) {
        base = window.SiteContent.clients[CLIENT_ID];
      } else {
        throw new Error('Client not found');
      }

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

  if (document.getElementById('client-name')) { init(); }
})();

});


// --- Lead Quiz Logic ---
window.currentQuizStep = 1;
window.quizTotalSteps = 6;

window.updateQuizButtons = function() {
  const currentInputs = document.querySelectorAll('#q-step-' + window.currentQuizStep + ' input[type="radio"], #q-step-' + window.currentQuizStep + ' input[type="text"], #q-step-' + window.currentQuizStep + ' input[type="email"]');
  let isValid = false;
  
  if (currentInputs.length > 0) {
    if (currentInputs[0].type === 'radio') {
      currentInputs.forEach(i => { if (i.checked) isValid = true; });
    } else {
      let allTextValid = true;
      currentInputs.forEach(i => { if (i.value.trim() === '') allTextValid = false; });
      isValid = allTextValid;
    }
  } else {
    isValid = true; // No inputs on this step
  }
  
  const nextBtn = document.getElementById('quiz-next-btn');
  const submitBtn = document.getElementById('quiz-submit-btn');
  
  if (nextBtn) {
    nextBtn.disabled = !isValid;
    nextBtn.style.opacity = isValid ? '1' : '0.5';
    nextBtn.style.cursor = isValid ? 'pointer' : 'not-allowed';
  }
  
  if (submitBtn) {
    submitBtn.disabled = !isValid;
    submitBtn.style.opacity = isValid ? '1' : '0.5';
    submitBtn.style.cursor = isValid ? 'pointer' : 'not-allowed';
  }
};

window.fadeTransition = function(hideId, showId, callback) {
  const hideEl = document.getElementById(hideId);
  const showEl = document.getElementById(showId);
  
  if(hideEl) {
    hideEl.style.transition = 'opacity 0.2s ease-out';
    hideEl.style.opacity = '0';
    setTimeout(() => {
      hideEl.style.display = 'none';
      if(showEl) {
        showEl.style.display = 'block';
        // force reflow
        void showEl.offsetWidth;
        showEl.style.transition = 'opacity 0.3s ease-in';
        showEl.style.opacity = '1';
      }
      if(callback) callback();
    }, 200);
  }
};

window.quizNext = function() {
  const currentInputs = document.querySelectorAll('#q-step-' + window.currentQuizStep + ' input[type="radio"], #q-step-' + window.currentQuizStep + ' input[type="text"], #q-step-' + window.currentQuizStep + ' input[type="email"]');
  if (currentInputs.length > 0) {
    if (currentInputs[0].type === 'radio') {
      let checked = false;
      currentInputs.forEach(i => { if (i.checked) checked = true; });
      if (!checked) return;
    } else {
      let allTextValid = true;
      currentInputs.forEach(i => { if (i.value.trim() === '') allTextValid = false; });
      if (!allTextValid) return;
    }
  }
  
  window.fadeTransition('q-step-' + window.currentQuizStep, 'q-step-' + (window.currentQuizStep + 1), () => {
    window.currentQuizStep++;
    document.getElementById('quiz-back-btn').style.display = 'inline-flex';
    
    if (window.currentQuizStep === window.quizTotalSteps) {
      document.getElementById('quiz-next-btn').style.display = 'none';
      document.getElementById('quiz-submit-btn').style.display = 'inline-flex';
    }
    window.updateQuizButtons();
  });
};

window.quizBack = function() {
  if (window.currentQuizStep > 1) {
    window.fadeTransition('q-step-' + window.currentQuizStep, 'q-step-' + (window.currentQuizStep - 1), () => {
      window.currentQuizStep--;
      
      document.getElementById('quiz-next-btn').style.display = 'inline-flex';
      document.getElementById('quiz-submit-btn').style.display = 'none';
      
      if (window.currentQuizStep === 1) {
        document.getElementById('quiz-back-btn').style.display = 'none';
      }
      window.updateQuizButtons();
    });
  }
};

window.processQuiz = function() {
  const form = document.getElementById('lead-quiz-form');
  const formData = new FormData(form);
  
  // Submit to Cloudflare Worker silently in background
  /* fetch('https://api.raminta.coach/quiz', {
    method: 'POST',
    body: formData,
    headers: {
      'Accept': 'application/json'
    }
  }).catch(err => console.error('Form submission failed', err)); */
  
  const q2 = formData.get('q2');
  const q5 = formData.get('q5');
  const name = formData.get('q-name') || '';
  
  let recTitle = "Consistency Foundation";
  if (q2 === "Yes") {
     recTitle = "GLP-1 Muscle Protocol";
  }
  
  let linkHref = "https://app.hubfit.com/plans/688387865c56841b3dd9c6ea";
  let linkText = "Book Your Consultation";
  if (q5 === "Exploring" || q5 === "Curious") {
     linkHref = "https://blog.raminta.coach";
     linkText = "Get the Free Guide";
  }

  window.fadeTransition('lead-quiz-form', 'quiz-result', () => {
    document.getElementById('result-title').innerText = "Hi " + name + ", your recommended plan is:\\n" + recTitle;
    document.getElementById('result-desc').innerText = "Based on your goals and experience, this is the perfect starting point for you.";
    document.getElementById('result-link').href = linkHref;
    document.getElementById('result-link').innerText = linkText;
  });
};

// Listen to all inputs to update button state
document.addEventListener('input', function(e) {
  if (e.target && e.target.closest('#lead-quiz-form')) {
    window.updateQuizButtons();
  }
});

// Auto-advance for radios
document.addEventListener('change', function(e) {
  if (e.target && e.target.type === 'radio' && e.target.closest('#lead-quiz-form')) {
    window.updateQuizButtons();
    setTimeout(() => {
       if(window.currentQuizStep < window.quizTotalSteps) window.quizNext();
    }, 400);
  }
});

// Initialize buttons on load
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(window.updateQuizButtons, 100);
});
