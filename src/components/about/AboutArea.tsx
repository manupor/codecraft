import { Link } from "react-router-dom";

const AboutArea = () => {
  return (
    <>
      <section className="about-section fix section-padding">
        <div className="container">
          <div className="section-title-area">
            <div className="section-title">
              <h6 className="wow fadeInUp">About Us</h6>
              <h2 className="wow fadeInUp" data-wow-delay=".3s">Transformando ideas en <span>marcas que venden</span></h2>
            </div>
            <p className="wow fadeInUp" data-wow-delay=".5s">
              Detrás de CodeCraftt está Manu Portuguez, CEO y Sr Developer.
            </p>
          </div>
          <div className="about-wrapper">
            <div className="row justify-content-between align-items-center">
              <div className="col-lg-7 wow fadeInUp" data-wow-delay=".3s">
                <div className="about-image-items">
                  <div className="row g-4 align-items-center">
                    <div className="col-md-6">
                      <div className="about-image">
                        <img src="/manudev.jpg" alt="CodeCraftt Team" style={{ borderRadius: "12px", width: "100%" }} />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="about-content">
                        <p style={{ color: "var(--text)", lineHeight: "1.7" }}>
                          Durante más de 7 años hemos ayudado a startups y empresas en EE.UU. y Latinoamérica a crear marcas memorables y sitios web de alta conversión. No usamos plantillas: cada proyecto es único, diseñado a medida para tu negocio.
                        </p>
                        <Link to="/contacto" className="theme-btn mt-4">Inicia Tu Proyecto</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 wow fadeInUp" data-wow-delay=".5s">
                <div className="about-icon-items mb-4">
                  <div className="icon" style={{ color: "var(--theme)", fontSize: "24px", marginBottom: "10px" }}>
                    <i className="fa-regular fa-star"></i>
                  </div>
                  <div className="content">
                    <h3>Misión</h3>
                    <p>Crear experiencias digitales que conviertan visitantes en clientes.</p>
                  </div>
                </div>
                <div className="about-icon-items">
                  <div className="icon" style={{ color: "var(--theme)", fontSize: "24px", marginBottom: "10px" }}>
                    <i className="fa-regular fa-shield-check"></i>
                  </div>
                  <div className="content">
                    <h3>Visión</h3>
                    <p>Ser el estudio de diseño web de referencia para startups ambiciosas.</p>
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

export default AboutArea;
