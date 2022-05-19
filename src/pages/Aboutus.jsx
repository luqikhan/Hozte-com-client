import React from "react";
import { CommonHero } from "../components";

function SectionCard(props) {
  const { Icon, title, text, item } = props;
  return (
    <>
      <div className="col-lg-4 col-md-6">
        <div
          className={`appie-single-service-2 appie-single-service-about mt-30 wow animated fadeInUp ${item}`}
          data-wow-duration="2000ms"
          data-wow-delay="200ms"
        >
          <div className="icon">
            <img src={Icon} alt="about-icons" />
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
                  Our goal in creating Hozte is to raise your business to the
                  top list of your competitors. We want to create your
                  successful business. Your success is our success. You will get
                  your expecting task 100% unique, amazing, and high-quality. If
                  you are not satisfied with the task, then you can return your
                  100% money. We have a portfolio of the previous task. For your
                  amenity and comfort, you can see our client’s satisfaction.
                </p>
              </div>
            </div>
          </div>
          <div className="row align-items-center mt-100  flex-column-reverse flex-lg-row">
            <div className="col-lg-6">
              <div className="appie-traffic-title">
                <h3 className="title">WHAT WE DO</h3>
                <p>
                  At Hotze graphic design agency hands over the eye-catchy and
                  impressive services that you need. Our award-winning team
                  offers trendy services not only in graphic designing, but also
                  in children’s book illustration, book layout design, Amazon
                  Kindle direct publishing, video animation, YouTube video
                  content creation, website & mobile application designing, and
                  SEO content and copywriting. You will feel proud after getting
                  expert services.
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
                <p>Here're our core values </p>
              </div>
            </div>
          </div>
          <div className="row">
            <SectionCard
              title="Experienced Book writers"
              text="Get your stories written by our experienced ghostwriters, who make sure to deliver extraordinary copies inked with their creativity."
              Icon="assets/images/icon/experience_book_writer.png"
              item="item-1"
            />
            <SectionCard
              title="24/7 FREE CONSULTATION"
              text="Our experts are available 24/7 to cater to your queries to ensure quick and effective communication."
              Icon="assets/images/icon/consultation.png"
              item="item-2"
            />
            <SectionCard
              title="100% QUALITY ASSURANCE"
              text="All the work is checked and verified by the quality assurance manager before being delivered to you. We never compromise on quality."
              Icon="assets/images/icon/quality_assurance.png"
              item="item-3"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Aboutus;
