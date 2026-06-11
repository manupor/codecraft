import { useLang } from "../../../context/LanguageContext";

const TestimonialHomeOne = () => {
  const { t } = useLang();
  return (
    <>
      <section className="testimonial-section fix section-bg section-padding">
        <div className="container">
          <div className="section-title text-center mb-5">
            <h6 className="wow fadeInUp">{t("testimonials.tag")}</h6>
            <h2 className="wow fadeInUp" data-wow-delay=".3s">{t("testimonials.title")}</h2>
          </div>
          <div className="row g-4">
            {[
              { text: t("testimonials.t1"), name: "Zac Sims", role: "Head of FP&A and Design Finance — Amazon Music", delay: ".2s" },
              { text: t("testimonials.t2"), name: "Sanjay Singh", role: "Head of AWS Fintech — Amazon Web Services", delay: ".4s" },
              { text: t("testimonials.t3"), name: "John Winkler", role: "Sustainability Controls — Amazon", delay: ".6s" },
              { text: t("testimonials.t4"), name: "Michael Rettig", role: "Strategy & Communications — IBM", delay: ".8s" },
            ].map((item, i) => (
              <div key={i} className="col-lg-6 wow fadeInUp" data-wow-delay={item.delay}>
                <div className="testimonial-box-items" style={{ padding: "30px" }}>
                  <p style={{ fontSize: "15px", lineHeight: "1.7", marginBottom: "20px", color: "var(--text)" }}>{item.text}</p>
                  <div className="client-info" style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <div className="content">
                      <h5 style={{ marginBottom: "2px", fontSize: "16px" }}>{item.name}</h5>
                      <span style={{ fontSize: "13px", color: "var(--text)" }}>{item.role}</span>
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

export default TestimonialHomeOne;