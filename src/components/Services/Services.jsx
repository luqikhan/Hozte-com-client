import React from "react";
import { GiNotebook } from "react-icons/gi";
import { FaAmazon, FaPencilAlt, FaBook } from "react-icons/fa";
const Services = () => {
  return (
    // <!--====== APPIE SERVICES PART START ======-->

    <section className="appie-service-area pt-90 pb-100" id="service">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="appie-section-title text-center">
              <h3 className="appie-title">What can we do</h3>
              <p>The full main areas of our services and skills set..</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div
              className="appie-single-service text-center mt-30 wow animated fadeInUp"
              data-wow-duration="2000ms"
              data-wow-delay="200ms"
            >
              <div className="icon">
                <FaPencilAlt size={24} color="#fff" />
                <span>1</span>
              </div>
              <h4 className="appie-title">Story writing for kids</h4>
              <p>
                Hoztebookwriters house dedicated children’s book illustrators...
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div
              className="appie-single-service text-center mt-30 item-2 wow animated fadeInUp"
              data-wow-duration="2000ms"
              data-wow-delay="400ms"
            >
              <div className="icon">
                <GiNotebook size={24} color="#fff" />
                <span>2</span>
              </div>
              <h4 className="appie-title">Children Book Designing</h4>
              <p>Our writers methodically write a captivating book ...</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div
              className="appie-single-service text-center mt-30 item-3 wow animated fadeInUp"
              data-wow-duration="2000ms"
              data-wow-delay="600ms"
            >
              <div className="icon">
                <FaBook size={24} color="#fff" />
                <span>3</span>
              </div>
              <h4 className="appie-title">Book Layout Design</h4>
              <p>
                Our children’s book layout team is divided into experts of ...
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div
              className="appie-single-service text-center mt-30 item-4 wow animated fadeInUp"
              data-wow-duration="2000ms"
              data-wow-delay="800ms"
            >
              <div className="icon">
                <FaAmazon size={24} color="#fff" />
                <span>4</span>
              </div>
              <h4 className="appie-title">
                Perfectly Publishing on Amazon KDP
              </h4>
              <p>Mucker plastered bugger all mate morish are.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    // <!--====== APPIE SERVICES PART ENDS ======-->
  );
};

export default Services;
