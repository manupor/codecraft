import { useLang } from "../../context/LanguageContext";

const ContactArea = () => {
  const { t } = useLang();
  return (
    <>
      <section className="contact-section-two padding_top_80">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12 col-sm-12 block-column">
              <div className="contact-content-two">
                <div className="main-title">
                  <h3>{t("contact.tag")}</h3>
                  <h2>{t("contact.title1")} <br /><span className="gradient-color">{t("contact.title2")}</span></h2>
                </div>
                <div className="inner-box">
                  <div className="single-item">
                    <div className="icon-box"><i className="icon-55"></i></div>
                    <h3>{t("contact.email")}</h3>
                    <p><a href="mailto:hello@codecraftt.com">hello@codecraftt.com</a><br /><a href="mailto:manu@manuportuguez.com">manu@manuportuguez.com</a><br /><a href="tel:+50683442522">(+506) 8344 2522</a></p>
                  </div>
                  <div className="single-item">
                    <div className="icon-box"><i className="icon-56"></i></div>
                    <h3>{t("contact.location")}</h3>
                    <p>{t("contact.location.text")}<br />{t("contact.location.country")}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 block-column">
              <div className="contact-form-box">
                <form onSubmit={e => e.preventDefault()}>
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <div className="form-group">
                        <label>{t("contact.form.name")}</label>
                        <input type="text" name="name" />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <div className="form-group">
                        <label>{t("contact.form.email")}</label>
                        <input type="email" name="email" />
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12">
                      <div className="form-group">
                        <label>{t("contact.form.message")}</label>
                        <textarea name="message" placeholder={t("contact.form.placeholder")}></textarea>
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12">
                      <div className="form-group">
                        <button type="submit" className="primary-btn one gradient-bg white-color">{t("contact.form.send")}</button>
                      </div>
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