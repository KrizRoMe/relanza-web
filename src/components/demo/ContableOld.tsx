/**
 * Sitio "antes" — Estudio Contable Reyes & Asociados.
 * Pieza de demostración. Año de referencia: 2009.
 * Estilo deliberadamente distinto al de Muebles Aldana: sin azul Times,
 * con paleta verde-bosque + crema, tipografía serif formal, mucho
 * formulario y contador de descargas. Es el "antes" de un estudio
 * contable real, típico de la primera generación de sitios corporativos
 * peruanos.
 */
export default function ContableOld() {
  return (
    <div className="stage old old-contable" aria-hidden="true">
      <div className="oc-bar">
        <span>Inicio</span>
        <span>|</span>
        <span>La firma</span>
        <span>|</span>
        <span>Servicios</span>
        <span>|</span>
        <span>Staff</span>
        <span>|</span>
        <span>Boletín</span>
        <span>|</span>
        <span>Foro contable</span>
        <span>|</span>
        <span>Contacto</span>
        <span className="oc-bar-r">Intranet · Mapa del sitio</span>
      </div>

      <div className="oc-head">
        <div className="oc-logo">
          <span className="oc-logo-t">R&amp;A</span>
          <span className="oc-logo-b">Reyes &amp; Asociados</span>
        </div>
        <div className="oc-head-meta">
          <div className="oc-tag">Contadores, Auditores y Asesores Tributarios</div>
          <div className="oc-tag-sub">« Fundados en 1978 — más de 30 años de servicio »</div>
        </div>
        <div className="oc-head-cta">
          <div className="oc-cert">SOCIO</div>
          <div className="oc-cert">SUNAT</div>
          <div className="oc-cert">CCPL</div>
        </div>
      </div>

      <div className="oc-grid">
        <div className="oc-side">
          <div className="oc-box">
            <h4>Servicios</h4>
            <ul>
              <li>→ Auditoría externa</li>
              <li>→ Estados financieros</li>
              <li>→ Asesoría tributaria</li>
              <li>→ Recursos humanos</li>
              <li>→ Sistemas contables</li>
              <li>→ Precios de transferencia</li>
              <li>→ Consultoría empresarial</li>
            </ul>
          </div>
          <div className="oc-box">
            <h4>Boletín mensual</h4>
            <div className="oc-news">
              <input type="text" defaultValue="su correo electrónico" readOnly tabIndex={-1} />
              <button type="button" tabIndex={-1}>Suscribir</button>
              <div className="oc-news-note">Reciba nuestras publicaciones tributarias todos los meses.</div>
            </div>
          </div>
          <div className="oc-box">
            <h4>Descargas</h4>
            <div className="oc-counter">
              <div className="oc-counter-l">Documentos descargados</div>
              <div className="oc-counter-n">187 432</div>
              <div className="oc-counter-l">Desde el 12/08/2003</div>
            </div>
          </div>
        </div>

        <div className="oc-body">
          <h1 className="oc-h1">
            Bienvenidos a nuestra página de servicios contables
            <span className="oc-stamp">NUEVO</span>
          </h1>
          <div className="oc-rule" />
          <p className="oc-lead">
            <b>Reyes &amp; Asociados S. Civil de R.L.</b> es una firma peruana de contadores,
            auditores y asesores tributarios con más de treinta años de experiencia en el
            mercado nacional, conformada por un equipo de profesionales altamente capacitados
            y en permanente actualización, con el firme propósito de ofrecer a nuestros
            distinguidos clientes un servicio serio, eficiente y oportuno, contando para ello
            con la tecnología más moderna y las alianzas estratégicas necesarias para
            garantizar la calidad de nuestro trabajo.
          </p>
          <p>
            Nuestra firma brinda a pequeñas, medianas y grandes empresas{' '}
            <a href="#">asesoría tributaria integral</a>, auditoría externa y consultoría,
            con un enfoque personalizado y confidencial. Para mayor información puede
            <a href="#"> escribirnos </a>o llamar al (01) 422-9087.
          </p>

          <table className="oc-tbl">
            <tbody>
              <tr>
                <th>Servicio</th>
                <th>Descripción</th>
                <th>Plazo</th>
                <th>Inversión</th>
              </tr>
              <tr>
                <td>Auditoría externa</td>
                <td>Dictamen sobre estados financieros.</td>
                <td>30 días</td>
                <td>A cotizar</td>
              </tr>
              <tr>
                <td>Asesoría tributaria</td>
                <td>Planeamiento y atención de fiscalizaciones.</td>
                <td>Permanente</td>
                <td>Mensual</td>
              </tr>
              <tr>
                <td>Recursos humanos</td>
                <td>Planilla, contratos y Liquidaciones.</td>
                <td>15 días</td>
                <td>Mensual</td>
              </tr>
            </tbody>
          </table>

          <div className="oc-actions">
            <button type="button" className="oc-btn" tabIndex={-1}>Solicitar cotización &gt;&gt;</button>
            <button type="button" className="oc-btn oc-btn-2" tabIndex={-1}>Ver staff</button>
          </div>

          <div className="oc-marquee">
            <span>· Atención de fiscalizaciones SUNAT · Fraccionamiento tributario · Devolución de impuestos · Auditoría preventiva · Conciliaciones bancarias ·  </span>
          </div>
        </div>
      </div>

      <div className="oc-foot">
        © 2009 Reyes &amp; Asociados S. Civil de R.L. — Todos los derechos reservados &nbsp;|&nbsp;
        Jr. Risso 312, Of. 402, Lince — Lima 14, Perú &nbsp;|&nbsp; Tel. (01) 422-9087 &nbsp;|&nbsp;
        Resolución 1024 x 768 &nbsp;|&nbsp; Webmaster: estudio@reyesasoc.com.pe
      </div>
    </div>
  );
}
