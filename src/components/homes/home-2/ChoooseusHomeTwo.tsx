import { useLang } from "../../../context/LanguageContext";

const ChoooseusHomeTwo = ({ style_2 }: any) => {
  const { t } = useLang();
  return (
    <>
      <section className={`chooseus-section ${style_2 ? 'about-chooseus' : ''}`}>
        {style_2 ? null :
          <div className="pattern" style={{ backgroundImage: `url(/assets/images/shape/shape-48.png)` }}></div>
        }

        <div className="container">
          <div className="title-box d-flex flex-end space-between">
            <div className="main-title">
              <h3>{t("chooseus.tag")}</h3>
              <h2>{t("chooseus.title")} <br /><span className="gradient-color">{t("chooseus.highlight")}</span></h2>
            </div>
            <div className="title-text">
              <p>{t("chooseus.desc")}</p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12 block-column">
              <div className="chooseus-image">
                <figure className="image"><img src="assets/images/resource/chooseus-1.jpg" alt="" /></figure>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 block-column">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12 block-column">
                  <div className="chooseus-block-one">
                    <div className="icon-box"><i className="icon-57"></i></div>
                    <h3><a href="#">{t("chooseus.s1.title")}</a></h3>
                    <p>{t("chooseus.s1.desc")}</p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 block-column">
                  <div className="chooseus-block-one">
                    <div className="icon-box"><i className="icon-57"></i></div>
                    <h3><a href="#">{t("chooseus.s2.title")}</a></h3>
                    <p>{t("chooseus.s2.desc")}</p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 block-column">
                  <div className="chooseus-block-one">
                    <div className="icon-box"><i className="icon-57"></i></div>
                    <h3><a href="#">{t("chooseus.s3.title")}</a></h3>
                    <p>{t("chooseus.s3.desc")}</p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 block-column">
                  <div className="chooseus-block-one">
                    <div className="icon-box"><i className="icon-57"></i></div>
                    <h3><a href="#">{t("chooseus.s4.title")}</a></h3>
                    <p>{t("chooseus.s4.desc")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ChoooseusHomeTwo;
