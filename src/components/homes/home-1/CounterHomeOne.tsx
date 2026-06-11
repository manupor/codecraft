import { useLang } from "../../../context/LanguageContext";

const CounterHomeOne = () => {
  const { t } = useLang();
  const services = ["trust.s1", "trust.s2", "trust.s3", "trust.s4", "trust.s5", "trust.s6"];
  return (
    <>
      <section className="funfact-section-two">
        <div className="outer-box">
          <div className="text-center" style={{ marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '1.6rem', fontWeight: 700, marginBottom: '1rem', color: '#fff' }}>{t("trust.heading")}</h3>
            <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.75)', maxWidth: '700px', margin: '0 auto', lineHeight: 1.6 }}>{t("trust.text")}</p>
          </div>
          <div className="row" style={{ marginTop: '1.5rem' }}>
            {services.map((key, i) => (
              <div key={i} className="col-lg-4 col-md-6 col-sm-12 single-column">
                <div className="single-funfact-block" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                  <span style={{ color: '#ff6b35', fontWeight: 700, fontSize: '16px' }}>•</span>
                  <span style={{ color: '#fff', fontSize: '15px', fontWeight: 500 }}>{t(key)}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CounterHomeOne;