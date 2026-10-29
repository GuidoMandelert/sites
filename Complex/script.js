// Add this only when JavaScript is running: content stays visible without it.
document.documentElement.classList.add('js');

// Keep the menu usable on small screens without changing the desktop navigation.
const menuButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('#primary-menu');

if (menuButton && menu) {
  menuButton.addEventListener('click', () => {
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!isOpen));
    menu.classList.toggle('is-open', !isOpen);
  });

  menu.addEventListener('click', (event) => {
    if (event.target.closest('a')) {
      menuButton.setAttribute('aria-expanded', 'false');
      menu.classList.remove('is-open');
    }
  });
}

// The browser supplies the year, so the footer does not need annual editing.
document.querySelector('#current-year').textContent = new Date().getFullYear();

// A missing portrait becomes the designed placeholder rather than a broken-image icon.
const portrait = document.querySelector('.portrait');
if (portrait) {
  portrait.addEventListener('error', () => { portrait.hidden = true; }, { once: true });
  if (portrait.complete && portrait.naturalWidth === 0) portrait.hidden = true;
}

// Highlight the navigation item for the section currently being read.
const links = [...document.querySelectorAll('.nav-links a')];
const sections = links
  .map((link) => document.querySelector(link.getAttribute('href')))
  .filter(Boolean);

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      links.forEach((link) => link.removeAttribute('aria-current'));
      const active = links.find((link) => link.getAttribute('href') === `#${entry.target.id}`);
      if (active) active.setAttribute('aria-current', 'page');
    });
  }, { rootMargin: '-35% 0px -55% 0px', threshold: 0 });
  sections.forEach((section) => observer.observe(section));
}

// Reveal sections as they enter view. If this feature is unavailable, show them all.
const revealItems = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const revealObserver = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        currentObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add('is-visible'));
}
