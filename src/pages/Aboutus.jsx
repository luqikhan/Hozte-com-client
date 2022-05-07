import React from "react";
import { CommonHero } from "../components";

function SectionCard(props) {
  const { icon, title, text, item } = props;
  return (
    <>
      <div className="col-lg-4 col-md-6">
        <div
          className={`appie-single-service-2 appie-single-service-about mt-30 wow animated fadeInUp ${item}`}
          data-wow-duration="2000ms"
          data-wow-delay="200ms"
        >
          <div className="icon">
            <i className={icon}></i>
          </div>
          <h4 className="title">{title}</h4>
          <p>{text}</p>
        </div>
      </div>
    </>
  );
}

const Aboutus = () => {
  return (
    <>
      <CommonHero title="About Us" pageTitle="ABOUT US" />
      {/* <!--====== APPIE ABOUT 3 PART START ======--> */}
      <section className="appie-about-3-area pt-90 pb-90" id="features">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div
                className="appie-about-thumb-3 wow animated fadeInLeft"
                data-wow-duration="2000ms"
                data-wow-delay="400ms"
              >
                <img src="assets/images/hozte/img-3.jpg" alt="about-1-img" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="appie-traffic-title">
                <h3 className="title">HOW WE ARE</h3>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                  Many desktop publishing packages and web page editors now use
                  Lorem Ipsum as their default model text, and a search for
                  'lorem ipsum' will uncover many web sites still in their
                  infancy. Various versions have evolved over the years,
                  sometimes by accident
                </p>
              </div>
            </div>
          </div>
          <div className="row align-items-center mt-100  flex-column-reverse flex-lg-row">
            <div className="col-lg-6">
              <div className="appie-traffic-title">
                <h3 className="title">WHAT WE DO</h3>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                  Many desktop publishing packages and web page editors now use
                  Lorem Ipsum as their default model text, and a search for
                  'lorem ipsum' will uncover many web sites still in their
                  infancy. Various versions have evolved over the years,
                  sometimes by accident
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="appie-about-thumb-3 text-right wow animated fadeInRight"
                data-wow-duration="2000ms"
                data-wow-delay="400ms"
              >
                <img src="assets/images/hozte/14.jpg" alt="about-2-img" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--====== APPIE ABOUT 3 PART ENDS ======--> */}

      <section className="appie-services-2-area  pb-90" id="service">
        <div className="container">
          <div className="row align-items-end">
            <div className="col-lg-6 col-md-8">
              <div className="appie-section-title">
                <h3 className="appie-title">We’re driven by our values</h3>
                <p>Why Hire Our Ghost Writers </p>
              </div>
            </div>
          </div>
          <div className="row">
            <SectionCard
              title="Experienced Book writers"
              text="Get your stories written by our experienced ghostwriters, who make sure to deliver extraordinary copies inked with their creativity."
              icon="fa-solid fa-pen"
              item="item-1"
            />
            <SectionCard
              title="24/7 FREE CONSULTATION"
              text="Our experts are available 24/7 to cater to your queries to ensure quick and effective communication."
              icon="fa-regular fa-clock"
              item="item-2"
            />
            <SectionCard
              title="100% QUALITY ASSURANCE"
              text="All the work is checked and verified by the quality assurance manager before being delivered to you. We never compromise on quality."
              icon="fa-regular fa-file-certificate"
              item="item-3"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Aboutus;
