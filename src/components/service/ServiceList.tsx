import { Link } from "react-router-dom";
import { useLang } from "../../context/LanguageContext";

const ServiceList = () => {
  const { t } = useLang();
  const services = [
    { key: "1", delay: ".3s" },
    { key: "2", delay: ".5s" },
    { key: "3", delay: ".7s" },
    { key: "4", delay: ".3s" },
    { key: "5", delay: ".5s" },
    { key: "6", delay: ".7s" },
  ];
  return (
    <section className="service-section fix section-padding">
      <div className="container">
        <div className="row g-4">
          {services.map((s, i) => (
            <div key={i} className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay={s.delay}>
              <div className="service-box-items style-2 mt-0">
                <div className="icon" style={{ color: "var(--theme)", fontSize: "32px" }}>
                  <i className="fa-solid fa-layer-group"></i>
                </div>
                <div className="content">
                  <h3><Link to="/service-details">{t(`portfolio.item${s.key}.title`)}</Link></h3>
                  <p>{t(`portfolio.item${s.key}.li1`)}, {t(`portfolio.item${s.key}.li2`)}, {t(`portfolio.item${s.key}.li3`)}</p>
                  <div className="service-btn">
                    <Link to="/service-details" className="link-btn">{t("services.viewdetails")}</Link>
                    <Link to="/service-details" className="arrow-icon"><i className="fa-sharp fa-solid fa-arrow-right"></i></Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceList;
