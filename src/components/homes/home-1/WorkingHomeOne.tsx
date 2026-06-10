import { Link } from "react-router-dom";

const WorkingHomeOne = () => {
  return (
    <>
      <section className="working-section-two" id="proceso">
        <div className="outer-box">
          <div className="main-title-two">
            <span className="sub-title">(De la primera llamada al dia del lanzamiento)</span>
            <h2>Proceso</h2>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12 block-column">
              <div className="working-block-two">
                <div className="shape-box" style={{ backgroundImage: `url(/assets/images/shape/shape-67.png)` }}></div>
                <h2>01</h2>
                <h3><Link to="/">Llamada de<br />Descubrimiento</Link></h3>
                <p>Dedicamos 30-60 minutos entendiendo tu negocio, tu audiencia y tus objetivos. Sin plantillas — cada marca empieza con tu historia.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 block-column">
              <div className="working-block-two">
                <div className="shape-box" style={{ backgroundImage: `url(/assets/images/shape/shape-67.png)` }}></div>
                <h2>02</h2>
                <h3><Link to="/">Marca y<br />Estrategia</Link></h3>
                <p>Definimos tu posicionamiento, dirección visual y estrategia de contenido. Recibes una propuesta clara antes de comenzar.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 block-column">
              <div className="working-block-two">
                <div className="shape-box" style={{ backgroundImage: `url(/assets/images/shape/shape-67.png)` }}></div>
                <h2>03</h2>
                <h3><Link to="/">Diseno e<br />Identidad</Link></h3>
                <p>Logo, color, tipografía y mockups completos del sitio. Creamos una marca cohesiva que revisas y refinas con nosotros.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 block-column">
              <div className="working-block-two">
                <div className="shape-box" style={{ backgroundImage: `url(/assets/images/shape/shape-67.png)` }}></div>
                <h2>04</h2>
                <h3><Link to="/">Construccion y<br />Desarrollo</Link></h3>
                <p>Damos vida al diseño — pixel-perfect, responsivo y rápido. Verás vistas previas en vivo cada pocos días.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 block-column">
              <div className="working-block-two">
                <div className="shape-box" style={{ backgroundImage: `url(/assets/images/shape/shape-67.png)` }}></div>
                <h2>05</h2>
                <h3><Link to="/">Pulido y<br />QA</Link></h3>
                <p>Pruebas en todos los dispositivos, auditorías de rendimiento, SEO y accesibilidad. No lanzamos hasta que todo esté perfecto.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 block-column">
              <div className="working-block-two">
                <div className="shape-box" style={{ backgroundImage: `url(/assets/images/shape/shape-67.png)` }}></div>
                <h2>06</h2>
                <h3><Link to="/">Lanzamiento y<br />Soporte</Link></h3>
                <p>Desplegamos tu sitio, te entregamos todo e incluimos 30 días de soporte. Ofrecemos planes de mantenimiento para seguir creciendo.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WorkingHomeOne;
