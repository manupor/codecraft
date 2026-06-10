import { useLang } from "../../../context/LanguageContext";

const ProcessHomeFour = () => {
  const { t } = useLang();
  return (
    <>
      <section className="process-section text-center">
        <div className="pattern" style={{ backgroundImage: `url(/assets/images/shape/shape-9.png)` }}></div>
        <div className="pattern-2" style={{ backgroundImage: `url(/assets/images/shape/shape-10.png)` }}></div>
        <div className="container">
          <div className="main-title">
            <h3>{t("process.tag")}</h3>
            <h2>{t("process.title")} <br /><span className="gradient-color">{t("process.title.highlight")}</span></h2>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-12 block-column">
              <div className="process-block-one">
                <div className="shape" style={{ backgroundImage: `url(/assets/images/shape/shape-8.png)` }}></div>
                <div className="icon-box"><i className="icon-7"></i></div>
                <h3>{t("process.s1")}</h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 block-column">
              <div className="process-block-one">
                <div className="shape" style={{ backgroundImage: `url(/assets/images/shape/shape-8.png)` }}></div>
                <div className="icon-box"><i className="icon-8"></i></div>
                <h3>{t("process.s2")}</h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 block-column">
              <div className="process-block-one">
                <div className="shape" style={{ backgroundImage: `url(/assets/images/shape/shape-8.png)` }}></div>
                <div className="icon-box"><i className="icon-9"></i></div>
                <h3>{t("process.s3")}</h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 block-column">
              <div className="process-block-one">
                <div className="shape" style={{ backgroundImage: `url(/assets/images/shape/shape-8.png)` }}></div>
                <div className="icon-box"><i className="icon-10"></i></div>
                <h3>{t("process.s4")}</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProcessHomeFour;