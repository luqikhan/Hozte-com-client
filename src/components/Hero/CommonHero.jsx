import React from "react";

function CommonHero(props) {
  const { title, pageTitle } = props;
  return (
    <>
      {/* <!--====== APPIE HERO PART START ======--> */}
      <section className="appie-hero-area-2">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="appie-section-title text-center">
                <h3 className="appie-title">{title}</h3>
                <h6>
                  HOME / <span>{pageTitle}</span>
                </h6>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-shape-1">
          <img src="assets/images/shape/shape-9.png" alt="" />
        </div>
        <div className="hero-shape-2">
          <img src="assets/images/shape/shape-10.png" alt="" />
        </div>
        <div className="hero-shape-3">
          <img src="assets/images/shape/shape-11.png" alt="" />
        </div>
        <div className="hero-shape-4">
          <img src="assets/images/shape/shape-12.png" alt="" />
        </div>
        <div className="hero-shape-5">
          <img src="assets/images/shape/shape-8.png" alt="" />
        </div>
      </section>
      {/* <!--====== APPIE HERO PART ENDS ======--> */}
    </>
  );
}

export default CommonHero;
