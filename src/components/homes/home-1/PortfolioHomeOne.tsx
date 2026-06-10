import { Link } from "react-router-dom";

 


const PortfolioHomeOne = () => {
  return (
    <>
      <section className="portfolio-section-four">
        <div className="pattern-box" style={{ backgroundImage: `url(/assets/images/shape/shape-66.png)` }}></div>
        <div className="outer-box">
          <div className="title-box text-center">
            <h2>Lo que hago<br />Diseno, marco y lanzo.</h2>
            <p>Diseño marcas y construyo sitios web de alta conversion para startups y empresas ambiciosas.</p>
          </div>
          <div className="main-content-box">
            <div className="portfolio-block-four">
              <div className="text-box">
                <h3><Link to="/service-details">Diseño y Desarrollo Web</Link></h3>
                <span style={{color: "#ff6b35", fontSize: "12px", textTransform: "uppercase", letterSpacing: "1px"}}>Más Solicitado</span>
                <ul className="category-list">
                  <li><Link to="/service-details">Sitios Web a Medida</Link></li>
                  <li><Link to="/service-details">Webflow & Next.js</Link></li>
                  <li><Link to="/service-details">Diseño Responsivo</Link></li>
                </ul>
              </div>
              <div className="link-box">
                <Link to="/service-details"><img src="assets/images/icons/icon-34.png" alt="" /></Link>
              </div>
              <div className="image-content">
                <figure className="image"><img src="assets/images/portfolio/portfolio-1.png" alt="" /></figure>
              </div>
            </div>
            <div className="portfolio-block-four">
              <div className="text-box">
                <h3><Link to="/service-details">Identidad de Marca y Logo</Link></h3>
                <span style={{color: "#4ecdc4", fontSize: "12px", textTransform: "uppercase", letterSpacing: "1px"}}>Branding</span>
                <ul className="category-list">
                  <li><Link to="/service-details">Diseño de Logo</Link></li>
                  <li><Link to="/service-details">Sistemas de Color</Link></li>
                  <li><Link to="/service-details">Guías de Marca</Link></li>
                </ul>
              </div>
              <div className="link-box">
                <Link to="/service-details"><img src="assets/images/icons/icon-34.png" alt="" /></Link>
              </div>
              <div className="image-content">
                <figure className="image"><img src="assets/images/portfolio/portfolio-1.png" alt="" /></figure>
              </div>
            </div>
            <div className="portfolio-block-four">
              <div className="text-box">
                <h3><Link to="/service-details">Landing Pages y Conversión</Link></h3>
                <span style={{color: "#ffd93d", fontSize: "12px", textTransform: "uppercase", letterSpacing: "1px"}}>Alta Conversión</span>
                <ul className="category-list">
                  <li><Link to="/service-details">SEO Optimizado</Link></li>
                  <li><Link to="/service-details">Core Web Vitals 90+</Link></li>
                  <li><Link to="/service-details">Listo para Convertir</Link></li>
                </ul>
              </div>
              <div className="link-box">
                <Link to="/service-details"><img src="assets/images/icons/icon-34.png" alt="" /></Link>
              </div>
              <div className="image-content">
                <figure className="image"><img src="assets/images/portfolio/portfolio-1.png" alt="" /></figure>
              </div>
            </div>
            <div className="portfolio-block-four">
              <div className="text-box">
                <h3><Link to="/service-details">E-commerce y Tiendas Online</Link></h3>
                <span style={{color: "#6bcf7f", fontSize: "12px", textTransform: "uppercase", letterSpacing: "1px"}}>Vende Más</span>
                <ul className="category-list">
                  <li><Link to="/service-details">Shopify</Link></li>
                  <li><Link to="/service-details">Desarrollo a Medida</Link></li>
                  <li><Link to="/service-details">Listo para Vender</Link></li>
                </ul>
              </div>
              <div className="link-box">
                <Link to="/service-details"><img src="assets/images/icons/icon-34.png" alt="" /></Link>
              </div>
              <div className="image-content">
                <figure className="image"><img src="assets/images/portfolio/portfolio-1.png" alt="" /></figure>
              </div>
            </div>
          </div>
          <div className="lower-link-box text-center"><Link to="/contact">Inicia Tu Proyecto →</Link></div>
        </div>
      </section>
    </>
  );
};

export default PortfolioHomeOne;