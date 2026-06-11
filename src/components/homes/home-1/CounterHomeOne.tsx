import { useLang } from "../../../context/LanguageContext";

const CounterHomeOne = () => {
  const { t } = useLang();
  const services = ["trust.s1", "trust.s2", "trust.s3", "trust.s4", "trust.s5", "trust.s6"];
  return (
    <>
      <section className="brand-section section-padding fix pt-0">
        <div className="container">
          <div className="section-title text-center mb-5">
            <h3 className="wow fadeInUp" style={{ fontSize: "28px", fontWeight: 600, marginBottom: "1rem" }}>{t("trust.heading")}</h3>
            <p className="wow fadeInUp" data-wow-delay=".2s" style={{ maxWidth: "700px", margin: "0 auto", color: "var(--text)" }}>{t("trust.text")}</p>
          </div>
          <div className="row g-4">
            {services.map((key, i) => (
              <div key={i} className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={`.${2 + i * 2}s`}>
                <div className="service-box-items" style={{ textAlign: "center", padding: "24px" }}>
                  <span style={{ color: "var(--theme)", fontWeight: 700, fontSize: "14px", display: "block", marginBottom: "8px" }}>✓</span>
                  <span style={{ color: "#fff", fontSize: "16px", fontWeight: 500, fontFamily: "Kanit, sans-serif" }}>{t(key)}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CounterHomeOne;