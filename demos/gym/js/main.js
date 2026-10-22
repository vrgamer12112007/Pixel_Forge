/* Iron Pulse Fitness — main.js */
(function () {
  'use strict';

  const nav = document.getElementById('nav');
  const onScroll = () => {
    if (window.scrollY > 20) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
    const floatCall = document.getElementById('floatCall');
    if (window.scrollY > 500) floatCall.classList.add('visible');
    else floatCall.classList.remove('visible');
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  const navToggle = document.getElementById('navToggle');
  const navClose = document.getElementById('navClose');
  const mobileMenu = document.getElementById('mobileMenu');
  const openMenu = () => {
    mobileMenu.hidden = false;
    requestAnimationFrame(() => mobileMenu.classList.add('open'));
    document.body.style.overflow = 'hidden';
  };
  const closeMenu = () => {
    mobileMenu.classList.remove('open');
    document.body.style.overflow = '';
    setTimeout(() => { mobileMenu.hidden = true; }, 350);
  };
  navToggle.addEventListener('click', openMenu);
  navClose.addEventListener('click', closeMenu);
  mobileMenu.querySelectorAll('a').forEach((a) => a.addEventListener('click', closeMenu));

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  const revealEls = document.querySelectorAll(
    '.section-head, .program-card, .trainer-card, .price-card, .contact-card, .hero-card'
  );
  revealEls.forEach((el) => el.classList.add('reveal'));
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: '-50px', threshold: 0.1 });
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add('visible'));
  }
})();
