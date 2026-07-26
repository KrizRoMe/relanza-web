# Relanza Web

Landing page de **Relanza Web**, estudio de relanzamiento digital: relanza
negocios modernizando sitios web antiguos.

> Tu negocio evolucionó. Tu sitio web también debería hacerlo.

## Levantar el proyecto

```bash
pnpm install
pnpm dev        # http://localhost:4321
pnpm build      # genera dist/ (salida estática)
pnpm preview    # sirve dist/ tal como saldrá en producción
```

Requiere Node 20+ y **pnpm** (no usar npm ni npx en este proyecto).

## Stack

| Pieza | Elección |
|---|---|
| Framework | Astro 7 (salida estática, cero JS por defecto) |
| Estilos | TailwindCSS 4 vía `@tailwindcss/vite`, tokens en `src/styles/global.css` |
| Tipografía | Geist Variable + Geist Mono Variable, autoalojadas con `@fontsource-variable` |
| Motion de scroll | GSAP + ScrollTrigger (`src/scripts/motion.ts`) |
| Comparador | Island de React con `motion` (Framer Motion), cargada con `client:visible` |
| Despliegue | Vercel (`vercel.json` incluido; Astro se detecta solo) |

El único JavaScript de React del sitio vive en el comparador y no se descarga
hasta que la sección entra en pantalla.

## Estructura

```
relanza-web/
├── astro.config.mjs
├── vercel.json
├── PRODUCT.md               Verdad de producto y datos pendientes
├── DESIGN.md                Mundo visual, tokens y prohibiciones
├── public/
│   ├── favicon.svg
│   └── robots.txt
├── screenshots/after/       Capturas del resultado (desktop y móvil)
└── src/
    ├── layouts/Base.astro           <head>, SEO, armado de revelados
    ├── pages/index.astro            Contrato de dirección + composición
    ├── scripts/motion.ts            Orquestación única de GSAP
    ├── styles/
    │   ├── global.css               Tokens, utilidades, motion, controles
    │   └── demo.css                 Los dos sitios del comparador y los plates
    └── components/
        ├── Nav.astro                Barra fija + índice móvil a pantalla completa
        ├── Mark.astro               Marca: el signo es la costura
        ├── Hero.astro               Titular que se relanza + plate de anticipo
        ├── ComparatorSection.astro  Encabezado y notas del comparador
        ├── Comparator.tsx           Island: arrastre, teclado, escalado del plate
        ├── demo/OldSite.tsx         Sitio "antes" (2015), HTML y CSS reales
        ├── demo/NewSite.tsx         Sitio "después", misma información
        ├── MiniPlate.astro          Silueta antes/después reutilizable
        ├── Diagnostico.astro        Seis síntomas y su consecuencia
        ├── Cambio.astro             Campo pino: pares antes → ahora
        ├── Proceso.astro            Cuatro pasos, scroll horizontal fijado
        ├── Casos.astro              Tres transformaciones por sector
        ├── Preguntas.astro          Acordeón de seis preguntas
        ├── CtaFinal.astro           Campo tinta + pie
        └── WhatsAppButton.astro     Botón flotante con burbuja persistente
```

## El comparador

Es la pieza central y **no usa capturas de pantalla**. Son dos sitios completos
construidos en HTML y CSS (`src/components/demo/`), con la **misma información
en ambos lados**: razón social, año de fundación, navegación, descripción, tres
líneas de producto con plazos, teléfono y aviso legal.

- El escenario interno mide 1200 × 750 px fijos y se escala al ancho real del
  plate con un `ResizeObserver` que escribe `--k`.
- La capa "después" se recorta con `clip-path: inset(0 0 0 P%)`; el tirador vive
  en `P`.
- Al entrar en pantalla, la costura viaja sola de 88% a 52%: el sitio se relanza
  delante del visitante sin que tenga que descubrir el control.
- Accesible con teclado: el tirador es un `role="slider"` con flechas, `Shift`
  para pasos grandes, `Home` y `End`.

`Muebles Aldana S.A.C.` es un negocio **ficticio**, etiquetado en pantalla como
pieza de demostración. El teléfono usa el prefijo de ficción `555`.

## Datos reales y datos de demostración

Reglas que este proyecto respeta:

- **No se inventan** teléfonos, direcciones, precios, métricas ni casos de
  clientes reales.
- El WhatsApp del sitio es el número real del estudio: **+51 986 550 234**.
- La sección "Preguntas" habla de precio sin dar ninguna cifra, a propósito.
- Las tres transformaciones de la sección *Casos* y el negocio del comparador
  son piezas de demostración, marcadas como tales. Ver la lista de reemplazos
  pendientes en `PRODUCT.md`.

## Accesibilidad

- Auditoría de contraste ejecutada sobre todos los pares texto/fondo del sitio:
  **cero fallos AA**. El latón `#B89A72` está restringido a reglas y costuras
  porque como texto sobre papel rinde 2.1:1; para campos oscuros existe
  `--color-brass-lift`.
- Todo el contenido es visible sin JavaScript: los revelados se arman solo si
  hay JS, y un failsafe los desactiva a los 2600 ms.
- `prefers-reduced-motion` desactiva el relanzamiento del titular, los
  revelados, el scroll horizontal fijado, el cursor y la animación del acordeón.
- Índice móvil con foco gestionado, cierre con `Escape` y `aria-expanded`.
- El sitio "antes" del comparador está marcado `aria-hidden` en ambas capas: es
  un artefacto visual, no contenido que un lector de pantalla deba narrar. La
  información equivalente está en el texto de la sección.

## Pendientes conocidos

- Sustituir las piezas de demostración por casos reales autorizados.
- Definir dominio y actualizar `site` en `astro.config.mjs` y `robots.txt`.
- `brand/*.svg` (fuera de esta carpeta) usa un azul `#2F5BEA` incompatible con
  la paleta aprobada; la marca de este sitio se dibuja en código, en la paleta
  del brief.
