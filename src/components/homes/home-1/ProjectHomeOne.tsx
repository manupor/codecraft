import { useLang } from "../../../context/LanguageContext";

const ProjectHomeOne = () => {
  const { t } = useLang();
  return (
    <>
      <section className="portfolio-section fix section-bg section-padding">
        <div className="container">
          <div className="section-title-area">
            <div className="section-title">
              <h6 className="wow fadeInUp">{t("project.title")}</h6>
              <h2 className="wow fadeInUp" data-wow-delay=".3s">{t("project.desc")}</h2>
            </div>
          </div>
          <div className="row g-4">
            {[
              { title: t("project.s1.title"), desc: t("project.s1.desc"), delay: ".2s" },
              { title: t("project.s2.title"), desc: t("project.s2.desc"), delay: ".4s" },
              { title: t("project.s3.title"), desc: t("project.s3.desc"), delay: ".6s" },
              { title: t("project.s4.title"), desc: t("project.s4.desc"), delay: ".8s" },
              { title: t("project.s5.title"), desc: t("project.s5.desc"), delay: "1s" },
            ].map((item, i) => (
              <div key={i} className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={item.delay}>
                <div className="service-box-items" style={{ padding: "30px" }}>
                  <div className="content">
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
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

export default ProjectHomeOne;