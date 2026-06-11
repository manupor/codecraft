import { Link } from "react-router-dom";
import { useLang } from "../../../context/LanguageContext";


const AboutHomeOne = () => {
  const { t } = useLang();
  return (
    <>
      <section className="about-section fix section-padding section-bg">
        <div className="container">
          <div className="section-title text-center mb-5">
            <h6 className="wow fadeInUp">{t("about.tag")}</h6>
            <h2 className="wow fadeInUp" data-wow-delay=".3s">{t("about.heading")}</h2>
          </div>
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
              <div className="about-icon-items mb-4">
                <div className="icon" style={{ color: "var(--theme)", fontSize: "24px", marginBottom: "10px" }}>
                  <i className="fa-regular fa-star"></i>
                </div>
                <div className="content">
                  <h3>{t("about.box1.title")}</h3>
                  <p>{t("about.box1.desc")}</p>
                </div>
              </div>
              <div className="about-icon-items wow fadeInUp" data-wow-delay=".5s">
                <div className="icon" style={{ color: "var(--theme)", fontSize: "24px", marginBottom: "10px" }}>
                  <i className="fa-regular fa-shield-check"></i>
                </div>
                <div className="content">
                  <h3>{t("about.box2.title")}</h3>
                  <p>{t("about.box2.desc")}</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay=".5s">
              <div className="about-content">
                <p style={{ fontSize: "18px", lineHeight: "1.7", marginBottom: "2rem" }}>{t("about.desc")}</p>
                <Link to="/nosotros" className="theme-btn">{t("about.cta")}</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutHomeOne;