// Raminta Coaching — site interactions

// Opt in to scroll-reveal styling only when JS is available
document.documentElement.classList.add('js');

// Mobile navigation toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

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
document.getElementById('year').textContent = new Date().getFullYear();
