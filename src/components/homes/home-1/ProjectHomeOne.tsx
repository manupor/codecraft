 
import { Link } from "react-router-dom";
import "swiper/css/bundle";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

 


const ProjectHomeOne = () => {
  return (
    <>
      <section className="portfolio-section-five">
        <div className="outer-box">
          <div className="main-title text-center">
            <h2>Por que elegir CodeCraftt</h2>
            <p>Por que me eligen para crear marcas y sitios web que venden.</p>
          </div>
          <div className="main-content-box">
            <Swiper
              slidesPerView={4}
              spaceBetween={24}
              mousewheel={false}
              speed={1400} 
              watchSlidesProgress={true}
              loop={true}
              autoplay={{
                delay: 5000
              }}
              pagination={{
                el: '.portfolio-pagination',
                clickable: true
              }}
              modules={[Pagination]}
              breakpoints={
                {
                  1920: {
                    slidesPerView: 4,
                    spaceBetween: 30
                  },
                  1400: {
                    slidesPerView: 4,
                    spaceBetween: 30
                  },
                  900: {
                    slidesPerView: 3,
                    spaceBetween: 30
                  },
                  700: {
                    slidesPerView: 2,
                    spaceBetween: 30
                  },
                  0: {
                    slidesPerView: 1,
                    spaceBetween: 30
                  }
                }
              }
              className="portfolio-block-slide">
              <SwiperSlide className="swiper-slide">
                <div className="portfolio-block-five">
                  <figure className="image"><img src="assets/images/portfolio/portfolio-23.jpg" alt="Diseno primero" /></figure>
                  <div className="text-box">
                    <Link to="/service" className="link">Ver mas</Link>
                    <h3><Link to="/service">Diseno primero</Link></h3>
                    <p>Cada proyecto es liderado por disenadores senior. Creamos marcas y sitios web que lucen premium.</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="portfolio-block-five">
                  <figure className="image"><img src="assets/images/portfolio/portfolio-24.jpg" alt="Lanza rapido" /></figure>
                  <div className="text-box">
                    <Link to="/service" className="link">Ver mas</Link>
                    <h3><Link to="/service">2-4 semanas</Link></h3>
                    <p>Lanza rapido. Luce impecable. Sin revisiones interminables ni burocracia de agencia.</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="portfolio-block-five">
                  <figure className="image"><img src="assets/images/portfolio/portfolio-25.jpg" alt="Hecho para vender" /></figure>
                  <div className="text-box">
                    <Link to="/service" className="link">Ver mas</Link>
                    <h3><Link to="/service">Hecho para vender</Link></h3>
                    <p>Hermoso y hecho para vender. Optimizado para velocidad, SEO y conversion.</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="portfolio-block-five">
                  <figure className="image"><img src="assets/images/portfolio/portfolio-26.jpg" alt="Tecnologias modernas" /></figure>
                  <div className="text-box">
                    <Link to="/service" className="link">Ver mas</Link>
                    <h3><Link to="/service">Tecnologias Modernas</Link></h3>
                    <p>React, Next.js, TypeScript, Node.js, Python, AWS, OpenAI, Flutter.</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="portfolio-block-five">
                  <figure className="image"><img src="assets/images/portfolio/portfolio-24.jpg" alt="Costa Rica" /></figure>
                  <div className="text-box">
                    <Link to="/contact" className="link">Ver mas</Link>
                    <h3><Link to="/contact">EE.UU. y Latinoamerica</Link></h3>
                    <p>Trabajamos con clientes en Estados Unidos y toda Latinoamerica.</p>
                  </div>
                </div>
              </SwiperSlide>
              <div className="portfolio-pagination"></div>
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectHomeOne;