import React, { Fragment } from "react";
import Anchor from "../Anchor/Anchor";

const FAQ = () => {
  return (
    <Fragment>
      <section className="appie-faq-area pt-90 pb-95">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="appie-section-title text-center">
                <h3 className="appie-title">Frequently asked questions</h3>
                <p>Find answers to the most Frequently Asked Questions.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div
                className="faq-accordion wow fadeInRight mt-30"
                data-wow-duration="1500ms"
              >
                <div
                  className="accrodion-grp wow fadeIn"
                  data-wow-duration="1500ms"
                  data-grp-name="faq-accrodion"
                >
                  <div className="accrodion active">
                    <div className="accrodion-inner">
                      <div className="accrodion-title">
                        <h4>What is hoztewriting?</h4>
                      </div>
                      <div className="accrodion-content">
                        <div className="inner">
                          <p>
                            Hoztewriting is a service in which a professional
                            writer helps their client write their book in
                            exchange for money. Ghostwriters rarely take credit
                            for their work. Hence, the book is mostly published
                            under the client’s name as the author.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accrodion">
                    <div className="accrodion-inner">
                      <div className="accrodion-title">
                        <h4>What is children’s book writing?</h4>
                      </div>
                      <div className="accrodion-content">
                        <div className="inner">
                          <p>
                            Children’s books are different in nature, so much so
                            that they can be considered a separate genre. They
                            are designed to steer clear from complex ideas,
                            heavy emotions and adult problems.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="faq-accordion wow fadeInRight mt-30"
                data-wow-duration="1500ms"
              >
                <div
                  className="accrodion-grp wow fadeIn"
                  data-wow-duration="1500ms"
                  data-grp-name="faq-accrodion"
                >
                  <div className="accrodion ">
                    <div className="accrodion-inner">
                      <div className="accrodion-title">
                        <h4>How to start writing a children’s book?</h4>
                      </div>
                      <div className="accrodion-content">
                        <div className="inner">
                          <p>
                            Select the right audience according to your book
                            concept, and then survey the competition. You will
                            find out essential information that will help you
                            write a more refined book, and give you a sense of
                            the results you want to create.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accrodion  ">
                    <div className="accrodion-inner">
                      <div className="accrodion-title">
                        <h4>
                          How much does a writer get paid for a children’s
                          picture book?
                        </h4>
                      </div>
                      <div className="accrodion-content">
                        <div className="inner">
                          <p>
                            The actual income of children’s picture book authors
                            is difficult to determine. A picture book writer
                            shares about half of their income with the
                            illustrator for a rough estimate, including advance
                            and royalties.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="faq-text text-center pt-40">
                <p>
                  Can't find an answer?
                  <Anchor href="mailto:contact@hozte.com">Email us</Anchor>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default FAQ;
