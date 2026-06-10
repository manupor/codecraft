import { Link, useParams } from "react-router-dom";
import { getArticleBySlug } from "../../data/blog-articles";

const BlogArticleArea = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? getArticleBySlug(slug) : undefined;

  if (!article) {
    return (
      <section className="sidebar-page-container">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center" style={{ padding: "100px 0" }}>
              <h2>Artículo no encontrado</h2>
              <p>El artículo que buscas no existe o ha sido movido.</p>
              <Link to="/blog" className="primary-btn one gradient-bg white-color" style={{ marginTop: "20px" }}>
                <span>Ver todos los artículos</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="sidebar-page-container">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12 col-sm-12 content-side">
              <div className="blog-details-content">
                <div className="news-block-five">
                  <div className="news-content-five">
                    <ul className="post-info">
                      <li>
                        <img src="assets/images/icons/icon-22.png" alt="" />
                        <Link to="/blog">{article.author.name}</Link>
                      </li>
                      <li>
                        <img src="assets/images/icons/icon-23.png" alt="" />
                        <span>{article.date}</span>
                      </li>
                      <li>
                        <img src="assets/images/icons/icon-24.png" alt="" />
                        <span>{article.readTime} de lectura</span>
                      </li>
                    </ul>
                    <h2>{article.title}</h2>
                  </div>
                  <div className="image-box">
                    <figure className="image">
                      <img src={article.image} alt={article.title} />
                    </figure>
                  </div>
                </div>
                
                <div 
                  className="text-box" 
                  dangerouslySetInnerHTML={{ __html: article.content }}
                  style={{ lineHeight: "1.8", fontSize: "16px" }}
                />

                <div className="post-share-option clearfix">
                  <div className="text pull-left">
                    <h3>Compartir:</h3>
                  </div>
                  <ul className="social-links pull-right clearfix">
                    <li><a href="#"><i className="icon-15"></i></a></li>
                    <li><a href="#"><i className="icon-16"></i></a></li>
                    <li><a href="#"><i className="icon-17"></i></a></li>
                    <li><a href="#"><i className="icon-18"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="col-lg-4 col-md-12 col-sm-12 sidebar-side">
              <div className="blog-sidebar">
                {/* Author Widget */}
                <div className="sidebar-widget author-widget">
                  <div className="widget-title">
                    <h3>Autor</h3>
                  </div>
                  <div className="widget-content">
                    <div className="author-box">
                      <figure className="author-thumb">
                        <img src="/photo%202.jpeg" alt={article.author.name} style={{borderRadius: "50%", width: "80px", height: "80px", objectFit: "cover"}} />
                      </figure>
                      <h4>{article.author.name}</h4>
                      <span className="designation">{article.author.role}</span>
                      <p>Especialista en desarrollo web, branding y estrategias digitales para empresas ambiciosas.</p>
                    </div>
                  </div>
                </div>

                {/* Categories Widget */}
                <div className="sidebar-widget categories-widget">
                  <div className="widget-title">
                    <h3>Categorías</h3>
                  </div>
                  <div className="widget-content">
                    <ul className="categories-list clearfix">
                      <li><Link to="/blog">SEO <span>(1)</span></Link></li>
                      <li><Link to="/blog">Branding <span>(1)</span></Link></li>
                      <li><Link to="/blog">Desarrollo <span>(1)</span></Link></li>
                      <li><Link to="/blog">Conversión <span>(1)</span></Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogArticleArea;
