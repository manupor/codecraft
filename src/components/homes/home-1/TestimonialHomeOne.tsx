import { useLang } from "../../../context/LanguageContext";
import "swiper/css/bundle";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

 

const TestimonialHomeOne = () => {
  const { t } = useLang();
  return (
    <>
      <section className="testimonial-section-three">
        <div className="pattern-box" style={{ backgroundImage: `url(/assets/images/shape/shape-66.png)` }}></div>
        <div className="outer-box">
          <div className="main-title-two text-center">
            <span className="sub-title">{t("testimonials.tag")}</span>
            <h2>{t("testimonials.title")}</h2>
          </div>
          <div className="image-layer">
            <figure className="image-1"><img src="assets/images/resource/testimonial-2.png" alt="" /></figure>
            <figure className="image-2"><img src="assets/images/resource/testimonial-3.png" alt="" /></figure>
          </div>
          <Swiper
            slidesPerView={1}
            spaceBetween={24}
            mousewheel={false}
            speed={1400}
            watchSlidesProgress={true}
            loop={true}
            autoplay={{
              delay: 5000
            }}
            modules={[Pagination, Autoplay, Navigation]}
            pagination={{
              el: '.testimonial-pagination',
              clickable: true
            }}
            navigation={{
              nextEl: '.testimonial-next-btn',
              prevEl: '.testimonial-prev-btn',
            }}
            breakpoints={{
              1920: {
                slidesPerView: 1,
                spaceBetween: 30
              },
              1400: {
                slidesPerView: 1,
                spaceBetween: 30
              },
              900: {
                slidesPerView: 1,
                spaceBetween: 30
              },
              700: {
                slidesPerView: 1,
                spaceBetween: 30
              },
              0: {
                slidesPerView: 1,
                spaceBetween: 30
              }
            }}
            className="testimonial-block-slide-two">
            <SwiperSlide className="swiper-slide">
              <div className="testimonial-block">
                <div className="quote-icon"><img src="assets/images/icons/icon-35.png" alt="" /></div>
                <p>{t("testimonials.t1")}</p>
                <div className="author-box" style={{justifyContent: 'center'}}>
                  <div className="author-text">
                    <h5>Zac Sims</h5>
                    <span className="designation">{t("testimonials.r1")}</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="testimonial-block">
                <div className="quote-icon"><img src="assets/images/icons/icon-35.png" alt="" /></div>
                <p>{t("testimonials.t2")}</p>
                <div className="author-box" style={{justifyContent: 'center'}}>
                  <div className="author-text">
                    <h5>Sanjay Singh</h5>
                    <span className="designation">{t("testimonials.r2")}</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="testimonial-block">
                <div className="quote-icon"><img src="assets/images/icons/icon-35.png" alt="" /></div>
                <p>{t("testimonials.t3")}</p>
                <div className="author-box" style={{justifyContent: 'center'}}>
                  <div className="author-text">
                    <h5>John Winkler</h5>
                    <span className="designation">{t("testimonials.r3")}</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="testimonial-block">
                <div className="quote-icon"><img src="assets/images/icons/icon-35.png" alt="" /></div>
                <p>{t("testimonials.t4")}</p>
                <div className="author-box" style={{justifyContent: 'center'}}>
                  <div className="author-text">
                    <h5>Michael Rettig</h5>
                    <span className="designation">{t("testimonials.r4")}</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <div className="swiper-nav">
              <div className="testimonial-prev-btn nav-btn"><img style={{cursor: "pointer"}} src="assets/images/icons/icon-36.png" alt="" /></div>
              <div className="testimonial-next-btn nav-btn"><img style={{cursor: "pointer"}} src="assets/images/icons/icon-37.png" alt="" /></div>
            </div>
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default TestimonialHomeOne;