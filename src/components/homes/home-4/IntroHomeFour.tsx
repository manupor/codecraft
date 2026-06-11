import { useLang } from "../../../context/LanguageContext";

const IntroHomeFour = ({style_2} : any) => {
  const { t } = useLang();
  return (
    <>
      <section className={`intro-section ${style_2 ? 'about-intro' : ''}`}>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12 intro-block">
              <div className="intro-block-one">
                <div className="decore"></div>
                <h3><a href="#">{t("intro.s1.title")}</a></h3>
                <p>{t("intro.s1.desc")}</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 intro-block">
              <div className="intro-block-one">
                <div className="decore"></div>
                <h3><a href="#">{t("intro.s2.title")}</a></h3>
                <p>{t("intro.s2.desc")}</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 intro-block">
              <div className="intro-block-one">
                <div className="decore"></div>
                <h3><a href="#">{t("intro.s3.title")}</a></h3>
                <p>{t("intro.s3.desc")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default IntroHomeFour;