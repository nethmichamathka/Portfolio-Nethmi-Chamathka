document.addEventListener('DOMContentLoaded', () => {

  /* ── CURSOR ── */
  const cursor = document.getElementById('cursor');
  const follower = document.getElementById('cursorFollower');
  let mouseX = 0, mouseY = 0, followerX = 0, followerY = 0;

  document.addEventListener('mousemove', e => {
    mouseX = e.clientX; mouseY = e.clientY;
    cursor.style.left = mouseX + 'px';
    cursor.style.top  = mouseY + 'px';
  });

  function animateFollower() {
    followerX += (mouseX - followerX) * 0.1;
    followerY += (mouseY - followerY) * 0.1;
    follower.style.left = followerX + 'px';
    follower.style.top  = followerY + 'px';
    requestAnimationFrame(animateFollower);
  }
  animateFollower();

  document.querySelectorAll('a, button, .proj-card, .uiux-card, .lead-card, .skill-chips span').forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.style.width = '14px'; cursor.style.height = '14px';
      follower.style.width = '56px'; follower.style.height = '56px';
      follower.style.opacity = '0.25';
    });
    el.addEventListener('mouseleave', () => {
      cursor.style.width = '8px'; cursor.style.height = '8px';
      follower.style.width = '36px'; follower.style.height = '36px';
      follower.style.opacity = '0.5';
    });
  });

  if ('ontouchstart' in window) {
    cursor.style.display = 'none';
    follower.style.display = 'none';
    document.body.style.cursor = 'auto';
  }

  /* ── NAVBAR SCROLL ── */
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });

  /* ── HAMBURGER ── */
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open');
    document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
  });
  document.querySelectorAll('.mob-link').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  /* ── SMOOTH SCROLL ── */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  /* ── SCROLL REVEAL ── */
  const revealObs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
  document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

  /* ── ACTIVE NAV ── */
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');
  function setActiveLink() {
    const scrollY = window.scrollY + 120;
    sections.forEach(sec => {
      if (scrollY >= sec.offsetTop && scrollY < sec.offsetTop + sec.clientHeight) {
        navLinks.forEach(a => {
          const isActive = a.getAttribute('href') === `#${sec.getAttribute('id')}`;
          a.style.opacity = isActive ? '1' : '0.7';
          a.style.color = isActive ? 'var(--pink)' : '';
        });
      }
    });
  }
  window.addEventListener('scroll', setActiveLink, { passive: true });

  /* ── PARALLAX HERO BG TEXT ── */
  const bgText = document.querySelector('.hero-bg-text');
  window.addEventListener('scroll', () => {
    if (bgText) bgText.style.transform = `translateY(calc(-50% + ${window.scrollY * 0.3}px))`;
  }, { passive: true });

  /* ── PROJ CARD TILT ── */
  document.querySelectorAll('.proj-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const r = card.getBoundingClientRect();
      const x = e.clientX - r.left - r.width / 2;
      const y = e.clientY - r.top - r.height / 2;
      card.style.transform = `perspective(800px) rotateX(${(y / r.height) * 3}deg) rotateY(${-(x / r.width) * 3}deg) translateY(-4px)`;
    });
    card.addEventListener('mouseleave', () => card.style.transform = '');
  });

  /* ── UIUX CARD TILT ── */
  document.querySelectorAll('.uiux-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const r = card.getBoundingClientRect();
      const x = e.clientX - r.left - r.width / 2;
      const y = e.clientY - r.top - r.height / 2;
      card.style.transform = `perspective(600px) rotateX(${(y / r.height) * 4}deg) rotateY(${-(x / r.width) * 4}deg) translateY(-6px)`;
    });
    card.addEventListener('mouseleave', () => card.style.transform = '');
  });

  /* ── STAT COUNTERS ── */
  const counterObs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const raw = el.textContent.trim();
      const hasPlus = raw.includes('+');
      const target = parseFloat(raw);
      if (isNaN(target)) return;
      let start = 0;
      const timer = setInterval(() => {
        start += target / (1200 / 16);
        if (start >= target) { el.textContent = target + (hasPlus ? '+' : ''); clearInterval(timer); }
        else el.textContent = Math.floor(start) + (hasPlus ? '+' : '');
      }, 16);
      counterObs.unobserve(el);
    });
  }, { threshold: 0.5 });
  document.querySelectorAll('.stat-n').forEach(c => counterObs.observe(c));

  /* ── FLOATING BADGES ── */
  const styleEl = document.createElement('style');
  styleEl.textContent = `
    @keyframes floatA { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
    @keyframes floatB { 0%,100%{transform:translateY(-6px)} 50%{transform:translateY(6px)} }
  `;
  document.head.appendChild(styleEl);
  document.querySelectorAll('.floating-badge').forEach((badge, i) => {
    badge.style.animation = `${i % 2 === 0 ? 'floatA' : 'floatB'} 4s ease-in-out infinite`;
  });

  /* ── PINK/BLUE SKILL CHIP ALTERNATION ── */
  document.querySelectorAll('.skill-chips span').forEach((chip, i) => {
    chip.addEventListener('mouseenter', () => {
      chip.style.borderColor = i % 2 === 0 ? 'var(--pink)' : 'var(--blue)';
      chip.style.color = i % 2 === 0 ? 'var(--pink)' : 'var(--blue)';
      chip.style.background = i % 2 === 0 ? 'rgba(244,167,185,.07)' : 'rgba(168,200,232,.07)';
    });
    chip.addEventListener('mouseleave', () => {
      chip.style.borderColor = '';
      chip.style.color = '';
      chip.style.background = '';
    });
  });

  console.log('✦ Portfolio loaded — Nethmi Chamathka');
});
