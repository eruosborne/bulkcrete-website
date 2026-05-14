// BULKCRETE — main.js

// ---- Mobile Nav Toggle ----
const navToggle = document.querySelector('.nav-toggle');
const navList = document.querySelector('.nav-list');

if (navToggle && navList) {
  navToggle.addEventListener('click', () => {
    navList.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', navList.classList.contains('open'));
  });

  // Close nav when a link is clicked
  navList.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navList.classList.remove('open'));
  });
}

// ---- Highlight active nav link ----
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-list a').forEach(link => {
  const href = link.getAttribute('href');
  if (href === currentPage) {
    link.style.color = 'var(--color-accent)';
  }
});
