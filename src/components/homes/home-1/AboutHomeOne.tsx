import { Link } from "react-router-dom";

 

const AboutHomeOne = () => {
  return (
    <>
      <section className="about-section-five">
        <div className="outer-box">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12 block-column">
              <div className="left-content">
                <div className="main-title-two">
                  <span className="sub-title">(¿Quien Soy?)</span>
                </div>
                <div className="content-box">
                  <div className="single-box">
                    <div className="icon-box"><img src="assets/images/icons/icon-29.png" alt="" /></div>
                    <div className="text-box">
                      <h3>Diseño Primero</h3>
                      <p>Cada proyecto es liderado por mi directamente. Diseño marcas y sitios web que lucen premium, se sienten intencionales y te diferencian de la competencia.</p>
                    </div>
                  </div>
                  <div className="single-box">
                    <div className="icon-box"><img src="assets/images/icons/icon-30.png" alt="" /></div>
                    <div className="text-box">
                      <h3>Hecho para Vender</h3>
                      <p>Lo bonito no basta. Cada pagina esta optimizada para velocidad, SEO y conversion — para que tu sitio no solo impresione, sino que genere resultados reales.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 block-column">
              <div className="right-content">
                <h2>De una página en blanco <img src="assets/images/icons/icon-31.png" alt="" /> a una marca <img src="assets/images/icons/icon-32.png" alt="" /> que vende. <img src="assets/images/icons/icon-33.png" alt="" /></h2>
                <p>Me encargo de la estrategia, el diseno, el copy y el desarrollo - para que tu marca luzca premium y tu sitio web convierta. Construyamos tu marca juntos.</p>
                <Link to="/nosotros">Sobre CodeCraftt</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutHomeOne;