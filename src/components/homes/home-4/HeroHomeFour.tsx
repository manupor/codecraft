"use client";
import "swiper/css/bundle"; 
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
 

const HeroHomeFour = () => {
  return (
    <>
      <section className="hero-section text-center">
        <div className="pattern" style={{ backgroundImage: `url(/assets/images/shape/shape-1.png)` }}></div>
        <div className="container">
          <div className="content-box">
            <div className="shape" style={{ backgroundImage: `url(/assets/images/shape/shape-2.png)` }}></div>
            <h2>Rediscover the Art of<br /><span className="gradient-color">Branding</span> with a Retro Vibe!</h2>
            <p>Creating products with a strong identity. We provide brilliant ideas and <br />adding the world called success brand.</p>
            <div className="btn-box">
              <a href="#" className="primary-btn one gradient-bg white-color"><span>Discover More</span><i className="icon-1 gradient-color"></i></a>
            </div>
          </div>
          <div className="slide-image">
            <div className="clients-box">
              <ul className="clients-image">
                <li><img src="assets/images/resource/clients-1.png" alt="" /></li>
                <li><img src="assets/images/resource/clients-2.png" alt="" /></li>
                <li><img src="assets/images/resource/clients-3.png" alt="" /></li>
                <li><span className="gradient-bg">10K+</span></li>
              </ul>
              <h3>Excellent <span className="gradient-color">40.00+</span> Reviews</h3>
            </div>
            <Swiper
              slidesPerView={1}
              spaceBetween={-300}
              mousewheel={false}
              centeredSlides={true}              
              speed={1400} 
              watchSlidesProgress={true}
              loop={true}
              autoplay={{
                delay: 5000,
              }}
              pagination={{
                el: '.dot-pagination-one',
                clickable: true
              }}
              modules={[Autoplay, Pagination]}
              breakpoints={{
                1024: {
                  slidesPerView: 1,
                  spaceBetween: 30
                },
                800: {
                  slidesPerView: 1,
                  spaceBetween: 30
                },
                600: {
                  slidesPerView: 1,
                  spaceBetween: 30
                },
                0: {
                  slidesPerView: 1,
                  spaceBetween: 30
                }
              }}
              className="hero-image-slide">
              <SwiperSlide className="swiper-slide">
                <figure className="image-box"><img src="assets/images/slider/slider-1.jpg" alt="" /></figure>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <figure className="image-box"><img src="assets/images/slider/slider-2.jpg" alt="" /></figure>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <figure className="image-box"><img src="assets/images/slider/slider-3.jpg" alt="" /></figure>
              </SwiperSlide>
              {/* swiper slider */}
              <SwiperSlide className="swiper-slide">
                <figure className="image-box"><img src="assets/images/slider/slider-2.jpg" alt="" /></figure>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <figure className="image-box"><img src="assets/images/slider/slider-3.jpg" alt="" /></figure>
              </SwiperSlide>
              <div className="dot-pagination-one"></div>
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroHomeFour;