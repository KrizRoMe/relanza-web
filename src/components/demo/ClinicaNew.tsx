/**
 * Sitio "después" — Clínica Dental Sonría Norte.
 * Misma información, una sola acción: reservar la cita. La regla de
 * latón reemplaza al "¡PROMO!", el calendario se reduce a un dato de
 * contacto y el smilie se convierte en un signo geométrico.
 */
export default function ClinicaNew() {
  return (
    <div className="stage new case-clinica" aria-hidden="true">
      <div className="new-top">
        <div className="new-mark">Sonría Norte</div>
        <nav className="new-nav">
          <span>Firma</span>
          <span>Tratamientos</span>
          <span>Equipo</span>
          <span>Reservar</span>
        </nav>
        <div className="new-top-right">
          <span>(01) 441-0028</span>
          <span className="new-cta">Reservar cita</span>
        </div>
      </div>

      <div className="new-hero new-hero-med">
        <div className="new-hero-art">
          <div className="new-art-line v" />
          <div className="new-art-line h" />
          <div className="new-panel p1" />
          <div className="new-panel p2" />
          <div className="new-art-tag">Los Olivos · desde 1996</div>
        </div>

        <div className="new-hero-copy">
          <div className="new-eyebrow">Odontología integral</div>
          <h1 className="new-h1">
            Una clínica dental
            <br />
            para toda la familia.
          </h1>
          <p className="new-lede">
            Ortodoncia, implantes y estética dental con equipos de rayos X digital, sala de
            esterilización certificada y un equipo médico al que le cabe el trato personal.
          </p>
          <div className="new-actions">
            <span className="a1">Reservar mi cita</span>
            <span className="a2">Ver tratamientos</span>
          </div>
        </div>
      </div>

      <div className="new-strip">
        <div>
          <div className="n">01 — 30 días</div>
          <div className="t">Ortodoncia</div>
          <div className="d">Brackets metálicos, cerámicos e invisibles.</div>
        </div>
        <div>
          <div className="n">02 — 5 años garantía</div>
          <div className="t">Implantes</div>
          <div className="d">Implantes de titanio con seguimiento real.</div>
        </div>
        <div>
          <div className="n">03 — Personalizado</div>
          <div className="t">Estética dental</div>
          <div className="d">Carillas, blanqueamiento y diseño de sonrisa.</div>
        </div>
      </div>

      <div className="new-foot">
        <span>Sonría Norte</span>
        <span>Av. Las Palmeras 4428, Los Olivos</span>
        <span className="sep">© 2026</span>
      </div>
    </div>
  );
}
