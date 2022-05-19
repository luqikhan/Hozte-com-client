import React from "react";

const Pricing = (props) => {
  const { children } = props;

  return (
    <section className="appie-pricing-2-area pt-20 pb-45">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 pt-40">
            <div className="tab-content" id="pills-tabContent">
              <div
                className="tab-pane fade show active"
                id="pills-home"
                role="tabpanel"
                aria-labelledby="pills-home-tab"
              >
                <div className="row pricing-section">{children}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
