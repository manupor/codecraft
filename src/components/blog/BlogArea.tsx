import { Link } from "react-router-dom";
import { blogArticles } from "../../data/blog-articles";

const BlogArea = () => {
  return (
    <>
      <section className="news-section blog-page-one">
        <div className="container">
          <div className="row">
            {blogArticles.map((article) => {
              const [day, monthYear] = article.date.split(", ");
              const month = monthYear?.split(" - ")[0] ?? "";
              return (
                <div key={article.id} className="col-lg-4 col-md-6 col-sm-12 block-column">
                  <div className="news-block-one">
                    <div className="image-box">
                      <figure className="image">
                        <Link to={`/blog/${article.slug}`}>
                          <img src={article.image} alt={article.title} />
                        </Link>
                      </figure>
                      <div className="shape" style={{ backgroundImage: `url(/assets/images/shape/shape-21.png)` }}></div>
                      <div className="post-date">
                        <h3>{day}</h3>
                        <span>{month}</span>
                      </div>
                    </div>
                    <div className="news-content">
                      <ul className="category">
                        <li><Link to={`/blog/${article.slug}`}>{article.category}</Link></li>
                        <li><Link to={`/blog/${article.slug}`}>{article.readTime} lectura</Link></li>
                      </ul>
                      <h3><Link to={`/blog/${article.slug}`}>{article.title}</Link></h3>
                      <div className="btn-box">
                        <Link to={`/blog/${article.slug}`} className="primary-btn one gradient-bg white-color border-btn">
                          <span>Leer Más</span><i className="icon-1 gradient-color"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogArea;