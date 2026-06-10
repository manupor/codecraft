import { Link } from "react-router-dom";

const CtaHomeFour = () => {
  return (
    <>
      <section className="cta-section">
        <div className="pattern" style={{ backgroundImage: `url(/assets/images/shape/shape-24.png)` }}></div>
        <div className="container">
          <div className="cta-content">
            <div className="shape" style={{ backgroundImage: `url(/assets/images/shape/shape-22.png)` }}></div>
                        <h3>¿Listo para Transformar tu Negocio?</h3>
            <h2>Hablemos de Tu Proyecto.</h2>
            <p>Agenda una llamada estratégica gratuita. En 30 minutos analizaremos tus objetivos,<br />identificaremos oportunidades y te presentaremos un plan de acción claro.</p>
            <div className="btn-box">
              <Link to="/contact" className="primary-btn one gradient-bg white-color"><span>Agendar Llamada</span><i className="icon-1 gradient-color"></i></Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CtaHomeFour;
