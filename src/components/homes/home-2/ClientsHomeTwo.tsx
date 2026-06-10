import { useLang } from "../../../context/LanguageContext";

const ClientsHomeTwo = ({style_2} : any) => {
  const { t } = useLang();
  return (
    <>
      <section className={`clients-section text-center ${style_2 ? 'about-clients' : ''}`}>
        <div className="container">
          <div className="main-title">
            <h2>{t("clients.title")} <span className="gradient-color">{t("clients.subtitle")}</span></h2>
          </div>
          <p style={{maxWidth: '600px', margin: '0 auto 40px', color: '#666'}}>
            {t("clients.desc")}
          </p>
          <ul className="clients-logo-list">
            <li><a href="#"><img src="assets/images/clients/Book-IQ-Logo_long_WHITE.png" alt="Book IQ" /></a></li>
            <li><a href="#"><img src="assets/images/clients/Clenivax-LOGO.png" alt="Clenivax" /></a></li>
            <li><a href="#"><img src="assets/images/clients/Egsu-logo-versiones_dorado.png" alt="Egsu" /></a></li>
            <li><a href="#"><img src="assets/images/clients/Logo%20Hihub.png" alt="Hihub" /></a></li>
            <li><a href="#"><img src="assets/images/clients/Logo_CG_.png" alt="Chamo Gourmet" /></a></li>
            <li><a href="#"><img src="assets/images/clients/logho med white.png" alt="Med" /></a></li>
            <li><a href="#"><img src="assets/images/clients/mibarra-web.png" alt="Marianela Ibarra" /></a></li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default ClientsHomeTwo;
