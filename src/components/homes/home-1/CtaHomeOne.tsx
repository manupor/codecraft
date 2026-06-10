import { Link } from "react-router-dom";

 

const CtaHomeOne = () => {
  return (
    <>
      <section className="cta-section-two">
        <div className="pattern-box" style={{ backgroundImage: `url(/assets/images/shape/shape-68.png)` }}></div>
        <div className="outer-box">
          <div className="main-content-box">
            <h2>¿Listo para destacar?<br />Construyamos una marca<br />que la gente recuerde.</h2>
            <div className="text-box">
              <p>Cuéntanos sobre tu proyecto.<br />Respondemos en menos de 24 horas.</p>
              <Link to="/contact">Inicia Tu Proyecto</Link>
            </div>
            <div className="inner-box">
              <div className="shape" style={{ backgroundImage: `url(/assets/images/shape/shape-69.png)` }}></div>
              <h5>Escríbenos</h5>
              <a href="https://wa.me/50683442522" target="_blank" rel="noopener noreferrer">WhatsApp +506 8344 2522</a>
              <div className="icon-box"><img src="assets/images/icons/icon-38.png" alt="" /></div>
              <ul className="clients-list">
                <li><img src="assets/images/resource/clients-8.png" alt="" /></li>
                <li><img src="assets/images/resource/clients-9.png" alt="" /></li>
                <li><span><img src="assets/images/icons/icon-39.png" alt="" /></span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CtaHomeOne;