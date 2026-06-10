import { Link } from "react-router-dom";

const FooterFour = () => {
  return (
    <>
      <footer className="main-footer">
        <div className="pattern" style={{ backgroundImage: `url(/assets/images/shape/shape-25.png)` }}></div>
        <div className="container">
          <div className="widget-section">
            <div className="row">
              <div className="col-lg-5 col-md-12 col-sm-12 footer-column">
                <div className="small-column">
                  <div className="shape" style={{ backgroundImage: `url(/assets/images/shape/shape-26.png)` }}></div>
                  <figure className="footer-logo"><Link to="/"><img src="codecraftt-logo.png" alt="CodeCraftt" style={{maxHeight: '45px', width: 'auto'}} /></Link></figure>
                  <p>Estudio digital especializado en branding, desarrollo web premium y soluciones tecnológicas para empresas modernas. Más de 10 años transformando negocios en Estados Unidos y Latinoamérica con diseño a medida, sin plantillas genéricas.</p>
                  <h6>Sígueme:</h6>
                  <ul className="social-links">
                    <li><a href="#"><i className="icon-15"></i></a></li>
                    <li><a href="#"><i className="icon-18"></i></a></li>
                    <li><a href="#"><i className="icon-16"></i></a></li>
                    <li><a href="#"><i className="icon-17"></i></a></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-7 col-md-12 col-sm-12 footer-column">
                <div className="big-column">
                  <div className="shape" style={{ backgroundImage: `url(/assets/images/shape/shape-26.png)` }}></div>
                  <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12 block-column">
                      <div className="footer-widget links-widget">
                        <div className="widget-title">
                          <h3>Empresa</h3>
                        </div>
                        <div className="widget-content">
                          <ul className="links-list clearfix">
                            <li><Link to="/">Inicio</Link></li>
                            <li><Link to="/about">Sobre Mi</Link></li>
                            <li><Link to="/service">Servicios</Link></li>
                            <li><Link to="/portfolio">Proyectos</Link></li>
                            <li><Link to="/contact">Contacto</Link></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 block-column">
                      <div className="footer-widget links-widget">
                        <div className="widget-title">
                          <h3>Servicios</h3>
                        </div>
                        <div className="widget-content">
                          <ul className="links-list clearfix">
                            <li><a href="#">Desarrollo Web</a></li>
                            <li><a href="#">UX/UI Design</a></li>
                            <li><a href="#">Branding</a></li>
                            <li><a href="#">Automatización IA</a></li>
                            <li><a href="#">Cloud AWS</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 block-column">
                      <div className="footer-widget contact-widget">
                        <div className="widget-title">
                          <h3>Contacto</h3>
                        </div>
                        <div className="widget-content">
                          <ul className="info-list clearfix">
                            <li><i className="icon-19"></i><span>San José, Curridabat, Costa Rica</span></li>
                            <li><i className="icon-20"></i><a href="mailto:hello@codecraftt.com">hello@codecraftt.com</a></li>
                            <li><i className="icon-21"></i><a href="tel:+50683442522">+506 8344 2522</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="footer-bottom-content">
              <div className="copyright"><p>Copyright &copy; {new Date().getFullYear()} CodeCraftt. Todos los derechos reservados.</p></div>
              <ul className="footer-nav">
                <li><a href="#">Términos de Servicio</a></li>
                <li><a href="#">Política de Privacidad</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterFour;
