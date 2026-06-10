import { Link } from "react-router-dom";
import { useLang } from "../../../context/LanguageContext";

const HeroHomeOne = () => {
  const { t } = useLang();
  return (
    <>
      <section className="hero-section-four">
        <div className="pattern-box" style={{ backgroundImage: `url(/assets/images/shape/shape-62.png)` }}></div>
        <div className="outer-box">
          <div className="upper-box">
            <div className="title-box">
              <h2>
                <span style={{display: "block", fontWeight: "normal"}}>{t("hero.subtitle")}</span>
                <span style={{display: "block"}}>{t("hero.title.line1")}</span>
                <span style={{display: "block"}}>{t("hero.title.line2")}</span>
              </h2>
            </div>
            <div className="clients-box">
              <ul className="clients-list">
                <li><div className="customer-image"><img src="assets/images/resource/customer-1.png" alt="" /></div></li>
                <li><div className="customer-image"><img src="assets/images/resource/customer-2.png" alt="" /></div></li>
                <li><div className="customer-image"><img src="assets/images/resource/customer-3.png" alt="" /></div></li>
                <li><div className="customer-image"><img src="assets/images/resource/customer-4.png" alt="" /></div></li>
                <li><h5>{t("hero.start").split("\n").map((l, i) => <span key={i}>{l}{i === 0 && <br />}</span>)}</h5></li>
              </ul>
            </div>
          </div>
          <div className="lower-box">
            <figure className="image"><img src="/manudev.jpg" alt="CodeCraftt Team" style={{width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top'}} /></figure>
            <div className="content-box">
              <div className="shape-box">
                <div className="shape-1" style={{ backgroundImage: `url(/assets/images/shape/shape-63.png)` }}></div>
                <div className="shape-2" style={{ backgroundImage: `url(/assets/images/shape/shape-64.png)` }}></div>
              </div>
              <p>{t("hero.desc")}</p>
              <div className="link-text"><Link to="/contacto">{t("hero.cta")}</Link></div>
              <ul className="scroll-text">
                {[1,2,3,4,5].map(i => <li key={i}>{t("hero.scrolltext")}</li>)}
              </ul>
              <div className="scroll-down"><a href="#footer">{t("hero.scroll")}</a></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroHomeOne;