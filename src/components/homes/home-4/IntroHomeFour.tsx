

const IntroHomeFour = ({style_2} : any) => {
  return (
    <>
      <section className={`intro-section ${style_2 ? 'about-intro' : ''}`}>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12 intro-block">
              <div className="intro-block-one">
                <div className="decore"></div>
                <h3><a href="#">10+ Años de Experiencia Transformando Negocios Digitales</a></h3>
                <p>Más de una década diseñando y desarrollando soluciones tecnológicas para startups, empresas y organizaciones globales en Estados Unidos y Latinoamérica.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 intro-block">
              <div className="intro-block-one">
                <div className="decore"></div>
                <h3><a href="#">150+ Proyectos Exitosos <br />Entregados a Tiempo.</a></h3>
                <p>Cada proyecto es único. Desde landing pages hasta aplicaciones SaaS complejas, entrego resultados medibles que impulsan el crecimiento de tu negocio.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 intro-block">
              <div className="intro-block-one">
                <div className="decore"></div>
                <h3><a href="#">Presencia Global en <br />5+ Países.</a></h3>
                <p>Clientes en Estados Unidos, Costa Rica, México, Colombia y proyectos internacionales. Experiencia trabajando con equipos remotos y empresas globales.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default IntroHomeFour;