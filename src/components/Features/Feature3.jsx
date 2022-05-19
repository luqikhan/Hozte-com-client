import React from "react";

function Feature3() {
  return (
    <>
      {/* <!--====== APPIE ABOUT PART START ======--> */}

      <section className="appie-about-area mb-90 mt-90">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="appie-about-box wow animated fadeInUp"
                data-wow-duration="2000ms"
                data-wow-delay="200ms"
              >
                <div className="row">
                  <div className="col-lg-6 justify-content-center">
                    <div className="about-thumb ">
                      <img
                        src="assets/images/hozte/books.png"
                        alt="seciton-img"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="appie-about-content">
                      <span>Marketing</span>
                      <h3 className="title">
                        Make a lasting impression with hozte.
                      </h3>
                      <p>
                        Our approach toward complete new book cover design and
                        layout design.
                      </p>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="appie-about-service mt-30">
                          <div className="icon">
                            <i className="fal fa-check"></i>
                          </div>
                          <h4 className="title">Carefully designed</h4>
                          <p>Our design are according to book needs.</p>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="appie-about-service mt-30">
                          <div className="icon">
                            <i className="fal fa-check"></i>
                          </div>
                          <h4 className="title">Eye catching graphics</h4>
                          <p>
                            we make books graphics that are appealing to users.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!--====== APPIE ABOUT PART ENDS ======--> */}
    </>
  );
}

export default Feature3;
