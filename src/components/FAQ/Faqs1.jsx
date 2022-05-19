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
    <div className="faq-area default-padding-bottom mt-70">
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
                    title="What is hoztewriting?"
                    content="Hoztewriting is a service in which a professional writer helps their client write their book in exchange for money. Ghostwriters rarely take credit for their work. Hence, the book is mostly published under the client’s name as the author."
                    collapseId="collapseOne"
                    cardId="headingOne"
                    expanded={true}
                    show="show"
                    collapsed=""
                  />
                  <Accordion
                    title="How to start writing a children’s book?"
                    content="Select the right audience according to your book concept, and then survey the competition. You will find out essential information that will help you write a more refined book, and give you a sense of the results you want to create."
                    collapseId="collapseTwo"
                    cardId="headingTwo"
                    expanded={false}
                    show=""
                    collapsed="collapsed"
                  />
                  <Accordion
                    title="What is children’s book writing?"
                    content="Children’s books are different in nature, so much so that they can be considered a separate genre. They are designed to steer clear from complex ideas, heavy emotions and adult problems."
                    collapseId="collapseThree"
                    cardId="headingThree"
                    expanded={false}
                    show=""
                    collapsed="collapsed"
                  />
                  <Accordion
                    title="How much does a writer get paid for a children’s picture book?"
                    content="The actual income of children’s picture book authors is difficult to determine. A picture book writer shares about half of their income with the illustrator for a rough estimate, including advance and royalties."
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
