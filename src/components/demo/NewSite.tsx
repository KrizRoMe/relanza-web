/**
 * Sitio "después": el mismo negocio, la misma información,
 * relanzado. Nada de contenido nuevo — solo jerarquía, aire y foco.
 * Negocio de demostración, no real.
 */
export default function NewSite() {
  return (
    <div className="stage new" aria-hidden="true">
      <div className="new-top">
        <div className="new-mark">Aldana</div>
        <nav className="new-nav">
          <span>Cocinas</span>
          <span>Closets</span>
          <span>Oficina</span>
          <span>Taller</span>
        </nav>
        <div className="new-top-right">
          <span>(01) 555-0142</span>
          <span className="new-cta">Solicitar cotización</span>
        </div>
      </div>

      <div className="new-hero">
        <div className="new-hero-art">
          <div className="new-art-line v" />
          <div className="new-art-line h" />
          <div className="new-panel p1" />
          <div className="new-panel p2" />
          <div className="new-art-tag">Nogal / Roble / Melamina</div>
        </div>

        <div className="new-hero-copy">
          <div className="new-eyebrow">Carpintería a medida · desde 1994</div>
          <h1 className="new-h1">
            Muebles que duran
            <br />
            más que las modas.
          </h1>
          <p className="new-lede">
            Taller propio, maestros carpinteros y madera seleccionada. Diseñamos, fabricamos e
            instalamos mobiliario para el hogar y la oficina, con plazos que se cumplen.
          </p>
          <div className="new-actions">
            <span className="a1">Solicitar cotización</span>
            <span className="a2">Ver el taller</span>
          </div>
        </div>
      </div>

      <div className="new-strip">
        <div>
          <div className="n">01 — 25 días</div>
          <div className="t">Cocinas a medida</div>
          <div className="d">Diseño, fabricación e instalación completa.</div>
        </div>
        <div>
          <div className="n">02 — 18 días</div>
          <div className="t">Closets y vestidores</div>
          <div className="d">Almacenamiento que aprovecha cada espacio.</div>
        </div>
        <div>
          <div className="n">03 — 30 días</div>
          <div className="t">Mobiliario de oficina</div>
          <div className="d">Escritorios, archivadores y proyectos corporativos.</div>
        </div>
      </div>

      <div className="new-foot">
        <span>Muebles Aldana S.A.C.</span>
        <span>Lun a Sáb, 9:00 – 18:00</span>
        <span className="sep">© 2026</span>
      </div>
    </div>
  );
}
