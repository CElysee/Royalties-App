import React from "react";
import logo from "../assets/images/logo-black.svg";
import trackaLogo from "../assets/images/Trackalogo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date();
  const currentYear = year.getFullYear();
  const footerContactPhone = "(250)782384772";
  const footerEmail = "info@tracka.rw";
  const important_links = [
    {
      path: "#about",
      display: "About Us",
    },
    {
      path: "/installation",
      display: "Installation Process",
    },
    {
      path: "/myAccount",
      display: "My Account",
    },
    {
      path: "/privacy_policy",
      display: "Privacy & Policy",
    },
  ];
  const support_links = [
    {
      path: "/",
      display: "Home",
    },
    {
      path: "#features",
      display: "Features",
    },
    {
      path: "/support",
      display: "Support",
    },
  ];
  return (
    <footer class="Fsmart-application-footer wraper_footer custom-footer">
      <div
        data-elementor-type="section"
        data-elementor-id="35633"
        class="elementor elementor-35633"
      >
        <section
          class="elementor-section elementor-top-section elementor-element elementor-element-894ab5a elementor-section-full_width elementor-section-stretched elementor-section-height-default elementor-section-height-default"
          data-id="894ab5a"
          data-element_type="section"
          data-settings='{"stretch_section":"section-stretched","background_background":"classic"}'
        >
          <div class="elementor-background-overlay"></div>
          <div class="elementor-container elementor-column-gap-default">
            <div
              class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-4872006"
              data-id="4872006"
              data-element_type="column"
            >
              <div class="elementor-widget-wrap elementor-element-populated">
                <section
                  class="elementor-section elementor-inner-section elementor-element elementor-element-8881097 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                  data-id="8881097"
                  data-element_type="section"
                >
                  <div class="elementor-container elementor-column-gap-default">
                    <div
                      class="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-7e6303d"
                      data-id="7e6303d"
                      data-element_type="column"
                    >
                      <div class="elementor-widget-wrap elementor-element-populated">
                        <div
                          class="elementor-element elementor-element-4377ff2 elementor-widget elementor-widget-image"
                          data-id="4377ff2"
                          data-element_type="widget"
                          data-widget_type="image.default"
                        >
                          <div class="elementor-widget-container">
                            <img
                              data-lazyloaded="1"
                              src="data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs="
                              data-src={trackaLogo}
                              title="logo-black"
                              alt="Logo Black"
                            />
                          </div>
                        </div>
                        <div
                          class="elementor-element elementor-element-4be1e30 elementor-widget elementor-widget-text-editor"
                          data-id="4be1e30"
                          data-element_type="widget"
                          data-widget_type="text-editor.default"
                        >
                          <div class="elementor-widget-container">
                            A perfect way to track your royalties and earn
                            rewards for your shopping habits. With Tracka, you
                            can view your royalty statements from all of your
                            sources in one place, track your earnings over time,
                            and see where your royalties are coming from.
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      class="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-0deb1cf"
                      data-id="0deb1cf"
                      data-element_type="column"
                    >
                      <div class="elementor-widget-wrap elementor-element-populated">
                        <div
                          class="elementor-element elementor-element-bb80e24 elementor-widget elementor-widget-radiant-custom-heading"
                          data-id="bb80e24"
                          data-element_type="widget"
                          data-widget_type="radiant-custom-heading.default"
                        >
                          <div class="elementor-widget-container">
                            <div class="rt-hover-heading">
                              <div class="rt-title-heading">
                                Support<span class="rt-highlight-txt"></span>
                              </div>
                            </div>
                          </div>
                        </div>
                        {support_links.map((item, index) => (
                          <div
                            key={index}
                            class="elementor-element elementor-element-e8b0071 elementor-icon-list--layout-inline elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
                            data-id="e8b0071"
                            data-element_type="widget"
                            data-widget_type="icon-list.default"
                          >
                            <div class="elementor-widget-container">
                              <ul class="elementor-icon-list-items elementor-inline-items">
                                <li class="elementor-icon-list-item elementor-inline-item">
                                  <Link to={item.path}>
                                    <span class="elementor-icon-list-text">
                                      {item.display}
                                    </span>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div
                      class="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-c4132cc"
                      data-id="c4132cc"
                      data-element_type="column"
                    >
                      <div class="elementor-widget-wrap elementor-element-populated">
                        <div
                          class="elementor-element elementor-element-55ffcf6 elementor-widget__width-initial elementor-widget elementor-widget-radiant-custom-heading"
                          data-id="55ffcf6"
                          data-element_type="widget"
                          data-widget_type="radiant-custom-heading.default"
                        >
                          <div class="elementor-widget-container">
                            <div class="rt-hover-heading">
                              <div class="rt-title-heading">
                                important<span class="rt-highlight-txt"></span>
                              </div>
                            </div>
                          </div>
                        </div>
                        {important_links.map((item, index) => (
                          <div
                            key={index}
                            class="elementor-element elementor-element-d71f87a elementor-icon-list--layout-inline elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
                            data-id="d71f87a"
                            data-element_type="widget"
                            data-widget_type="icon-list.default"
                          >
                            <div class="elementor-widget-container">
                              <ul class="elementor-icon-list-items elementor-inline-items">
                                <li class="elementor-icon-list-item elementor-inline-item">
                                  <Link to={item.path}>
                                    <span class="elementor-icon-list-text"></span>
                                    {item.display}
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div
                      class="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-573fb25"
                      data-id="573fb25"
                      data-element_type="column"
                    >
                      <div class="elementor-widget-wrap elementor-element-populated">
                        <div
                          class="elementor-element elementor-element-944c2a3 elementor-widget__width-initial elementor-widget elementor-widget-radiant-custom-heading"
                          data-id="944c2a3"
                          data-element_type="widget"
                          data-widget_type="radiant-custom-heading.default"
                        >
                          <div class="elementor-widget-container">
                            <div class="rt-hover-heading">
                              <div class="rt-title-heading">
                                get in touch
                                <span class="rt-highlight-txt"></span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <section
                          class="elementor-section elementor-inner-section elementor-element elementor-element-4061f76 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                          data-id="4061f76"
                          data-element_type="section"
                        >
                          <div class="elementor-container elementor-column-gap-default">
                            <div
                              class="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-b4c8114"
                              data-id="b4c8114"
                              data-element_type="column"
                            >
                              <div class="elementor-widget-wrap elementor-element-populated">
                                <div
                                  class="elementor-element elementor-element-3a89f97 elementor-widget__width-initial elementor-view-default elementor-widget elementor-widget-icon"
                                  data-id="3a89f97"
                                  data-element_type="widget"
                                  data-widget_type="icon.default"
                                >
                                  <div class="elementor-widget-container">
                                    <div class="elementor-icon-wrapper">
                                      <div class="elementor-icon">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="23"
                                          height="23"
                                          viewBox="0 0 23 23"
                                          fill="none"
                                        >
                                          <path
                                            d="M4.12627 0.0672027C3.7624 0.161539 3.38955 0.368179 3.00771 0.696109C2.58545 1.05998 1.07158 2.6008 0.824508 2.91974C-0.17725 4.20002 -0.195219 6.19005 0.775094 8.75959C1.95654 11.8996 4.17119 15.0801 6.97431 17.6631C10.8376 21.2254 16.0126 23.5299 18.6765 22.883C19.0718 22.7887 19.7276 22.4832 20.0286 22.2541C20.3341 22.025 22.3645 19.9406 22.5532 19.6666C22.9036 19.159 23.0384 18.4807 22.9036 17.9057C22.7509 17.2633 22.7015 17.2049 20.7474 15.2463C18.7753 13.2742 18.7124 13.2248 18.061 13.0901C17.5444 12.9822 17.0188 13.0766 16.5112 13.3686C16.3944 13.4404 15.8374 13.9481 15.2759 14.5051L14.2561 15.5113L13.9282 15.3406C13.1241 14.9229 12.5311 14.5231 11.6462 13.7953C10.7388 13.0496 9.47197 11.7424 8.77119 10.826C8.26357 10.1611 7.51787 8.93478 7.51338 8.76857C7.51338 8.73712 7.86377 8.36876 8.29052 7.95099C9.18896 7.07502 9.54384 6.66623 9.74599 6.2799C9.99755 5.79025 10.047 5.17033 9.87177 4.65822C9.69658 4.13712 9.52588 3.93947 7.80986 2.21896C6.11181 0.520914 5.85127 0.296304 5.36611 0.130093C5.0292 0.00880423 4.47216 -0.0181489 4.12627 0.0672027ZM5.16845 1.32951C5.29423 1.40138 6.01298 2.0797 6.9788 3.05002C8.72627 4.80197 8.79365 4.88283 8.78916 5.34552C8.78916 5.75431 8.68134 5.89806 7.50888 7.07052C6.91591 7.659 6.39931 8.20255 6.36338 8.27892C6.30947 8.37326 6.29599 8.50353 6.30947 8.72365C6.32295 8.99318 6.35888 9.0965 6.63291 9.64005C7.25283 10.8709 8.07041 11.9535 9.42255 13.3371C10.7657 14.7117 12.1044 15.736 13.4835 16.4457C13.9731 16.6973 14.0675 16.7332 14.2921 16.7287C14.4448 16.7287 14.6065 16.6973 14.7009 16.6479C14.7862 16.6029 15.3433 16.0819 15.9362 15.4934C16.6999 14.7342 17.0727 14.3973 17.2165 14.3344C17.486 14.2131 17.8364 14.2131 18.0835 14.3344C18.353 14.4692 21.529 17.6406 21.6683 17.9192C21.7446 18.0674 21.7761 18.2022 21.7761 18.3953C21.7761 18.858 21.6817 18.9838 20.406 20.2641C19.1436 21.5309 19.0269 21.6162 18.353 21.769C17.7017 21.9127 16.6101 21.7959 15.505 21.468C13.8204 20.9694 11.5563 19.7744 9.69209 18.3998C6.10283 15.7584 3.02119 11.7199 1.74091 7.98693C1.12998 6.21252 1.06259 4.94123 1.52978 3.99787C1.67353 3.69689 1.8083 3.54416 2.74267 2.5963C3.31767 2.01232 3.87021 1.48224 3.96455 1.41486C4.36884 1.13634 4.78213 1.1049 5.16845 1.32951Z"
                                            fill="#FC346A"
                                          ></path>
                                        </svg>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  class="elementor-element elementor-element-a96c3bc elementor-icon-list--layout-inline elementor-widget__width-initial elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
                                  data-id="a96c3bc"
                                  data-element_type="widget"
                                  data-widget_type="icon-list.default"
                                >
                                  <div class="elementor-widget-container">
                                    <ul class="elementor-icon-list-items elementor-inline-items">
                                      <li class="elementor-icon-list-item elementor-inline-item">
                                        <a href={"tel:" + footerContactPhone}>
                                          <span class="elementor-icon-list-text">
                                            {footerContactPhone}
                                          </span>
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </section>
                        <section
                          class="elementor-section elementor-inner-section elementor-element elementor-element-2101ffa elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                          data-id="2101ffa"
                          data-element_type="section"
                        >
                          <div class="elementor-container elementor-column-gap-default">
                            <div
                              class="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-6efc27f"
                              data-id="6efc27f"
                              data-element_type="column"
                            >
                              <div class="elementor-widget-wrap elementor-element-populated">
                                <div
                                  class="elementor-element elementor-element-4a0e942 elementor-widget__width-initial elementor-view-default elementor-widget elementor-widget-icon"
                                  data-id="4a0e942"
                                  data-element_type="widget"
                                  data-widget_type="icon.default"
                                >
                                  <div class="elementor-widget-container">
                                    <div class="elementor-icon-wrapper">
                                      <div class="elementor-icon">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="27"
                                          height="27"
                                          viewBox="0 0 27 27"
                                          fill="none"
                                        >
                                          <path
                                            d="M1.15609 13.8336C1.13288 14.1545 1.01471 14.0917 5.21106 16.0517C7.34812 17.049 9.10874 17.8795 9.12736 17.8983C9.14288 17.9139 9.95192 19.6754 10.9246 21.8085C11.8972 23.9416 12.7311 25.7281 12.7807 25.7782C12.9018 25.9003 13.1823 25.8953 13.3637 25.7651C13.4824 25.6846 13.5295 25.6069 13.6178 25.3704C13.6809 25.2086 15.2478 21.0978 17.1078 16.2309C18.9678 11.3702 20.5127 7.30608 20.5443 7.20647C20.658 6.86409 20.4659 6.60143 20.0919 6.59359C19.8799 6.58644 18.8841 6.94682 11.3975 9.73224C6.74572 11.4639 2.59659 13.0076 2.17198 13.1678C1.32281 13.4821 1.1759 13.5781 1.15609 13.8336ZM10.416 11.1026C14.5589 9.55888 18.0274 8.27407 18.1179 8.24641C18.2802 8.19724 18.1769 8.29966 13.8413 12.6042L9.39614 17.0111L6.17031 15.5104C2.76715 13.9309 2.83248 13.9593 2.86379 13.9282C2.87631 13.9158 6.27307 12.6463 10.416 11.1026ZM18.8565 8.99144C18.7333 9.38677 13.0556 24.1897 13.0276 24.1927C13.012 24.1895 12.3264 22.7154 11.5082 20.9133L10.0168 17.6372L14.462 13.2303C18.8038 8.93199 18.9071 8.82958 18.8565 8.99144Z"
                                            fill="#FC346A"
                                          ></path>
                                        </svg>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  class="elementor-element elementor-element-fe47efa elementor-icon-list--layout-inline elementor-widget__width-initial elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
                                  data-id="fe47efa"
                                  data-element_type="widget"
                                  data-widget_type="icon-list.default"
                                >
                                  <div class="elementor-widget-container">
                                    <ul class="elementor-icon-list-items elementor-inline-items">
                                      <li class="elementor-icon-list-item elementor-inline-item">
                                        <span class="elementor-icon-list-text">
                                          <a
                                            href={
                                              "mailto:" + footerContactPhone
                                            }
                                            class="__cf_email__"
                                          >
                                            {footerEmail}
                                          </a>
                                        </span>
                                      </li>
                                    </ul>
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
                <section
                  class="elementor-section elementor-inner-section elementor-element elementor-element-83f6641 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                  data-id="83f6641"
                  data-element_type="section"
                >
                  <div class="elementor-container elementor-column-gap-default">
                    <div
                      class="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-e3d6f6a"
                      data-id="e3d6f6a"
                      data-element_type="column"
                    >
                      <div class="elementor-widget-wrap elementor-element-populated">
                        <div
                          class="elementor-element elementor-element-f1004a3 elementor-widget elementor-widget-text-editor"
                          data-id="f1004a3"
                          data-element_type="widget"
                          data-widget_type="text-editor.default"
                        >
                          <div class="elementor-widget-container">
                            © {currentYear} Tracka. All rights reserved.
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
    </footer>
  );
};

export default Footer;
