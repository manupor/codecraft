import { Link } from "react-router-dom";
import { useLang } from "../../../context/LanguageContext";

const TeamHomeFour = ({style_2} : any) => {
  const { t } = useLang();
  return (
    <>
      <section className="team-section">
        {style_2 ? null :
        <div className="pattern" style={{ backgroundImage: `url(/assets/images/shape/shape-19.png)` }}></div>
        }
        <div className="container">
          {style_2 ? 
          <div className="main-title text-center">
            <h3>{t("team.tag")}</h3>
            <h2>{t("team.title")} <br /><span className="gradient-color">{t("team.role")}</span></h2>
          </div>
          :
          <div className="main-title text-center">
            <h3>{t("team.founder.tag")}</h3>
            <h2>{t("team.founder.title")} <br /><span className="gradient-color">{t("team.title")}</span></h2>
          </div>
          }
          {/* Layout: Foto izquierda - Descripcion derecha */}
          <div className="row align-items-center" style={{marginTop: '50px'}}>
            {/* Foto a la izquierda */}
            <div className="col-lg-5 col-md-6 col-sm-12 block-column">
              <div className="team-block-one" style={{margin: '0 auto', maxWidth: '380px'}}>
                <div className="team-image">
                  <figure className="image">
                    <img src="/photo%202.jpeg" alt="Manu Portuguez" style={{borderRadius: '20px', width: '100%'}} />
                  </figure>
                </div>
                <div className="team-content" style={{textAlign: 'center', marginTop: '20px'}}>
                  <h3><Link to="/">Manu Portuguez</Link></h3>
                  <span className="designation">CEO / Sr Full Stack Developer</span>
                  <div className="team-social" style={{justifyContent: 'center', display: 'flex', marginTop: '15px'}}>
                    <div className="icon-box"><i className="icon-14"></i></div>
                    <ul className="social-links">
                      <li><a href="https://www.linkedin.com/in/manu-portuguez-023849128/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Descripcion a la derecha - TEXTO EN BLANCO */}
            <div className="col-lg-7 col-md-6 col-sm-12 block-column">
              <div className="founder-description" style={{padding: '20px 30px'}}>
                <p style={{fontSize: '18px', lineHeight: '1.9', color: '#ffffff', textAlign: 'left', marginBottom: '20px'}}>
                  {t("team.p1")}
                </p>
                <p style={{fontSize: '18px', lineHeight: '1.9', color: '#ffffff', textAlign: 'left', marginBottom: '20px'}}>
                  {t("team.p2")}
                </p>
                <p style={{fontSize: '18px', lineHeight: '1.9', color: '#ffffff', textAlign: 'left'}}>
                  {t("team.p3")}
                </p>
                
                <div style={{marginTop: '30px', textAlign: 'left'}}>
                  <Link to="/contacto" className="primary-btn one gradient-bg white-color">
                    <span>{t("team.cta")}</span>
                    <i className="icon-1 gradient-color"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamHomeFour;
