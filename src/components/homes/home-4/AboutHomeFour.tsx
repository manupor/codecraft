"use client";
import { useEffect, useRef } from "react";
import CircleType from "circletype";

const AboutHomeFour = () => {

  const curvedTextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (curvedTextRef.current) {
      new CircleType(curvedTextRef.current)
        .dir(1)
        .radius(70)
        .forceHeight(true)
        .forceWidth(true);
    }
  }, []);



  return (
    <>
      <section className="about-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12 col-sm-12 content-column">
              <div className="about-content">
                <div className="main-title">
                  <h3>About us Branding Agency</h3>
                  <h2>We Provide Brilliant ideas and adding the <span className="gradient-color color-one">World called</span> <span className="gradient-color color-two">success to your brand.</span></h2>
                </div>
                <div className="about-text">
                  <p>Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.</p>
                </div>
                <div className="btn-box">
                  <a href="#" className="primary-btn one gradient-bg white-color border-btn"><span>Explore Details</span><i className="icon-1 gradient-color"></i></a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-md-12 image-column">
              <div className="about-image-box">
                <div className="rotate-text-box">
                  <div className="shape-1" style={{ backgroundImage: `url(/assets/images/shape/shape-4.png)` }}></div>
                  <div className="shape-2" style={{ backgroundImage: `url(/assets/images/shape/shape-5.png)` }}></div>
                  <h2>15</h2>
                  <span ref={curvedTextRef} className="curved-text">Years Of Experience</span>
                </div>
                <div className="about-image">
                  <figure className="image image-1"><img src="assets/images/resource/about-1.jpg" alt="" /></figure>
                  <figure className="image image-2"><img src="assets/images/resource/about-2.jpg" alt="" /></figure>
                  <figure className="image image-3"><img src="assets/images/resource/about-3.jpg" alt="" /></figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutHomeFour;