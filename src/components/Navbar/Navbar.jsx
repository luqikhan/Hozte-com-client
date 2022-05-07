import React from "react";
import { Link, useNavigate } from "react-router-dom";

import { Anchor } from "../index";

const Navbar = () => {
  const isAuthenticated = localStorage.getItem("token");
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <>
      {/* <!--====== OFFCANVAS MENU PART START ======--> */}

      <div className="off_canvars_overlay"></div>
      <div className="offcanvas_menu">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="offcanvas_menu_wrapper">
                <div className="canvas_close">
                  {/* <Anchor href="javascript:void(0)"> important to change later*/}
                  <Anchor href="#">
                    <i className="fa fa-times"></i>
                  </Anchor>
                </div>
                <div className="offcanvas-brand text-center mb-40">
                  {/* <img src="assets/images/logo.png" alt="logo-png" /> */}
                </div>
                <div id="menu" className="text-left ">
                  <ul className="offcanvas_main_menu">
                    <li className="menu-item-has-children active">
                      <Link to="/">Home</Link>
                    </li>
                    <li className="menu-item-has-children">
                      <Link to="aboutus">About Us</Link>
                    </li>
                    <li className="menu-item-has-children active">
                      <Link to="ourservices">Our Services</Link>
                      <ul className="sub-menu">
                        <li>
                          <Link to="ourservices">Story writing for kids </Link>
                        </li>
                        <li>
                          <Link to="ourservices">
                            Children’s book designing
                          </Link>
                        </li>
                        <li>
                          <Link to="ourservices">Book Layout Design</Link>
                        </li>
                        <li>
                          <Link to="ourservices">
                            Perfectly Publishing on Amazon KDP
                          </Link>
                        </li>
                        <li>
                          <Link to="ourservices">
                            YouTube Video Content Creation
                          </Link>
                        </li>
                        <li>
                          <Link to="ourservices">Website Designing</Link>
                        </li>
                        <li>
                          <Link to="ourservices">App Designing</Link>
                        </li>
                      </ul>
                    </li>

                    <li className="menu-item-has-children active">
                      <Link to="contactus">Contact Us</Link>
                    </li>
                    {isAuthenticated ? (
                      <li className="menu-item-has-children active">
                        <Link to="dashboard">Dashboard</Link>
                      </li>
                    ) : null}
                  </ul>
                </div>
                <div className="offcanvas-social">
                  <ul className="">
                    <li>
                      <Anchor href="#">
                        <i className="fab fa-facebook-f"></i>
                      </Anchor>
                    </li>
                    <li>
                      <Anchor href="$">
                        <i className="fab fa-twitter"></i>
                      </Anchor>
                    </li>
                    <li>
                      <Anchor href="$">
                        <i className="fab fa-instagram"></i>
                      </Anchor>
                    </li>
                    <li>
                      <Anchor href="$">
                        <i className="fab fa-dribbble"></i>
                      </Anchor>
                    </li>
                  </ul>
                </div>
                <div className="footer-widget-info">
                  <ul>
                    <li>
                      <Anchor href="#">
                        <i className="fal fa-envelope"></i> support@appie.com
                      </Anchor>
                    </li>
                    <li>
                      <Anchor href="#">
                        <i className="fal fa-phone"></i> +(642) 342 762 44
                      </Anchor>
                    </li>
                    <li>
                      <Anchor href="#">
                        <i className="fal fa-map-marker-alt"></i> 442 Belle
                        Terre St Floor 7, San Francisco, AV 4206
                      </Anchor>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!--====== OFFCANVAS MENU PART ENDS ======--> */}

      <header className="appie-header-area appie-sticky">
        <div className="container">
          <div className="header-nav-box">
            <div className="row align-items-center">
              <div className="col-lg-2 col-md-4 col-sm-5 col-6 order-1 order-sm-1">
                <div className="appie-logo-box">
                  <Link to="/">
                    <img src="assets/images/logo.png" alt="logo-png" />
                  </Link>
                </div>
              </div>
              <div className="col-lg-6 col-md-1 col-sm-1 order-3 order-sm-2">
                <div className="appie-header-main-menu">
                  <ul>
                    <li>
                      <Link to="/">Home</Link>
                    </li>

                    <li>
                      <Link to="aboutus">About Us</Link>
                    </li>
                    <li>
                      <Link to="ourservices">
                        Our Serivces <i className="fal fa-angle-down"></i>
                      </Link>
                      <ul className="sub-menu">
                        <li>
                          <Link to="ourservices">Story writing for kids </Link>
                        </li>
                        <li>
                          <Link to="ourservices">
                            Children’s book designing
                          </Link>
                        </li>
                        <li>
                          <Link to="ourservices">Book Layout Design</Link>
                        </li>
                        <li>
                          <Link to="ourservices">
                            Perfectly Publishing on Amazon KDP
                          </Link>
                        </li>
                        <li>
                          <Link to="ourservices">
                            YouTube Video Content Creation
                          </Link>
                        </li>
                        <li>
                          <Link to="ourservices">Website Designing</Link>
                        </li>
                        <li>
                          <Link to="ourservices">App Designing</Link>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <Link to="blogs">Blog</Link>
                    </li>

                    <li>
                      <Link to="contactus">Contact Us</Link>
                    </li>
                    {isAuthenticated ? (
                      <li>
                        <Link to="dashboard">Dashboard</Link>
                      </li>
                    ) : null}
                  </ul>
                </div>
              </div>

              {isAuthenticated ? (
                <div className="col-lg-4  col-md-7 col-sm-6 col-6 order-2 order-sm-3">
                  <div className="appie-btn-box text-right">
                    <button className="animated_btn ml-30" onClick={logout}>
                      Logout
                    </button>
                    <div className="toggle-btn ml-30 canvas_open d-lg-none d-block">
                      <i className="fa-solid fa-bars"></i>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="col-lg-4  col-md-7 col-sm-6 col-6 order-2 order-sm-3">
                  <div className="appie-btn-box text-right">
                    <Link className="animated_btn ml-30" to="getaquote">
                      Get a Quote
                    </Link>
                    <div className="toggle-btn ml-30 canvas_open d-lg-none d-block">
                      <i className="fa-solid fa-bars"></i>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
