const EMAIL = 'david.gp1223@gmail.com';
const LINKEDIN = 'https://www.linkedin.com/in/jesusdavidgonzalezp';
const WHATSAPP = 'https://wa.me/573134772818';
const DASHBOARD =
  'https://app.powerbi.com/reportEmbed?reportId=0142068e-5f40-4430-a4d0-707b087ab8a2&autoAuth=true&ctid=5cd4039d-27ec-4745-8bf4-e4abd89b3c58';

const skills: { title: string; items: string[]; strong?: string[] }[] = [
  {
    title: 'BI y datos',
    items: ['Modelado de datos', 'Power Query', 'Power BI Service', 'ETL'],
    strong: ['Power BI', 'SQL', 'DAX'],
  },
  {
    title: 'Análisis',
    items: ['Tablas dinámicas', 'XLOOKUP / BUSCARX', 'SPSS', 'Python (base)'],
    strong: ['Excel avanzado'],
  },
  {
    title: 'Investigación de mercados',
    items: ['Survey Reporter', 'Cruces estadísticos', 'Jaccard', 'Penalty Analysis'],
    strong: ['Dimensions'],
  },
  {
    title: 'Calidad de datos',
    items: [
      'Validación y homologación',
      'Reglas de calidad',
      'Bitácora de cambios',
      'Controles preventivos',
      'Documentación',
    ],
  },
];

const sapFlow = ['1 Descargar', '2 Detectar', '3 Revisar', '4 Aprobar', '5 Corregir'];

export default function App() {
  return (
    <>
      <header className="nav">
        <div className="container nav-inner">
          <a className="brand" href="#inicio" aria-label="Inicio">
            DG
          </a>
          <nav className="nav-links" aria-label="Principal">
            <a href="#sobre-mi">Sobre mí</a>
            <a href="#competencias">Competencias</a>
            <a href="#proyectos">Proyectos</a>
            <a href="#experiencia">Experiencia</a>
            <a className="nav-cta" href="#contacto">
              Contacto
            </a>
          </nav>
        </div>
      </header>

      <main id="inicio">
        {/* ---------- HERO ---------- */}
        <section className="hero">
          <div className="container hero-grid">
            <div>
              <span className="badge">
                <span className="dot" /> Abierto a nuevas oportunidades
              </span>
              <h1>
                Convierto datos en <em>decisiones</em> confiables.
              </h1>
              <p className="lead">
                Analista de Datos y BI con más de 10 años de experiencia: una década en
                investigación de mercados en Kantar y hoy proyectos de calidad de datos y
                tableros con SQL, Power BI y DAX para empresas en Colombia.
              </p>
              <div className="hero-actions">
                <a className="btn btn-primary" href="/CV_JesusGonzalez.pdf" target="_blank" rel="noreferrer">
                  Descargar hoja de vida
                </a>
                <a className="btn btn-ghost" href="#proyectos">
                  Ver proyectos
                </a>
                <a className="btn btn-ghost" href={LINKEDIN} target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
              </div>
              <div className="stats">
                <div className="stat">
                  <strong>10+</strong>
                  <span>años con datos</span>
                </div>
                <div className="stat">
                  <strong>2 M+</strong>
                  <span>registros limpiados y modelados</span>
                </div>
                <div className="stat">
                  <strong>~50</strong>
                  <span>estudios migrados con &lt;2 % de error</span>
                </div>
                <div className="stat">
                  <strong>60</strong>
                  <span>reglas de calidad en SAP</span>
                </div>
              </div>
            </div>
            <div className="portrait-wrap">
              <img
                className="portrait"
                src="/buso_Rojo.jpg"
                alt="Jesús David González, Analista de Datos"
              />
              <div className="portrait-tag">
                <b>Bogotá, Colombia</b>
                Presencial, híbrido o remoto
              </div>
            </div>
          </div>
        </section>

        {/* ---------- SOBRE MÍ ---------- */}
        <section className="block" id="sobre-mi">
          <div className="container">
            <p className="eyebrow">Sobre mí</p>
            <h2 className="section-title">Precisión, método y datos que se pueden defender.</h2>
            <div className="about-grid">
              <div>
                <p>
                  Trabajé diez años en Kantar procesando y validando bases de estudios de
                  mercado con Dimensions, Survey Reporter, SPSS y Excel. Ahí aprendí lo que
                  más valoro de un dato: que alguien pueda confiar en él.
                </p>
                <p>
                  Hoy, en KPISoft, limpio y estructuro bases de más de dos millones de
                  registros, construyo modelos y tableros en Power BI con medidas DAX y
                  reviso la calidad de datos de SAP Business One con reglas documentadas,
                  cambios trazables y controles para que los errores no regresen.
                </p>
                <p>
                  Busco un rol de Analista de Datos o BI donde pueda seguir combinando
                  rigor técnico con explicaciones claras para quienes toman decisiones.
                  También acepto proyectos freelance.
                </p>
              </div>
              <aside className="facts">
                <h3>De un vistazo</h3>
                <ul>
                  <li>
                    <b>Rol</b> Analista de Datos / BI
                  </li>
                  <li>
                    <b>Ubicación</b> Soacha · Bogotá, Mosquera, Funza o remoto
                  </li>
                  <li>
                    <b>Idiomas</b> Español nativo · Inglés básico
                  </li>
                  <li>
                    <b>Disponible</b> Tiempo completo, contrato o freelance
                  </li>
                </ul>
              </aside>
            </div>
          </div>
        </section>

        {/* ---------- COMPETENCIAS ---------- */}
        <section className="block alt" id="competencias">
          <div className="container">
            <p className="eyebrow">Competencias</p>
            <h2 className="section-title">Herramientas con las que trabajo a diario</h2>
            <p className="section-intro">
              En oscuro, las que domino con más profundidad y uso en proyectos reales.
            </p>
            <div className="skills-grid">
              {skills.map((group) => (
                <div className="skill-card" key={group.title}>
                  <h3>{group.title}</h3>
                  <div className="chips">
                    {group.strong?.map((s) => (
                      <span className="chip strong" key={s}>
                        {s}
                      </span>
                    ))}
                    {group.items.map((s) => (
                      <span className="chip" key={s}>
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- PROYECTOS ---------- */}
        <section className="block" id="proyectos">
          <div className="container">
            <p className="eyebrow">Portafolio</p>
            <h2 className="section-title">Casos de trabajo</h2>
            <p className="section-intro">
              Cada caso sigue la misma estructura: problema, datos, método, resultado y
              herramientas. Los proyectos de clientes están anonimizados.
            </p>

            <div className="projects">
              {/* CASO 1: SAP */}
              <article className="project">
                <div className="project-head">
                  <span className="tag">Calidad de datos · SAP Business One</span>
                  <span className="tag live">En desarrollo</span>
                </div>
                <div className="project-body">
                  <h3>Revisión de calidad de datos para una empresa distribuidora</h3>
                  <p>
                    La empresa sospechaba que errores en sus datos afectaban facturación,
                    inventario y relación con clientes: correos faltantes para factura
                    electrónica, duplicados y facturas con fechas imposibles. Diseñé un
                    proceso con reglas de calidad que detecta, clasifica y propone
                    correcciones sin tocar documentos contabilizados.
                  </p>
                  <div className="metrics">
                    <div className="metric">
                      <strong>316.499</strong>
                      <span>registros en 4 tablas</span>
                    </div>
                    <div className="metric">
                      <strong>60</strong>
                      <span>reglas de calidad definidas</span>
                    </div>
                    <div className="metric">
                      <strong>22</strong>
                      <span>tipos de error confirmados</span>
                    </div>
                    <div className="metric">
                      <strong>6.251</strong>
                      <span>casos confirmados</span>
                    </div>
                  </div>
                  <details className="more">
                    <summary>Ver método y hallazgos</summary>
                    <div className="detail-grid">
                      <div>
                        <h4>Cómo lo hice</h4>
                        <div className="flow" aria-label="Flujo de trabajo">
                          {sapFlow.map((step, i) => (
                            <span key={step} className={i < 2 ? 'on' : ''}>
                              {step}
                            </span>
                          ))}
                        </div>
                        <p>
                          Cada regla se prueba por separado y se clasifica según su
                          confianza: confirmadas, en prueba o solo informativas. Las
                          correcciones seguras se automatizan, las dudosas se proponen al
                          cliente y las facturas y notas crédito contabilizadas nunca se
                          modifican. Todo cambio queda en una bitácora.
                        </p>
                      </div>
                      <div>
                        <h4>Ejemplos de hallazgos</h4>
                        <ul>
                          <li>1.796 clientes activos sin correo para factura electrónica.</li>
                          <li>1.260 facturas con vencimiento anterior a su emisión.</li>
                          <li>1.112 productos con descripción repetida.</li>
                          <li>
                            Un hallazgo grande en prueba: facturas cuyo total no coincide con
                            la suma de sus líneas; se valida con contabilidad antes de
                            actuar.
                          </li>
                        </ul>
                      </div>
                    </div>
                    <p className="note">
                      Al cierre entrego informe de hallazgos, base limpia, bitácora de
                      cambios, catálogo de reglas y recomendaciones. Herramientas: SAP
                      Business One, SQL, Excel, Postman y documentación de reglas.
                    </p>
                  </details>
                </div>
              </article>

              {/* CASO 2: Sano y Fresco */}
              <article className="project">
                <div className="project-head">
                  <span className="tag">Power BI · SQL · Python</span>
                  <span className="tag done">Proyecto de práctica</span>
                </div>
                <div className="project-body">
                  <img className="logo-strip" src="/Logo.jpg" alt="Logo Sano y Fresco" />
                  <h3 style={{ marginTop: 12 }}>
                    Estrategia comercial y diagnóstico de ingresos
                  </h3>
                  <p>
                    Diagnóstico de salud financiera de un negocio de alimentos con análisis
                    descriptivo, predictivo y prescriptivo, y un motor de recomendaciones
                    para estrategias de venta cruzada.
                  </p>
                  <div className="metrics">
                    <div className="metric">
                      <strong>−82 %</strong>
                      <span>caída de ingresos anuales detectada</span>
                    </div>
                    <div className="metric">
                      <strong>93 %</strong>
                      <span>concentración en un solo departamento</span>
                    </div>
                    <div className="metric">
                      <strong>19,34 $</strong>
                      <span>factura promedio</span>
                    </div>
                    <div className="metric">
                      <strong>+2 M</strong>
                      <span>registros de ventas procesados</span>
                    </div>
                  </div>
                  <details className="more">
                    <summary>Ver detalles</summary>
                    <div className="detail-grid">
                      <div>
                        <h4>Qué encontré</h4>
                        <p>
                          Una vulnerabilidad crítica: alta dependencia de productos
                          orgánicos y un ticket promedio bajo. Diseñé una estrategia de
                          diversificación para mitigar el riesgo de concentración.
                        </p>
                      </div>
                      <div>
                        <h4>Stack</h4>
                        <ul>
                          <li>SQL y ETL para procesar +2 M de registros.</li>
                          <li>Power BI: tablero de diagnóstico de ingresos.</li>
                          <li>Python: Market Basket Analysis para upselling.</li>
                        </ul>
                      </div>
                    </div>
                  </details>
                  <div className="project-actions">
                    <a className="btn btn-primary sm" href={DASHBOARD} target="_blank" rel="noreferrer">
                      Ver tablero completo
                    </a>
                    <a
                      className="btn btn-ghost sm"
                      href="/Informe_Conclusiones_Requerimientos.pdf"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Documentación PDF
                    </a>
                  </div>
                </div>
              </article>

              {/* CASO 3: Kantar */}
              <article className="project">
                <div className="project-head">
                  <span className="tag">Investigación de mercados · Kantar</span>
                  <span className="tag done">Completado</span>
                </div>
                <div className="project-body">
                  <h3>Migración y homologación de ~50 estudios</h3>
                  <p>
                    Migré y homologué cerca de 50 estudios de investigación de mercados a una
                    nueva estructura, con controles de calidad contra las bases originales
                    mediante tablas dinámicas y fórmulas. El resultado fue una tasa de error
                    inferior al 2 %, con reconocimiento del cliente y promoción.
                  </p>
                  <div className="metrics">
                    <div className="metric">
                      <strong>~50</strong>
                      <span>estudios migrados</span>
                    </div>
                    <div className="metric">
                      <strong>&lt; 2 %</strong>
                      <span>de error</span>
                    </div>
                    <div className="metric">
                      <strong>10 años</strong>
                      <span>en Kantar</span>
                    </div>
                  </div>
                  <p className="note">
                    Herramientas: Dimensions, Survey Reporter (scripting y lógica
                    condicional), SPSS y Excel.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* ---------- EXPERIENCIA ---------- */}
        <section className="block alt" id="experiencia">
          <div className="container">
            <p className="eyebrow">Experiencia y formación</p>
            <h2 className="section-title">Trayectoria</h2>
            <p className="section-intro">
              Más de una década procesando, validando y analizando información.
            </p>

            <div className="timeline">
              <div className="job">
                <div className="job-top">
                  <div>
                    <h3>Analista de Datos (contratista)</h3>
                    <span className="org">KPISoft SAS</span>
                  </div>
                  <span className="when">Abr 2025 – Actualidad</span>
                </div>
                <ul>
                  <li>
                    Limpieza, estructuración y validación de bases comerciales (+2 millones de
                    registros) y modelo de datos en Power BI.
                  </li>
                  <li>
                    Tableros con medidas DAX, segmentadores y drill-through en Power BI
                    Service: ventas, ingresos, margen, inventario y desempeño por vendedor,
                    tienda y ciudad.
                  </li>
                  <li>
                    Consultas SQL (JOIN, GROUP BY, CASE, subconsultas) para extracción y
                    análisis.
                  </li>
                  <li>
                    Revisión de 316.499 registros de SAP Business One con 60 reglas de
                    calidad; 22 tipos de error confirmados y correcciones con bitácora y
                    controles preventivos.
                  </li>
                </ul>
              </div>

              <div className="job">
                <div className="job-top">
                  <div>
                    <h3>Ejecutivo de Procesamiento de Datos</h3>
                    <span className="org">Kantar (antes Millward Brown)</span>
                  </div>
                  <span className="when">Dic 2015 – Mar 2025</span>
                </div>
                <ul>
                  <li>
                    Procesé y validé bases de investigación de mercados según cuestionarios
                    y requerimientos del cliente.
                  </li>
                  <li>
                    Cruces y análisis estadístico: desviación estándar, Jaccard y Penalty
                    Analysis, con Dimensions, Survey Reporter, SPSS y Excel.
                  </li>
                  <li>
                    Control de calidad contra bases originales; automatización de procesos
                    recurrentes y detección de anomalías.
                  </li>
                  <li>
                    Migré y homologué ~50 estudios con menos del 2 % de error; recibí
                    reconocimiento del cliente y promoción.
                  </li>
                </ul>
              </div>
            </div>

            <div className="edu-grid">
              <div className="edu">
                <h3>Ingeniería de Software</h3>
                <p>Politécnico Grancolombiano · 2018 – 2023</p>
                <p>8 semestres cursados (programa suspendido).</p>
              </div>
              <div className="edu">
                <h3>Tecnólogo en Análisis y Desarrollo de Sistemas de Información</h3>
                <p>SENA · 2012 – 2014</p>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- CONTACTO ---------- */}
        <section className="block" id="contacto">
          <div className="container">
            <div className="contact">
              <h2>¿Trabajamos juntos?</h2>
              <p>
                Estoy disponible para roles de Analista de Datos / BI en Bogotá o remoto, y
                para proyectos freelance de calidad de datos y tableros.
              </p>
              <div className="contact-actions">
                <a className="btn btn-primary" href={`mailto:${EMAIL}`}>
                  Escribir por correo
                </a>
                <a className="btn btn-ghost" href={WHATSAPP} target="_blank" rel="noreferrer">
                  WhatsApp
                </a>
                <a className="btn btn-ghost" href={LINKEDIN} target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>© 2026 Jesús David González · Analista de Datos y BI</footer>
    </>
  );
}
