import React from "react";

const Accordion = (props) => {
  const { title, content, cardId, collapseId, expanded, show, collapsed } =
    props;
  return (
    <div className="card">
      <div className="card-header" id={cardId}>
        <h4
          className={`mb-0 ${collapsed}`}
          data-toggle="collapse"
          data-target={`#${collapseId}`}
          aria-expanded={expanded}
          aria-controls={collapseId}
        >
          {title}
        </h4>
      </div>

      <div
        id={collapseId}
        className={`collapse ${show}`}
        aria-labelledby={cardId}
        data-parent="#accordionExample"
      >
        <div className="card-body">
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
};

function Faqs1() {
  return (
    <div className="faq-area default-padding-bottom mt-45">
      <div className="container">
        <div className="appie-section-title text-center mb-40">
          <h3 className="appie-title">Frequently asked questions</h3>
          <p>Find answers to the most Frequently Asked Questions.</p>
        </div>
        <div className="faq-items">
          <div className="row">
            <div className="col-lg-6 thumb wow animated fadeInRight">
              <img src="assets/images/13.png" alt="Shape" />
            </div>

            <div className="col-lg-6 wow animated fadeInLeft">
              <div className="faq-content">
                <div className="accordion" id="accordionExample">
                  <Accordion
                    title="How much does illustration cost?"
                    content="The starting charges at Palmetto Publishing for illustrations are $50 for a full-page, $100 for a half-page, and $110 for a spot illustration. The price of illustration can vary greatly by genre, experience, and intricacy but the average cost for an illustration is $100."
                    collapseId="collapseOne"
                    cardId="headingOne"
                    expanded={true}
                    show="show"
                    collapsed=""
                  />
                  <Accordion
                    title="Do book illustrators get royalties?"
                    content="At Hotze Publishing, our illustrators do not get royalties. When you work with one of our illustrators, you simply pay the cost per illustration and do not have to worry about any future royalties."
                    collapseId="collapseTwo"
                    cardId="headingTwo"
                    expanded={false}
                    show=""
                    collapsed="collapsed"
                  />
                  <Accordion
                    title="Will The illustrations be Original?"
                    content="Yes, The illustrations will be drawn from scratch only as per your story. NO CLIP ARTS are used. They are fully drawn."
                    collapseId="collapseThree"
                    cardId="headingThree"
                    expanded={false}
                    show=""
                    collapsed="collapsed"
                  />
                  <Accordion
                    title="Can the characters be based on real-life persons?"
                    content="Yes Definitely. The characters can be drawn in such a way that they resemble real-life persons."
                    collapseId="collapseFour"
                    cardId="headingFour"
                    expanded={false}
                    show=""
                    collapsed="collapsed"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faqs1;
