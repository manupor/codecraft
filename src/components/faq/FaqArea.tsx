"use client";
import { useState } from "react";
import { useLang } from "../../context/LanguageContext";

const FaqArea = () => {
    const { t } = useLang();
    const faq_data = [1, 2, 3, 4, 5, 6].map((id) => ({
      id,
      question: t(`faqpage.q${id}`),
      answer: t(`faqpage.a${id}`),
    }));

    const [faq, setFaq] = useState<number | null>(0);
    const toggleFaq = (i: number) => {
      setFaq(faq === i ? null : i);
    };


  return (
    <>
      <section className="faq-section">
        <div className="pattern" style={{backgroundImage: `url(/assets/images/shape/shape-16.png)`}}></div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12 col-sm-12 left-column">
              <div className="accordion-content">
                <div className="main-title">
                  <h3>{t("faqpage.tag")}</h3>
                  <h2>{t("faqpage.title1")} <br /><span className="gradient-color color-two">{t("faqpage.highlight")}</span></h2>
                </div>
                <ul className="accordion-box">
                  {faq_data.map((item , i) => (
                    <li className={`accordion block ${faq === i ? 'active-block' : ''}`} key={i}>
                      <div className={`acc-btn ${faq === i ? 'active' : ''}`} onClick={() => toggleFaq(i)}>
                        <h3>{item.question}</h3>
                        <div className="icon-box"><i className="icon-13"></i></div>
                      </div>
                      <div className={`acc-content ${faq === i ? 'current' : ''}`}>
                        <div className="content">
                          <p>{item.answer}</p>
                        </div>
                      </div>
                    </li>
                  ))} 
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 right-column">
              <div className="faq-image image-two">
                <figure className="image"><img src="assets/images/resource/faq-2.jpg" alt="" /></figure>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FaqArea;