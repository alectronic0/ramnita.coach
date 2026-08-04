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
