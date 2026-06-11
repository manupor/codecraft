"use client";
import "swiper/css/bundle";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useLang } from "../../../context/LanguageContext";

const TestimonialHomeFour = () => {
  const { t } = useLang();

  const testimonials = [
    { quote: t("testimonials4.q1"), name: "Zac Sims", role: t("testimonials.r1") },
    { quote: t("testimonials4.q2"), name: "Sanjay Singh", role: t("testimonials.r2") },
    { quote: t("testimonials4.q3"), name: "John Winkler", role: t("testimonials.r3") },
    { quote: t("testimonials4.q4"), name: "Michael Rettig", role: t("testimonials4.r4") },
  ];

  return (
    <>
      <section className="testimonial-section">
        <div className="pattern" style={{ backgroundImage: `url(/assets/images/shape/shape-11.png)` }}></div>
        <div className="shape" style={{ backgroundImage: `url(/assets/images/shape/shape-14.png)` }}></div>
        <div className="container">
          <div className="title-box">
            <div className="main-title">
              <h3>{t("testimonials4.tag")}</h3>
              <h2>{t("testimonials4.title")} <br /><span className="gradient-color">{t("testimonials4.highlight")}</span></h2>
            </div>
            <p>{t("testimonials4.desc")}</p>
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