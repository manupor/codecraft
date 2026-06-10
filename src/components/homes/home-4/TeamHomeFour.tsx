import { Link } from "react-router-dom";

const TeamHomeFour = ({style_2} : any) => {
  return (
    <>
      <section className="team-section">
        {style_2 ? null :
        <div className="pattern" style={{ backgroundImage: `url(/assets/images/shape/shape-19.png)` }}></div>
        }
        <div className="container">
          {style_2 ? 
          <div className="main-title text-center">
            <h3>Sobre CodeCraftt</h3>
            <h2>Manu Portuguez <br /><span className="gradient-color">CEO & Sr Full Stack Developer</span></h2>
          </div>
          :
          <div className="main-title text-center">
            <h3>El Fundador</h3>
            <h2>Conoce a <br /><span className="gradient-color">Manu Portuguez</span></h2>
          </div>
          }
          {/* Layout: Foto izquierda - Descripcion derecha */}
          <div className="row align-items-center" style={{marginTop: '50px'}}>
            {/* Foto a la izquierda */}
            <div className="col-lg-5 col-md-6 col-sm-12 block-column">
              <div className="team-block-one" style={{margin: '0 auto', maxWidth: '380px'}}>
                <div className="team-image">
                  <figure className="image">
                    <img src="/photo%202.jpeg" alt="Manu Portuguez" style={{borderRadius: '20px', width: '100%'}} />
                  </figure>
                </div>
                <div className="team-content" style={{textAlign: 'center', marginTop: '20px'}}>
                  <h3><Link to="/">Manu Portuguez</Link></h3>
                  <span className="designation">CEO / Sr Full Stack Developer</span>
                  <div className="team-social" style={{justifyContent: 'center', display: 'flex', marginTop: '15px'}}>
                    <div className="icon-box"><i className="icon-14"></i></div>
                    <ul className="social-links">
                      <li><a href="https://www.linkedin.com/in/manu-portuguez-023849128/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Descripcion a la derecha - TEXTO EN BLANCO */}
            <div className="col-lg-7 col-md-6 col-sm-12 block-column">
              <div className="founder-description" style={{padding: '20px 30px'}}>
                <p style={{fontSize: '18px', lineHeight: '1.9', color: '#ffffff', textAlign: 'left', marginBottom: '20px'}}>
                  Como fundador principal de CodeCraftt, trabajo directamente en cada proyecto, asegurando calidad premium en cada detalle.
                </p>
                <p style={{fontSize: '18px', lineHeight: '1.9', color: '#ffffff', textAlign: 'left', marginBottom: '20px'}}>
                  Cuando un proyecto requiere escalar o especializarse, colaboro con una red seleccionada de desarrolladores senior, diseñadores UX/UI, especialistas en marketing digital y arquitectos cloud.
                </p>
                <p style={{fontSize: '18px', lineHeight: '1.9', color: '#ffffff', textAlign: 'left'}}>
                  Todos con experiencia comprobada en empresas como Amazon AWS, startups de Silicon Valley y agencias internacionales. Esta estructura flexible me permite ofrecerte el mejor talento sin la burocracia ni los costos de una agencia tradicional.
                </p>
                
                <div style={{marginTop: '30px', textAlign: 'left'}}>
                  <Link to="/contact" className="primary-btn one gradient-bg white-color">
                    <span>Trabajemos Juntos</span>
                    <i className="icon-1 gradient-color"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamHomeFour;
