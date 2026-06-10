import { Link } from "react-router-dom";
import { useLang } from "../../../context/LanguageContext";

const BlogHomeOne = () => {
  const { t } = useLang();
  return (
    <>
      <section className="news-section-four">
        <div className="outer-box">
          <div className="title-box">
            <div className="main-title-two">
              <span className="sub-title">{t("blog.tag")}</span>
              <h2>{t("blog.title1")}<br />{t("blog.title2")}</h2>
            </div>
            <div className="text-box">
              <p>{t("blog.desc")}</p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-12 block-column">
              <div className="news-block-six">
                <figure className="image"><Link to="/"><img src="assets/images/news/news-17.jpg" alt="SEO" /></Link></figure>
                <div className="text-box">
                  <ul className="post-info">
                    <li>{t("blog.post1.date")}</li>
                    <li>{t("blog.post1.cat")}</li>
                  </ul>
                  <h3><Link to="/blog/core-web-vitals-importancia">{t("blog.post1.title")}</Link></h3>
                  <div className="link"><Link to="/blog/core-web-vitals-importancia">{t("blog.readmore")}</Link></div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 block-column">
              <div className="news-block-six">
                <figure className="image"><Link to="/"><img src="assets/images/news/news-18.jpg" alt="Branding" /></Link></figure>
                <div className="text-box">
                  <ul className="post-info">
                    <li>{t("blog.post2.date")}</li>
                    <li>{t("blog.post2.cat")}</li>
                  </ul>
                  <h3><Link to="/blog/crear-marca-memorable">{t("blog.post2.title")}</Link></h3>
                  <div className="link"><Link to="/blog/crear-marca-memorable">{t("blog.readmore")}</Link></div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 block-column">
              <div className="news-block-six">
                <figure className="image"><Link to="/"><img src="assets/images/news/news-19.jpg" alt="Next.js" /></Link></figure>
                <div className="text-box">
                  <ul className="post-info">
                    <li>{t("blog.post3.date")}</li>
                    <li>{t("blog.post3.cat")}</li>
                  </ul>
                  <h3><Link to="/blog/nextjs-vs-webflow">{t("blog.post3.title")}</Link></h3>
                  <div className="link"><Link to="/blog/nextjs-vs-webflow">{t("blog.readmore")}</Link></div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 block-column">
              <div className="news-block-six">
                <figure className="image"><Link to="/"><img src="assets/images/news/news-20.jpg" alt="Conversion" /></Link></figure>
                <div className="text-box">
                  <ul className="post-info">
                    <li>{t("blog.post4.date")}</li>
                    <li>{t("blog.post4.cat")}</li>
                  </ul>
                  <h3><Link to="/blog/elementos-landing-page">{t("blog.post4.title")}</Link></h3>
                  <div className="link"><Link to="/blog/elementos-landing-page">{t("blog.readmore")}</Link></div>
                </div>
              </div>
            </div>
          </div>
          <div className="lower-link-box text-center"><Link to="/blog">{t("blog.viewall")}</Link></div>
        </div>
      </section>
    </>
  );
};

export default BlogHomeOne;