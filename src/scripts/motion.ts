import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const EASE = 'expo.out';
const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const root = document.documentElement;

/** Estado oculto: pasa de la clase CSS a estilos en línea para que el
 *  failsafe del <head> pueda quitar la clase sin destapar todo de golpe. */
function arm() {
  if (reduced) {
    root.classList.remove('is-armed');
    return;
  }

  document.querySelectorAll<HTMLElement>('[data-reveal]').forEach((el) => {
    const kind = el.dataset.reveal;
    if (kind === 'wipe') {
      gsap.set(el, { clipPath: 'inset(0 0 102% 0)' });
    } else if (kind === 'rule') {
      gsap.set(el, { scaleX: 0 });
    } else {
      gsap.set(el, { opacity: 0, y: 20, filter: 'blur(6px)' });
    }
  });

  document.querySelectorAll<HTMLElement>('[data-words]').forEach((el) => {
    if (el.dataset.split === 'done') return;
    const html = el.innerHTML.split(/(<br\s*\/?>)/i);
    el.innerHTML = html
      .map((chunk) =>
        /<br/i.test(chunk)
          ? chunk
          : chunk
              .split(/(\s+)/)
              .filter((w) => w.length)
              .map((w) => (/^\s+$/.test(w) ? w : `<span class="word">${w}</span>`))
              .join('')
      )
      .join('');
    el.dataset.split = 'done';
    gsap.set(el, { opacity: 1 });
    gsap.set(el.querySelectorAll('.word'), { opacity: 0, yPercent: 55 });
  });

  // El estado inicial del titular también pasa a estilos en línea: la capa de
  // 2015 y la costura solo existen mientras dura el relanzamiento.
  gsap.set('.hero-plate', { '--p': '0%' });
  gsap.set('.hero-then, .hero-seam', { opacity: 1 });

  root.classList.remove('is-armed');
}

/** 1. Hero: el titular antiguo se relanza de izquierda a derecha. */
function hero() {
  const plate = document.querySelector<HTMLElement>('.hero-plate');
  if (!plate || reduced) return;

  gsap
    .timeline({ delay: 0.4 })
    .to(plate, { '--p': '100%', duration: 1.5, ease: 'expo.inOut' })
    .to(plate.querySelector('.hero-seam'), { opacity: 0, duration: 0.45 }, '-=0.3')
    .set(plate.querySelector('.hero-then'), { opacity: 0 });
}

/** 2. Revelados al scroll, uno por tipo de sección. */
function reveals() {
  if (reduced) return;

  ScrollTrigger.batch('[data-reveal]', {
    start: 'top 88%',
    batchMax: 6,
    onEnter: (batch) => {
      const groups: Record<string, Element[]> = {};
      batch.forEach((el) => {
        const kind = (el as HTMLElement).dataset.reveal || 'up';
        (groups[kind] ||= []).push(el);
      });

      if (groups.up) {
        gsap.to(groups.up, {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 1.05,
          ease: EASE,
          stagger: 0.075,
          clearProps: 'filter,willChange',
        });
      }
      if (groups.wipe) {
        gsap.to(groups.wipe, {
          clipPath: 'inset(0 0 0% 0)',
          duration: 1.15,
          ease: EASE,
          stagger: 0.09,
        });
      }
      if (groups.rule) {
        gsap.to(groups.rule, {
          scaleX: 1,
          duration: 1.1,
          ease: EASE,
          stagger: 0.05,
        });
      }
    },
  });

  document.querySelectorAll<HTMLElement>('[data-words]').forEach((el) => {
    gsap.to(el.querySelectorAll('.word'), {
      opacity: 1,
      yPercent: 0,
      duration: 0.85,
      ease: EASE,
      stagger: 0.035,
      scrollTrigger: { trigger: el, start: 'top 82%' },
    });
  });
}

/** 3. Parallax muy leve: solo elementos marcados, solo en desktop. */
function parallax() {
  if (reduced) return;
  const items = gsap.utils.toArray<HTMLElement>('[data-parallax]');
  items.forEach((el) => {
    const distance = Number(el.dataset.parallax) || 40;
    gsap.fromTo(
      el,
      { y: -distance / 2 },
      {
        y: distance / 2,
        ease: 'none',
        scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: true },
      }
    );
  });
}

/** 4. Proceso: sección fijada con desplazamiento horizontal. */
function process() {
  const section = document.querySelector<HTMLElement>('[data-track-section]');
  const track = document.querySelector<HTMLElement>('[data-track]');
  if (!section || !track) return;

  ScrollTrigger.matchMedia({
    '(min-width: 1024px) and (prefers-reduced-motion: no-preference)': () => {
      const shift = () => track.scrollWidth - section.clientWidth;
      gsap.to(track, {
        x: () => -shift(),
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: () => `+=${shift() + window.innerHeight * 0.35}`,
          pin: true,
          scrub: 0.6,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
    },
  });
}

/** 4b. Manifiesto: sección pineada con ScrollTrigger.
 *  Mientras la sección está fija, la pista vertical se traslada hacia
 *  arriba para que cada una de las cuatro verdades ocupe el viewport
 *  por un momento. Los puntos de latón avanzan en paralelo. */
function manifesto() {
  const section = document.querySelector<HTMLElement>('[data-mf-section]');
  const track = section?.querySelector<HTMLElement>('[data-mf-track]');
  if (!section || !track) return;

  ScrollTrigger.matchMedia({
    '(min-width: 1024px) and (prefers-reduced-motion: no-preference)': () => {
      const steps = section.querySelectorAll<HTMLElement>('.mf-step');
      const dots = section.querySelectorAll<HTMLElement>('[data-mf-dot]');
      const total = steps.length;
      const stepDist = () => window.innerHeight * 0.85;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: () => `+=${stepDist() * (total - 1) + window.innerHeight * 0.3}`,
          pin: true,
          scrub: 0.6,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      tl.to(
        track,
        {
          y: () => -window.innerHeight * (total - 1),
          ease: 'none',
          duration: total - 1,
        },
        0
      );

      // Dots: cada uno se enciende durante su viewport.
      for (let i = 0; i < total; i++) {
        tl.call(
          () => {
            dots.forEach((dot, j) => dot.classList.toggle('is-active', j === i));
          },
          [],
          i
        );
      }

      // Al terminar, el último dot queda activo.
      tl.call(() => {
        dots.forEach((dot, j) => dot.classList.toggle('is-active', j === total - 1));
      });

      return () => {
        // Limpia el estado de los dots al revertir el media query.
        dots.forEach((dot) => dot.classList.remove('is-active'));
      };
    },
  });
}

/** 5. Costura de progreso en la barra superior. */
function progress() {
  const bar = document.querySelector<HTMLElement>('[data-progress]');
  if (!bar) return;
  gsap.fromTo(
    bar,
    { scaleX: 0 },
    {
      scaleX: 1,
      ease: 'none',
      scrollTrigger: { start: 0, end: () => document.body.scrollHeight - window.innerHeight, scrub: 0.3 },
    }
  );
}

/** 6. Barra superior: de transparente a papel al salir del hero. */
function nav() {
  const bar = document.querySelector<HTMLElement>('[data-nav]');
  if (!bar) return;
  ScrollTrigger.create({
    start: 'top -60',
    onToggle: (self) => bar.setAttribute('data-solid', String(self.isActive)),
  });
}

/** 7. Cursor discreto. */
function cursor() {
  const ring = document.querySelector<HTMLElement>('.cursor-ring');
  if (!ring || !window.matchMedia('(hover: hover)').matches || reduced) return;

  const x = gsap.quickTo(ring, 'x', { duration: 0.35, ease: 'power3.out' });
  const y = gsap.quickTo(ring, 'y', { duration: 0.35, ease: 'power3.out' });

  window.addEventListener(
    'pointermove',
    (e) => {
      ring.dataset.active = 'true';
      x(e.clientX);
      y(e.clientY);
      const hot = (e.target as Element)?.closest?.('a,button,[role="slider"],summary');
      const hide = (e.target as Element)?.closest?.('[data-cursor="hide"]');
      ring.dataset.hot = String(!!hot);
      ring.style.opacity = hide ? '0' : '';
    },
    { passive: true }
  );

  document.addEventListener('pointerleave', () => (ring.dataset.active = 'false'));
}

/** 8. Acordeón de preguntas con altura animada. */
function faq() {
  document.querySelectorAll<HTMLDetailsElement>('[data-faq]').forEach((item) => {
    const panel = item.querySelector<HTMLElement>('[data-faq-panel]');
    const summary = item.querySelector('summary');
    if (!panel || !summary) return;

    summary.addEventListener('click', (event) => {
      if (reduced) return;
      event.preventDefault();

      if (item.open) {
        gsap.to(panel, {
          height: 0,
          opacity: 0,
          duration: 0.42,
          ease: 'expo.out',
          onComplete: () => {
            item.open = false;
            gsap.set(panel, { height: 'auto', opacity: 1 });
          },
        });
      } else {
        item.open = true;
        gsap.fromTo(
          panel,
          { height: 0, opacity: 0 },
          { height: 'auto', opacity: 1, duration: 0.55, ease: 'expo.out' }
        );
      }
    });
  });
}

// GSAP+ScrollTrigger pesan ~150 KB y parsearlos bloquea el thread
// principal durante la carga, retrasando el LCP del Hero. La
// inicialización se difiere a `requestIdleCallback` para que el browser
// pinte el lede y los CTAs primero; la animación aparece después,
// cuando el thread está libre.
const bootMotion = () => {
  arm();
  hero();
  reveals();
  parallax();
  manifesto();
  progress();
  nav();
  cursor();
  faq();
  window.addEventListener('load', () => ScrollTrigger.refresh());
};

if ('requestIdleCallback' in window) {
  (window as any).requestIdleCallback(bootMotion, { timeout: 2000 });
} else {
  setTimeout(bootMotion, 200);
}
