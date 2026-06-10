import { Link } from "react-router-dom";

 


const BlogHomeOne = () => {
  return (
    <>
      <section className="news-section-four">
        <div className="outer-box">
          <div className="title-box">
            <div className="main-title-two">
              <span className="sub-title">(Blog)</span>
              <h2>Conocimiento y<br />Recursos</h2>
            </div>
            <div className="text-box">
              <p>Comparto insights sobre diseno web, branding<br />y estrategias digitales que ayudan a las<br />empresas a crecer online.</p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-12 block-column">
              <div className="news-block-six">
                <figure className="image"><Link to="/"><img src="assets/images/news/news-17.jpg" alt="SEO" /></Link></figure>
                <div className="text-box">
                  <ul className="post-info">
                    <li>15, Ene - 2026</li>
                    <li>SEO</li>
                  </ul>
                  <h3><Link to="/blog/core-web-vitals-importancia">Core Web Vitals: Por que importan para tu sitio</Link></h3>
                  <div className="link"><Link to="/blog/core-web-vitals-importancia">Leer Mas</Link></div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 block-column">
              <div className="news-block-six">
                <figure className="image"><Link to="/"><img src="assets/images/news/news-18.jpg" alt="Branding" /></Link></figure>
                <div className="text-box">
                  <ul className="post-info">
                    <li>08, Ene - 2026</li>
                    <li>Branding</li>
                  </ul>
                  <h3><Link to="/blog/crear-marca-memorable">Como crear una marca memorable desde cero</Link></h3>
                  <div className="link"><Link to="/blog/crear-marca-memorable">Leer Mas</Link></div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 block-column">
              <div className="news-block-six">
                <figure className="image"><Link to="/"><img src="assets/images/news/news-19.jpg" alt="Next.js" /></Link></figure>
                <div className="text-box">
                  <ul className="post-info">
                    <li>02, Ene - 2026</li>
                    <li>Desarrollo</li>
                  </ul>
                  <h3><Link to="/blog/nextjs-vs-webflow">Next.js vs Webflow: Cual elegir para tu proyecto</Link></h3>
                  <div className="link"><Link to="/blog/nextjs-vs-webflow">Leer Mas</Link></div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 block-column">
              <div className="news-block-six">
                <figure className="image"><Link to="/"><img src="assets/images/news/news-20.jpg" alt="Conversion" /></Link></figure>
                <div className="text-box">
                  <ul className="post-info">
                    <li>28, Dic - 2025</li>
                    <li>Conversion</li>
                  </ul>
                  <h3><Link to="/blog/elementos-landing-page">5 elementos que toda landing page necesita</Link></h3>
                  <div className="link"><Link to="/blog/elementos-landing-page">Leer Mas</Link></div>
                </div>
              </div>
            </div>
          </div>
          <div className="lower-link-box text-center"><Link to="/blog">Ver Todos</Link></div>
        </div>
      </section>
    </>
  );
};

export default BlogHomeOne;