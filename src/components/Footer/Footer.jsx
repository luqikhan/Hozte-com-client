import React from "react";
import { Anchor } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className="appie-footer-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="footer-about-widget">
              <div className="logo">
                <Link to="/">
                  <img
                    src="assets/images/logo-dark.png"
                    alt=""
                    style={{ width: 121, height: 30 }}
                  />
                </Link>
              </div>
              <p>
                At Hozte graphic design agency hands over the eye-catchy and
                impressive!
              </p>
              <Link to="aboutus">
                Read More <i className="fa-solid fa-arrow-right"></i>
              </Link>
              <div className="social mt-30">
                <ul>
                  <li>
                    <Anchor href="https://www.facebook.com/Hozte-116700961018080/">
                      <i className="fab fa-facebook-f"></i>
                    </Anchor>
                  </li>
                  <li>
                    <Anchor href="https://twitter.com/hozte77">
                      <i className="fab fa-twitter"></i>
                    </Anchor>
                  </li>
                  <li>
                    <Anchor href="https://www.pinterest.com/hozte77">
                      <i className="fab fa-pinterest-p"></i>
                    </Anchor>
                  </li>
                  <li>
                    <Anchor href="https://www.linkedin.com/in/ho-zte-68bab7238/">
                      <i className="fab fa-linkedin-in"></i>
                    </Anchor>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-6">
            <div className="footer-navigation">
              <h4 className="title">Company</h4>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/aboutus">About Us</Link>
                </li>
                <li>
                  <Link to="/ourservices">Service</Link>
                </li>
                <li>
                  <Link to="/blogs">Blog</Link>
                </li>
                <li>
                  <Link to="/contactus">Contact</Link>
                </li>
                <li>
                  <Link to="/faqs">Faqs</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="footer-navigation">
              <h4 className="title">Packages</h4>
              <ul>
                <li>
                  <Link to="/packages/storywriting">
                    Story writing for kids
                  </Link>
                </li>
                <li>
                  <Link to="/packages/bookdesigning">
                    Children’s book designing
                  </Link>
                </li>
                <li>
                  <Link to="/packages/booklayoutdesigning">
                    Book Layout Design
                  </Link>
                </li>
                <li>
                  <Link to="/packages/publishingonamazon">
                    Perfectly Publishing on Amazon KDP
                  </Link>
                </li>
                <li>
                  <Link to="/packages/videoanimation">Video Animation</Link>
                </li>
                <li>
                  <Link to="/packages/youtubevideocreation">
                    YouTube Video Content Creation
                  </Link>
                </li>
                <li>
                  <Link to="/packages/website">Website Designing</Link>
                </li>
                <li>
                  <Link to="/packages/app">Mobile App Designing</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="footer-widget-info">
              <h4 className="title">Get In Touch</h4>
              <ul>
                <li>
                  <Anchor href="#">
                    <i className="fa-solid fa-envelope"></i> hozte77@gmail.com
                  </Anchor>
                </li>
                <li>
                  <Anchor href="#">
                    <i className="fa-solid fa-phone"></i> +(92) 3110879239
                  </Anchor>
                </li>
                <li>
                  <Anchor href="#">
                    <i className="fa-solid fa-map-marker-alt"></i>Duranpur
                    shorkot Pakistan
                  </Anchor>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="footer-copyright d-flex align-items-center justify-content-between pt-35">
              <div className="copyright-text">
                <p>Copyright © 2021 Hozte. All rights reserved.</p>
              </div>
              <div className="apps-download-btn">
                <ul>
                  <li>
                    <p>Powered By</p>
                  </li>
                  <li>
                    <Anchor
                      className="item-2"
                      href="https://www.pluslogix.com/"
                    >
                      PlusLogix
                    </Anchor>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="back-to-top">
        <Anchor href="#">
          <i className="fa-solid fa-arrow-up"></i>
        </Anchor>
      </div>
    </section>
  );
};

export default Footer;
