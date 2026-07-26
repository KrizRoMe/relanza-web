/**
 * Sitio "antes": el mismo negocio, tal como se veía en 2015.
 * Toda la información es idéntica a la del sitio relanzado.
 * Negocio de demostración, no real.
 */
export default function OldSite() {
  return (
    <div className="stage old" aria-hidden="true">
      <div className="old-top">
        <div className="old-logo">MA</div>
        <div className="old-title">
          Muebles Aldana S.A.C.
          <span>&quot;Calidad y tradición en madera desde 1994&quot;</span>
        </div>
        <div className="old-top-right">
          Tel. (01) 555-0142 &nbsp;|&nbsp; Lun a Sáb 9:00 - 18:00
          <div className="old-search">
            <input type="text" defaultValue="Buscar en el sitio..." readOnly tabIndex={-1} />
            <button type="button" tabIndex={-1}>
              Ir
            </button>
          </div>
        </div>
      </div>

      <div className="old-nav">
        <a href="#">Inicio</a>
        <i>|</i>
        <a href="#">Nosotros</a>
        <i>|</i>
        <a href="#">Productos</a>
        <i>|</i>
        <a href="#">Servicios</a>
        <i>|</i>
        <a href="#">Preguntas frecuentes</a>
        <i>|</i>
        <a href="#">Libro de visitas</a>
        <i>|</i>
        <a href="#">Contáctenos</a>
      </div>

      <div className="old-main">
        <div className="old-side">
          <div className="old-box">
            <h4>Menú principal</h4>
            <ul>
              <li>
                <a href="#">Cocinas a medida</a>
              </li>
              <li>
                <a href="#">Closets y vestidores</a>
              </li>
              <li>
                <a href="#">Mobiliario de oficina</a>
              </li>
              <li>
                <a href="#">Solicitar cotización</a>
              </li>
              <li>
                <a href="#">Mapa del sitio</a>
              </li>
            </ul>
          </div>
          <div className="old-box">
            <h4>Contador</h4>
            <div className="old-counter">
              Usted es el visitante
              <br />
              <b>0034512</b>
            </div>
          </div>
        </div>

        <div className="old-body">
          <h1 className="old-h1">
            ¡Bienvenidos a nuestra página web!
            <span className="old-new">NUEVO</span>
          </h1>
          <div className="old-rule" />
          <p>
            Muebles Aldana S.A.C. es una empresa peruana dedicada a la fabricación y comercialización
            de muebles de madera a medida para el hogar y la oficina, contando con más de veinticinco
            años de experiencia en el mercado nacional. Nuestro compromiso es brindar a nuestros
            distinguidos clientes productos de la más alta calidad, elaborados por personal altamente
            capacitado y con la mejor materia prima seleccionada, a precios competitivos y con la
            garantía que solo la experiencia puede ofrecer.
          </p>
          <p>
            Contamos con un taller propio totalmente equipado y un equipo de maestros carpinteros con
            amplia trayectoria, lo que nos permite atender proyectos residenciales y corporativos de
            cualquier envergadura, cumpliendo estrictamente con los plazos acordados.{' '}
            <a href="#">Haga clic aquí</a> para conocer más sobre nosotros o{' '}
            <a href="#">escríbanos</a> para solicitar una cotización sin compromiso.
          </p>

          <table className="old-table">
            <tbody>
              <tr>
                <th>Línea de producto</th>
                <th>Descripción</th>
                <th>Plazo</th>
              </tr>
              <tr>
                <td>Cocinas a medida</td>
                <td>Diseño, fabricación e instalación de mobiliario de cocina.</td>
                <td>25 días</td>
              </tr>
              <tr>
                <td>Closets y vestidores</td>
                <td>Soluciones de almacenamiento aprovechando cada espacio.</td>
                <td>18 días</td>
              </tr>
              <tr>
                <td>Mobiliario de oficina</td>
                <td>Escritorios, archivadores y mobiliario corporativo.</td>
                <td>30 días</td>
              </tr>
            </tbody>
          </table>

          <button type="button" className="old-btn" tabIndex={-1}>
            Más información &gt;&gt;
          </button>

          <div className="old-note">
            Aviso: nuestro catálogo en formato PDF pesa 24 MB. Se recomienda descargarlo con una
            conexión de banda ancha.
          </div>
        </div>
      </div>

      <div className="old-foot">
        © 2015 Muebles Aldana S.A.C. — Todos los derechos reservados &nbsp;|&nbsp; Optimizado para
        Internet Explorer 8 &nbsp;|&nbsp; Resolución recomendada 1024 x 768
      </div>
    </div>
  );
}
