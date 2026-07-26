/**
 * Sitio "antes" — Clínica Dental Sonría Norte.
 * Pieza de demostración. Año de referencia: 2012.
 * Estilo web sanitario de los tempranos 2010: cian saturado, marcos
 * con esquinas redondeadas, múltiples widgets laterales, banners
 * animados simulados con CSS y un "smiley" como isotipo. Es la cara
 * del consultorio odontológico promedio de esa época.
 */
export default function ClinicaOld() {
  return (
    <div className="stage old old-clinica" aria-hidden="true">
      <div className="cd-top">
        <div className="cd-logo">
          <span className="cd-smiley">
            <span className="cd-sm-eye" />
            <span className="cd-sm-eye" />
            <span className="cd-sm-mouth" />
          </span>
          <span className="cd-logo-t">Sonría Norte</span>
          <span className="cd-logo-b">CLÍNICA DENTAL · desde 1996</span>
        </div>
        <div className="cd-top-r">
          <div className="cd-phone">☎ (01) 441-0028 · Emergencias 998-110-223</div>
          <div className="cd-search">
            <input type="text" defaultValue="Buscar tratamiento..." readOnly tabIndex={-1} />
            <button type="button" tabIndex={-1}>BUSCAR</button>
          </div>
        </div>
      </div>

      <div className="cd-nav">
        <a href="#">Inicio</a>
        <a href="#">Nosotros</a>
        <a href="#">Tratamientos</a>
        <a href="#">Odontopediatría</a>
        <a href="#">Ortodoncia</a>
        <a href="#">Implantes</a>
        <a href="#">Promociones</a>
        <a href="#">Preguntas</a>
        <a href="#">Contacto</a>
      </div>

      <div className="cd-main">
        <table className="cd-tbl">
          <tbody>
            <tr>
              <td className="cd-side">
                <div className="cd-box">
                  <h4>Reserve su cita</h4>
                  <div className="cd-cal">
                    <div className="cd-cal-h">Septiembre 2012</div>
                    <div className="cd-cal-r">
                      <span>D</span><span>L</span><span>M</span><span>M</span><span>J</span><span>V</span><span>S</span>
                    </div>
                    <div className="cd-cal-r">
                      <span className="cd-mute">26</span><span className="cd-mute">27</span><span className="cd-mute">28</span><span className="cd-mute">29</span><span className="cd-mute">30</span><span className="cd-mute">31</span><span>1</span>
                    </div>
                    <div className="cd-cal-r">
                      <span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span>
                    </div>
                    <div className="cd-cal-r">
                      <span>9</span><span className="cd-cd-sel">10</span><span>11</span><span>12</span><span>13</span><span>14</span><span>15</span>
                    </div>
                  </div>
                  <div className="cd-form">
                    <label>Nombre</label>
                    <input type="text" defaultValue="" readOnly tabIndex={-1} />
                    <label>Email</label>
                    <input type="text" defaultValue="" readOnly tabIndex={-1} />
                    <label>Tratamiento</label>
                    <select tabIndex={-1}><option>Seleccionar</option></select>
                    <button type="button" tabIndex={-1}>Reservar</button>
                  </div>
                </div>

                <div className="cd-box">
                  <h4>Staff médico</h4>
                  <div className="cd-doc">
                    <div className="cd-doc-p" />
                    <div>
                      <div className="cd-doc-n">Dr. Raúl Mendoza</div>
                      <div className="cd-doc-s">Director · Cirujano oral</div>
                      <div className="cd-doc-c">COP 18432</div>
                    </div>
                  </div>
                  <div className="cd-doc">
                    <div className="cd-doc-p" />
                    <div>
                      <div className="cd-doc-n">Dra. Lucía Vega</div>
                      <div className="cd-doc-s">Ortodoncia</div>
                      <div className="cd-doc-c">COP 19021</div>
                    </div>
                  </div>
                </div>
              </td>

              <td className="cd-body">
                <h1 className="cd-h1">
                  ¡Bienvenido a Sonría Norte!
                  <span className="cd-ribbon">¡PROMO!</span>
                </h1>
                <div className="cd-slider">
                  <div className="cd-slide">
                    <div className="cd-slide-art">
                      <div className="cd-slide-orb" />
                      <div className="cd-slide-cap">★ LIMPIEZA COMPLETA S/ 49 ★</div>
                    </div>
                    <div className="cd-slide-r">
                      <div className="cd-slide-t">Sonría como nunca antes</div>
                      <div className="cd-slide-d">Primera consulta GRATIS este mes. Atención con equipos de última generación, rayos X digital y sala de recuperación.</div>
                      <div className="cd-slide-b">› Conoce la promoción</div>
                    </div>
                  </div>
                  <div className="cd-dots">
                    <span className="cd-dot on" />
                    <span className="cd-dot" />
                    <span className="cd-dot" />
                  </div>
                </div>

                <p>
                  <b>Sonría Norte</b> es una clínica dental ubicada en el distrito de Los Olivos,
                  con más de 15 años de experiencia en tratamientos odontológicos integrales para
                  toda la familia. Contamos con equipos de radiografía digital, sala de
                  esterilización certificada y un staff de profesionales en constante
                  actualización para ofrecerle el mejor servicio.
                </p>

                <div className="cd-cards">
                  <div className="cd-card">
                    <div className="cd-card-i">✓</div>
                    <div className="cd-card-t">Ortodoncia</div>
                    <div className="cd-card-d">Brackets metálicos, cerámicos e invisibles.</div>
                  </div>
                  <div className="cd-card">
                    <div className="cd-card-i">✓</div>
                    <div className="cd-card-t">Implantes</div>
                    <div className="cd-card-d">Implantes de titanio con garantía 5 años.</div>
                  </div>
                  <div className="cd-card">
                    <div className="cd-card-i">✓</div>
                    <div className="cd-card-t">Estética dental</div>
                    <div className="cd-card-d">Carillas, blanqueamiento y diseño de sonrisa.</div>
                  </div>
                </div>

                <div className="cd-certs">
                  <span>★ ★ ★ ★ ★ "Excelente atención"</span>
                  <span>· Aceptamos todas las tarjetas ·</span>
                  <span>Convenios: Pacífico, Rímac, La Positiva</span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="cd-foot">
        © 2012 Sonría Norte — Av. Las Palmeras 4428, Los Olivos &nbsp;|&nbsp; central@sonrianorte.pe
        &nbsp;|&nbsp; Visítanos en Facebook &nbsp;|&nbsp; Visítanos en YouTube
      </div>
    </div>
  );
}
