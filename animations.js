document.addEventListener('DOMContentLoaded', () => {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const canHover = window.matchMedia('(hover: hover)').matches;

  /* scroll progress bar */
  const bar = document.getElementById('scrollProgress');
  const updateBar = () => {
    const h = document.documentElement;
    const max = h.scrollHeight - h.clientHeight;
    if (bar && max > 0) bar.style.transform = `scaleX(${h.scrollTop / max})`;
  };
  window.addEventListener('scroll', updateBar, { passive: true });
  updateBar();

  if (reduce) return;

  /* hero name: split into letters */
  const nameEl = document.querySelector('.hero-name');
  if (nameEl) {
    let i = 0;
    const walk = node => {
      [...node.childNodes].forEach(n => {
        if (n.nodeType === 3) {
          const frag = document.createDocumentFragment();
          [...n.textContent].forEach(ch => {
            if (!ch.trim()) { frag.append(ch); return; }
            const s = document.createElement('span');
            s.className = 'char';
            s.textContent = ch;
            s.style.setProperty('--i', i++);
            frag.append(s);
          });
          n.replaceWith(frag);
        } else if (n.nodeType === 1 && n.tagName !== 'BR') {
          walk(n);
        }
      });
    };
    walk(nameEl);
  }

  /* skill chips pop in one by one */
  document.querySelectorAll('.skill-chips').forEach(group => {
    [...group.children].forEach((chip, idx) => chip.style.setProperty('--c', idx));
  });

  if (!canHover) return;

  /* hero: 3D tilt on photo + parallax on glow blobs */
  const hero = document.getElementById('hero');
  const wrap = document.querySelector('.hero-img-wrap');
  const blobs = document.querySelectorAll('.aurora i');
  if (hero && wrap) {
    hero.addEventListener('mousemove', e => {
      const r = hero.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      wrap.style.transform = `perspective(900px) rotateY(${x * 12}deg) rotateX(${-y * 12}deg)`;
      blobs.forEach((b, k) => b.style.translate = `${x * (k + 1) * -25}px ${y * (k + 1) * -25}px`);
    });
    hero.addEventListener('mouseleave', () => {
      wrap.style.transform = '';
      blobs.forEach(b => b.style.translate = '');
    });
  }

  /* magnetic buttons */
  document.querySelectorAll('.btn-primary, .btn-ghost, .hero-socials a').forEach(el => {
    el.addEventListener('mousemove', e => {
      const r = el.getBoundingClientRect();
      const x = e.clientX - r.left - r.width / 2;
      const y = e.clientY - r.top - r.height / 2;
      el.style.transform = `translate(${x * 0.25}px, ${y * 0.35}px)`;
    });
    el.addEventListener('mouseleave', () => { el.style.transform = ''; });
  });

  /* cursor spotlight on cards */
  document.querySelectorAll('.proj-card, .sample-card, .skill-group, .feature-card, .exp-card, .lead-card, .uiux-card, .edu-card').forEach(card => {
    card.addEventListener('pointermove', e => {
      const r = card.getBoundingClientRect();
      card.style.setProperty('--mx', (e.clientX - r.left) + 'px');
      card.style.setProperty('--my', (e.clientY - r.top) + 'px');
    });
  });
});
