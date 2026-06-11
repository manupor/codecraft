import { Link } from "react-router-dom";
import { useLang } from "../../context/LanguageContext";

const FooterOne = () => {
  const { t } = useLang();
  return (
    <>
      <footer className="footer-section section-bg fix" id="footer">
        <div className="container">
          <div className="footer-widgets-wrapper">
            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                <div className="single-footer-widget">
                  <div className="widget-head">
                    <Link to="/">
                      <img src="codecraftt-logo.png" alt="CodeCraftt" style={{ maxHeight: "45px", width: "auto" }} />
                    </Link>
                  </div>
                  <div className="footer-content">
                    <p>{t("footer.desc")}</p>
                    <div className="social-icon d-flex align-items-center">
                      <a href="https://www.instagram.com/codecraftt_cr/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                      <a href="https://www.linkedin.com/company/codecraftt/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-4 col-md-6 ps-lg-3 wow fadeInUp" data-wow-delay=".4s">
                <div className="single-footer-widget">
                  <div className="widget-head">
                    <h3>{t("footer.services.title")}</h3>
                  </div>
                  <ul className="list-items">
                    <li><Link to="/servicios">{t("footer.services.li1")}</Link></li>
                    <li><Link to="/servicios">{t("footer.services.li2")}</Link></li>
                    <li><Link to="/servicios">{t("footer.services.li3")}</Link></li>
                    <li><Link to="/servicios">{t("footer.services.li4")}</Link></li>
                    <li><Link to="/servicios">{t("footer.services.li5")}</Link></li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-2 col-lg-4 col-md-6 ps-lg-3 wow fadeInUp" data-wow-delay=".6s">
                <div className="single-footer-widget">
                  <div className="widget-head">
                    <h3>{t("footer.company.title")}</h3>
                  </div>
                  <ul className="list-items">
                    <li><Link to="/nosotros">{t("footer.company.about")}</Link></li>
                    <li><Link to="/blog">{t("footer.company.blog")}</Link></li>
                    <li><Link to="/servicios">{t("footer.company.services")}</Link></li>
                    <li><Link to="/faq">{t("footer.company.faq")}</Link></li>
                    <li><Link to="/contacto">{t("footer.company.contact")}</Link></li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 ps-lg-5 wow fadeInUp" data-wow-delay=".8s">
                <div className="single-footer-widget">
                  <div className="widget-head">
                    <h3>{t("footer.contact.title")}</h3>
                  </div>
                  <div className="footer-content">
                    <p>San José, Curridabat<br />Costa Rica</p>
                    <div className="contact-text mt-3">
                      <h4 className="pb-2"><a href="tel:+50683442522">+506 8344 2522</a></h4>
                      <h5><a href="mailto:hello@codecraftt.com">hello@codecraftt.com</a></h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="footer-bottom-wrapper">
              <p>2026 &copy; CodeCraftt. {t("footer.copyright")}</p>
              <p><a href="mailto:hello@codecraftt.com">hello@codecraftt.com</a></p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterOne;