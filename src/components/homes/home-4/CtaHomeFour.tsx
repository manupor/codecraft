import { Link } from "react-router-dom";
import { useLang } from "../../../context/LanguageContext";

const CtaHomeFour = () => {
  const { t } = useLang();
  return (
    <>
      <section className="cta-section">
        <div className="pattern" style={{ backgroundImage: `url(/assets/images/shape/shape-24.png)` }}></div>
        <div className="container">
          <div className="cta-content">
            <div className="shape" style={{ backgroundImage: `url(/assets/images/shape/shape-22.png)` }}></div>
                        <h3>{t("cta.tag")}</h3>
            <h2>{t("cta.title")}</h2>
            <p>{t("cta.desc")}</p>
            <div className="btn-box">
              <Link to="/contacto" className="primary-btn one gradient-bg white-color"><span>{t("cta.btn")}</span><i className="icon-1 gradient-color"></i></Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CtaHomeFour;
