import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

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
                  <Anchor href="#" onClick={(e) => e.preventDefault()}>
                    <i className="fa fa-times"></i>
                  </Anchor>
                </div>
                <div className="offcanvas-brand text-center mb-40">
                  {/* <img
                    src="assets/images/logo.png"
                    alt="logo-png"
                    style={{ height: 64 }}
                  /> */}
                </div>
                <div id="menu" className="text-left ">
                  <ul className="offcanvas_main_menu">
                    <li className="menu-item-has-children active item-close">
                      <NavLink to="/">Home</NavLink>
                    </li>
                    <li className="menu-item-has-children item-close">
                      <NavLink to="/aboutus">About Us</NavLink>
                    </li>
                    <li className="menu-item-has-children">
                      <NavLink to="/ourservices">Our Services</NavLink>
                      <ul className="sub-menu">
                        <li>
                          <NavLink to="/ourservices">
                            Story writing for kids
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/ourservices">
                            Children’s book designing
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/ourservices">
                            Book Layout Design
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/ourservices">
                            Perfectly Publishing on Amazon KDP
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/ourservices">
                            YouTube Video Content Creation
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/ourservices">Website Designing</NavLink>
                        </li>
                        <li>
                          <NavLink to="/ourservices">App Designing</NavLink>
                        </li>
                      </ul>
                    </li>

                    {/* packages start */}

                    <li className="menu-item-has-children">
                      <NavLink to="/packages/storywriting">Packages</NavLink>
                      <ul className="sub-menu">
                        <li>
                          <NavLink to="/packages/storywriting">
                            Story writing for kids
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/packages/bookdesigning">
                            Children’s book designing
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/packages/bookdesigning">
                            Book Layout Design
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/packages/publishingonamazon">
                            Perfectly Publishing on Amazon KDP
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/packages/youtubevideocreation">
                            YouTube Video Content Creation
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/packages/videoanimation">
                            Video Animation
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/packages/website">
                            Website Designing
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/packages/app">App Designing</NavLink>
                        </li>
                      </ul>
                    </li>

                    {/* packages end */}

                    <li className="menu-item-has-children item-close">
                      <NavLink to="/blogs">Blog</NavLink>
                    </li>

                    <li className="menu-item-has-children item-close">
                      <NavLink to="contactus">Contact Us</NavLink>
                    </li>
                    {isAuthenticated && (
                      <li className="menu-item-has-children">
                        <NavLink to="/dashboard">Dashboard</NavLink>
                        <ul className="sub-menu">
                          <li>
                            <NavLink to="/orders">Orders</NavLink>
                          </li>
                          <li>
                            <NavLink to="/create-blog">Create Post</NavLink>
                          </li>
                          <li>
                            <NavLink to="/change-password">
                              Change Password
                            </NavLink>
                          </li>
                        </ul>
                      </li>
                    )}
                  </ul>
                </div>
                {isAuthenticated && (
                  <div>
                    <button
                      type="button"
                      onClick={() => logout()}
                      className="btn btn-outline-primary btn-sm mt-2 item-close"
                    >
                      Logout
                    </button>
                  </div>
                )}
                <div className="offcanvas-social">
                  <ul className="">
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
                      <Anchor href="https://www.instagram.com/hozte77/?hl=en">
                        <i className="fab fa-instagram"></i>
                      </Anchor>
                    </li>
                    <li>
                      <Anchor href="https://www.pinterest.com/hozte77">
                        <i className="fab fa-pinterest"></i>
                      </Anchor>
                    </li>
                  </ul>
                </div>
                <div className="footer-widget-info">
                  <ul>
                    <li>
                      <Anchor href="#">
                        <i className="fal fa-envelope"></i> contact@hozte.com
                      </Anchor>
                    </li>
                    <li>
                      <Anchor href="#">
                        <i className="fal fa-phone"></i> +(92) 3110879239
                      </Anchor>
                    </li>
                    <li>
                      <Anchor href="#">
                        <i className="fal fa-map-marker-alt"></i> Duranpur
                        shorkot Pakistan
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
                  <NavLink to="/">
                    <img
                      src="assets/images/logo-dark.png "
                      alt="logo-png"
                      style={{ height: 64 }}
                    />
                  </NavLink>
                </div>
              </div>
              <div className="col-lg-6 col-md-1 col-sm-1 order-3 order-sm-2">
                <div className="appie-header-main-menu">
                  <ul>
                    <li>
                      <NavLink
                        to="/"
                        style={({ isActive }) => {
                          return {
                            color: isActive ? "#5A7DFD" : "#0e1133",
                          };
                        }}
                      >
                        Home
                      </NavLink>
                    </li>

                    <li>
                      <NavLink
                        to="/aboutus"
                        style={({ isActive }) => {
                          return {
                            color: isActive ? "#5A7DFD" : "#0e1133",
                          };
                        }}
                      >
                        About Us
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/ourservices"
                        style={({ isActive }) => {
                          return {
                            color: isActive ? "#5A7DFD" : "#0e1133",
                          };
                        }}
                      >
                        Our Services <i className="fal fa-angle-down"></i>
                      </NavLink>
                      <ul className="sub-menu">
                        <li>
                          <NavLink to="/ourservices">
                            Story writing for kids{" "}
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/ourservices">
                            Children’s book designing
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/ourservices">
                            Book Layout Design
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/ourservices">
                            Perfectly Publishing on Amazon KDP
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/ourservices">
                            YouTube Video Content Creation
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/ourservices">Website Designing</NavLink>
                        </li>
                        <li>
                          <NavLink to="/ourservices">App Designing</NavLink>
                        </li>
                      </ul>
                    </li>

                    {/* packages start */}
                    {!isAuthenticated && (
                      <li>
                        <NavLink
                          to="/packages/storywriting"
                          style={({ isActive }) => {
                            return {
                              color: isActive ? "#5A7DFD" : "#0e1133",
                            };
                          }}
                        >
                          Packages <i className="fal fa-angle-down"></i>
                        </NavLink>
                        <ul className="sub-menu">
                          <li>
                            <NavLink to="/packages/storywriting">
                              Story writing for kids
                            </NavLink>
                          </li>
                          <li>
                            <NavLink to="/packages/bookdesigning">
                              Children’s book designing
                            </NavLink>
                          </li>
                          <li>
                            <NavLink to="/packages/booklayoutdesigning">
                              Book Layout Design
                            </NavLink>
                          </li>
                          <li>
                            <NavLink to="/packages/publishingonamazon">
                              Perfectly Publishing on Amazon KDP
                            </NavLink>
                          </li>
                          <li>
                            <NavLink to="/packages/videoanimation">
                              Video Animation
                            </NavLink>
                          </li>
                          <li>
                            <NavLink to="/packages/youtubevideocreation">
                              YouTube Video Content Creation
                            </NavLink>
                          </li>
                          <li>
                            <NavLink to="/packages/website">
                              Website Designing
                            </NavLink>
                          </li>
                          <li>
                            <NavLink to="/packages/app">App Designing</NavLink>
                          </li>
                        </ul>
                      </li>
                    )}

                    {/* packages end */}

                    <li>
                      <NavLink
                        to="blogs"
                        style={({ isActive }) => {
                          return {
                            color: isActive ? "#5A7DFD" : "#0e1133",
                          };
                        }}
                      >
                        Blog
                      </NavLink>
                    </li>
                    {isAuthenticated ? (
                      <li>
                        <NavLink
                          to="/dashboard"
                          style={({ isActive }) => {
                            return {
                              color: isActive ? "#5A7DFD" : "#0e1133",
                            };
                          }}
                        >
                          Dashboard <i className="fal fa-angle-down"></i>
                        </NavLink>
                        <ul className="sub-menu">
                          <li>
                            <NavLink to="/orders">Orders</NavLink>
                          </li>
                          <li>
                            <NavLink to="/create-blog">New Blog</NavLink>
                          </li>
                          <li>
                            <NavLink to="/change-password">
                              Change Password
                            </NavLink>
                          </li>
                        </ul>
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
                    <NavLink className="animated_btn ml-30" to="/getaquote">
                      Get a Quote
                    </NavLink>
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
