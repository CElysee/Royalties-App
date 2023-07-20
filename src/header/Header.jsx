import React from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../assets/images/logo-black.svg";
import trackaLogo from "../assets/images/Trackalogo.png"

const nav_links = [
  {
    path: "/",
    display: "Home",
  },
  {
    path: "#about",
    display: "About Us",
  },
  {
    path: "#features",
    display: "Features",
  },
  {
    path: "/contact",
    display: "Contact Us",
  },
];

const Header = () => {
  return (
    <div id="header" className="rt-dark rt-submenu-light">
      <div className="rt-header-inner">
        <div
          data-elementor-type="section"
          data-elementor-id="1294"
          className="elementor elementor-1294"
        >
          <section
            className="elementor-section elementor-top-section elementor-element elementor-element-4fcd634 elementor-section-full_width elementor-section-stretched elementor-section-height-default elementor-section-height-default"
            data-id="4fcd634"
            data-element_type="section"
            data-settings='{"stretch_section":"section-stretched"}'
          >
            <div className="elementor-container elementor-column-gap-default">
              <div
                className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-4a898f6"
                data-id="4a898f6"
                data-element_type="column"
              >
                <div className="elementor-widget-wrap elementor-element-populated">
                  <section
                    className="elementor-section elementor-inner-section elementor-element elementor-element-6aa372d elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                    data-id="6aa372d"
                    data-element_type="section"
                  >
                    <div className="elementor-container elementor-column-gap-default">
                      <div
                        className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-c9eeafd"
                        data-id="c9eeafd"
                        data-element_type="column"
                      >
                        <div className="elementor-widget-wrap elementor-element-populated">
                          <div
                            className="elementor-element elementor-element-1f3ae17 elementor-widget elementor-widget-radiant-header_custom_menu"
                            data-id="1f3ae17"
                            data-element_type="widget"
                            data-widget_type="radiant-header_custom_menu.default"
                          >
                            <div className="elementor-widget-container">
                              <header className="rt-header logo-left style2 mobile-header-style1 fixed">
                                <div className="rt-header-holder rt-box-holder mobile-logo-column">
                                  <div className="logo-holder">
                                    <div className="logo">
                                      <a href="index.html">
                                        <span className="logo-default">
                                          <img
                                            data-lazyloaded="1"
                                            data-placeholder-resp="126x36"
                                            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjYiIGhlaWdodD0iMzYiIHZpZXdCb3g9IjAgMCAxMjYgMzYiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIHN0eWxlPSJmaWxsOiNmZmZmZmY7ZmlsbC1vcGFjaXR5OiAwLjE7Ii8+PC9zdmc+"
                                            data-src={trackaLogo}
                                            alt="logo"
                                            width="126"
                                            height="36"
                                          />
                                        </span>
                                      </a>
                                    </div>
                                  </div>
                                  <div className="rt-navbar-menu menu-center">
                                    <nav className="apr-nav-menu--main apr-nav-menu--layout-horizontal hover-underline e--pointer-none">
                                      <ul id="menu-main-menu" className="mega-menu stick_menu_home">
                                        {nav_links.map((item, index) => (
                                          <li key={index}
                                            id="menu-item-36931"
                                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-36931"
                                          >
                                            <NavLink to={item.path}>
                                              {item.display}
                                              <span className="arrow">
                                                <svg
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  width="16"
                                                  height="16"
                                                  viewBox="0 0 24 24"
                                                  fill="none"
                                                  stroke="currentColor"
                                                  stroke-width="1.5"
                                                  stroke-linecap="round"
                                                  stroke-linejoin="round"
                                                  className="feather feather-chevron-down"
                                                >
                                                  <polyline points="6 9 12 15 18 9"></polyline>
                                                </svg>
                                              </span>
                                            </NavLink>
                                          </li>
                                        ))}
                                      </ul>
                                    </nav>
                                  </div>
                                  <div className="rt-search-cart-holder">
                                    <div className="rt-search-cart-inner-holder"></div>
                                    <div className="radiantthemes-menu-custom-button visible-lg hidden-xs hidden-md">
                                      <a
                                        className="radiantthemes-menu-custom-button-main"
                                        href="#"
                                        target="_blank"
                                        rel="nofollow"
                                      >
                                        Get Started
                                      </a>
                                    </div>
                                    <div className="menu-icon rt-mobile-hamburger rt-column hidden-lg">
                                      <div className="rt-mobile-toggle-holder">
                                        <div className="rt-mobile-toggle">
                                          <span></span>
                                          <span></span>
                                          <span></span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </header>
                              <header className="rt-header logo-left style2 mobile-header-style1">
                                <div className="rt-header-holder mobile-logo-column">
                                  <div className="logo-holder">
                                    <div className="logo">
                                      
                                      <Link to={'/'}>
                                      <span className="logo-default">
                                          <img
                                            data-lazyloaded="1"
                                            data-placeholder-resp="126x36"
                                            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjYiIGhlaWdodD0iMzYiIHZpZXdCb3g9IjAgMCAxMjYgMzYiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIHN0eWxlPSJmaWxsOiNmZmZmZmY7ZmlsbC1vcGFjaXR5OiAwLjE7Ii8+PC9zdmc+"
                                            data-src={trackaLogo}
                                            alt="logo"
                                            width="200"
                                            height=""
                                          />
                                        </span>
                                        </Link>
                                    </div>
                                  </div>
                                  <div className="rt-navbar-menu menu-center">
                                    <nav className="apr-nav-menu--main apr-nav-menu--layout-horizontal hover-underline e--pointer-none">
                                      <ul
                                        id="menu-main-menu-1"
                                        className="mega-menu"
                                      >
                                        {nav_links.map((item, index) => (
                                          <li
                                            key={index}
                                            id="menu-item-36931"
                                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-36931"
                                          >
                                            <NavLink to={item.path}>
                                              {item.display}
                                            
                                            </NavLink>
                                          </li>
                                        ))}
                                      </ul>
                                    </nav>
                                  </div>
                                  <div className="rt-search-cart-holder">
                                    <div className="rt-search-cart-inner-holder"></div>
                                    <div className="radiantthemes-menu-custom-button visible-lg hidden-xs hidden-md">
                                      <a
                                        className="radiantthemes-menu-custom-button-main"
                                        href="#"
                                        target="_blank"
                                        rel="nofollow"
                                      >
                                        Get started
                                      </a>
                                    </div>
                                    <div className="menu-icon rt-mobile-hamburger rt-column hidden-lg">
                                      <div className="rt-mobile-toggle-holder">
                                        <div className="rt-mobile-toggle">
                                          <span></span>
                                          <span></span>
                                          <span></span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </header>
                              <nav id="mobile-menu" className="side-panel">
                                <header className="side-panel-header">
                                  <span>
                                    <img
                                      data-lazyloaded="1"
                                      data-placeholder-resp="126x36"
                                      src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjYiIGhlaWdodD0iMzYiIHZpZXdCb3g9IjAgMCAxMjYgMzYiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIHN0eWxlPSJmaWxsOiNmZmZmZmY7ZmlsbC1vcGFjaXR5OiAwLjE7Ii8+PC9zdmc+"
                                      data-src={trackaLogo}
                                      alt="logo"
                                      width="126"
                                      height="36"
                                    />
                                  </span>
                                  <div
                                    className="rt-toggle-close rt-close-btn"
                                    title="Close"
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      version="1.1"
                                      x="0"
                                      y="0"
                                      width="12"
                                      height="12"
                                      viewBox="1.1 1.1 12 12"
                                      enableBackground="new 1.1 1.1 12 12"
                                      xmlSpace="preserve"
                                    >
                                      <path d="M8.3 7.1l4.6-4.6c0.3-0.3 0.3-0.8 0-1.2 -0.3-0.3-0.8-0.3-1.2 0L7.1 5.9 2.5 1.3c-0.3-0.3-0.8-0.3-1.2 0 -0.3 0.3-0.3 0.8 0 1.2L5.9 7.1l-4.6 4.6c-0.3 0.3-0.3 0.8 0 1.2s0.8 0.3 1.2 0L7.1 8.3l4.6 4.6c0.3 0.3 0.8 0.3 1.2 0 0.3-0.3 0.3-0.8 0-1.2L8.3 7.1z"></path>
                                    </svg>
                                  </div>
                                </header>
                                <div className="side-panel-inner mobile-side-panel-inner">
                                  <div className="mobile-menu-top">
                                    <ul
                                      id="menu-main-menu-2"
                                      className="rt-mobile-menu"
                                    >
                                        {nav_links.map((item, index) => (
                                          <li
                                            key={index}
                                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-36931"
                                          >
                                            <NavLink to={item.path}>
                                              {item.display}
                                            </NavLink>
                                          </li>
                                        ))}
                                    </ul>
                                    <div className="rt-search-cart-holder"></div>
                                  </div>
                                </div>
                              </nav>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Header;
