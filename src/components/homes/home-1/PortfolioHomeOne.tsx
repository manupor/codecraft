import { Link } from "react-router-dom";
import { useLang } from "../../../context/LanguageContext";



const PortfolioHomeOne = () => {
  const { t } = useLang();
  return (
    <>
      <section className="service-section fix section-padding">
        <div className="container">
          <div className="section-title-area">
            <div className="section-title">
              <h6 className="wow fadeInUp">{t("portfolio.tag")}</h6>
              <h2 className="wow fadeInUp" data-wow-delay=".3s">{t("portfolio.subtitle")}</h2>
            </div>
            <Link to="/contacto" className="theme-btn wow fadeInUp" data-wow-delay=".5s">{t("portfolio.cta")}</Link>
          </div>
          <div className="row g-0">
            {[
              { key: "1", delay: ".2s" },
              { key: "2", delay: ".4s" },
              { key: "3", delay: ".6s" },
              { key: "4", delay: ".8s" },
              { key: "5", delay: "1s" },
              { key: "6", delay: "1.2s" },
            ].map((item, i) => (
              <div key={i} className={`col-xl-3 col-lg-4 col-md-6 wow fadeInUp`} data-wow-delay={item.delay}>
                <div className={`service-box-items ${i === 3 ? 'border-none' : ''}`}>
                  <div className="icon" style={{ color: "var(--theme)", fontSize: "32px" }}>
                    <i className="fa-solid fa-layer-group"></i>
                  </div>
                  <div className="content">
                    <h3><Link to="/service-details">{t(`portfolio.item${item.key}.title`)}</Link></h3>
                    <p>{t(`portfolio.item${item.key}.li1`)}, {t(`portfolio.item${item.key}.li2`)}, {t(`portfolio.item${item.key}.li3`)}</p>
                    <div className="service-btn">
                      <Link to="/service-details" className="arrow-icon"><i className="fa-sharp fa-solid fa-arrow-right"></i></Link>
                      <Link to="/service-details" className="link-btn">{t("project.viewmore")}</Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default PortfolioHomeOne;