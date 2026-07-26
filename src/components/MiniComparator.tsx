import { useEffect, useRef, useState } from 'react';
import {
  animate,
  motion,
  useInView,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from 'motion/react';
import CarpinteriaOld from './demo/OldSite';
import CarpinteriaNew from './demo/NewSite';
import ContableOld from './demo/ContableOld';
import ContableNew from './demo/ContableNew';
import ClinicaOld from './demo/ClinicaOld';
import ClinicaNew from './demo/ClinicaNew';
import TallerOld from './demo/TallerOld';
import TallerNew from './demo/TallerNew';

const MIN = 6;
const MAX = 94;
const REST = 52;
const clamp = (v: number) => Math.min(MAX, Math.max(MIN, v));

/** Mapa de casos. Cada entrada trae los componentes "antes" y "después"
 *  y el texto de la ficha que aparece debajo del plate. */
const cases = {
  carpinteria: {
    caption: 'Muebles Aldana · pieza de demostración',
    Before: CarpinteriaOld,
    After: CarpinteriaNew,
  },
  contable: {
    caption: 'Reyes & Asociados · pieza de demostración',
    Before: ContableOld,
    After: ContableNew,
  },
  clinica: {
    caption: 'Sonría Norte · pieza de demostración',
    Before: ClinicaOld,
    After: ClinicaNew,
  },
  taller: {
    caption: 'Taller Lumbre · pieza de demostración',
    Before: TallerOld,
    After: TallerNew,
  },
} as const;

type CaseKey = keyof typeof cases;

interface Props {
  case: CaseKey;
  /** Permite sobreescribir la ficha por defecto del caso. */
  caption?: string;
}

export default function MiniComparator({ case: caseKey, caption }: Props) {
  const { Before, After, caption: defaultCaption } = cases[caseKey];
  const plateRef = useRef<HTMLDivElement>(null);
  const [dragging, setDragging] = useState(false);
  const reduced = useReducedMotion();
  const inView = useInView(plateRef, { once: true, amount: 0.4 });

  const raw = useMotionValue(88);
  const seam = useSpring(raw, { stiffness: 420, damping: 44, mass: 0.6 });
  const clip = useMotionTemplate`inset(0 0 0 ${seam}%)`;
  const seamLeft = useMotionTemplate`${seam}%`;
  const oldFade = useTransform(seam, [14, 34], [0, 1]);
  const newFade = useTransform(seam, [66, 86], [1, 0]);

  useEffect(() => {
    const el = plateRef.current;
    if (!el) return;
    const fit = () => el.style.setProperty('--k', String(el.clientWidth / 1200));
    fit();
    const ro = new ResizeObserver(fit);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;
    if (reduced) {
      raw.set(REST);
      return;
    }
    const ctrl = animate(raw, REST, { duration: 1.5, delay: 0.25, ease: [0.22, 1, 0.36, 1] });
    return () => ctrl.stop();
  }, [inView, reduced, raw]);

  const setFromClientX = (clientX: number) => {
    const el = plateRef.current;
    if (!el) return;
    const box = el.getBoundingClientRect();
    raw.set(clamp(((clientX - box.left) / box.width) * 100));
  };

  const onPointerDown = (e: React.PointerEvent) => {
    (e.currentTarget as HTMLElement).setPointerCapture?.(e.pointerId);
    setDragging(true);
    setFromClientX(e.clientX);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging) return;
    setFromClientX(e.clientX);
  };

  const stopDrag = () => setDragging(false);

  const onKeyDown = (e: React.KeyboardEvent) => {
    const step = e.shiftKey ? 16 : 8;
    const at = raw.get();
    if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') {
      raw.set(clamp(at - step));
    } else if (e.key === 'ArrowRight' || e.key === 'ArrowUp') {
      raw.set(clamp(at + step));
    } else if (e.key === 'Home') {
      raw.set(MIN);
    } else if (e.key === 'End') {
      raw.set(MAX);
    } else {
      return;
    }
    e.preventDefault();
  };

  return (
    <figure className="group">
      <div
        ref={plateRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={stopDrag}
        onPointerCancel={stopDrag}
        onLostPointerCapture={stopDrag}
        className="mini-plate relative aspect-[1200/750] w-full touch-pan-y overflow-hidden border border-line bg-white select-none"
        style={{ cursor: dragging ? 'grabbing' : 'ew-resize' }}
        data-cursor="hide"
      >
        <Before />
        <motion.div className="absolute inset-0" style={{ clipPath: clip }}>
          <After />
        </motion.div>

        <motion.span
          style={{ opacity: oldFade }}
          className="ficha pointer-events-none absolute bottom-3 left-3 z-10 bg-ink px-2 py-1.5 text-paper md:bottom-4 md:left-4 md:px-2.5 md:py-2"
        >
          Antes
        </motion.span>
        <motion.span
          style={{ opacity: newFade }}
          className="ficha pointer-events-none absolute bottom-3 right-3 z-10 bg-pine px-2 py-1.5 text-paper md:bottom-4 md:right-4 md:px-2.5 md:py-2"
        >
          Después
        </motion.span>

        <motion.div
          style={{ left: seamLeft }}
          className="pointer-events-none absolute inset-y-0 z-20 w-px -translate-x-1/2 bg-brass"
        >
          <div className="absolute inset-y-0 -left-px w-[3px] bg-brass/25" />
          <div
            role="slider"
            tabIndex={0}
            aria-label={`Arrastra para relanzar — ${defaultCaption}`}
            aria-valuemin={MIN}
            aria-valuemax={MAX}
            aria-valuenow={Math.round(seam.get())}
            onKeyDown={onKeyDown}
            className="pointer-events-auto absolute top-1/2 left-1/2 grid h-10 w-10 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize place-items-center rounded-full bg-paper text-ink shadow-[0_2px_2px_rgba(23,23,23,.04),0_18px_36px_-14px_rgba(23,23,23,.35)] transition-transform duration-300 ease-[cubic-bezier(.22,1,.36,1)] hover:scale-110 focus-visible:scale-110 md:h-12 md:w-12"
          >
            <svg width="18" height="10" viewBox="0 0 26 12" fill="none" aria-hidden="true">
              <path
                d="M5.5 1.5 1 6l4.5 4.5M20.5 1.5 25 6l-4.5 4.5"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </motion.div>
      </div>
      <figcaption className="ficha mt-4 flex items-center gap-3 text-ink-soft">
        <span className="h-px w-8 shrink-0 bg-brass" aria-hidden="true" />
        {caption ?? defaultCaption}
      </figcaption>
    </figure>
  );
}
