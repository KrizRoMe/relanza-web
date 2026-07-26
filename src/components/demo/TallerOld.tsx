/**
 * Sitio "antes" — Taller Lumbre · Arquitectura.
 * Pieza de demostración. Año de referencia: 2010.
 * Estilo "agencia creativa nocturna" de la primera década: fondo
 * carbón, tipografía condensada, mockup de slider jQuery, grilla de
 * proyectos y un rincón de Twitter/Flickr heredado. Distinto del
 * Times azul y de la paleta médica: es la web de un estudio que
 * quería verse vanguardista y terminó luciendo de 2010.
 */
export default function TallerOld() {
  return (
    <div className="stage old old-taller" aria-hidden="true">
      <div className="tl-slab">
        <div className="tl-brand">
          <span className="tl-mark">TL</span>
          <span className="tl-name">TALLER LUMBRE</span>
        </div>
        <nav className="tl-nav">
          <a href="#">estudio</a>
          <a href="#">proyectos</a>
          <a href="#">prensa</a>
          <a href="#">premios</a>
          <a href="#">blog</a>
          <a href="#">contacto</a>
          <span className="tl-lang">ES / EN</span>
        </nav>
      </div>

      <div className="tl-slider">
        <div className="tl-slide">
          <div className="tl-slide-tag">HOUSE IN CAJAMARCA · 2009</div>
          <div className="tl-slide-h">Una casa que mira al valle.</div>
          <div className="tl-slide-p">
            Concreto, madera y vidrio en ladera. Veintidós metros de losa en voladizo y una
            relación directa con el paisaje andino.
          </div>
          <div className="tl-slide-meta">
            <span>› ver proyecto</span>
            <span className="tl-arrow">‹ 1 / 4 ›</span>
          </div>
        </div>
        <div className="tl-dots">
          <span className="tl-dot on" />
          <span className="tl-dot" />
          <span className="tl-dot" />
          <span className="tl-dot" />
        </div>
      </div>

      <div className="tl-grid">
        <div className="tl-cell">
          <div className="tl-thumb">
            <span className="tl-thumb-n">01</span>
          </div>
          <div className="tl-cell-t">Casa Mirador</div>
          <div className="tl-cell-s">Cajamarca · 230 m²</div>
        </div>
        <div className="tl-cell">
          <div className="tl-thumb">
            <span className="tl-thumb-n">02</span>
          </div>
          <div className="tl-cell-t">Loft Industrial</div>
          <div className="tl-cell-s">Lima · 180 m²</div>
        </div>
        <div className="tl-cell">
          <div className="tl-thumb">
            <span className="tl-thumb-n">03</span>
          </div>
          <div className="tl-cell-t">Galería Lima</div>
          <div className="tl-cell-s">Barranco · 420 m²</div>
        </div>
        <div className="tl-cell">
          <div className="tl-thumb">
            <span className="tl-thumb-n">04</span>
          </div>
          <div className="tl-cell-t">Oficina Central</div>
          <div className="tl-cell-s">San Isidro · 600 m²</div>
        </div>
      </div>

      <div className="tl-aside">
        <div className="tl-tweet">
          <div className="tl-tweet-h">Último tweet</div>
          <div className="tl-tweet-b">
            <b>@tallerlumbre:</b> Hoy revisando detalles de fachada en Casa Mirador. Asómate
            al render en flickr.com/tallerlumbre/casa-mirador
          </div>
          <div className="tl-tweet-d">hace 14 minutos · vía web</div>
        </div>
        <div className="tl-awards">
          <div className="tl-awards-h">Premios</div>
          <div className="tl-awards-b">
            <span>· BIA 2008 — Mención</span>
            <span>· CAP 2007 — Finalista</span>
            <span>· Premio Obra del Año 2006</span>
          </div>
        </div>
      </div>

      <div className="tl-foot">
        © 2010 Taller Lumbre · Av. Pardo y Aliaga 480, Of. 502, San Isidro, Lima 27 ·
        T. (01) 222-5540 · hola@tallerlumbre.pe · Powered by WordPress 2.8 · Valid XHTML
      </div>
    </div>
  );
}
