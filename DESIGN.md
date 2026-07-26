# DESIGN.md — Relanza Web

Mundo visual de la marca. Fijado por el brief del cliente; este documento
registra las reglas durables y los valores que sobrevivieron a la construcción.

## Tesis

La página es la demostración. Una **costura vertical** recorre toda la
experiencia: lo que la cruza pasa de 2015 a hoy. La costura es el titular del
hero, el tirador del comparador, la línea de progreso de la barra superior, el
guion de latón antes de cada consecuencia y el barrido de los plates en
miniatura. Es un solo motivo, no cinco efectos.

Lo que este mundo rechaza: el hero SaaS de tres tarjetas con icono, el
antes/después hecho con capturas de pantalla, el fondo oscuro con azul
eléctrico, el gradiente multicolor y el serif de display editorial.

## Color

Estrategia: **restringida con campos**. El papel arena domina; el color entra
como banda completa —pino y tinta—, nunca como acento disperso.

| Token | Valor | Uso |
|---|---|---|
| `--color-paper` | `#F5F2EC` | Fondo por defecto de la página |
| `--color-surface` | `#ECE6DD` | Bandas alternas (comparador, proceso, preguntas) |
| `--color-card` | `#FFFFFF` | Plates y burbuja de WhatsApp |
| `--color-ink` | `#171717` | Texto principal · campo del CTA final |
| `--color-ink-soft` | `#616161` | Texto secundario. El brief pide `#666666`; se oscureció un 2% porque `#666` rinde 4.46:1 sobre `--color-surface` y no alcanza AA. Diferencia imperceptible. |
| `--color-walnut` | `#6F5846` | Kickers sobre fondo claro · hover del botón sólido |
| `--color-pine` | `#44584F` | Campo completo de la sección "El cambio" |
| `--color-brass` | `#B89A72` | **Solo costura y reglas.** Nunca texto sobre papel o superficie (2.1:1) |
| `--color-brass-lift` | `#E0CEB0` | Única variante de latón legible como texto sobre pino (4.8:1) |
| `--color-on-pine` | `#D2D3CD` | Secundario sobre pino (4.96:1) |
| `--color-on-ink` | `#A8A5A0` | Secundario sobre tinta (7.25:1) |
| `--color-line` | `rgba(23,23,23,.08)` | Regla de 1px, el material estructural de la página |

Reglas duras:

- Prohibido el gradiente como decoración. Los únicos gradientes del proyecto
  viven dentro del sitio "antes" del comparador, donde son la anti-referencia.
- Los secundarios sobre campo se declaran como tokens sólidos, no como papel con
  alfa: el alfa en oklab hace imposible verificar el ratio.
- El azul `#1c4e9c`, el Times New Roman y los bordes `outset` pertenecen
  exclusivamente al artefacto de 2015. No pueden salir de `demo.css`.

## Tipografía

Un solo grotesco en dos registros. Sin serif de display.

- **Geist Variable** — display y cuerpo.
- **Geist Mono Variable** — la "ficha técnica": versalitas de 11px con
  `letter-spacing: .14em`. Es el único uso de mono, y funciona como sistema de
  etiquetado (un kicker nombrado por banda), no como adorno.

| Utilidad | Escala | Uso |
|---|---|---|
| `display-lg` | `clamp(2.875rem, 7.1vw, 6.5rem)` / `lh .92` / `ls -.04em` | Hero y CTA final |
| `display` | `clamp(2.375rem, 5.1vw, 4.5rem)` / `lh .98` / `ls -.035em` | H2 de sección |
| `lede` | `clamp(1.0625rem, 1.35vw, 1.3125rem)` | Bajada, máx. 40ch |
| `body-copy` | `1rem` / `lh 1.65` | Cuerpo, máx. 68ch |
| `ficha` | `.6875rem` mono, versalitas | Kickers, metadatos, entregables |

El color de los encabezados **no** se declara en `@layer base`: se hereda de la
banda, para que `text-paper` funcione dentro de los campos oscuros.

## Forma y profundidad

- Radio: `2px` en todo (botones, plates, etiquetas). Píldoras solo en el tirador
  del comparador y en el botón de WhatsApp, que son controles circulares.
- Elevación declarada una sola vez: o borde de 1px, o sombra. Nunca las dos,
  salvo el plate del comparador, donde el borde define el recorte y la sombra
  `--shadow-plate` lo separa del papel.
- Sombras con desplazamiento y difusión amplia, opacidad máxima 0.18.

## Retícula y ritmo

- `shell`: máx. `88rem`, padding 1.5 / 2.5 / 4rem.
- `band`: 6.5 / 9 / 11.5rem de padding vertical.
- Más espacio arriba de un encabezado que debajo.
- La regla de 1px reemplaza a la tarjeta como separador por defecto. El
  contenido en serie va en filas con regla, no en un grid de tarjetas.

## Movimiento

Un momento autorado, más revelados de apoyo. `expo.out`, salidas cortas.

1. **Relanzamiento del titular** (una vez, al cargar): el H1 en Times azul
   subrayado se convierte en el H1 de Geist a 104px mientras la costura de latón
   lo recorre. 1.35s, `expo.inOut`.
2. **Comparador**: al entrar en pantalla, la costura viaja de 88% a 52% en 1.5s.
   Después responde a puntero, teclado y arrastre con resorte
   (`stiffness 420 / damping 44`).
3. **Revelados al scroll**, uno por tipo de sección: `up` (fade + blur 6px),
   `wipe` (clip-path desde arriba) y `rule` (scaleX de las reglas). Palabra por
   palabra solo en dos titulares.
4. **Proceso**: sección fijada con desplazamiento horizontal, solo en ≥1024px.
5. **Cursor**: un anillo de 26px con `mix-blend-mode: difference`, que crece
   sobre elementos interactivos y desaparece sobre el comparador.

Contrato: el contenido está **visible por defecto**. La clase `is-armed` que
oculta los revelados se aplica en el `<head>` solo si hay JS y no hay
`prefers-reduced-motion`, y se retira con un failsafe de 2600ms; el script de
motion la traslada a estilos en línea antes de retirarla, para que el failsafe
no destape el resto de la página de golpe. Con `prefers-reduced-motion` no hay
animación de entrada, el titular no se relanza y el comparador arranca en
reposo.

## Prohibiciones

- Tarjetas iguales de icono + título + texto como estructura de página.
- Tarjetas anidadas.
- Texto con gradiente. El énfasis es peso o tamaño.
- `border-left` de color por encima de 1px.
- Glass o blur como decoración (el único `backdrop-blur` es la barra superior en
  estado sólido).
- Mono como disfraz de "técnico" fuera del sistema `ficha`.
- Cualquier dato inventado: teléfonos, direcciones, precios, métricas o casos.
  Las piezas de demostración se etiquetan como tales en pantalla.
