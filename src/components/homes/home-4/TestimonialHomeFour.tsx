"use client";
import "swiper/css/bundle";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const testimonials = [
  {
    quote: "Manu y su equipo transformaron completamente la imagen de nuestra empresa. El sitio web que crearon es increíblemente rápido y nuestra tasa de conversión aumentó un 40% en el primer mes.",
    name: "Carlos Jiménez",
    role: "CEO, TechStart CR",
  },
  {
    quote: "Trabajar con CodeCraftt fue una experiencia excepcional. Entendieron nuestra visión desde el primer día y la llevaron a otro nivel. Nuestra marca ahora se siente profesional y auténtica.",
    name: "Andrea Mora",
    role: "Fundadora, Studio Bloom",
  },
  {
    quote: "El nivel de detalle y dedicación que Manu pone en cada proyecto es impresionante. Logramos lanzar nuestra plataforma en tiempo récord y con una calidad que superó nuestras expectativas.",
    name: "Diego Solano",
    role: "Co-founder, Nuvelo App",
  },
  {
    quote: "No solo construyeron nuestro sitio web, sino que nos ayudaron a definir toda nuestra estrategia de marca. El retorno de inversión ha sido extraordinario desde el lanzamiento.",
    name: "Valentina Herrera",
    role: "Directora de Marketing, Innova Group",
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