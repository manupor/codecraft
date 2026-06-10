
const ClientsHomeTwo = ({style_2} : any) => {
  return (
    <>
      <section className={`clients-section text-center ${style_2 ? 'about-clients' : ''}`}>
        <div className="container">
          <div className="main-title">
            <h2>Confían en CodeCraftt <span className="gradient-color">Empresas Innovadoras</span></h2>
          </div>
          <p style={{maxWidth: '600px', margin: '0 auto 40px', color: '#666'}}>
            Desde startups tecnológicas hasta empresas consolidadas, hemos tenido el privilegio de colaborar con organizaciones que buscan excelencia digital.
          </p>
          <ul className="clients-logo-list">
            <li><a href="#"><img src="assets/images/clients/Book-IQ-Logo_long_WHITE.png" alt="Book IQ" /></a></li>
            <li><a href="#"><img src="assets/images/clients/Clenivax-LOGO.png" alt="Clenivax" /></a></li>
            <li><a href="#"><img src="assets/images/clients/Egsu-logo-versiones_dorado.png" alt="Egsu" /></a></li>
            <li><a href="#"><img src="assets/images/clients/Logo%20Hihub.png" alt="Hihub" /></a></li>
            <li><a href="#"><img src="assets/images/clients/Logo_CG_.png" alt="Chamo Gourmet" /></a></li>
            <li><a href="#"><img src="assets/images/clients/logho med white.png" alt="Med" /></a></li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default ClientsHomeTwo;
