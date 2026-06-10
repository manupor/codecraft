import Count from "../../../common/Count";

 

const counter_data = [
  {
    symbol: "+",
    count: 10,
    title: `Años de<br /> Experiencia`,
  },
  {
    symbol: "+",
    count: 150,
    title: `Proyectos <br />Globales`,
  },
  {
    symbol: "+",
    count: 50,
    title: `Clientes <br />Satisfechos`,
  },
]
const BrandsHomeTwo = ({style_2} : any) => {
  return (
    <>
      <section className={`brands-section ${style_2 ? 'about-brands' : ''}`}>
        <div className="pattern" style={{ backgroundImage: `url(/assets/images/shape/shape-${style_2 ? '57' : '46'}.png)` }}></div>
        <div className="container">
          <div className="main-title text-center">
            <h2>Transformando Marcas <br /><span className="gradient-color">con Estrategia y Creatividad</span></h2>
          </div>
          <div className="brands-content">
            <div className="text-box">
              <p>En CodeCraftt no creo en soluciones genéricas. Combino más de 10 años de experiencia en diseño UX/UI, desarrollo full-stack y arquitectura cloud para crear productos digitales que realmente impulsan tu negocio.</p>
              <p>Desde startups en Silicon Valley hasta empresas consolidadas en Latinoamérica, cada proyecto recibe atención directa del fundador, garantizando calidad premium y resultados medibles en conversión, velocidad y experiencia de usuario.</p>
              <div className="btn-box"><a href="/contact" className="primary-btn one gradient-bg white-color border-btn">Conoce Mi Proceso</a></div>
            </div>
            <div className="fact-content">
              {counter_data.map((item, i) => (
                <div key={i} className="single-item">
                  <div className="count-outer count-box">
                    <span className="odometer" data-count="13">
                      <Count number={item.count} text={item.symbol} />
                      </span> 
                  </div>
                  <h5 dangerouslySetInnerHTML={{ __html: item.title }}></h5>
                </div>
              ))} 
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BrandsHomeTwo;