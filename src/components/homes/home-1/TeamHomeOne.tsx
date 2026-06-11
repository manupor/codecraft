import { Link } from "react-router-dom";
import { useLang } from "../../../context/LanguageContext";

const TeamHomeOne = () => {
  const { t } = useLang();
  return (
    <>
      <section className="team-section-three text-center">
        <div className="outer-box">
          <div className="main-title-two">
            <span className="sub-title">{t("teamhome.tag")}</span>
            <h2>{t("teamhome.title")}</h2>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-12 block-column">
              <div className="team-block-three">
                <figure className="image"><Link to="/"><img src="/photo%202.jpeg" alt="Manu Portuguez" /></Link></figure>
                <div className="text-box">
                  <h3><Link to="/">Manu Portuguez</Link></h3>
                  <span className="designation">{t("teamhome.role")}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamHomeOne;