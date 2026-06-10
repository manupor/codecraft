 
import "swiper/css/bundle";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

 

const TestimonialHomeOne = () => {
  return (
    <>
      <section className="testimonial-section-three">
        <div className="pattern-box" style={{ backgroundImage: `url(/assets/images/shape/shape-66.png)` }}></div>
        <div className="outer-box">
          <div className="main-title-two text-center">
            <span className="sub-title">(Recomendaciones de colegas en Amazon & AWS)</span>
            <h2>Testimonios</h2>
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
                <p>I worked with Manu at Amazon in the Entertainment space and would recommend his graphic design services. He takes the time to understand the end results we were looking for with different wikis, powerpoints, etc. and delivered products that benefited our community and stakeholders.</p>
                <div className="author-box" style={{justifyContent: 'center'}}>
                  <div className="author-text">
                    <h5>Zac Sims</h5>
                    <span className="designation">Head of FP&A and Design Finance<br />Amazon Music</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="testimonial-block">
                <div className="quote-icon"><img src="assets/images/icons/icon-35.png" alt="" /></div>
                <p>I worked with Manu when he was a digital content creator in the AWS CFO Office – he occasionally worked with senior leadership across AWS FGBS to produce video content, and was a reliable partner to members of my team. He had a good eye for design and added some unique visual effects to take the video to the next level. Manu insists on high standards and has the editing and communication skills to create high-quality, executive-level content.</p>
                <div className="author-box" style={{justifyContent: 'center'}}>
                  <div className="author-text">
                    <h5>Sanjay Singh</h5>
                    <span className="designation">Head of AWS Fintech<br />Amazon Web Services</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="testimonial-block">
                <div className="quote-icon"><img src="assets/images/icons/icon-35.png" alt="" /></div>
                <p>I worked with Manu at AWS and would highly recommend his graphic design services. Manu helped to bring our vision of a training program to the next level with cutting edge visuals and graphics. He was able to take dull PowerPoints covering complex topics and bring them to life, ultimately increasing participation from our user community.</p>
                <div className="author-box" style={{justifyContent: 'center'}}>
                  <div className="author-text">
                    <h5>John Winkler</h5>
                    <span className="designation">Sustainability Controls<br />Amazon</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="testimonial-block">
                <div className="quote-icon"><img src="assets/images/icons/icon-35.png" alt="" /></div>
                <p>Manu is a talented, professional, and hard-working graphic designer with a great, positive, collaborative attitude. We worked together from 2022-2023 at AWS, and he was key to completing a number of high-quality internal and external communications products. I unreservedly recommend him for freelance or full-time work.</p>
                <div className="author-box" style={{justifyContent: 'center'}}>
                  <div className="author-text">
                    <h5>Michael Rettig</h5>
                    <span className="designation">Strategy & Communications<br />IBM | Brookings, Carnegie, Edelman alum</span>
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