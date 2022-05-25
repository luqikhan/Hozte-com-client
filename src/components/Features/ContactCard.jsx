import React from "react";

function ContactCard() {
  return (
    <section className="appie-signup-area mb-45">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="appie-signup-box">
              <span>Any question feel free to</span>
              <h3 className="title">Contct Us.</h3>
              <div className="row m-auto">
                <div className="col-md-6">
                  <i
                    className="fa fa-envelope"
                    style={{ color: "#fff" }}
                    aria-hidden="true"
                  ></i>{" "}
                  <span className="ml-3">contact@hozte.com</span>
                </div>
                <div className="col-md-6 mt-2">
                  <i
                    className="fa fa-phone"
                    style={{ color: "#fff" }}
                    aria-hidden="true"
                  ></i>
                  <span className="ml-3">+(92) 3110879239</span>
                </div>
              </div>

              <div className="thumb">
                <img src="assets/images/signup-thumb.png" alt="card" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactCard;
