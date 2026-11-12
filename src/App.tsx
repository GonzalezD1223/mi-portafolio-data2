const EMAIL = 'david.gp1223@gmail.com';
const LINKEDIN = 'https://www.linkedin.com/in/jesusdavidgonzalezp';
const WHATSAPP = 'https://wa.me/573134772818';
const DASHBOARD =
  'https://app.powerbi.com/reportEmbed?reportId=0142068e-5f40-4430-a4d0-707b087ab8a2&autoAuth=true&ctid=5cd4039d-27ec-4745-8bf4-e4abd89b3c58';

const steps = ['1 Descargar', '2 Detectar', '3 Revisar', '4 Aprobar', '5 Corregir'];

export default function App() {
  return (
    <>
      <header className="nav">
        <div className="wrap">
          <a className="name" href="#inicio">
            David González
          </a>
          <nav aria-label="Principal">
            <a href="#sobre-mi">Sobre mí</a>
            <a href="#herramientas">Herramientas</a>
            <a href="#proyectos">Proyectos</a>
            <a href="#experiencia">Experiencia</a>
            <a className="cta" href="#contacto">
              Contacto
            </a>
          </nav>
        </div>
      </header>

      <main id="inicio">
        {/* HERO */}
        <section className="hero">
          <div className="wrap">
            <div>
              <p className="status">
                <i /> Buscando mi próximo equipo · Bogotá, híbrido o remoto
              </p>
              <h1>
                Soy David, <span className="mark">analista de datos</span>.
              </h1>
              <p className="lead">
                Llevo más de diez años encargándome de que los números de otros estén bien.
                Primero en investigación de mercados, en Kantar, y hoy limpiando bases enormes
                y armando tableros en Power BI para empresas colombianas.
              </p>
              <div className="acts">
                <a className="btn solid" href="/CV_JesusGonzalez.pdf" target="_blank" rel="noreferrer">
                  Descargar hoja de vida
                </a>
                <a className="btn line" href="#contacto">
                  Escríbeme
                </a>
                <a className="textlink" href={LINKEDIN} target="_blank" rel="noreferrer">
                  Mi LinkedIn
                </a>
              </div>
            </div>
            <div className="photo">
              <img src="/buso_Rojo.jpg" alt="David González" />
            </div>
          </div>
        </section>

        <section className="numbers" aria-label="Cifras">
          <div className="wrap">
            <div className="num">
              <b>10+</b>
              <span>años trabajando con datos</span>
            </div>
            <div className="num">
              <b>2 M+</b>
              <span>registros limpiados y modelados</span>
            </div>
            <div className="num">
              <b>~50</b>
              <span>estudios migrados con menos de 2 % de error</span>
            </div>
            <div className="num">
              <b>316.499</b>
              <span>registros de SAP revisados con 60 reglas</span>
            </div>
          </div>
        </section>

        {/* SOBRE MÍ */}
        <section className="sec" id="sobre-mi">
          <div className="wrap">
            <p className="label">// sobre mí</p>
            <h2>Me gusta encontrar el error antes de que lo encuentre el cliente.</h2>
            <div className="about">
              <div>
                <p>
                  Empecé en Kantar procesando estudios de mercado y me quedé diez años. Ahí
                  aprendí que un dato no sirve si nadie confía en él, y que la mayoría de los
                  errores se esconden en los detalles que todos dan por revisados.
                </p>
                <p>
                  Desde 2025 trabajo en <strong>KPISoft</strong> con empresas de verdad: bases
                  de más de dos millones de registros, modelos de datos, tableros con DAX y
                  revisiones de calidad sobre SAP Business One. Lo que más disfruto es
                  dejar todo documentado para que los errores no vuelvan a aparecer.
                </p>
                <p>
                  Busco un equipo de datos o BI donde pueda seguir aprendiendo y aportar desde
                  el primer mes. También tomo proyectos freelance.
                </p>
              </div>
              <aside className="short">
                <dl>
                  <div className="row">
                    <dt>Vivo en</dt>
                    <dd>Soacha, Cundinamarca</dd>
                  </div>
                  <div className="row">
                    <dt>Trabajo en</dt>
                    <dd>Bogotá, Mosquera, Funza o remoto</dd>
                  </div>
                  <div className="row">
                    <dt>Idiomas</dt>
                    <dd>Español nativo, inglés básico</dd>
                  </div>
                  <div className="row">
                    <dt>Formato</dt>
                    <dd>Tiempo completo, contrato o freelance</dd>
                  </div>
                </dl>
              </aside>
            </div>
          </div>
        </section>

        {/* HERRAMIENTAS */}
        <section className="sec white" id="herramientas">
          <div className="wrap">
            <p className="label">// herramientas</p>
            <h2>Con qué trabajo todos los días</h2>
            <div className="tools">
              <div className="tool">
                <h3>Tableros y modelos</h3>
                <p>
                  <b>Power BI, DAX</b>, Power Query, modelo estrella, publicación en Power BI
                  Service con segmentadores y drill-through.
                </p>
              </div>
              <div className="tool">
                <h3>Consultas y limpieza</h3>
                <p>
                  <b>SQL</b> (JOIN, GROUP BY, CASE, subconsultas), procesos ETL y reglas de
                  calidad documentadas.
                </p>
              </div>
              <div className="tool">
                <h3>Análisis</h3>
                <p>
                  <b>Excel avanzado</b> (tablas dinámicas, BUSCARX, fórmulas), SPSS y bases de
                  Python para automatizar tareas.
                </p>
              </div>
              <div className="tool">
                <h3>Investigación de mercados</h3>
                <p>
                  <b>Dimensions y Survey Reporter</b>, cruces estadísticos, Jaccard y Penalty
                  Analysis.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PROYECTOS */}
        <section className="sec" id="proyectos">
          <div className="wrap">
            <p className="label">// proyectos</p>
            <h2>Tres trabajos que explican cómo pienso</h2>

            <article className="proj">
              <div className="n">01</div>
              <div>
                <h3>Calidad de datos en SAP para una empresa distribuidora</h3>
                <p className="meta">
                  SAP Business One · SQL · Excel<em>En curso</em>
                </p>
                <p className="txt">
                  La empresa sospechaba que sus datos tenían errores que afectaban la
                  facturación y la relación con clientes. Armé un proceso con reglas de calidad
                  que detecta los problemas, los clasifica según qué tan seguros son y propone
                  correcciones, sin tocar nunca facturas ni notas crédito ya contabilizadas.
                </p>
                <div className="kpis">
                  <div>
                    <b>316.499</b>
                    <span>registros, 4 tablas</span>
                  </div>
                  <div>
                    <b>60</b>
                    <span>reglas de calidad</span>
                  </div>
                  <div>
                    <b>22</b>
                    <span>tipos de error confirmados</span>
                  </div>
                  <div>
                    <b>6.251</b>
                    <span>casos confirmados</span>
                  </div>
                </div>
                <details className="d">
                  <summary>Ver cómo lo hice y qué encontré</summary>
                  <div className="cols">
                    <div>
                      <h4>El proceso</h4>
                      <div className="steps">
                        {steps.map((s, i) => (
                          <span key={s} className={i < 2 ? 'on' : ''}>
                            {s}
                          </span>
                        ))}
                      </div>
                      <p>
                        Cada regla se prueba sola. Las correcciones seguras se hacen
                        automáticas, las dudosas se las propongo al cliente, y todo cambio queda
                        en una bitácora.
                      </p>
                    </div>
                    <div>
                      <h4>Ejemplos de hallazgos</h4>
                      <ul>
                        <li>1.796 clientes activos sin correo para factura electrónica.</li>
                        <li>1.260 facturas con vencimiento anterior a su fecha de emisión.</li>
                        <li>1.112 productos con la descripción repetida.</li>
                      </ul>
                    </div>
                  </div>
                  <p className="side-note">
                    Cuando cierre el proyecto entrego el informe de hallazgos, la base limpia, la
                    bitácora, el catálogo de reglas y recomendaciones para que no se repitan.
                    Los datos y el nombre del cliente se mantienen anónimos.
                  </p>
                </details>
              </div>
            </article>

            <article className="proj">
              <div className="n">02</div>
              <div>
                <img className="logo-s" src="/Logo.jpg" alt="Sano y Fresco" />
                <h3>Diagnóstico de ingresos de un negocio de alimentos</h3>
                <p className="meta">Power BI · SQL · Python · Proyecto de práctica</p>
                <p className="txt">
                  Analicé las ventas de un negocio de alimentos para entender por qué sus
                  ingresos se desplomaban. El hallazgo fue claro: dependía demasiado de un solo
                  tipo de producto. Propuse una estrategia de diversificación y un motor de
                  recomendaciones para vender productos complementarios.
                </p>
                <div className="kpis">
                  <div>
                    <b>−82 %</b>
                    <span>caída de ingresos anuales</span>
                  </div>
                  <div>
                    <b>93 %</b>
                    <span>concentrado en un departamento</span>
                  </div>
                  <div>
                    <b>19,34 $</b>
                    <span>factura promedio</span>
                  </div>
                  <div>
                    <b>2 M+</b>
                    <span>registros de ventas</span>
                  </div>
                </div>
                <div className="pacts">
                  <a className="btn solid small" href={DASHBOARD} target="_blank" rel="noreferrer">
                    Abrir el tablero
                  </a>
                  <a
                    className="btn line small"
                    href="/Informe_Conclusiones_Requerimientos.pdf"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Leer la documentación
                  </a>
                </div>
              </div>
            </article>

            <article className="proj">
              <div className="n">03</div>
              <div>
                <h3>Migración de unos 50 estudios en Kantar</h3>
                <p className="meta">Dimensions · Survey Reporter · SPSS · Excel</p>
                <p className="txt">
                  Me tocó migrar y homologar cerca de 50 estudios a una nueva estructura.
                  Comparé cada resultado contra la base original con tablas dinámicas y
                  fórmulas hasta que cuadrara. Terminó con menos de 2 % de error, el
                  reconocimiento del cliente y mi promoción.
                </p>
              </div>
            </article>
          </div>
        </section>

        {/* EXPERIENCIA */}
        <section className="sec white" id="experiencia">
          <div className="wrap">
            <p className="label">// experiencia</p>
            <h2>Dónde he trabajado</h2>
            <div className="jobs">
              <div className="job">
                <div className="when">Abr 2025 – hoy</div>
                <div>
                  <h3>Analista de Datos (contratista)</h3>
                  <p className="org">KPISoft SAS</p>
                  <ul>
                    <li>
                      Limpieza, estructuración y validación de bases comerciales de más de 2
                      millones de registros, y modelo de datos en Power BI.
                    </li>
                    <li>
                      Tableros con medidas DAX, segmentadores y drill-through: ventas,
                      ingresos, margen, inventario y desempeño por vendedor, tienda y ciudad.
                    </li>
                    <li>Consultas SQL para extraer y analizar información.</li>
                    <li>
                      Revisión de 316.499 registros de SAP Business One con 60 reglas de
                      calidad, con bitácora de cambios y controles preventivos.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="job">
                <div className="when">Dic 2015 – Mar 2025</div>
                <div>
                  <h3>Ejecutivo de Procesamiento de Datos</h3>
                  <p className="org">Kantar (antes Millward Brown)</p>
                  <ul>
                    <li>
                      Procesé y validé bases de estudios de mercado según los cuestionarios y
                      requerimientos de cada cliente.
                    </li>
                    <li>
                      Cruces y análisis estadístico con Dimensions, Survey Reporter, SPSS y
                      Excel: desviación estándar, Jaccard, Penalty Analysis.
                    </li>
                    <li>
                      Control de calidad contra bases originales y automatización de procesos
                      repetitivos.
                    </li>
                    <li>
                      Migración de ~50 estudios con menos de 2 % de error; reconocimiento del
                      cliente y promoción.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="edu">
              <div>
                <h3>Ingeniería de Software</h3>
                <p>Politécnico Grancolombiano, 2018 a 2023. Cursé 8 semestres.</p>
              </div>
              <div>
                <h3>Tecnólogo en Análisis y Desarrollo de Sistemas de Información</h3>
                <p>SENA, 2012 a 2014.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* CONTACTO */}
      <section className="contact" id="contacto">
        <div className="wrap">
          <p className="label" style={{ color: '#f2c811' }}>
            // contacto
          </p>
          <h2>Hablemos</h2>
          <p>
            Si tienes una vacante de datos o BI, o un proyecto donde los datos necesitan orden,
            cuéntame. Respondo rápido.
          </p>
          <a className="mail" href={`mailto:${EMAIL}`}>
            {EMAIL}
          </a>
          <div className="alt">
            <a href={WHATSAPP} target="_blank" rel="noreferrer">
              WhatsApp
            </a>
            <a href={LINKEDIN} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href="/CV_JesusGonzalez.pdf" target="_blank" rel="noreferrer">
              Hoja de vida en PDF
            </a>
          </div>
        </div>
      </section>

      <footer>
        <div className="wrap">© 2026 David González · Bogotá, Colombia</div>
      </footer>
    </>
  );
}
