import { Link } from "react-router-dom";
import { useLang } from "../../context/LanguageContext";

const FooterOne = () => {
  const { t } = useLang();
  return (
    <>
      <footer className="main-footer style-three" id="footer">
        <div className="footer-widget-section">
          <ul className="scroll-text">
            {[1,2,3,4,5].map(i => <li key={i}>{t("footer.scrolltext")}</li>)}
          </ul>
          <div className="outer-box">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                <div className="footer-widget logo-widget">
                  <figure className="footer-logo"><Link to="/"><img src="codecraftt-logo.png" alt="CodeCraftt" style={{maxHeight: '45px', width: 'auto'}} /></Link></figure>
                  <p>{t("footer.desc")}</p>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-12 footer-column">
                <div className="footer-widget links-widget">
                  <div className="widget-title">
                    <h5>{t("footer.services.title")}</h5>
                  </div>
                  <div className="widget-content">
                    <ul className="links-list">
                      <li><Link to="/servicios">{t("footer.services.li1")}</Link></li>
                      <li><Link to="/servicios">{t("footer.services.li2")}</Link></li>
                      <li><Link to="/servicios">{t("footer.services.li3")}</Link></li>
                      <li><Link to="/servicios">{t("footer.services.li4")}</Link></li>
                      <li><Link to="/servicios">{t("footer.services.li5")}</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-12 footer-column">
                <div className="footer-widget links-widget">
                  <div className="widget-title">
                    <h5>{t("footer.industries.title")}</h5>
                  </div>
                  <div className="widget-content">
                    <ul className="links-list">
                      <li><Link to="/">{t("footer.industries.li1")}</Link></li>
                      <li><Link to="/">{t("footer.industries.li2")}</Link></li>
                      <li><Link to="/">{t("footer.industries.li3")}</Link></li>
                      <li><Link to="/">{t("footer.industries.li4")}</Link></li>
                      <li><Link to="/">{t("footer.industries.li5")}</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-12 footer-column">
                <div className="footer-widget links-widget">
                  <div className="widget-title">
                    <h5>{t("footer.company.title")}</h5>
                  </div>
                  <div className="widget-content">
                    <ul className="links-list">
                      <li><Link to="/nosotros">{t("footer.company.about")}</Link></li>
                      <li><Link to="/blog">{t("footer.company.blog")}</Link></li>
                      <li><Link to="/servicios">{t("footer.company.services")}</Link></li>
                      <li><Link to="/faq">{t("footer.company.faq")}</Link></li>
                      <li><Link to="/contacto">{t("footer.company.contact")}</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-12 footer-column">
                <div className="footer-widget contact-widget">
                  <div className="widget-title">
                    <h5>{t("footer.contact.title")}</h5>
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
                      <li><a href="https://www.instagram.com/codecraftt_cr/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a></li>
                      <li><a href="https://www.linkedin.com/company/codecraftt/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a></li>
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
              <div className="copyright"><p>2026 &copy; CodeCraftt. {t("footer.copyright")}</p></div>
              <div className="mail-box"><a href="mailto:hello@codecraftt.com">hello@codecraftt.com</a></div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterOne;