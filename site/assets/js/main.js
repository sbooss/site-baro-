// ============================================================
// BARÔ SHINKAI — interações globais
// ============================================================

// Confirma o quanto antes que o JS está rodando (usado pelo CSS para só
// esconder o conteúdo de animação quando sabe que vai poder revelá-lo).
document.documentElement.classList.add('js');

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- NAV: fundo ao rolar ---------- */
  const nav = document.querySelector('.nav');
  const onScrollNav = () => {
    if (!nav) return;
    if (window.scrollY > 40) nav.classList.add('is-scrolled');
    else nav.classList.remove('is-scrolled');
  };
  document.addEventListener('scroll', onScrollNav, { passive: true });
  onScrollNav();

  /* ---------- MENU MOBILE ---------- */
  const toggle = document.querySelector('.nav__toggle');
  const mobileMenu = document.querySelector('.mobile-menu');
  if (toggle && mobileMenu) {
    toggle.addEventListener('click', () => {
      toggle.classList.toggle('is-open');
      mobileMenu.classList.toggle('is-open');
      document.body.style.overflow = mobileMenu.classList.contains('is-open') ? 'hidden' : '';
    });
    mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      toggle.classList.remove('is-open');
      mobileMenu.classList.remove('is-open');
      document.body.style.overflow = '';
    }));
  }

  /* ---------- LINHA DE MARÉ (indicador de progresso da página) ---------- */
  const tideFill = document.querySelector('.tide__fill');
  const onScrollTide = () => {
    if (!tideFill) return;
    const h = document.documentElement;
    const scrolled = (h.scrollTop) / (h.scrollHeight - h.clientHeight) * 100;
    tideFill.style.height = Math.min(100, Math.max(0, scrolled)) + '%';
  };
  document.addEventListener('scroll', onScrollTide, { passive: true });
  onScrollTide();

  /* ---------- SCROLL REVEAL ---------- */
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    // rootMargin positivo: revela um pouco ANTES do elemento entrar
    // na tela, para a animação nunca "atrasar" atrás do scroll do usuário.
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.01, rootMargin: '0px 0px 120px 0px' });
    revealEls.forEach(el => io.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('is-in'));
  }
  // Rede de segurança: se por qualquer motivo algum elemento não for
  // revelado (observer falhou, aba em segundo plano, etc.), garante que
  // nada fique invisível para sempre.
  window.setTimeout(() => {
    document.querySelectorAll('.reveal:not(.is-in)').forEach(el => el.classList.add('is-in'));
  }, 1800);

  /* ---------- JORNADA: linha de progresso conforme scroll horizontal ---------- */
  const journeyRail = document.querySelector('.journey__rail');
  const journeyFill = document.querySelector('.journey__line-fill');
  const jSteps = document.querySelectorAll('.j-step');
  if (journeyRail) {
    const updateJourney = () => {
      if (journeyFill && window.innerWidth > 720) {
        const max = journeyRail.scrollWidth - journeyRail.clientWidth;
        const pct = max > 0 ? (journeyRail.scrollLeft / max) * 100 : 0;
        journeyFill.style.width = pct + '%';
      }
      jSteps.forEach(step => {
        const rect = step.getBoundingClientRect();
        const railRect = journeyRail.getBoundingClientRect();
        if (rect.left < railRect.right - 40) step.classList.add('is-in');
      });
    };
    journeyRail.addEventListener('scroll', updateJourney, { passive: true });
    window.addEventListener('resize', updateJourney);
    updateJourney();
    // reveal on vertical scroll into view too (mobile)
    if ('IntersectionObserver' in window) {
      const jio = new IntersectionObserver((entries) => {
        entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('is-in'); });
      }, { threshold: 0.3 });
      jSteps.forEach(s => jio.observe(s));
    }
  }

  /* ---------- CARROSSEL DE ARRASTE (áreas de formação) ---------- */
  document.querySelectorAll('.formations__rail, .cities').forEach(rail => {
    let isDown = false, startX, scrollLeft;
    rail.addEventListener('mousedown', (e) => {
      isDown = true;
      rail.classList.add('is-dragging');
      startX = e.pageX - rail.offsetLeft;
      scrollLeft = rail.scrollLeft;
    });
    ['mouseleave', 'mouseup'].forEach(evt => rail.addEventListener(evt, () => {
      isDown = false;
      rail.classList.remove('is-dragging');
    }));
    rail.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - rail.offsetLeft;
      const walk = (x - startX) * 1.4;
      rail.scrollLeft = scrollLeft - walk;
    });
  });

  /* setas de navegação do carrossel de formações */
  document.querySelectorAll('[data-rail-prev], [data-rail-next]').forEach(btn => {
    btn.addEventListener('click', () => {
      const sel = btn.getAttribute('data-rail-prev') || btn.getAttribute('data-rail-next');
      const rail = document.querySelector(sel);
      if (!rail) return;
      const card = rail.querySelector('.f-card, .city');
      const step = card ? card.getBoundingClientRect().width + 2 : 320;
      rail.scrollBy({ left: btn.hasAttribute('data-rail-next') ? step : -step, behavior: 'smooth' });
    });
  });

  /* ---------- SHUN: abas de estação ---------- */
  const shunTabs = document.querySelectorAll('.shun__tab');
  const shunPanels = document.querySelectorAll('.shun__panel');
  const shunBgs = document.querySelectorAll('.shun__bg');
  const shunSection = document.querySelector('.shun');
  shunTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.season;
      shunTabs.forEach(t => t.classList.toggle('is-active', t === tab));
      shunPanels.forEach(p => p.classList.toggle('is-active', p.dataset.season === target));
      shunBgs.forEach(b => b.classList.toggle('is-active', b.dataset.season === target));
    });
  });

  /* ---------- FAQ acordeão ---------- */
  document.querySelectorAll('.faq-item').forEach(item => {
    const q = item.querySelector('.faq-q');
    q.addEventListener('click', () => {
      const wasOpen = item.classList.contains('is-open');
      item.parentElement.querySelectorAll('.faq-item').forEach(i => i.classList.remove('is-open'));
      if (!wasOpen) item.classList.add('is-open');
    });
  });

  /* ---------- REVELAÇÃO DISCRETA DE PREÇO ---------- */
  document.querySelectorAll('[data-reveal-price]').forEach(btn => {
    btn.addEventListener('click', () => {
      const box = btn.closest('.reveal-price');
      if (!box) return;
      box.querySelectorAll('.is-hidden-price').forEach(el => el.classList.add('is-shown'));
      const amount = box.querySelector('.reveal-price__amount');
      const old = box.querySelector('.reveal-price__old');
      if (amount) amount.classList.add('is-shown');
      if (old) old.classList.add('is-shown');
      btn.style.display = 'none';
    });
  });

  /* ---------- YEAR no footer ---------- */
  document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());

  /* ---------- Parallax leve no hero ---------- */
  const heroFig = document.querySelector('.hero__figure img');
  if (heroFig && window.innerWidth > 920) {
    document.addEventListener('scroll', () => {
      const y = Math.min(window.scrollY, 600);
      heroFig.style.transform = `translateY(${y * 0.08}px) scale(1.02)`;
    }, { passive: true });
  }

});
