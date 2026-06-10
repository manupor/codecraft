const ChoooseusHomeTwo = ({ style_2 }: any) => {
  return (
    <>
      <section className={`chooseus-section ${style_2 ? 'about-chooseus' : ''}`}>
        {style_2 ? null :
          <div className="pattern" style={{ backgroundImage: `url(/assets/images/shape/shape-48.png)` }}></div>
        }

        <div className="container">
          <div className="title-box d-flex flex-end space-between">
            <div className="main-title">
              <h3>Por Qué Elegir CodeCraftt</h3>
              <h2>Estrategia, Diseño y <br /><span className="gradient-color">Tecnología a Tu Medida</span></h2>
            </div>
            <div className="title-text">
              <p>No uso plantillas genéricas. Cada proyecto se diseña y desarrolla desde cero, alineado a tus objetivos de negocio, audiencia y presupuesto. Resultados medibles, no promesas vacías.</p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12 block-column">
              <div className="chooseus-image">
                <figure className="image"><img src="assets/images/resource/chooseus-1.jpg" alt="" /></figure>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 block-column">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12 block-column">
                  <div className="chooseus-block-one">
                    <div className="icon-box"><i className="icon-57"></i></div>
                    <h3><a href="#">Desarrollo Web Premium</a></h3>
                    <p>Sitios web, aplicaciones SaaS y e-commerce desarrollados con React, Next.js y arquitecturas cloud escalables. Código limpio, optimizado y listo para crecer.</p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 block-column">
                  <div className="chooseus-block-one">
                    <div className="icon-box"><i className="icon-57"></i></div>
                    <h3><a href="#">UX/UI Estratégico</a></h3>
                    <p>Diseño de interfaces centradas en el usuario. Investigación, prototipado y testing para crear experiencias que convierten visitantes en clientes.</p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 block-column">
                  <div className="chooseus-block-one">
                    <div className="icon-box"><i className="icon-57"></i></div>
                    <h3><a href="#">Automatización e IA</a></h3>
                    <p>Integración de inteligencia artificial y automatización para optimizar procesos. Desde chatbots hasta flujos de trabajo inteligentes que ahorran tiempo y recursos.</p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 block-column">
                  <div className="chooseus-block-one">
                    <div className="icon-box"><i className="icon-57"></i></div>
                    <h3><a href="#">Escalabilidad Cloud</a></h3>
                    <p>Arquitectura AWS y soluciones cloud enterprise. Experiencia en infraestructura que crece con tu negocio, segura y optimizada para alto rendimiento.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ChoooseusHomeTwo;
