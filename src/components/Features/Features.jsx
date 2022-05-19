import React from "react";
import Anchor from "../Anchor/Anchor";

function AnchorLink(props) {
  const { title, itemNumber, id, href, control, selected, active } = props;
  return (
    <>
      <Anchor
        className={`nav-link ${active}`}
        id={id}
        data-toggle="pill"
        href={href}
        role="tab"
        aria-controls={control}
        aria-selected={selected}
      >
        <i className={`fa-light fa-${itemNumber}`}></i> {title}
      </Anchor>
    </>
  );
}

function TextSection(props) {
  const { title, text, id, active, labeledBy, itemNumber, image } = props;
  return (
    <>
      <div
        className={`tab-pane fade ${active}`}
        id={id}
        role="tabpanel"
        aria-labelledby={labeledBy}
      >
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="appie-hero-thumb">
              <div className="thumb">
                <div
                  className="appie-features-thumb text-center wow animated fadeInUp"
                  data-wow-duration="2000ms"
                  data-wow-delay="200ms"
                >
                  <img src={image} alt="features-img" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div
              className="appie-features-content wow animated fadeInRight"
              data-wow-duration="2000ms"
              data-wow-delay="600ms"
            >
              <span>Step: {itemNumber}</span>
              <h3 className="title">{title}</h3>
              <p>{text}</p>
              <Anchor className="animated_btn" href="#">
                Learn More
              </Anchor>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const Features = () => {
  return (
    <section className="appie-features-area pt-40 " id="features">
      <div className="container">
        <div className="appie-section-title text-center">
          <h3 className="appie-title">
            How your children’s book
            <br /> will proceed.
          </h3>
          <p>Our 5 Steps for order processing.</p>
        </div>
        <div className="row align-items-center pt-45">
          <div className="col-lg-3">
            <div className="appie-features-tabs-btn">
              <div
                className="nav flex-column nav-pills"
                id="v-pills-tab"
                role="tablist"
                aria-orientation="vertical"
              >
                <AnchorLink
                  title="Research"
                  itemNumber="1"
                  active="active"
                  control="v-pills-research"
                  selected
                  href="#v-pills-research"
                  id="v-pills-research-tab"
                />
                <AnchorLink
                  title="Designing"
                  itemNumber="2"
                  control="v-pills-think"
                  href="#v-pills-think"
                  id="v-pills-think-tab"
                />
                <AnchorLink
                  title="Coloring"
                  itemNumber="3"
                  control="v-pills-explore"
                  href="#v-pills-explore"
                  id="v-pills-explore-tab"
                />
                <AnchorLink
                  title="Formating"
                  itemNumber="4"
                  control="v-pills-execute"
                  href="#v-pills-execute"
                  id="v-pills-execute-tab"
                />
                <AnchorLink
                  title="Publishing"
                  itemNumber="5"
                  control="v-pills-test"
                  href="#v-pills-test"
                  id="v-pills-test-tab"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-9">
            <div className="tab-content" id="v-pills-tabContent">
              <TextSection
                id="v-pills-research"
                active="show active"
                labeledBy="v-pills-research-tab"
                title="Research"
                itemNumber="01"
                image="assets/images/research.png"
                text="We will research on given topic and then we'll write description for your children's book."
              />
              <TextSection
                id="v-pills-think"
                labeledBy="v-pills-think-tab"
                title="Designing"
                itemNumber="02"
                image="assets/images/designing.png"
                text="After approval of the description content, we will provide you the sketch of the first page, multiple revisions can be made in the sketch according to the requirement."
              />
              <TextSection
                id="v-pills-explore"
                labeledBy="v-pills-explore-tab"
                title="Coloring"
                itemNumber="03"
                image="assets/images/coloring.png"
                text="After approval of the skecth, we will fill colors in the sketch with limited revisions."
              />
              <TextSection
                id="v-pills-execute"
                labeledBy="v-pills-execute-tab"
                title="Formating"
                image="assets/images/Formating.png"
                itemNumber="04"
                text="We will format the book according to the Amazon requirments. Multiple formats can be prepared if you want to print it to some other places."
              />
              <TextSection
                id="v-pills-test"
                labeledBy="v-pills-test-tab"
                title="Publishing"
                itemNumber="05"
                image="assets/images/publishing.png"
                text="We will do complete research on Amazon KDP for Cover photo, SEO, Printing and Publishing of your Book."
              />
              
            </div>
          </div>
        </div>
      </div>
      <div className="features-shape-1">
        <img src="assets/images/shape/shape-6.png" alt="" />
      </div>
      <div className="features-shape-2">
        <img src="assets/images/shape/shape-7.png" alt="" />
      </div>
      <div className="features-shape-3">
        <img src="assets/images/shape/shape-8.png" alt="" />
      </div>
    </section>
  );
};

export default Features;
