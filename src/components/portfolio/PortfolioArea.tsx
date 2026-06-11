import { Link } from "react-router-dom";

const items = [
  { title: "D-Form Business Strategy", img: "assets/images/portfolio/portfolio-1.jpg", tags: "Branding, Web" },
  { title: "Mark Wide Marketing Strategy", img: "assets/images/portfolio/portfolio-2.jpg", tags: "Marketing, UI/UX" },
  { title: "Decorator Hard Carpet", img: "assets/images/portfolio/portfolio-3.jpg", tags: "E-commerce" },
  { title: "White-line Face Beauty", img: "assets/images/portfolio/portfolio-4.jpg", tags: "Branding" },
  { title: "Website Development", img: "assets/images/portfolio/portfolio-14.jpg", tags: "Development" },
  { title: "Search Engine Optimization", img: "assets/images/portfolio/portfolio-15.jpg", tags: "SEO" },
];

const PortfolioArea = () => {
  return (
    <section className="portfolio-section fix section-bg section-padding">
      <div className="container">
        <div className="row g-4">
          {items.map((item, i) => (
            <div key={i} className="col-lg-6 wow fadeInUp" data-wow-delay={`.${3 + i * 2}s`}>
              <div className="portfolio-box-items">
                <div className="project-wrap">
                  <div className="content">
                    <span>{item.tags}</span>
                    <h3><Link to="/portfolio-details">{item.title}</Link></h3>
                  </div>
                </div>
                <Link to="/portfolio-details" className="radius-btn">
                  <i className="fa-sharp fa-solid fa-arrow-right"></i>
                  Ver Detalles
                </Link>
                <div className="project-hover d-none d-md-block bg-cover" style={{ backgroundImage: `url('${item.img}')` }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioArea;