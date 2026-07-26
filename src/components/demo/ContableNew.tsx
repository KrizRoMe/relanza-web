/**
 * Sitio "después" — Estudio Contable Reyes & Asociados.
 * Misma información, jerarquía y aire. La regla de latón reemplaza al
 * sello "NUEVO"; la paleta pino reemplaza al verde-bosque saturado.
 */
export default function ContableNew() {
  return (
    <div className="stage new case-contable" aria-hidden="true">
      <div className="new-top">
        <div className="new-mark">Reyes &amp; A.</div>
        <nav className="new-nav">
          <span>Firma</span>
          <span>Servicios</span>
          <span>Equipo</span>
          <span>Publicaciones</span>
        </nav>
        <div className="new-top-right">
          <span>(01) 422-9087</span>
          <span className="new-cta">Solicitar reunión</span>
        </div>
      </div>

      <div className="new-hero new-hero-alt">
        <div className="new-hero-art">
          <div className="new-art-line v" />
          <div className="new-art-line h" />
          <div className="new-panel p1" />
          <div className="new-panel p2" />
          <div className="new-art-tag">Lima · desde 1978</div>
        </div>

        <div className="new-hero-copy">
          <div className="new-eyebrow">Contadores, auditores y asesores tributarios</div>
          <h1 className="new-h1">
            Una firma seria,
            <br />
            sin papelones legales.
          </h1>
          <p className="new-lede">
            Auditoría, tributario y planilla para empresas que quieren órdenes claras,
            plazos cumplidos y un único equipo responsable de su contabilidad.
          </p>
          <div className="new-actions">
            <span className="a1">Solicitar reunión</span>
            <span className="a2">Ver servicios</span>
          </div>
        </div>
      </div>

      <div className="new-strip">
        <div>
          <div className="n">01 — 30 días</div>
          <div className="t">Auditoría externa</div>
          <div className="d">Dictamen sobre estados financieros.</div>
        </div>
        <div>
          <div className="n">02 — Permanente</div>
          <div className="t">Asesoría tributaria</div>
          <div className="d">Planeamiento y atención de fiscalizaciones.</div>
        </div>
        <div>
          <div className="n">03 — 15 días</div>
          <div className="t">Recursos humanos</div>
          <div className="d">Planilla, contratos y liquidaciones.</div>
        </div>
      </div>

      <div className="new-foot">
        <span>Reyes &amp; Asociados S. Civil de R.L.</span>
        <span>Jr. Risso 312, Of. 402, Lince — Lima 14</span>
        <span className="sep">© 2026</span>
      </div>
    </div>
  );
}
