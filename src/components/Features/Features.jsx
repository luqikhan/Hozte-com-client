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
  const { title, text, id, active, labeledBy, itemNumber } = props;
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
            <div
              className="appie-features-thumb text-center wow animated fadeInUp"
              data-wow-duration="2000ms"
              data-wow-delay="200ms"
            >
              <img src="assets/images/features-thumb-1.png" alt="" />
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
              <p>
                Reserve your spot by filling a simple brief form, and be
                instantly welcomed by one of our cordial project managers who
                will take in all the information you have to share about your
                book.
              </p>
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
          <h3 className="appie-title">How order will proceed</h3>
          <p>Our 6 Steps for order processing.</p>
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
                  title="Think"
                  itemNumber="2"
                  control="v-pills-think"
                  href="#v-pills-think"
                  id="v-pills-think-tab"
                />
                <AnchorLink
                  title="Explore"
                  itemNumber="3"
                  control="v-pills-explore"
                  href="#v-pills-explore"
                  id="v-pills-explore-tab"
                />
                <AnchorLink
                  title="Execute"
                  itemNumber="4"
                  control="v-pills-execute"
                  href="#v-pills-execute"
                  id="v-pills-execute-tab"
                />
                <AnchorLink
                  title="Test"
                  itemNumber="5"
                  control="v-pills-test"
                  href="#v-pills-test"
                  id="v-pills-test-tab"
                />
                <AnchorLink
                  title="Launch"
                  itemNumber="6"
                  control="v-pills-launch"
                  href="#v-pills-launch"
                  id="v-pills-launch-tab"
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
              />
              <TextSection
                id="v-pills-think"
                labeledBy="v-pills-think-tab"
                title="Think"
                itemNumber="02"
              />
              <TextSection
                id="v-pills-explore"
                labeledBy="v-pills-explore-tab"
                title="Explore"
                itemNumber="03"
              />
              <TextSection
                id="v-pills-execute"
                labeledBy="v-pills-execute-tab"
                title="Execute"
                itemNumber="04"
              />
              <TextSection
                id="v-pills-test"
                labeledBy="v-pills-test-tab"
                title="Test"
                itemNumber="05"
              />
              <TextSection
                id="v-pills-launch"
                labeledBy="v-pills-launch-tab"
                title="Launch"
                itemNumber="06"
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
