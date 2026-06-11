const ContactArea = () => {
  return (
    <>
      {/* Contact Info Section */}
      <section className="contact-info-section fix section-padding">
        <div className="container">
          <div className="row g-4">
            <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
              <div className="contact-box-items">
                <div className="icon" style={{ color: "var(--theme)", fontSize: "32px" }}>
                  <i className="fa-solid fa-phone"></i>
                </div>
                <div className="content">
                  <h3>WhatsApp / Teléfono</h3>
                  <p><a href="https://wa.me/50683442522" target="_blank" rel="noopener noreferrer">+506 8344 2522</a></p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".5s">
              <div className="contact-box-items">
                <div className="icon" style={{ color: "var(--theme)", fontSize: "32px" }}>
                  <i className="fa-solid fa-envelope"></i>
                </div>
                <div className="content">
                  <h3>Email</h3>
                  <p><a href="mailto:hello@codecraftt.com">hello@codecraftt.com</a></p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".7s">
              <div className="contact-box-items">
                <div className="icon" style={{ color: "var(--theme)", fontSize: "32px" }}>
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <div className="content">
                  <h3>Ubicación</h3>
                  <p>San José, Curridabat, Costa Rica</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-section fix section-padding pt-0">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
              <div className="contact-content">
                <div className="section-title mb-4">
                  <h6>Hablemos</h6>
                  <h2>Cuéntanos sobre tu <span>proyecto</span></h2>
                </div>
                <p style={{ color: "var(--text)", lineHeight: "1.7" }}>
                  Estamos listos para ayudarte a crear una marca memorable y un sitio web que convierta. Agenda una llamada o escríbenos directamente.
                </p>
                <a href="https://wa.me/50683442522" target="_blank" rel="noopener noreferrer" className="theme-btn mt-4">
                  <i className="fa-brands fa-whatsapp" style={{ marginRight: "8px" }}></i>
                  Escríbenos por WhatsApp
                </a>
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay=".5s">
              <div className="contact-form-box" style={{ background: "var(--bg)", padding: "40px", borderRadius: "12px", border: "1px solid var(--border)" }}>
                <form onSubmit={e => e.preventDefault()}>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input type="text" name="name" placeholder="Nombre*" style={{ width: "100%", padding: "14px 18px", background: "transparent", border: "1px solid var(--border)", borderRadius: "8px", color: "#fff" }} />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input type="email" name="email" placeholder="Email*" style={{ width: "100%", padding: "14px 18px", background: "transparent", border: "1px solid var(--border)", borderRadius: "8px", color: "#fff" }} />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <textarea name="message" placeholder="Cuéntame sobre tu proyecto..." rows={5} style={{ width: "100%", padding: "14px 18px", background: "transparent", border: "1px solid var(--border)", borderRadius: "8px", color: "#fff", resize: "vertical" }}></textarea>
                      </div>
                    </div>
                    <div className="col-12">
                      <button type="submit" className="theme-btn" style={{ width: "100%" }}>Enviar Mensaje</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactArea;