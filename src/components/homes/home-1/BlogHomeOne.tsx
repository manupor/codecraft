import { Link } from "react-router-dom";
import { useLang } from "../../../context/LanguageContext";

const BlogHomeOne = () => {
  const { t } = useLang();
  const posts = [
    { date: t("blog.post1.date"), cat: t("blog.post1.cat"), title: t("blog.post1.title"), slug: "core-web-vitals-importancia" },
    { date: t("blog.post2.date"), cat: t("blog.post2.cat"), title: t("blog.post2.title"), slug: "crear-marca-memorable" },
    { date: t("blog.post3.date"), cat: t("blog.post3.cat"), title: t("blog.post3.title"), slug: "nextjs-vs-webflow" },
  ];
  return (
    <>
      <section className="news-section fix section-padding">
        <div className="container">
          <div className="section-title-area">
            <div className="section-title">
              <h6 className="wow fadeInUp">{t("blog.tag")}</h6>
              <h2 className="wow fadeInUp" data-wow-delay=".3s">{t("blog.title1")} {t("blog.title2")}</h2>
            </div>
            <Link to="/blog" className="theme-btn wow fadeInUp" data-wow-delay=".5s">{t("blog.viewall")}</Link>
          </div>
          <div className="row g-4">
            {posts.map((post, i) => (
              <div key={i} className={`col-xl-4 col-lg-6 col-md-6 wow fadeInUp`} data-wow-delay={`.${2 + i * 2}s`}>
                <div className="news-box-items">
                  <div className="news-content">
                    <p>{post.date}</p>
                    <h3><Link to={`/blog/${post.slug}`}>{post.title}</Link></h3>
                    <div className="news-btn">
                      <Link to={`/blog/${post.slug}`} className="link-btn">{t("blog.readmore")}</Link>
                      <Link to={`/blog/${post.slug}`} className="arrow-icon"><i className="fa-sharp fa-solid fa-arrow-right"></i></Link>
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

export default BlogHomeOne;