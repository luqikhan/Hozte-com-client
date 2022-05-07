import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="appie-hero-area">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="appie-hero-content">
              <span>Welcome To Hozte</span>
              <h1 className="appie-title">
                Find a Hoztewriter for Your Next Book.
              </h1>
              <p>
                Are you looking to hire a content writer to write a book? Trust
                our professional hoztewriter with your story.
              </p>
              <ul>
                <li>
                  <Link className="item-2 animated_btn2" to="getaquote">
                    Get a Quote
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="">
              <div className="thumb">
                <img src="assets/images/hozte/1.jpg" alt="" />
              </div>
              {/* <div className="thumb-2">
                <img src="assets/images/hero-thumb-2.png" alt="" />
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <div className="hero-shape-1">
        <img src="assets/images/shape/shape-2.png" alt="" />
      </div>
      <div className="hero-shape-2">
        <img src="assets/images/shape/shape-3.png" alt="" />
      </div>
      <div className="hero-shape-3">
        <img src="assets/images/shape/shape-4.png" alt="" />
      </div>
    </section>
  );
};

export default Hero;
