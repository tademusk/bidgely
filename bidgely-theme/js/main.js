/* Bidgely Theme JS: tabs + reveal */

function initReveal() {
  if (typeof IntersectionObserver === 'undefined') return;
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) entry.target.classList.add('shown');
      }
    },
    { threshold: 0.06 }
  );

  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
}

function initSolutionsTabs() {
  document.querySelectorAll('[data-solutions-tabs]').forEach((root) => {
    const navItems = root.querySelectorAll('[data-sol-tab]');
    const panels = root.querySelectorAll('[data-sol-panel]');

    function activate(idx) {
      navItems.forEach((el, i) => el.classList.toggle('active', i === idx));
      panels.forEach((el, i) => (el.hidden = i !== idx));
    }

    navItems.forEach((btn, idx) => {
      btn.addEventListener('click', () => activate(idx));
    });

    activate(0);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initReveal();
  initSolutionsTabs();
});
