import Count from "../../../common/Count";
import { useLang } from "../../../context/LanguageContext";

const BrandsHomeTwo = ({style_2} : any) => {
  const { t } = useLang();

  const counter_data = [
    { symbol: "+", count: 10, title: t("brands.counter1.title") },
    { symbol: "+", count: 150, title: t("brands.counter2.title") },
    { symbol: "+", count: 50, title: t("brands.counter3.title") },
  ];

  return (
    <>
      <section className={`brands-section ${style_2 ? 'about-brands' : ''}`}>
        <div className="pattern" style={{ backgroundImage: `url(/assets/images/shape/shape-${style_2 ? '57' : '46'}.png)` }}></div>
        <div className="container">
          <div className="main-title text-center">
            <h2>{t("brands.title")} <br /><span className="gradient-color">{t("brands.highlight")}</span></h2>
          </div>
          <div className="brands-content">
            <div className="text-box">
              <p>{t("brands.p1")}</p>
              <p>{t("brands.p2")}</p>
              <div className="btn-box"><a href="/contacto" className="primary-btn one gradient-bg white-color border-btn">{t("brands.cta")}</a></div>
            </div>
            <div className="fact-content">
              {counter_data.map((item, i) => (
                <div key={i} className="single-item">
                  <div className="count-outer count-box">
                    <span className="odometer" data-count="13">
                      <Count number={item.count} text={item.symbol} />
                      </span> 
                  </div>
                  <h5>{item.title}</h5>
                </div>
              ))} 
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BrandsHomeTwo;