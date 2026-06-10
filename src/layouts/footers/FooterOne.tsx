import { Link } from "react-router-dom";

 

const FooterOne = () => {
  return (
    <>
      <footer className="main-footer style-three" id="footer">
        <div className="footer-widget-section">
          <ul className="scroll-text">
            <li>CodeCraftt — Diseño Web y Branding · Costa Rica</li>
            <li>CodeCraftt — Diseño Web y Branding · Costa Rica</li>
            <li>CodeCraftt — Diseño Web y Branding · Costa Rica</li>
            <li>CodeCraftt — Diseño Web y Branding · Costa Rica</li>
            <li>CodeCraftt — Diseño Web y Branding · Costa Rica</li>
          </ul>
          <div className="outer-box">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                <div className="footer-widget logo-widget">
                  <figure className="footer-logo"><Link to="/"><img src="codecraftt-logo.png" alt="CodeCraftt" style={{maxHeight: '45px', width: 'auto'}} /></Link></figure>
                  <p>Estudio de diseño web y branding en Costa Rica. Diseñamos marcas y construimos sitios web de alta conversión para startups y empresas en EE. UU. y Latinoamérica.</p>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-12 footer-column">
                <div className="footer-widget links-widget">
                  <div className="widget-title">
                    <h5>Servicios</h5>
                  </div>
                  <div className="widget-content">
                    <ul className="links-list">
                      <li><Link to="/service">Diseño y Desarrollo Web</Link></li>
                      <li><Link to="/service">Identidad de Marca y Logo</Link></li>
                      <li><Link to="/service">Landing Pages</Link></li>
                      <li><Link to="/service">E-commerce</Link></li>
                      <li><Link to="/service">Diseño UX/UI</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-12 footer-column">
                <div className="footer-widget links-widget">
                  <div className="widget-title">
                    <h5>Industrias</h5>
                  </div>
                  <div className="widget-content">
                    <ul className="links-list">
                      <li><Link to="/">Startups</Link></li>
                      <li><Link to="/">E-commerce</Link></li>
                      <li><Link to="/">Restaurantes</Link></li>
                      <li><Link to="/">Bienes Raíces</Link></li>
                      <li><Link to="/">Servicios Profesionales</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-12 footer-column">
                <div className="footer-widget links-widget">
                  <div className="widget-title">
                    <h5>Empresa</h5>
                  </div>
                  <div className="widget-content">
                    <ul className="links-list">
                      <li><Link to="/about">Nosotros</Link></li>
                      <li><Link to="/#proceso">Proceso</Link></li>
                      <li><Link to="/service">Servicios</Link></li>
                      <li><Link to="/faq">Preguntas Frecuentes</Link></li>
                      <li><Link to="/contact">Contacto</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-12 footer-column">
                <div className="footer-widget contact-widget">
                  <div className="widget-title">
                    <h5>Contacto</h5>
                  </div>
                  <div className="widget-content">
                    <p>San José, Curridabat<br />Costa Rica</p>
                    <ul className="info-list clearfix">
                      <li><a href="mailto:hello@codecraftt.com">hello@codecraftt.com</a></li>
                      <li><a href="tel:+50683442522">+506 8344 2522</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-1 col-md-6 col-sm-12 footer-column">
                <div className="footer-widget social-widget">
                  <div className="widget-title">
                    <h5>Social</h5>
                  </div>
                  <div className="widget-content">
                    <ul className="social-list">
                      <li><Link to="/"><i className="fab fa-facebook-f"></i></Link></li>
                      <li><Link to="/"><i className="fab fa-instagram"></i></Link></li>
                      <li><Link to="/"><i className="fab fa-linkedin-in"></i></Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="outer-box">
            <div className="bottom-inner">
              <div className="copyright"><p>2026 &copy; CodeCraftt. Todos los derechos reservados.</p></div>
              <div className="mail-box"><a href="mailto:hello@codecraftt.com">hello@codecraftt.com</a></div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterOne;