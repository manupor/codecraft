import { Link } from "react-router-dom";
import { useLang } from "../../../context/LanguageContext";

const WorkingHomeOne = () => {
  const { t } = useLang();
  return (
    <>
      <section className="working-section-two" id="proceso">
        <div className="outer-box">
          <div className="main-title-two">
            <span className="sub-title">{t("working.tag")}</span>
            <h2>{t("working.title")}</h2>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12 block-column">
              <div className="working-block-two">
                <div className="shape-box" style={{ backgroundImage: `url(/assets/images/shape/shape-67.png)` }}></div>
                <h2>01</h2>
                <h3><Link to="/">{t("working.step1.title")}</Link></h3>
                <p>{t("working.step1.desc")}</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 block-column">
              <div className="working-block-two">
                <div className="shape-box" style={{ backgroundImage: `url(/assets/images/shape/shape-67.png)` }}></div>
                <h2>02</h2>
                <h3><Link to="/">{t("working.step2.title")}</Link></h3>
                <p>{t("working.step2.desc")}</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 block-column">
              <div className="working-block-two">
                <div className="shape-box" style={{ backgroundImage: `url(/assets/images/shape/shape-67.png)` }}></div>
                <h2>03</h2>
                <h3><Link to="/">{t("working.step3.title")}</Link></h3>
                <p>{t("working.step3.desc")}</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 block-column">
              <div className="working-block-two">
                <div className="shape-box" style={{ backgroundImage: `url(/assets/images/shape/shape-67.png)` }}></div>
                <h2>04</h2>
                <h3><Link to="/">{t("working.step4.title")}</Link></h3>
                <p>{t("working.step4.desc")}</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 block-column">
              <div className="working-block-two">
                <div className="shape-box" style={{ backgroundImage: `url(/assets/images/shape/shape-67.png)` }}></div>
                <h2>05</h2>
                <h3><Link to="/">{t("working.step5.title")}</Link></h3>
                <p>{t("working.step5.desc")}</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 block-column">
              <div className="working-block-two">
                <div className="shape-box" style={{ backgroundImage: `url(/assets/images/shape/shape-67.png)` }}></div>
                <h2>06</h2>
                <h3><Link to="/">{t("working.step6.title")}</Link></h3>
                <p>{t("working.step6.desc")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WorkingHomeOne;
