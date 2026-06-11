import { Link } from "react-router-dom";
import { useLang } from "../../../context/LanguageContext";

const HeroHomeOne = () => {
  const { t } = useLang();
  return (
    <>
      <section className="hero-section hero-1 section-padding">
        <div className="container">
          <div className="hero-content">
            <h6 className="wow fadeInUp" style={{ color: "var(--theme)", fontSize: "18px", fontWeight: 500, letterSpacing: "2px", textTransform: "uppercase", marginBottom: "1rem" }}>
              {t("hero.subtitle")}
            </h6>
            <h1 className="wow fadeInUp" data-wow-delay=".3s">
              {t("hero.title.line1")} <br />
              <span style={{ color: "var(--theme)" }}>{t("hero.title.line2")}</span>
            </h1>
            <p className="wow fadeInUp" data-wow-delay=".3s" style={{ maxWidth: "700px", margin: "1.5rem 0" }}>
              {t("hero.desc")}
            </p>
            <ul className="hero-benefits wow fadeInUp" data-wow-delay=".4s" style={{ listStyle: 'none', padding: 0, margin: '1.5rem 0', display: 'flex', flexWrap: 'wrap', gap: '0.8rem 2rem' }}>
              {["b1","b2","b3","b4"].map(k => (
                <li key={k} style={{ color: '#fff', fontSize: '15px', fontWeight: 400, display: 'flex', alignItems: 'center', gap: '8px', fontFamily: 'Kanit, sans-serif' }}>
                  <span style={{ color: 'var(--theme)', fontWeight: 700, fontSize: '16px' }}>✓</span> {t(`hero.${k}`)}
                </li>
              ))}
            </ul>
            <div className="hero-ctas wow fadeInUp" data-wow-delay=".5s" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '2rem' }}>
              <Link to="/contacto" className="theme-btn">{t("hero.cta")}</Link>
              <Link to="/portfolio" className="theme-btn-2">{t("hero.cta2")}</Link>
            </div>
            <div className="row mt-5">
              <div className="col-lg-12 wow fadeInUp" data-wow-delay=".6s">
                <div className="hero-image" style={{ borderRadius: "20px", overflow: "hidden", marginTop: "3rem" }}>
                  <img src="/manudev.jpg" alt="CodeCraftt Team" style={{ width: '100%', height: 'auto', objectFit: 'cover' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroHomeOne;