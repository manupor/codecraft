import { Link } from "react-router-dom";
import { useLang } from "../../../context/LanguageContext";


const AboutHomeOne = () => {
  const { t } = useLang();
  return (
    <>
      <section className="about-section-five">
        <div className="outer-box">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12 block-column">
              <div className="left-content">
                <div className="main-title-two">
                  <span className="sub-title">{t("about.tag")}</span>
                </div>
                <div className="content-box">
                  <div className="single-box">
                    <div className="icon-box"><img src="assets/images/icons/icon-29.png" alt="" /></div>
                    <div className="text-box">
                      <h3>{t("about.box1.title")}</h3>
                      <p>{t("about.box1.desc")}</p>
                    </div>
                  </div>
                  <div className="single-box">
                    <div className="icon-box"><img src="assets/images/icons/icon-30.png" alt="" /></div>
                    <div className="text-box">
                      <h3>{t("about.box2.title")}</h3>
                      <p>{t("about.box2.desc")}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 block-column">
              <div className="right-content">
                <h2>{t("about.h2.1")} <img src="assets/images/icons/icon-31.png" alt="" /> {t("about.h2.2")} <img src="assets/images/icons/icon-32.png" alt="" /> {t("about.h2.3")} <img src="assets/images/icons/icon-33.png" alt="" /></h2>
                <p>{t("about.desc")}</p>
                <Link to="/nosotros">{t("about.cta")}</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutHomeOne;