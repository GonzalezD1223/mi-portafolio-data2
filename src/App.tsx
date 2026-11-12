const EMAIL = 'david.gp1223@gmail.com';
const LINKEDIN = 'https://www.linkedin.com/in/jesusdavidgonzalezp';
const WHATSAPP = 'https://wa.me/573134772818';
const DASHBOARD =
  'https://app.powerbi.com/reportEmbed?reportId=0142068e-5f40-4430-a4d0-707b087ab8a2&autoAuth=true&ctid=5cd4039d-27ec-4745-8bf4-e4abd89b3c58';

const findings = [
  { label: 'Clientes activos sin correo para factura electrónica', n: 1796 },
  { label: 'Facturas con vencimiento anterior a la emisión', n: 1260 },
  { label: 'Productos con descripción repetida', n: 1112 },
  { label: 'Líneas con cantidad en cero o negativa', n: 466 },
  { label: 'Productos sin unidad de venta', n: 294 },
];

const stepsSap = ['Descargar', 'Detectar', 'Revisar', 'Aprobar', 'Corregir'];

const fmt = (n: number) => n.toLocaleString('es-CO');

export default function App() {
  return (
    <>
      <header className="nav">
        <div className="wrap">
          <a className="brand" href="#inicio">
            <span className="mk">DG</span> David González
          </a>
          <nav aria-label="Principal">
            <a href="#inicio">Inicio</a>
            <a href="#sobre-mi">Sobre mí</a>
            <a href="#proyectos">Proyectos</a>
            <a href="#experiencia">Experiencia</a>
            <a href="#contacto">Contacto</a>
          </nav>
          <div className="right">
            <a className="btn dark" href="/CV_JesusGonzalez.pdf" target="_blank" rel="noreferrer">
              Hoja de vida
            </a>
          </div>
        </div>
      </header>

      <main id="inicio">
        {/* HERO */}
        <section className="hero">
          <div className="wrap">
            <div className="panel">
              <div className="hero-copy">
                <p className="status">
                  <i /> Disponible · Bogotá, híbrido o remoto
                </p>
                <h1>
                  Soy David,
                  <span>analista de datos.</span>
                </h1>
                <p className="lead">
                  Llevo más de diez años encargándome de que los números de otros estén bien:
                  primero en investigación de mercados y hoy limpiando bases enormes y armando
                  tableros en Power BI.
                </p>
                <div className="acts">
                  <a className="btn dark" href="#proyectos">
                    Ver proyectos
                  </a>
                  <a className="btn light" href="#contacto">
                    Escríbeme
                  </a>
                </div>
                <div className="kpi-row">
                  <div>
                    <b>10+</b>
                    <span>años con datos</span>
                  </div>
                  <div>
                    <b>2 M+</b>
                    <span>registros trabajados</span>
                  </div>
                  <div>
                    <b>~50</b>
                    <span>estudios migrados</span>
                  </div>
                </div>
              </div>
              <div className="hero-photo">
                <img src="/buso_Rojo.jpg" alt="David González" />
                <div className="glass">
                  <div>
                    <small>Abierto a propuestas</small>
                    <b>Roles de datos y BI</b>
                    <p>También proyectos freelance de calidad de datos y tableros.</p>
                  </div>
                  <a href="#contacto" aria-label="Ir a contacto">
                    ↗
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="strip" aria-label="Herramientas">
          <div className="wrap">
            <p>Herramientas con las que trabajo a diario</p>
            <ul>
              <li>Power BI</li>
              <li>SQL</li>
              <li>DAX</li>
              <li>Excel</li>
              <li>Power Query</li>
              <li>SPSS</li>
              <li>SAP Business One</li>
              <li>Python</li>
            </ul>
          </div>
        </section>

        {/* SOBRE MÍ */}
        <section className="sec" id="sobre-mi">
          <div className="wrap">
            <div className="sec-head">
              <div>
                <p className="eyebrow">Sobre mí</p>
                <h2>Me gusta encontrar el error antes de que lo encuentre el cliente.</h2>
              </div>
            </div>
            <div className="about">
              <div className="card">
                <p>
                  Empecé en Kantar procesando estudios de mercado y me quedé diez años. Ahí
                  aprendí que un dato no sirve si nadie confía en él, y que la mayoría de los
                  errores se esconden en los detalles que todos dan por revisados.
                </p>
                <p>
                  Desde 2025 trabajo en <strong>KPISoft</strong> con empresas reales: bases de
                  más de dos millones de registros, modelos de datos, tableros con DAX y
                  revisiones de calidad sobre SAP Business One. Lo que más disfruto es dejar
                  todo documentado para que los errores no vuelvan a aparecer.
                </p>
                <p>
                  Busco un equipo de datos o BI donde pueda seguir aprendiendo y aportar desde
                  el primer mes.
                </p>
              </div>
              <aside className="card facts">
                <h3>De un vistazo</h3>
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

            <div className="tools">
              <div className="card">
                <h3>Tableros y modelos</h3>
                <p>
                  Power BI, DAX, Power Query, modelo estrella y publicación en Power BI Service
                  con segmentadores y drill-through.
                </p>
              </div>
              <div className="card">
                <h3>Consultas y limpieza</h3>
                <p>
                  SQL (JOIN, GROUP BY, CASE, subconsultas), procesos ETL y reglas de calidad
                  documentadas.
                </p>
              </div>
              <div className="card">
                <h3>Análisis</h3>
                <p>
                  Excel avanzado (tablas dinámicas, BUSCARX), SPSS y bases de Python para
                  automatizar tareas.
                </p>
              </div>
              <div className="card">
                <h3>Investigación de mercados</h3>
                <p>
                  Dimensions y Survey Reporter, cruces estadísticos, Jaccard y Penalty Analysis.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PROYECTOS */}
        <section className="sec" id="proyectos">
          <div className="wrap">
            <div className="sec-head">
              <div>
                <p className="eyebrow">Proyectos</p>
                <h2>Tres trabajos que explican cómo pienso</h2>
              </div>
              <p>Los proyectos de clientes están anonimizados: sin nombres ni datos reales.</p>
            </div>

            <div className="work">
              {/* 1 SAP */}
              <article className="case">
                <div className="info">
                  <span className="badge">En curso</span>
                  <h3>Calidad de datos en SAP para una empresa distribuidora</h3>
                  <p className="tech">SAP Business One · SQL · Excel</p>
                  <p className="txt">
                    La empresa sospechaba que errores en sus datos afectaban la facturación y la
                    relación con clientes. Armé un proceso con reglas de calidad que detecta los
                    problemas, los clasifica según qué tan seguros son y propone correcciones,
                    sin tocar nunca facturas ni notas crédito ya contabilizadas.
                  </p>
                  <div className="mini">
                    <div>
                      <b>316.499</b>
                      <span>registros</span>
                    </div>
                    <div>
                      <b>60</b>
                      <span>reglas</span>
                    </div>
                    <div>
                      <b>22</b>
                      <span>errores confirmados</span>
                    </div>
                    <div>
                      <b>6.251</b>
                      <span>casos</span>
                    </div>
                  </div>
                  <details className="d">
                    <summary>Cómo lo hice</summary>
                    <p>
                      Cada regla se prueba sola. Las correcciones seguras se hacen automáticas,
                      las dudosas se las propongo al cliente y todo cambio queda en una
                      bitácora. Al cierre entrego informe de hallazgos, base limpia, catálogo de
                      reglas y recomendaciones para que no se repitan.
                    </p>
                  </details>
                </div>
                <div className="vis">
                  <h4>Hallazgos confirmados más frecuentes</h4>
                  {findings.map((f) => (
                    <div className="bar" key={f.label}>
                      <span>{f.label}</span>
                      <span className="v">{fmt(f.n)}</span>
                      <div className="t">
                        <i style={{ width: `${(f.n / findings[0].n) * 100}%` }} />
                      </div>
                    </div>
                  ))}
                  <h4 style={{ marginTop: 8 }}>Flujo de trabajo</h4>
                  <div className="flow">
                    {stepsSap.map((s, i) => (
                      <span key={s} className={i < 2 ? 'on' : ''}>
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </article>

              {/* 2 Sano y Fresco */}
              <article className="case">
                <div className="info">
                  <span className="badge plain">Proyecto de práctica</span>
                  <img className="logo-s" src="/Logo.jpg" alt="Sano y Fresco" />
                  <h3>Diagnóstico de ingresos de un negocio de alimentos</h3>
                  <p className="tech">Power BI · SQL · Python</p>
                  <p className="txt">
                    Analicé las ventas para entender por qué los ingresos se desplomaban. El
                    hallazgo fue claro: el negocio dependía demasiado de un solo tipo de
                    producto. Propuse una estrategia de diversificación y un motor de
                    recomendaciones para vender productos complementarios.
                  </p>
                  <div className="acts2">
                    <a className="btn dark" href={DASHBOARD} target="_blank" rel="noreferrer">
                      Abrir el tablero
                    </a>
                    <a
                      className="btn light"
                      href="/Informe_Conclusiones_Requerimientos.pdf"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Ver documentación
                    </a>
                  </div>
                </div>
                <div className="vis">
                  <div className="big">
                    −82 %
                    <small>caída de los ingresos anuales</small>
                  </div>
                  <h4>Concentración de ventas en un solo departamento</h4>
                  <div className="split">
                    <div className="a" style={{ width: '93%' }}>
                      93 %
                    </div>
                    <div className="b" />
                  </div>
                  <h4>Factura promedio: 19,34 $ · Más de 2 M de registros de ventas</h4>
                </div>
              </article>

              {/* 3 Kantar */}
              <article className="case">
                <div className="info">
                  <span className="badge plain">Completado</span>
                  <h3>Migración de unos 50 estudios en Kantar</h3>
                  <p className="tech">Dimensions · Survey Reporter · SPSS · Excel</p>
                  <p className="txt">
                    Me tocó migrar y homologar cerca de 50 estudios a una nueva estructura.
                    Comparé cada resultado contra la base original con tablas dinámicas y
                    fórmulas hasta que cuadrara. Terminó con menos de 2 % de error, el
                    reconocimiento del cliente y mi promoción.
                  </p>
                </div>
                <div className="vis">
                  <div className="big">
                    ~50
                    <small>estudios migrados a la nueva estructura</small>
                  </div>
                  <div className="big">
                    &lt; 2 %
                    <small>de error frente a las bases originales</small>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* EXPERIENCIA */}
        <section className="sec" id="experiencia">
          <div className="wrap">
            <div className="sec-head">
              <div>
                <p className="eyebrow">Experiencia</p>
                <h2>Dónde he trabajado</h2>
              </div>
            </div>
            <div>
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
                      Tableros con medidas DAX, segmentadores y drill-through: ventas, ingresos,
                      margen, inventario y desempeño por vendedor, tienda y ciudad.
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
              <div className="card">
                <h3>Ingeniería de Software</h3>
                <p>Politécnico Grancolombiano, 2018 a 2023. Cursé 8 semestres.</p>
              </div>
              <div className="card">
                <h3>Tecnólogo en Análisis y Desarrollo de Sistemas de Información</h3>
                <p>SENA, 2012 a 2014.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACTO */}
        <section className="cta" id="contacto">
          <div className="wrap">
            <div className="panel2">
              <h2>¿Tienes datos que necesitan orden? Hablemos.</h2>
              <p>
                Si tienes una vacante de datos o BI, o un proyecto donde la información necesita
                orden, cuéntame.
              </p>
              <div className="acts3">
                <a className="btn w" href={`mailto:${EMAIL}`}>
                  {EMAIL}
                </a>
                <a className="btn o" href={WHATSAPP} target="_blank" rel="noreferrer">
                  WhatsApp
                </a>
                <a className="btn o" href={LINKEDIN} target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="wrap">
        <span>© 2026 David González</span>
        <span>Bogotá, Colombia</span>
      </footer>
    </>
  );
}
