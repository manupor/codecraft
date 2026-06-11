import { Link } from "react-router-dom";
import { useLang } from "../../context/LanguageContext";

const FooterFour = () => {
  const { t } = useLang();
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
                  <p>{t("footer4.desc")}</p>
                  <h6>{t("footer.follow")}</h6>
                  <ul className="social-links">
                    <li><a href="https://www.instagram.com/codecraftt_cr/" target="_blank" rel="noopener noreferrer"><i className="icon-18"></i></a></li>
                    <li><a href="https://www.linkedin.com/company/codecraftt/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a></li>
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
                          <h3>{t("footer4.company.title")}</h3>
                        </div>
                        <div className="widget-content">
                          <ul className="links-list clearfix">
                            <li><Link to="/">{t("footer4.company.home")}</Link></li>
                            <li><Link to="/about">{t("footer4.company.about")}</Link></li>
                            <li><Link to="/service">{t("footer4.company.services")}</Link></li>
                            <li><Link to="/portfolio">{t("footer4.company.portfolio")}</Link></li>
                            <li><Link to="/contact">{t("footer4.company.contact")}</Link></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 block-column">
                      <div className="footer-widget links-widget">
                        <div className="widget-title">
                          <h3>{t("footer4.services.title")}</h3>
                        </div>
                        <div className="widget-content">
                          <ul className="links-list clearfix">
                            <li><a href="#">{t("footer4.services.li1")}</a></li>
                            <li><a href="#">{t("footer4.services.li2")}</a></li>
                            <li><a href="#">{t("footer4.services.li3")}</a></li>
                            <li><a href="#">{t("footer4.services.li4")}</a></li>
                            <li><a href="#">{t("footer4.services.li5")}</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 block-column">
                      <div className="footer-widget contact-widget">
                        <div className="widget-title">
                          <h3>{t("footer4.contact.title")}</h3>
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
              <div className="copyright"><p>Copyright &copy; {new Date().getFullYear()} CodeCraftt. {t("footer4.copyright")}</p></div>
              <ul className="footer-nav">
                <li><a href="#">{t("footer4.terms")}</a></li>
                <li><a href="#">{t("footer4.privacy")}</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterFour;
