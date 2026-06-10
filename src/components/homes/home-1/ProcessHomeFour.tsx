

const ProcessHomeFour = () => {
  return (
    <>
      <section className="process-section text-center">
        <div className="pattern" style={{ backgroundImage: `url(/assets/images/shape/shape-9.png)` }}></div>
        <div className="pattern-2" style={{ backgroundImage: `url(/assets/images/shape/shape-10.png)` }}></div>
        <div className="container">
          <div className="main-title">
            <h3>Nuestro Proceso</h3>
            <h2>Pasos simples para llevar <br />tu idea a una <span className="gradient-color">marca exitosa</span></h2>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-12 block-column">
              <div className="process-block-one">
                <div className="shape" style={{ backgroundImage: `url(/assets/images/shape/shape-8.png)` }}></div>
                <div className="icon-box"><i className="icon-7"></i></div>
                <h3>Descubrimiento y Estrategia</h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 block-column">
              <div className="process-block-one">
                <div className="shape" style={{ backgroundImage: `url(/assets/images/shape/shape-8.png)` }}></div>
                <div className="icon-box"><i className="icon-8"></i></div>
                <h3>Diseño y Desarrollo</h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 block-column">
              <div className="process-block-one">
                <div className="shape" style={{ backgroundImage: `url(/assets/images/shape/shape-8.png)` }}></div>
                <div className="icon-box"><i className="icon-9"></i></div>
                <h3>Revisión y Ajustes</h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 block-column">
              <div className="process-block-one">
                <div className="shape" style={{ backgroundImage: `url(/assets/images/shape/shape-8.png)` }}></div>
                <div className="icon-box"><i className="icon-10"></i></div>
                <h3>Lanzamiento y Soporte</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProcessHomeFour;