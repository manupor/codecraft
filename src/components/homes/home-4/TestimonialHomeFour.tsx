"use client";
import "swiper/css/bundle";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const testimonials = [
  {
    quote: "Trabajé con Manu en Amazon en el área de entretenimiento y recomendaría sus servicios de diseño gráfico. Se toma el tiempo para entender los resultados que buscamos y entregó productos que beneficiaron a nuestra comunidad y stakeholders.",
    name: "Zac Sims",
    role: "Head of FP&A and Design Finance — Amazon Music",
  },
  {
    quote: "Trabajé con Manu cuando era creador de contenido digital en la oficina del CFO de AWS. Tenía muy buen ojo para el diseño y añadió efectos visuales únicos para llevar el video al siguiente nivel. Manu insiste en altos estándares y tiene las habilidades para crear contenido de calidad ejecutiva.",
    name: "Sanjay Singh",
    role: "Head of AWS Fintech — Amazon Web Services",
  },
  {
    quote: "Trabajé con Manu en AWS y recomendaría ampliamente sus servicios de diseño. Manu ayudó a llevar nuestra visión al siguiente nivel con gráficos de vanguardia. Tomó presentaciones aburridas sobre temas complejos y les dio vida, aumentando la participación de nuestra comunidad.",
    name: "John Winkler",
    role: "Sustainability Controls — Amazon",
  },
  {
    quote: "Manu es un diseñador gráfico talentoso, profesional y dedicado, con una actitud positiva y colaborativa. Fue clave para completar una serie de productos de comunicación internos y externos de alta calidad. Lo recomiendo sin reservas para trabajo freelance o de tiempo completo.",
    name: "Michael Rettig",
    role: "Strategy & Communications — IBM | Brookings, Carnegie, Edelman alum",
  },
];

const TestimonialHomeFour = () => {
  return (
    <>
      <section className="testimonial-section">
        <div className="pattern" style={{ backgroundImage: `url(/assets/images/shape/shape-11.png)` }}></div>
        <div className="shape" style={{ backgroundImage: `url(/assets/images/shape/shape-14.png)` }}></div>
        <div className="container">
          <div className="title-box">
            <div className="main-title">
              <h3>Lo Que Dicen Nuestros Clientes</h3>
              <h2>Testimonios <br /><span className="gradient-color">Reales</span></h2>
            </div>
            <p>Cada proyecto es una historia de éxito. Estas son las palabras de quienes confiaron en CodeCraftt para transformar su marca y negocio.</p>
          </div>
          <div className="inner-container">
            <Swiper
              slidesPerView={1}
              spaceBetween={24}
              mousewheel={false}
              speed={1400}
              watchSlidesProgress={true}
              loop={true}
              navigation={{
                nextEl: '.prev-btn',
                prevEl: '.next-btn',
              }}
              autoplay={{
                delay: 5000,
              }}
              modules={[Autoplay, Navigation]}
              breakpoints={{
                1920: { slidesPerView: 2, spaceBetween: 30 },
                1400: { slidesPerView: 2, spaceBetween: 30 },
                900:  { slidesPerView: 2, spaceBetween: 30 },
                700:  { slidesPerView: 1, spaceBetween: 30 },
                0:    { slidesPerView: 1, spaceBetween: 30 },
              }}
              className="testimonial-block-slide">
              {testimonials.map((t, i) => (
                <SwiperSlide key={i} className="swiper-slide">
                  <div className="testimonial-block-one">
                    <div className="block-shape" style={{ backgroundImage: `url(/assets/images/shape/shape-12.png)` }}></div>
                    <div className="block-shape-overlay" style={{ backgroundImage: `url(/assets/images/shape/shape-13.png)` }}></div>
                    <p>"{t.quote}"</p>
                    <div className="clients-box">
                      <div
                        style={{
                          width: '50px',
                          height: '50px',
                          borderRadius: '50%',
                          background: 'linear-gradient(135deg, #6c63ff, #e040fb)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '20px',
                          fontWeight: 700,
                          color: '#fff',
                          flexShrink: 0,
                        }}
                      >
                        {t.name.charAt(0)}
                      </div>
                      <div className="inner">
                        <h5>{t.name}</h5>
                        <span className="designation">{t.role}</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};

export default TestimonialHomeFour;