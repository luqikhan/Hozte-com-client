import React from "react";
import { ServiceCard1, CommonHero } from "../components";

export default function Services() {
  return (
    <div>
      <CommonHero title="Our Services" pageTitle="OUR SERVICES" />
      {/* <!--====== APPIE SERVICES PART START ======--> */}

      <section
        className="appie-service-area appie-service-3-area pt-90 pb-100"
        id="service"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="appie-section-title text-center">
                <h3 className="appie-title">What we can do</h3>
                <p>The full main areas of our services and skills set.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <ServiceCard1
              title="Story writing for kids"
              text="Hoztebookwriters house dedicated children’s book illustrators for hire who work ambitiously to design drawings that captivate young readers’ imaginations."
              Icon="fa-solid fa-pen"
              item="item-1"
            />
            <ServiceCard1
              title="Children Book Designing"
              text="Our writers methodically write a captivating book keeping in mind all possible room for illustrations, which are then communicated to our versatile illustrators."
              Icon="fa-solid fa-book"
              item="item-2"
            />
            <ServiceCard1
              title="Book Layout Design"
              text="Our children’s book layout team is divided into experts of each category who specialize in their category like no other."
              Icon="fa-solid fa-book-journal-whills"
              item="item-3"
            />
            <ServiceCard1
              title="Perfectly Publishing on Amazon KDP"
              text="We will take your manuscript and turn it into the best possible version of a full-fledged published book on Amazon KDP."
              Icon="fab fa-amazon"
              item="item-4"
            />
            <ServiceCard1
              title="Video Animation"
              text="We Bring You the Most Advanced Video Animation Production & Techniques from Pros and make any video eyecatching."
              Icon="fa-solid fa-photo-film"
              item="item-5"
            />
            <ServiceCard1
              title="YouTube Video Content Creation"
              text="We have lots of experience in creating stunning and amazing content for many youtube channels and grow thier business."
              Icon="fa-brands fa-youtube"
              item="item-6"
            />
            <ServiceCard1
              title="Website Designing"
              text="Engaging and efficient web design solutions. Transcending convention through innovative web solutions."
              Icon="fa-solid fa-tv"
              item="item-7"
            />
            <ServiceCard1
              title="Mobile Application Design"
              text="We will design an android mobile app, ios mobile app, services on Behalf of hozte."
              Icon="fa-solid fa-mobile-screen-button"
              item="item-8"
            />
          </div>
        </div>
      </section>

      {/* <FeaturesSection3 /> */}

      {/* <!--====== APPIE SERVICES PART ENDS ======--> */}
    </div>
  );
}
