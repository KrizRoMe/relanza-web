/**
 * Sitio "después" — Taller Lumbre · Arquitectura.
 * La información que importaba (cuatro proyectos, dirección, fecha) se
 * queda. Lo que se va: el slider jQuery, las cinco redes sociales,
 * los premios en columna, la barra de Twitter y el "Valid XHTML".
 */
export default function TallerNew() {
  return (
    <div className="stage new case-taller" aria-hidden="true">
      <div className="new-top">
        <div className="new-mark">Lumbre</div>
        <nav className="new-nav">
          <span>Estudio</span>
          <span>Proyectos</span>
          <span>Prensa</span>
          <span>Contacto</span>
        </nav>
        <div className="new-top-right">
          <span>(01) 222-5540</span>
          <span className="new-cta">Hablar con el estudio</span>
        </div>
      </div>

      <div className="new-hero new-hero-tall">
        <div className="new-hero-art">
          <div className="new-art-line v" />
          <div className="new-art-line h" />
          <div className="new-panel p1" />
          <div className="new-panel p2" />
          <div className="new-art-tag">San Isidro · desde 2004</div>
        </div>

        <div className="new-hero-copy">
          <div className="new-eyebrow">Estudio de arquitectura</div>
          <h1 className="new-h1">
            Edificios que
            <br />
            se quedan contigo.
          </h1>
          <p className="new-lede">
            Cuatro obras realizadas cada año, todas construidas. proyectos residenciales y
            comerciales con dirección de obra y materiales que envejecen bien.
          </p>
          <div className="new-actions">
            <span className="a1">Hablar con el estudio</span>
            <span className="a2">Ver proyectos</span>
          </div>
        </div>
      </div>

      <div className="new-strip">
        <div>
          <div className="n">01 — 230 m²</div>
          <div className="t">Casa Mirador</div>
          <div className="d">Cajamarca · 2009</div>
        </div>
        <div>
          <div className="n">02 — 180 m²</div>
          <div className="t">Loft Industrial</div>
          <div className="d">Lima · 2010</div>
        </div>
        <div>
          <div className="n">03 — 420 m²</div>
          <div className="t">Galería Lima</div>
          <div className="d">Barranco · 2011</div>
        </div>
      </div>

      <div className="new-foot">
        <span>Taller Lumbre</span>
        <span>Av. Pardo y Aliaga 480, San Isidro</span>
        <span className="sep">© 2026</span>
      </div>
    </div>
  );
}
