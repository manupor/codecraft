import { Link } from "react-router-dom";
import { useLang } from "../../../context/LanguageContext";



const PortfolioHomeOne = () => {
  const { t } = useLang();
  return (
    <>
      <section className="portfolio-section-four">
        <div className="pattern-box" style={{ backgroundImage: `url(/assets/images/shape/shape-66.png)` }}></div>
        <div className="outer-box">
          <div className="title-box text-center">
            <h2>
              <span style={{display: 'block'}}>{t("portfolio.tag")}</span>
              <span style={{display: 'block', fontWeight: 400, fontSize: '0.85em'}}>{t("portfolio.subtitle")}</span>
            </h2>
            <p>{t("portfolio.desc")}</p>
          </div>
          <div className="main-content-box">
            <div className="portfolio-block-four">
              <div className="text-box">
                <h3><Link to="/service-details">{t("portfolio.item1.title")}</Link></h3>
                <span style={{color: "#ff6b35", fontSize: "12px", textTransform: "uppercase", letterSpacing: "1px"}}>{t("portfolio.item1.badge")}</span>
                <ul className="category-list">
                  <li><Link to="/service-details">{t("portfolio.item1.li1")}</Link></li>
                  <li><Link to="/service-details">{t("portfolio.item1.li2")}</Link></li>
                  <li><Link to="/service-details">{t("portfolio.item1.li3")}</Link></li>
                </ul>
              </div>
              <div className="link-box">
                <Link to="/service-details"><img src="assets/images/icons/icon-34.png" alt="" /></Link>
              </div>
            </div>
            <div className="portfolio-block-four">
              <div className="text-box">
                <h3><Link to="/service-details">{t("portfolio.item2.title")}</Link></h3>
                <span style={{color: "#4ecdc4", fontSize: "12px", textTransform: "uppercase", letterSpacing: "1px"}}>{t("portfolio.item2.badge")}</span>
                <ul className="category-list">
                  <li><Link to="/service-details">{t("portfolio.item2.li1")}</Link></li>
                  <li><Link to="/service-details">{t("portfolio.item2.li2")}</Link></li>
                  <li><Link to="/service-details">{t("portfolio.item2.li3")}</Link></li>
                </ul>
              </div>
              <div className="link-box">
                <Link to="/service-details"><img src="assets/images/icons/icon-34.png" alt="" /></Link>
              </div>
            </div>
            <div className="portfolio-block-four">
              <div className="text-box">
                <h3><Link to="/service-details">{t("portfolio.item3.title")}</Link></h3>
                <span style={{color: "#ffd93d", fontSize: "12px", textTransform: "uppercase", letterSpacing: "1px"}}>{t("portfolio.item3.badge")}</span>
                <ul className="category-list">
                  <li><Link to="/service-details">{t("portfolio.item3.li1")}</Link></li>
                  <li><Link to="/service-details">{t("portfolio.item3.li2")}</Link></li>
                  <li><Link to="/service-details">{t("portfolio.item3.li3")}</Link></li>
                </ul>
              </div>
              <div className="link-box">
                <Link to="/service-details"><img src="assets/images/icons/icon-34.png" alt="" /></Link>
              </div>
            </div>
            <div className="portfolio-block-four">
              <div className="text-box">
                <h3><Link to="/service-details">{t("portfolio.item4.title")}</Link></h3>
                <span style={{color: "#6bcf7f", fontSize: "12px", textTransform: "uppercase", letterSpacing: "1px"}}>{t("portfolio.item4.badge")}</span>
                <ul className="category-list">
                  <li><Link to="/service-details">{t("portfolio.item4.li1")}</Link></li>
                  <li><Link to="/service-details">{t("portfolio.item4.li2")}</Link></li>
                  <li><Link to="/service-details">{t("portfolio.item4.li3")}</Link></li>
                </ul>
              </div>
              <div className="link-box">
                <Link to="/service-details"><img src="assets/images/icons/icon-34.png" alt="" /></Link>
              </div>
            </div>
            <div className="portfolio-block-four">
              <div className="text-box">
                <h3><Link to="/service-details">{t("portfolio.item5.title")}</Link></h3>
                <span style={{color: "#e89230", fontSize: "12px", textTransform: "uppercase", letterSpacing: "1px"}}>{t("portfolio.item5.badge")}</span>
                <ul className="category-list">
                  <li><Link to="/service-details">{t("portfolio.item5.li1")}</Link></li>
                  <li><Link to="/service-details">{t("portfolio.item5.li2")}</Link></li>
                  <li><Link to="/service-details">{t("portfolio.item5.li3")}</Link></li>
                </ul>
              </div>
              <div className="link-box">
                <Link to="/service-details"><img src="assets/images/icons/icon-34.png" alt="" /></Link>
              </div>
            </div>
            <div className="portfolio-block-four">
              <div className="text-box">
                <h3><Link to="/service-details">{t("portfolio.item6.title")}</Link></h3>
                <span style={{color: "#3b82f6", fontSize: "12px", textTransform: "uppercase", letterSpacing: "1px"}}>{t("portfolio.item6.badge")}</span>
                <ul className="category-list">
                  <li><Link to="/service-details">{t("portfolio.item6.li1")}</Link></li>
                  <li><Link to="/service-details">{t("portfolio.item6.li2")}</Link></li>
                  <li><Link to="/service-details">{t("portfolio.item6.li3")}</Link></li>
                </ul>
              </div>
              <div className="link-box">
                <Link to="/service-details"><img src="assets/images/icons/icon-34.png" alt="" /></Link>
              </div>
            </div>
          </div>
          <div className="lower-link-box text-center"><Link to="/contacto">{t("portfolio.cta")}</Link></div>
        </div>
      </section>
    </>
  );
};

export default PortfolioHomeOne;