import { useState } from 'react';

// ELIMINAMOS EL IMPORT DE FOTO PORQUE USARÁS LA CARPETA PUBLIC
// ELIMINAMOS EL CÓDIGO QUE ESTABA SUELTO ARRIBA

export default function App() {
  const [openProject1, setOpenProject1] = useState(false);
  const [hoveredTool, setHoveredTool] = useState(null);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div
      style={{
        fontFamily: 'Arial, sans-serif',
        background: '#ffffff',
        color: '#111',
        margin: 0,
        padding: 0,
        overflowX: 'hidden',
      }}
    >
      {/* BANNER SUPERIOR */}
      <div
        style={{
          width: '100%',
          minHeight: '320px',
          backgroundImage: "url('/Inicio.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative',
          color: 'black',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(0,0,0,0.6)',
          }}
        />

        {/* HEADER */}
        <div
          style={{
            position: 'relative',
            zIndex: 2,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '20px 5%',
          }}
        >
          <h2 style={{ margin: 0, fontSize: '1.2rem' }}>DG</h2>
          <div
            style={{
              display: 'flex',
              gap: '20px',
              cursor: 'pointer',
              fontWeight: '500',
              fontSize: '14px',
            }}
          >
            <span onClick={scrollToProjects}>Proyectos</span>
            <span onClick={scrollToContact}>Contacto</span>
          </div>
        </div>

        {/* TEXTO CENTRADO */}
        <div
          style={{
            position: 'relative',
            zIndex: 2,
            flexGrow: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: '40px 20px',
          }}
        >
          <h1
            style={{
              fontSize: 'clamp(24px, 5vw, 36px)',
              maxWidth: '800px',
              margin: 0,
              lineHeight: '1.3',
            }}
          >
            David Gonzalez
            <br />
            <span style={{ fontWeight: 'normal', fontSize: '0.8em' }}>
              Analista de Datos enfocado en transformar datos en decisiones
            </span>
          </h1>
        </div>
      </div>

      {/* FOTO + PRESENTACION */}
      <section
        style={{ maxWidth: '1000px', margin: 'auto', padding: '60px 20px' }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '40px',
          }}
        >
          <div style={{ textAlign: 'center' }}>
            <img
              src="/buso_Rojo.jpg"
              alt="David Gonzalez"
              style={{
                width: '240px', // Ancho reducido
                height: '240px', // Altura fija igual al ancho para que sea un cuadrado
                objectFit: 'cover', // ESTO ES CLAVE: Recorta la foto para que encaje sin estirarse
                objectPosition: 'top', // Enfoca la parte superior (tu cara) y recorta lo de abajo
                borderRadius: '50%', // Opcional: cámbialo a '50%' si la quieres circular, o déjalo en '10px' si la quieres cuadrada
                boxShadow: '0 10px 25px rgba(0,0,0,0.15)',
                border: '3px solid #8a8160', // Un pequeño borde para que resalte
              }}
            />
            <div style={{ marginTop: '15px' }}>
              <a
                href="https://www.linkedin.com/in/jesusdavidgonzalezp"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
                  width="40"
                  alt="LinkedIn"
                />
              </a>
            </div>
          </div>

          <div style={{ maxWidth: '500px', textAlign: 'center' }}>
            <h2 style={{ margin: 0, fontSize: '24px', color: '#444' }}>
              Analista de Datos
            </h2>
            <p
              style={{
                marginTop: '15px',
                color: '#555',
                lineHeight: '1.6',
                textAlign: 'justify',
              }}
            >
              Analista de datos en formación con experiencia práctica en Excel
              avanzado (Power Query y Power Pivot), SQL y Power BI (ETL y DAX).
              Me especializo en limpiar, transformar y visualizar datos para
              convertirlos en información clara y útil para la toma de
              decisiones. Actualmente estoy fortaleciendo mis conocimientos en
              Python y buscando mi primera oportunidad como analista de datos.
            </p>

            <div
              style={{
                marginTop: '25px',
                display: 'flex',
                gap: '15px',
                justifyContent: 'center',
                flexWrap: 'wrap',
              }}
            >
              <button onClick={scrollToProjects} style={buttonStyle}>
                Ver proyectos
              </button>
              {/* Asegúrate de tener este archivo en la carpeta public */}
              <a href="/CV_JesusGonzalez.pdf" target="_blank">
                <button style={buttonStyle}>Descargar CV</button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* HERRAMIENTAS */}
      <section
        style={{
          background: '#8a8160',
          padding: '20px',
          textAlign: 'center',
          color: 'white',
        }}
      >
        <h2 style={{ margin: 0, fontSize: '18px', letterSpacing: '1px' }}>
          PRINCIPALES HERRAMIENTAS
        </h2>
      </section>

      <section style={{ padding: '50px 20px', textAlign: 'center' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '40px',
          }}
        >
          {['Excel', 'Power BI', 'SQL', 'Python'].map((tool) => (
            <div
              key={tool}
              onMouseEnter={() => setHoveredTool(tool as any)}
              onMouseLeave={() => setHoveredTool(null)}
              style={{
                width: '100px',
                transition: 'transform 0.3s ease',
                transform: hoveredTool === tool ? 'scale(1.15)' : 'scale(1)',
                cursor: 'default',
              }}
            >
              <img
                src={getIconUrl(tool)}
                alt={tool}
                style={{
                  width: '75px',
                  height: '75px',
                  marginBottom: '10px',
                  filter:
                    hoveredTool === tool
                      ? 'drop-shadow(0px 5px 15px rgba(0,0,0,0.2))'
                      : 'none',
                }}
              />
              <p
                style={{
                  fontSize: '14px',
                  margin: 0,
                  fontWeight: hoveredTool === tool ? 'bold' : 'normal',
                  color: hoveredTool === tool ? '#8a8160' : '#333',
                }}
              >
                {tool}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* PROYECTO DESTACADO */}
      <section
        id="projects"
        style={{
          background: '#8a8160',
          padding: '20px',
          textAlign: 'center',
          color: 'white',
        }}
      >
        <h2 style={{ margin: 0, fontSize: '18px' }}>PROYECTO DESTACADO</h2>
      </section>

      <div style={{ padding: '60px 20px', maxWidth: '800px', margin: 'auto' }}>
        {/* TARJETA PRINCIPAL (IMAGEN Y TITULO) */}
        <div
          onClick={() => setOpenProject1(!openProject1)}
          style={{
            borderRadius: '15px',
            overflow: 'hidden',
            boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
            background: 'white',
            cursor: 'pointer',
            transition: 'transform 0.3s',
            display: 'flex',
            flexDirection: 'column', // CAMBIO: Diseño en columna para centrar logo arriba
            alignItems: 'center', // Centrado horizontal de los elementos
            paddingBottom: '25px', // Espacio abajo
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.transform = 'translateY(-5px)')
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.transform = 'translateY(0)')
          }
        >
          {/* LOGO CENTRADO ARRIBA */}
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS293Hek_6UVYIo_oLWacYkQeMF0Lq2y0P58g&amp;s"
            style={{
              width: '100%',
              maxWidth: '400px', // Ajusta el tamaño máximo del logo
              height: '200px',
              objectFit: 'contain', // Mantiene la proporción del logo sin recortar
              marginTop: '20px',
            }}
            alt="Logo Fresco & Sano"
          />

          {/* TEXTO ABAJO DEL LOGO */}
          <div
            style={{
              padding: '20px 25px 0 25px',
              textAlign: 'center',
              width: '100%',
            }}
          >
            <h3
              style={{ margin: '0 0 10px 0', fontSize: '20px', color: '#333' }}
            >
              Análisis de Estrategia Comercial y Diagnóstico de Ingresos
            </h3>
            <p
              style={{
                color: '#666',
                fontSize: '16px',
                lineHeight: '1.5',
                margin: 0,
                alignItems: 'center',
              }}
            >
              <strong>Objetivo:</strong> Optimización de ingresos y diagnóstico
              de salud financiera mediante análisis predictivo y prescriptivo.
            </p>
            <p
              style={{
                color: '#8a8160',
                fontWeight: 'bold',
                marginTop: '15px',
              }}
            >
              {openProject1 ? 'Ver menos ↑' : 'Ver detalles ↓'}
            </p>
          </div>
        </div>

        {/* DETALLES DESPLEGABLES (RECUADRO CON BORDES COMPLETOS) */}
        {openProject1 && (
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              padding: '40px',
              background: '#ffffff',
              border: '1px solid #e0e0e0',
              borderTop: '4px solid #8a8160',
              borderRadius: '0 0 15px 15px',
              marginTop: '-15px', // Conexión visual con la tarjeta superior
              textAlign: 'left',
              boxShadow: '0 20px 40px rgba(0,0,0,0.05)',
            }}
          >
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px' }}>
              {/* COLUMNA IZQUIERDA: TEXTO */}
              <div style={{ flex: '2', minWidth: '300px' }}>
                <h4
                  style={{
                    margin: '0 0 15px 0',
                    color: '#8a8160',
                    fontSize: '20px',
                    letterSpacing: '0.5px',
                  }}
                >
                  RESUMEN DEL PROYECTO
                </h4>
                <p
                  style={{
                    color: '#444',
                    fontSize: '16px',
                    lineHeight: '1.7',
                    margin: '0 0 25px 0',
                  }}
                >
                  Identifiqué una vulnerabilidad crítica: una{' '}
                  <strong>caída del 82% en ingresos anuales</strong> provocada
                  por la alta dependencia de productos orgánicos y un ticket
                  promedio de solo <strong>19,34 $</strong>. Diseñé una
                  estrategia de diversificación y un motor de recomendaciones
                  para mitigar el riesgo del 93% de concentración en un solo
                  departamento.
                </p>

                <h4
                  style={{
                    margin: '0 0 15px 0',
                    color: '#8a8160',
                    fontSize: '18px',
                  }}
                >
                  STACK TÉCNICO & IMPACTO
                </h4>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '15px',
                  }}
                >
                  <div>
                    <span
                      style={{
                        display: 'block',
                        fontWeight: 'bold',
                        color: '#333',
                      }}
                    >
                      📊 SQL & ETL
                    </span>
                    <span style={{ fontSize: '14px', color: '#666' }}>
                      Procesamiento de +2M de registros de ventas.
                    </span>
                  </div>
                  <div>
                    <span
                      style={{
                        display: 'block',
                        fontWeight: 'bold',
                        color: '#333',
                      }}
                    >
                      📈 Power BI
                    </span>
                    <span style={{ fontSize: '14px', color: '#666' }}>
                      Dashboard de diagnóstico de ingresos.
                    </span>
                  </div>
                  <div>
                    <span
                      style={{
                        display: 'block',
                        fontWeight: 'bold',
                        color: '#333',
                      }}
                    >
                      🐍 Python
                    </span>
                    <span style={{ fontSize: '14px', color: '#666' }}>
                      Algoritmo de recomendación mediante Market Basket Analysis
                      para estrategias de Upselling.
                    </span>
                  </div>
                </div>
              </div>

              {/* COLUMNA DERECHA: ACCIONES */}
              <div
                style={{
                  flex: '1',
                  minWidth: '250px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '15px',
                  justifyContent: 'center',
                  background: '#f9f9f9',
                  padding: '25px',
                  borderRadius: '12px',
                }}
              >
                <p
                  style={{
                    margin: 0,
                    fontSize: '13px',
                    color: '#888',
                    textAlign: 'center',
                    fontWeight: 'bold',
                  }}
                >
                  RECURSOS DEL PROYECTO
                </p>
                <a
                  href="https://app.powerbi.com/reportEmbed?reportId=0142068e-5f40-4430-a4d0-707b087ab8a2&autoAuth=true&ctid=5cd4039d-27ec-4745-8bf4-e4abd89b3c58"
                  target="_blank"
                  rel="noreferrer"
                  style={{ textDecoration: 'none' }}
                >
                  <button
                    style={{
                      ...buttonStyle,
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '10px',
                    }}
                  >
                    <span>📊</span> Ver Dashboard Completo
                  </button>
                </a>
                <a
                  href="/Informes_Concl_Reque.pdf"
                  target="_blank"
                  rel="noreferrer"
                  style={{ textDecoration: 'none' }}
                >
                  <button
                    style={{
                      ...buttonStyle,
                      width: '100%',
                      background: '#444',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '10px',
                    }}
                  >
                    <span>📄</span> Ver Documentación PDF
                  </button>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* CONTACTO */}
      <section
        id="contact"
        style={{
          background: '#f5f5f5',
          padding: '60px 20px',
          textAlign: 'center',
        }}
      >
        <h2>¿Hablamos?</h2>
        <a href="mailto:David.gp1223@gmail.com">
          <button style={buttonStyle}>Enviar correo</button>
        </a>
      </section>

      <footer
        style={{
          textAlign: 'center',
          padding: '30px',
          color: '#999',
          fontSize: '13px',
        }}
      >
        © 2026 - David Gonzalez | Portafolio Data Analytics
      </footer>
    </div>
  );
}

const buttonStyle = {
  padding: '12px 26px',
  borderRadius: '10px',
  border: 'none',
  background: '#8a8160',
  color: 'white',
  fontSize: '15px',
  cursor: 'pointer',
  fontWeight: '600' as const,
};

function getIconUrl(name: string) {
  const icons: { [key: string]: string } = {
    Excel:
      'https://upload.wikimedia.org/wikipedia/commons/7/73/Microsoft_Excel_2013-2019_logo.svg',
    'Power BI':
      'https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg',
    SQL: 'https://cdn-icons-png.flaticon.com/512/2772/2772128.png',
    Python:
      'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg',
  };
  return icons[name];
}
