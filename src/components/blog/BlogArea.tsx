import { Link } from "react-router-dom";
import { blogArticles } from "../../data/blog-articles";

const BlogArea = () => {
  return (
    <>
      <section className="news-section fix section-padding">
        <div className="container">
          <div className="news-list-wrapper">
            <div className="row g-4">
              <div className="col-lg-8">
                <div className="news-list-area">
                  {blogArticles.map((article, i) => (
                    <div key={article.id} className={`news-list-items wow fadeInUp`} data-wow-delay={`.${3 + i * 2}s`}>
                      <div className="thumb">
                        <img src={article.image} alt={article.title} />
                      </div>
                      <div className="content">
                        <span>{article.date}</span>
                        <h3><Link to={`/blog/${article.slug}`}>{article.title}</Link></h3>
                        <p>{article.excerpt}</p>
                        <div className="news-btn">
                          <Link to={`/blog/${article.slug}`} className="link-btn">Leer Más</Link>
                          <Link to={`/blog/${article.slug}`} className="arrow-icon"><i className="fa-sharp fa-solid fa-arrow-right"></i></Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-lg-4">
                <div className="news-sidebar" style={{ padding: "30px", borderRadius: "12px", border: "1px solid var(--border)", background: "var(--bg)" }}>
                  <h4 style={{ marginBottom: "20px", fontSize: "20px" }}>Artículos Recientes</h4>
                  {blogArticles.slice(0, 4).map((article) => (
                    <div key={article.id} style={{ marginBottom: "16px", paddingBottom: "16px", borderBottom: "1px solid var(--border)" }}>
                      <span style={{ fontSize: "13px", color: "var(--text)" }}>{article.date}</span>
                      <h5 style={{ fontSize: "15px", marginTop: "4px" }}>
                        <Link to={`/blog/${article.slug}`}>{article.title}</Link>
                      </h5>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogArea;