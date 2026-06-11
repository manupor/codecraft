import { useLang } from "../../../context/LanguageContext";

const WorkingHomeOne = () => {
  const { t } = useLang();
  return (
    <>
      <section className="helping-section fix section-padding" id="proceso">
        <div className="container">
          <div className="section-title text-center mb-5">
            <h6 className="wow fadeInUp">{t("working.tag")}</h6>
            <h2 className="wow fadeInUp" data-wow-delay=".3s">{t("working.title")}</h2>
          </div>
          <div className="row g-4">
            {[
              { n: "01", title: t("working.step1.title"), desc: t("working.step1.desc"), delay: ".2s" },
              { n: "02", title: t("working.step2.title"), desc: t("working.step2.desc"), delay: ".3s" },
              { n: "03", title: t("working.step3.title"), desc: t("working.step3.desc"), delay: ".4s" },
              { n: "04", title: t("working.step4.title"), desc: t("working.step4.desc"), delay: ".5s" },
              { n: "05", title: t("working.step5.title"), desc: t("working.step5.desc"), delay: ".6s" },
              { n: "06", title: t("working.step6.title"), desc: t("working.step6.desc"), delay: ".7s" },
            ].map((step, i) => (
              <div key={i} className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={step.delay}>
                <div className="helping-box-items" style={{ padding: "30px", borderRadius: "12px", border: "1px solid var(--border)", background: "var(--bg)" }}>
                  <h2 style={{ fontSize: "48px", fontWeight: 700, color: "var(--theme)", fontFamily: "Teko, sans-serif", marginBottom: "10px" }}>{step.n}</h2>
                  <h3 style={{ fontSize: "22px", marginBottom: "10px" }}>{step.title}</h3>
                  <p style={{ color: "var(--text)", fontSize: "15px" }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default WorkingHomeOne;
