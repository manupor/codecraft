"use client";
import { useState } from "react";

 
export const faq_data = [
  {
    question: "1. ¿Qué servicios ofrece CodeCraftt?",
    answer:
      "Ofrecemos estrategia de marca, diseño de identidad visual (logo, colores, tipografía), desarrollo web a medida, y marketing digital. Cada proyecto es único — trabajamos directamente contigo desde la estrategia hasta el lanzamiento.",
  },
  {
    question: "2. ¿Cuánto tiempo toma completar un proyecto?",
    answer:
      "Depende del alcance. Un sitio web completo con identidad de marca toma entre 3 y 6 semanas. Proyectos de solo diseño o solo desarrollo pueden estar listos en 1 a 3 semanas. Siempre te damos un cronograma claro desde el inicio.",
  },
  {
    question: "3. ¿Ofrecen soporte después del lanzamiento?",
    answer:
      "Sí. Ofrecemos soporte post-lanzamiento para asegurarnos de que todo funcione perfectamente. También podemos encargarnos del mantenimiento mensual, actualizaciones de contenido y mejoras continuas según tus necesidades.",
  },
];



const FaqHomeFour = () => {

  const [faq, setFaq] = useState<number | null>(0);
    const toggleFaq = (i: number) => {
      setFaq(faq === i ? null : i);
    };


  return (
    <>
      <section className="faq-section">
        <div className="pattern" style={{ backgroundImage: `url(/assets/images/shape/shape-16.png)` }}></div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12 col-sm-12 left-column">
              <div className="accordion-content">
                <div className="main-title">
                  <h3>Preguntas Frecuentes</h3>
                  <h2>Todo lo que Necesitas <br /><span className="gradient-color">Saber</span></h2>
                </div>
                <ul className="accordion-box">
                  {faq_data.map((item, i) => (
                    <li key={i} className={`accordion block ${faq === i ? 'active-block' : ''}`}>
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
              <div className="faq-image">
                <figure className="image"><img src="assets/images/resource/faq-1.jpg" alt="" /></figure>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FaqHomeFour;