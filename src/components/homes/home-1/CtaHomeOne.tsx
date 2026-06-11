import { Link } from "react-router-dom";
import { useLang } from "../../../context/LanguageContext";

const CtaHomeOne = () => {
  const { t } = useLang();
  return (
    <>
      <section className="lets-talk-section fix section-padding section-bg pb-0">
        <div className="container">
          <div className="lets-talk-wrapper text-center">
            <h2 className="wow fadeInUp" data-wow-delay=".3s">{t("ctahome.title1")} {t("ctahome.title2")} <br /> {t("ctahome.title3")}</h2>
            <p className="wow fadeInUp" data-wow-delay=".4s" style={{ maxWidth: "600px", margin: "1.5rem auto", color: "var(--text)" }}>{t("ctahome.desc")}</p>
            <div className="hero-ctas wow fadeInUp" data-wow-delay=".5s" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center', marginTop: '2rem' }}>
              <Link to="/contacto" className="theme-btn">{t("ctahome.cta")}</Link>
              <a href="https://wa.me/50683442522" target="_blank" rel="noopener noreferrer" className="theme-btn-2">WhatsApp +506 8344 2522</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CtaHomeOne;