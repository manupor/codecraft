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
              <ul className="hero-benefits" style={{ listStyle: 'none', padding: 0, margin: '1rem 0', display: 'flex', flexWrap: 'wrap', gap: '0.6rem 1.5rem' }}>
                {["b1","b2","b3","b4"].map(k => (
                  <li key={k} style={{ color: '#fff', fontSize: '13px', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span style={{ color: '#ff6b35', fontWeight: 700, fontSize: '14px' }}>✓</span> {t(`hero.${k}`)}
                  </li>
                ))}
              </ul>
              <div className="hero-ctas" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1.5rem', marginBottom: '1rem' }}>
                <Link to="/contacto" className="theme-btn" style={{ background: '#ff6b35', color: '#fff', padding: '14px 28px', borderRadius: '4px', textDecoration: 'none', fontWeight: 600, fontSize: '14px', display: 'inline-block', transition: 'all 0.3s ease' }}>{t("hero.cta")}</Link>
                <Link to="/portfolio" className="theme-btn-outline" style={{ border: '1px solid rgba(255,255,255,0.35)', color: '#fff', padding: '14px 28px', borderRadius: '4px', textDecoration: 'none', fontWeight: 600, fontSize: '14px', display: 'inline-block', transition: 'all 0.3s ease' }}>{t("hero.cta2")}</Link>
              </div>
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