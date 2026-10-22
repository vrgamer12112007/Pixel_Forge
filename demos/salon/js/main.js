/* Lumière Salon — main.js */
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
    setTimeout(() => { mobileMenu.hidden = true; }, 400);
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
    '.section-head, .service-card, .gallery-item, .package-card, .artist-card, .contact-card, .hero-frame'
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

  /* Booking form */
  const bookingForm = document.getElementById('bookingForm');
  const bookingSuccess = document.getElementById('bookingSuccess');
  if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      let valid = true;
      bookingForm.querySelectorAll('[required]').forEach((field) => {
        if (!field.value.trim()) {
          valid = false;
          field.style.borderColor = '#ef4444';
        } else {
          field.style.borderColor = '';
        }
      });
      if (!valid) return;
      const btn = bookingForm.querySelector('button[type="submit"]');
      const original = btn.innerHTML;
      btn.disabled = true;
      btn.textContent = 'Booking...';
      setTimeout(() => {
        Array.from(bookingForm.children).forEach((c) => {
          if (c.id !== 'bookingSuccess') c.style.display = 'none';
        });
        bookingSuccess.hidden = false;
        bookingSuccess.scrollIntoView({ behavior: 'smooth', block: 'center' });
        setTimeout(() => {
          bookingForm.reset();
          Array.from(bookingForm.children).forEach((c) => {
            if (c.id !== 'bookingSuccess') c.style.display = '';
          });
          bookingSuccess.hidden = true;
          btn.disabled = false;
          btn.innerHTML = original;
        }, 6000);
      }, 1200);
    });
  }
})();
