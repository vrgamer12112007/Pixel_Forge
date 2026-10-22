/* ============================================
   PIXEL FORGE — main.js
   ============================================ */
(function () {
  'use strict';

  /* ----- Year ----- */
  document.getElementById('year').textContent = new Date().getFullYear();

  /* ----- Navbar scrolled state ----- */
  const nav = document.getElementById('nav');
  const onScroll = () => {
    if (window.scrollY > 20) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');

    /* Floating call button */
    const floatCall = document.getElementById('floatCall');
    const scrollTop = document.getElementById('scrollTop');
    if (window.scrollY > 600) floatCall.classList.add('visible');
    else floatCall.classList.remove('visible');
    if (window.scrollY > 1200) scrollTop.classList.add('visible');
    else scrollTop.classList.remove('visible');
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ----- Mobile menu ----- */
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

  /* Close on escape */
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileMenu.classList.contains('open')) closeMenu();
  });

  /* ----- Scroll to top ----- */
  document.getElementById('scrollTop').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  /* ----- Smooth scroll for anchor links ----- */
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (e) => {
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  /* ----- Reveal on scroll ----- */
  const revealEls = document.querySelectorAll(
    '.section-head, .service-card, .work-card, .process-step, .price-card, .team-card, .faq-item, .guarantee-card, .problem-stat, .automation-item, .contact-info-card, .floating-card'
  );
  revealEls.forEach((el) => el.classList.add('reveal'));

  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '-50px', threshold: 0.1 }
    );
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add('visible'));
  }

  /* ----- Animated counters (problem stats etc, if any) ----- */
  function animateCount(el, target, suffix) {
    const duration = 1600;
    const start = performance.now();
    const step = (now) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      const v = Math.round(target * eased);
      el.textContent = v + (suffix || '');
      if (t < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }
  /* Counter for any [data-count] elements */
  document.querySelectorAll('[data-count]').forEach((el) => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = parseInt(el.dataset.count, 10);
          const suffix = el.dataset.suffix || '';
          animateCount(el, target, suffix);
          io.unobserve(el);
        }
      });
    }, { threshold: 0.3 });
    io.observe(el);
  });

  /* ----- Contact form ----- */
  const form = document.getElementById('contactForm');
  const success = document.getElementById('formSuccess');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const data = new FormData(form);
      const payload = Object.fromEntries(data.entries());

      /* Basic validation */
      let valid = true;
      form.querySelectorAll('[required]').forEach((field) => {
        if (!field.value.trim()) {
          valid = false;
          field.style.borderColor = '#ef4444';
        } else {
          field.style.borderColor = '';
        }
      });

      if (!valid) return;

      /* Disable button */
      const btn = form.querySelector('button[type="submit"]');
      const original = btn.innerHTML;
      btn.disabled = true;
      btn.innerHTML = '<span>Sending...</span>';

      /* Simulate submission (no backend). Replace with real endpoint when ready. */
      setTimeout(() => {
        /* Hide form, show success */
        Array.from(form.children).forEach((c) => {
          if (c.id !== 'formSuccess') c.style.display = 'none';
        });
        success.hidden = false;
        success.scrollIntoView({ behavior: 'smooth', block: 'center' });

        /* Reset for next time (after 8s) */
        setTimeout(() => {
          form.reset();
          Array.from(form.children).forEach((c) => {
            if (c.id !== 'formSuccess') c.style.display = '';
          });
          success.hidden = true;
          btn.disabled = false;
          btn.innerHTML = original;
        }, 8000);
      }, 1200);

      /* eslint-disable-next-line no-console */
      console.log('Pixel Forge inquiry:', payload);
    });
  }

  /* ----- FAQ single-open accordion behavior ----- */
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach((item) => {
    item.addEventListener('toggle', () => {
      if (item.open) {
        faqItems.forEach((other) => {
          if (other !== item) other.open = false;
        });
      }
    });
  });

  /* ----- Demo card keyboard accessibility ----- */
  document.querySelectorAll('.work-card').forEach((card) => {
    card.setAttribute('tabindex', '0');
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        const link = card.querySelector('.work-card__link');
        if (link) window.location.href = link.getAttribute('href');
      }
    });
  });
})();
