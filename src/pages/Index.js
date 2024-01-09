import React, { Fragment } from "react";
import HomeMenu from "./homeMenu";
import RegisterFromClub from "./ElementsPAGES/RegisterFromClub";
function Index() {
  return (
    <Fragment>
     
      <header
        id="header"
        className="header fixed-top d-flex align-items-center"
      >
        <HomeMenu />
      </header>
      <section id="hero" className="hero d-flex align-items-center section-bg">
        <div className="container">
          <div className="row justify-content-between gy-5">
            <div className="col-lg-5 order-2 order-lg-1 d-flex flex-column justify-content-center align-items-center align-items-lg-start text-center text-lg-start">
              <h3 data-aos="fade-up">FECAKARATE APPLICATION 2.0</h3>
              <p data-aos="fade-up" data-aos-delay="100">
                BIENVENUE SUR FECAKARATE APP 2.0, APPLICATION DE GESTION DE LA
                FEDERATION CAMEROUNAISE DE KARATE.
              </p>
              <p data-aos="fade-up" data-aos-delay="100">
                WELCOME TO FECAKARATE APP 2.0, THE MANAGEMENT APPLICATION OF THE
                CAMEROON KARATE FEDERATION.
              </p>
              <div className="d-flex" data-aos="fade-up" data-aos-delay="200">
                <a href="#book-a-table" className="btn-book-a-table">
                  inscription
                </a>
                <a
                  href="https://www.youtube.com/watch?v=LXb3EKWsInQ"
                  className="glightbox btn-watch-video d-flex align-items-center"
                >
                  <i className="bi bi-play-circle"></i>
                  <span>Video D'aide</span>
                </a>
              </div>
            </div>
            <div className="col-lg-5 order-1 order-lg-2 text-center text-lg-start">
              <img
                src="assets/img/home.png"
                className="img-fluid"
                width={900}
                alt=""
                data-aos="zoom-out"
                data-aos-delay="300"
              />
            </div>
          </div>
        </div>
      </section>

      <main id="main">
        <section id="about" className="about">
          <div className="container" data-aos="fade-up">
            <div className="section-header">
              <h2>About Us</h2>
              <p>
                Learn More <span>About Us</span>
              </p>
            </div>

            <div className="row gy-4">
              <div
                className="col-lg-7 position-relative about-img"
                style={{ backgroundImage: "url(assets/img/about.jpg)" }}
                data-aos="fade-up"
                data-aos-delay="150"
              >
                <div className="call-us position-absolute">
                  <h4>Book a Table</h4>
                  <p>+1 5589 55488 55</p>
                </div>
              </div>
              <div
                className="col-lg-5 d-flex align-items-end"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="content ps-0 ps-lg-5">
                  <p className="fst-italic">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <ul>
                    <li>
                      <i className="bi bi-check2-all"></i> Ullamco laboris nisi
                      ut aliquip ex ea commodo consequat.
                    </li>
                    <li>
                      <i className="bi bi-check2-all"></i> Duis aute irure dolor
                      in reprehenderit in voluptate velit.
                    </li>
                    <li>
                      <i className="bi bi-check2-all"></i> Ullamco laboris nisi
                      ut aliquip ex ea commodo consequat. Duis aute irure dolor
                      in reprehenderit in voluptate trideta storacalaperda
                      mastiro dolore eu fugiat nulla pariatur.
                    </li>
                  </ul>
                  <p>
                    Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident
                  </p>

                  <div className="position-relative mt-4">
                    <img
                      src="assets/img/about-2.jpg"
                      className="img-fluid"
                      alt=""
                    />
                    <a
                      href="https://www.youtube.com/watch?v=LXb3EKWsInQ"
                      className="glightbox play-btn"
                    ></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="why-us" className="why-us section-bg">
          <div className="container" data-aos="fade-up">
            <div className="row gy-4">
              <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
                <div className="why-box">
                  <h3>FECAKARATE ?</h3>
                  <p>
                  Crée en décembre 1993 la fédération camerounaise de karaté est 
                  l’institution sportive en charge de la gestion administrative du karaté sur tout 
                  l’étendue du territoire camerounais.
                  Elle est sous l’autorité d’un bureau exécutif élu, constitué de :
                  </p>
                  <div className="text-center">
                    <a href="#" className="more-btn">
                    En savoir plus <i className="bx bx-chevron-right"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-8 d-flex align-items-center">
                <div className="row gy-4">
                  <div
                    className="col-xl-4"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    <div className="icon-box d-flex flex-column justify-content-center align-items-center">
                      <i className="bi bi-clipboard-data"></i>
                      <h4>Corporis voluptates officia eiusmod</h4>
                      <p>
                        Consequuntur sunt aut quasi enim aliquam quae harum
                        pariatur laboris nisi ut aliquip
                      </p>
                    </div>
                  </div>

                  <div
                    className="col-xl-4"
                    data-aos="fade-up"
                    data-aos-delay="300"
                  >
                    <div className="icon-box d-flex flex-column justify-content-center align-items-center">
                      <i className="bi bi-gem"></i>
                      <h4>Ullamco laboris ladore pan</h4>
                      <p>
                        Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt
                      </p>
                    </div>
                  </div>

                  <div
                    className="col-xl-4"
                    data-aos="fade-up"
                    data-aos-delay="400"
                  >
                    <div className="icon-box d-flex flex-column justify-content-center align-items-center">
                      <i className="bi bi-inboxes"></i>
                      <h4>Labore consequatur incidid dolore</h4>
                      <p>
                        Aut suscipit aut cum nemo deleniti aut omnis. Doloribus
                        ut maiores omnis facere
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="stats-counter" className="stats-counter">
          <div className="container" data-aos="zoom-out">
            <div className="row gy-4">
              <div className="col-lg-3 col-md-6">
                <div className="stats-item text-center w-100 h-100">
                  <span
                    data-purecounter-start="0"
                    data-purecounter-end="232"
                    data-purecounter-duration="1"
                    className="purecounter"
                  ></span>
                  <p>Clients</p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="stats-item text-center w-100 h-100">
                  <span
                    data-purecounter-start="0"
                    data-purecounter-end="521"
                    data-purecounter-duration="1"
                    className="purecounter"
                  ></span>
                  <p>Projects</p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="stats-item text-center w-100 h-100">
                  <span
                    data-purecounter-start="0"
                    data-purecounter-end="1453"
                    data-purecounter-duration="1"
                    className="purecounter"
                  ></span>
                  <p>Hours Of Support</p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="stats-item text-center w-100 h-100">
                  <span
                    data-purecounter-start="0"
                    data-purecounter-end="32"
                    data-purecounter-duration="1"
                    className="purecounter"
                  ></span>
                  <p>Workers</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="menu" className="menu">
          <div className="container" data-aos="fade-up">
            <div className="section-header">
              <h2>Our Menu</h2>
              <p>
                Check Our <span>Yummy Menu</span>
              </p>
            </div>

            <ul
              className="nav nav-tabs d-flex justify-content-center"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <li className="nav-item">
                <a
                  className="nav-link active show"
                  data-bs-toggle="tab"
                  data-bs-target="#menu-starters"
                >
                  <h4>Starters</h4>
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link"
                  data-bs-toggle="tab"
                  data-bs-target="#menu-breakfast"
                >
                  <h4>Breakfast</h4>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  data-bs-toggle="tab"
                  data-bs-target="#menu-lunch"
                >
                  <h4>Lunch</h4>
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link"
                  data-bs-toggle="tab"
                  data-bs-target="#menu-dinner"
                >
                  <h4>Dinner</h4>
                </a>
              </li>
            </ul>

            <div
              className="tab-content"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="tab-pane fade active show" id="menu-starters">
                <div className="tab-header text-center">
                  <p>Menu</p>
                  <h3>Starters</h3>
                </div>

                <div className="row gy-5">
                  <div className="col-lg-4 menu-item">
                    <a
                      href="assets/img/menu/menu-item-1.png"
                      className="glightbox"
                    >
                      <img
                        src="assets/img/menu/menu-item-1.png"
                        className="menu-img img-fluid"
                        alt=""
                      />
                    </a>
                    <h4>Magnam Tiste</h4>
                    <p className="ingredients">
                      Lorem, deren, trataro, filede, nerada
                    </p>
                    <p className="price">$5.95</p>
                  </div>

                  <div className="col-lg-4 menu-item">
                    <a
                      href="assets/img/menu/menu-item-2.png"
                      className="glightbox"
                    >
                      <img
                        src="assets/img/menu/menu-item-2.png"
                        className="menu-img img-fluid"
                        alt=""
                      />
                    </a>
                    <h4>Aut Luia</h4>
                    <p className="ingredients">
                      Lorem, deren, trataro, filede, nerada
                    </p>
                    <p className="price">$14.95</p>
                  </div>

                  <div className="col-lg-4 menu-item">
                    <a
                      href="assets/img/menu/menu-item-3.png"
                      className="glightbox"
                    >
                      <img
                        src="assets/img/menu/menu-item-3.png"
                        className="menu-img img-fluid"
                        alt=""
                      />
                    </a>
                    <h4>Est Eligendi</h4>
                    <p className="ingredients">
                      Lorem, deren, trataro, filede, nerada
                    </p>
                    <p className="price">$8.95</p>
                  </div>

                  <div className="col-lg-4 menu-item">
                    <a
                      href="assets/img/menu/menu-item-4.png"
                      className="glightbox"
                    >
                      <img
                        src="assets/img/menu/menu-item-4.png"
                        className="menu-img img-fluid"
                        alt=""
                      />
                    </a>
                    <h4>Eos Luibusdam</h4>
                    <p className="ingredients">
                      Lorem, deren, trataro, filede, nerada
                    </p>
                    <p className="price">$12.95</p>
                  </div>

                  <div className="col-lg-4 menu-item">
                    <a
                      href="assets/img/menu/menu-item-5.png"
                      className="glightbox"
                    >
                      <img
                        src="assets/img/menu/menu-item-5.png"
                        className="menu-img img-fluid"
                        alt=""
                      />
                    </a>
                    <h4>Eos Luibusdam</h4>
                    <p className="ingredients">
                      Lorem, deren, trataro, filede, nerada
                    </p>
                    <p className="price">$12.95</p>
                  </div>

                  <div className="col-lg-4 menu-item">
                    <a
                      href="assets/img/menu/menu-item-6.png"
                      className="glightbox"
                    >
                      <img
                        src="assets/img/menu/menu-item-6.png"
                        className="menu-img img-fluid"
                        alt=""
                      />
                    </a>
                    <h4>Laboriosam Direva</h4>
                    <p className="ingredients">
                      Lorem, deren, trataro, filede, nerada
                    </p>
                    <p className="price">$9.95</p>
                  </div>
                </div>
              </div>

              <div className="tab-pane fade" id="menu-breakfast">
                <div className="tab-header text-center">
                  <p>Menu</p>
                  <h3>Breakfast</h3>
                </div>

                <div className="row gy-5">
                  <div className="col-lg-4 menu-item">
                    <a
                      href="assets/img/menu/menu-item-1.png"
                      className="glightbox"
                    >
                      <img
                        src="assets/img/menu/menu-item-1.png"
                        className="menu-img img-fluid"
                        alt=""
                      />
                    </a>
                    <h4>Magnam Tiste</h4>
                    <p className="ingredients">
                      Lorem, deren, trataro, filede, nerada
                    </p>
                    <p className="price">$5.95</p>
                  </div>

                  <div className="col-lg-4 menu-item">
                    <a
                      href="assets/img/menu/menu-item-2.png"
                      className="glightbox"
                    >
                      <img
                        src="assets/img/menu/menu-item-2.png"
                        className="menu-img img-fluid"
                        alt=""
                      />
                    </a>
                    <h4>Aut Luia</h4>
                    <p className="ingredients">
                      Lorem, deren, trataro, filede, nerada
                    </p>
                    <p className="price">$14.95</p>
                  </div>

                  <div className="col-lg-4 menu-item">
                    <a
                      href="assets/img/menu/menu-item-3.png"
                      className="glightbox"
                    >
                      <img
                        src="assets/img/menu/menu-item-3.png"
                        className="menu-img img-fluid"
                        alt=""
                      />
                    </a>
                    <h4>Est Eligendi</h4>
                    <p className="ingredients">
                      Lorem, deren, trataro, filede, nerada
                    </p>
                    <p className="price">$8.95</p>
                  </div>

                  <div className="col-lg-4 menu-item">
                    <a
                      href="assets/img/menu/menu-item-4.png"
                      className="glightbox"
                    >
                      <img
                        src="assets/img/menu/menu-item-4.png"
                        className="menu-img img-fluid"
                        alt=""
                      />
                    </a>
                    <h4>Eos Luibusdam</h4>
                    <p className="ingredients">
                      Lorem, deren, trataro, filede, nerada
                    </p>
                    <p className="price">$12.95</p>
                  </div>

                  <div className="col-lg-4 menu-item">
                    <a
                      href="assets/img/menu/menu-item-5.png"
                      className="glightbox"
                    >
                      <img
                        src="assets/img/menu/menu-item-5.png"
                        className="menu-img img-fluid"
                        alt=""
                      />
                    </a>
                    <h4>Eos Luibusdam</h4>
                    <p className="ingredients">
                      Lorem, deren, trataro, filede, nerada
                    </p>
                    <p className="price">$12.95</p>
                  </div>

                  <div className="col-lg-4 menu-item">
                    <a
                      href="assets/img/menu/menu-item-6.png"
                      className="glightbox"
                    >
                      <img
                        src="assets/img/menu/menu-item-6.png"
                        className="menu-img img-fluid"
                        alt=""
                      />
                    </a>
                    <h4>Laboriosam Direva</h4>
                    <p className="ingredients">
                      Lorem, deren, trataro, filede, nerada
                    </p>
                    <p className="price">$9.95</p>
                  </div>
                </div>
              </div>

              <div className="tab-pane fade" id="menu-lunch">
                <div className="tab-header text-center">
                  <p>Menu</p>
                  <h3>Lunch</h3>
                </div>

                <div className="row gy-5">
                  <div className="col-lg-4 menu-item">
                    <a
                      href="assets/img/menu/menu-item-1.png"
                      className="glightbox"
                    >
                      <img
                        src="assets/img/menu/menu-item-1.png"
                        className="menu-img img-fluid"
                        alt=""
                      />
                    </a>
                    <h4>Magnam Tiste</h4>
                    <p className="ingredients">
                      Lorem, deren, trataro, filede, nerada
                    </p>
                    <p className="price">$5.95</p>
                  </div>

                  <div className="col-lg-4 menu-item">
                    <a
                      href="assets/img/menu/menu-item-2.png"
                      className="glightbox"
                    >
                      <img
                        src="assets/img/menu/menu-item-2.png"
                        className="menu-img img-fluid"
                        alt=""
                      />
                    </a>
                    <h4>Aut Luia</h4>
                    <p className="ingredients">
                      Lorem, deren, trataro, filede, nerada
                    </p>
                    <p className="price">$14.95</p>
                  </div>

                  <div className="col-lg-4 menu-item">
                    <a
                      href="assets/img/menu/menu-item-3.png"
                      className="glightbox"
                    >
                      <img
                        src="assets/img/menu/menu-item-3.png"
                        className="menu-img img-fluid"
                        alt=""
                      />
                    </a>
                    <h4>Est Eligendi</h4>
                    <p className="ingredients">
                      Lorem, deren, trataro, filede, nerada
                    </p>
                    <p className="price">$8.95</p>
                  </div>

                  <div className="col-lg-4 menu-item">
                    <a
                      href="assets/img/menu/menu-item-4.png"
                      className="glightbox"
                    >
                      <img
                        src="assets/img/menu/menu-item-4.png"
                        className="menu-img img-fluid"
                        alt=""
                      />
                    </a>
                    <h4>Eos Luibusdam</h4>
                    <p className="ingredients">
                      Lorem, deren, trataro, filede, nerada
                    </p>
                    <p className="price">$12.95</p>
                  </div>

                  <div className="col-lg-4 menu-item">
                    <a
                      href="assets/img/menu/menu-item-5.png"
                      className="glightbox"
                    >
                      <img
                        src="assets/img/menu/menu-item-5.png"
                        className="menu-img img-fluid"
                        alt=""
                      />
                    </a>
                    <h4>Eos Luibusdam</h4>
                    <p className="ingredients">
                      Lorem, deren, trataro, filede, nerada
                    </p>
                    <p className="price">$12.95</p>
                  </div>

                  <div className="col-lg-4 menu-item">
                    <a
                      href="assets/img/menu/menu-item-6.png"
                      className="glightbox"
                    >
                      <img
                        src="assets/img/menu/menu-item-6.png"
                        className="menu-img img-fluid"
                        alt=""
                      />
                    </a>
                    <h4>Laboriosam Direva</h4>
                    <p className="ingredients">
                      Lorem, deren, trataro, filede, nerada
                    </p>
                    <p className="price">$9.95</p>
                  </div>
                </div>
              </div>

              <div className="tab-pane fade" id="menu-dinner">
                <div className="tab-header text-center">
                  <p>Menu</p>
                  <h3>Dinner</h3>
                </div>

                <div className="row gy-5">
                  <div className="col-lg-4 menu-item">
                    <a
                      href="assets/img/menu/menu-item-1.png"
                      className="glightbox"
                    >
                      <img
                        src="assets/img/menu/menu-item-1.png"
                        className="menu-img img-fluid"
                        alt=""
                      />
                    </a>
                    <h4>Magnam Tiste</h4>
                    <p className="ingredients">
                      Lorem, deren, trataro, filede, nerada
                    </p>
                    <p className="price">$5.95</p>
                  </div>

                  <div className="col-lg-4 menu-item">
                    <a
                      href="assets/img/menu/menu-item-2.png"
                      className="glightbox"
                    >
                      <img
                        src="assets/img/menu/menu-item-2.png"
                        className="menu-img img-fluid"
                        alt=""
                      />
                    </a>
                    <h4>Aut Luia</h4>
                    <p className="ingredients">
                      Lorem, deren, trataro, filede, nerada
                    </p>
                    <p className="price">$14.95</p>
                  </div>

                  <div className="col-lg-4 menu-item">
                    <a
                      href="assets/img/menu/menu-item-3.png"
                      className="glightbox"
                    >
                      <img
                        src="assets/img/menu/menu-item-3.png"
                        className="menu-img img-fluid"
                        alt=""
                      />
                    </a>
                    <h4>Est Eligendi</h4>
                    <p className="ingredients">
                      Lorem, deren, trataro, filede, nerada
                    </p>
                    <p className="price">$8.95</p>
                  </div>

                  <div className="col-lg-4 menu-item">
                    <a
                      href="assets/img/menu/menu-item-4.png"
                      className="glightbox"
                    >
                      <img
                        src="assets/img/menu/menu-item-4.png"
                        className="menu-img img-fluid"
                        alt=""
                      />
                    </a>
                    <h4>Eos Luibusdam</h4>
                    <p className="ingredients">
                      Lorem, deren, trataro, filede, nerada
                    </p>
                    <p className="price">$12.95</p>
                  </div>

                  <div className="col-lg-4 menu-item">
                    <a
                      href="assets/img/menu/menu-item-5.png"
                      className="glightbox"
                    >
                      <img
                        src="assets/img/menu/menu-item-5.png"
                        className="menu-img img-fluid"
                        alt=""
                      />
                    </a>
                    <h4>Eos Luibusdam</h4>
                    <p className="ingredients">
                      Lorem, deren, trataro, filede, nerada
                    </p>
                    <p className="price">$12.95</p>
                  </div>

                  <div className="col-lg-4 menu-item">
                    <a
                      href="assets/img/menu/menu-item-6.png"
                      className="glightbox"
                    >
                      <img
                        src="assets/img/menu/menu-item-6.png"
                        className="menu-img img-fluid"
                        alt=""
                      />
                    </a>
                    <h4>Laboriosam Direva</h4>
                    <p className="ingredients">
                      Lorem, deren, trataro, filede, nerada
                    </p>
                    <p className="price">$9.95</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="testimonials" className="testimonials section-bg">
          <div className="container" data-aos="fade-up">
            <div className="section-header">
              <h2>Testimonials</h2>
              <p>
                What Are They <span>Saying About Us</span>
              </p>
            </div>

            <div
              className="slides-1 swiper"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <div className="row gy-4 justify-content-center">
                      <div className="col-lg-6">
                        <div className="testimonial-content">
                          <p>
                            <i className="bi bi-quote quote-icon-left"></i>
                            Proin iaculis purus consequat sem cure digni ssim
                            donec porttitora entum suscipit rhoncus. Accusantium
                            quam, ultricies eget id, aliquam eget nibh et.
                            Maecen aliquam, risus at semper.
                            <i className="bi bi-quote quote-icon-right"></i>
                          </p>
                          <h3>Saul Goodman</h3>
                          <h4>Ceo &amp; Founder</h4>
                          <div className="stars">
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-2 text-center">
                        <img
                          src="assets/img/testimonials/testimonials-1.jpg"
                          className="img-fluid testimonial-img"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <div className="row gy-4 justify-content-center">
                      <div className="col-lg-6">
                        <div className="testimonial-content">
                          <p>
                            <i className="bi bi-quote quote-icon-left"></i>
                            Export tempor illum tamen malis malis eram quae
                            irure esse labore quem cillum quid cillum eram malis
                            quorum velit fore eram velit sunt aliqua noster
                            fugiat irure amet legam anim culpa.
                            <i className="bi bi-quote quote-icon-right"></i>
                          </p>
                          <h3>Sara Wilsson</h3>
                          <h4>Designer</h4>
                          <div className="stars">
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-2 text-center">
                        <img
                          src="assets/img/testimonials/testimonials-2.jpg"
                          className="img-fluid testimonial-img"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <div className="row gy-4 justify-content-center">
                      <div className="col-lg-6">
                        <div className="testimonial-content">
                          <p>
                            <i className="bi bi-quote quote-icon-left"></i>
                            Enim nisi quem export duis labore cillum quae magna
                            enim sint quorum nulla quem veniam duis minim tempor
                            labore quem eram duis noster aute amet eram fore
                            quis sint minim.
                            <i className="bi bi-quote quote-icon-right"></i>
                          </p>
                          <h3>Jena Karlis</h3>
                          <h4>Store Owner</h4>
                          <div className="stars">
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-2 text-center">
                        <img
                          src="assets/img/testimonials/testimonials-3.jpg"
                          className="img-fluid testimonial-img"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <div className="row gy-4 justify-content-center">
                      <div className="col-lg-6">
                        <div className="testimonial-content">
                          <p>
                            <i className="bi bi-quote quote-icon-left"></i>
                            Quis quorum aliqua sint quem legam fore sunt eram
                            irure aliqua veniam tempor noster veniam enim culpa
                            labore duis sunt culpa nulla illum cillum fugiat
                            legam esse veniam culpa fore nisi cillum quid.
                            <i className="bi bi-quote quote-icon-right"></i>
                          </p>
                          <h3>John Larson</h3>
                          <h4>Entrepreneur</h4>
                          <div className="stars">
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-2 text-center">
                        <img
                          src="assets/img/testimonials/testimonials-4.jpg"
                          className="img-fluid testimonial-img"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-pagination"></div>
            </div>
          </div>
        </section>

        <section id="events" className="events">
          <div className="container-fluid" data-aos="fade-up">
            <div className="section-header">
              <h2>Events</h2>
              <p>
                Share <span>Your Moments</span> In Our Restaurant
              </p>
            </div>

            <div
              className="slides-3 swiper"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="swiper-wrapper">
                <div
                  className="swiper-slide event-item d-flex flex-column justify-content-end"
                  style={{ backgroundImage: "url(assets/img/feca/2.jpeg)" }}
                >
                  {" "}
                  <h3> CULTURE ET TRADITION :</h3>
                  <div className="price align-self-start"></div>
                  <p className="description">
                  Mise en lumière des aspects culturels associés au Karaté, ses différentes branches et ses disciplines associées, ainsi que les traditions et les héritages propres à chaque discipline. Vous y trouverez des articles, des photos et des vidéos sur l'histoire du Karaté, les cérémonies et rituels liés à certaines compétitions, l'impact du karaté sur la société, ainsi que d'autres éléments culturels et traditionnels. Un regard enrichissant est offert  sur la dimension culturelle du monde du Karaté, en mettant en avant son rôle en tant que phénomène sociétal et patrimoine partagé.
                  </p>
                </div>

                <div
                  className="swiper-slide event-item d-flex flex-column justify-content-end"
                  style={{ backgroundImage: "url(assets/img/events-2.jpg)" }}
                >
                  <h3>Private Parties</h3>
                  <div className="price align-self-start">$289</div>
                  <p className="description">
                    In delectus sint qui et enim. Et ab repudiandae inventore
                    quaerat doloribus. Facere nemo vero est ut dolores ea
                    assumenda et. Delectus saepe accusamus aspernatur.
                  </p>
                </div>

                <div
                  className="swiper-slide event-item d-flex flex-column justify-content-end"
                  style={{ backgroundImage: "url(assets/img/events-3.jpg)" }}
                >
                  <h3>Birthday Parties</h3>
                  <div className="price align-self-start">$499</div>
                  <p className="description">
                    Laborum aperiam atque omnis minus omnis est qui assumenda
                    quos. Quis id sit quibusdam. Esse quisquam ducimus officia
                    ipsum ut quibusdam maxime. Non enim perspiciatis.
                  </p>
                </div>
              </div>
              <div className="swiper-pagination"></div>
            </div>
          </div>
        </section>

        <section id="chefs" className="chefs section-bg">
          <div className="container" data-aos="fade-up">
            <div className="section-header">
              <h2>FECAKARATE</h2>
              <p>
                MEMBRES DU <span>BUREAU EXECUTIF</span> 
              </p>
            </div>

            <div className="row gy-4">
              <div
                className="col-lg-4 col-md-6 d-flex align-items-stretch"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="chef-member">
                  <div className="member-img">
                    <img
                      src="assets/img/feca/BE/1.png"
                      width={400}
                      className="img-fluid"
                      alt=""
                    />
                    <div className="social">
                      <a href="">
                        <i className="bi bi-twitter"></i>
                      </a>
                      <a href="">
                        <i className="bi bi-facebook"></i>
                      </a>
                      <a href="">
                        <i className="bi bi-instagram"></i>
                      </a>
                      <a href="">
                        <i className="bi bi-linkedin"></i>
                      </a>
                    </div>
                  </div>
                  <div className="member-info">
                    <h4>Walter White</h4>
                    <span>Master Chef</span>
                    <p>
                      Velit aut quia fugit et et. Dolorum ea voluptate vel
                      tempore tenetur ipsa quae aut. Ipsum exercitationem iure
                      minima enim corporis et voluptate.
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="col-lg-4 col-md-6 d-flex align-items-stretch"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="chef-member">
                  <div className="member-img">
                  <img
                      src="assets/img/feca/BE/1.png"
                      width={400}
                      className="img-fluid"
                      alt=""
                    />
                    <div className="social">
                      <a href="">
                        <i className="bi bi-twitter"></i>
                      </a>
                      <a href="">
                        <i className="bi bi-facebook"></i>
                      </a>
                      <a href="">
                        <i className="bi bi-instagram"></i>
                      </a>
                      <a href="">
                        <i className="bi bi-linkedin"></i>
                      </a>
                    </div>
                  </div>
                  <div className="member-info">
                    <h4>Sarah Jhonson</h4>
                    <span>Patissier</span>
                    <p>
                      Quo esse repellendus quia id. Est eum et accusantium
                      pariatur fugit nihil minima suscipit corporis. Voluptate
                      sed quas reiciendis animi neque sapiente.
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="col-lg-4 col-md-6 d-flex align-items-stretch"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="chef-member">
                  <div className="member-img">
                  <img
                      src="assets/img/feca/BE/1.png"
                      width={400}
                      className="img-fluid"
                      alt=""
                    />
                    <div className="social">
                      <a href="">
                        <i className="bi bi-twitter"></i>
                      </a>
                      <a href="">
                        <i className="bi bi-facebook"></i>
                      </a>
                      <a href="">
                        <i className="bi bi-instagram"></i>
                      </a>
                      <a href="">
                        <i className="bi bi-linkedin"></i>
                      </a>
                    </div>
                  </div>
                  <div className="member-info">
                    <h4>William Anderson</h4>
                    <span>Cook</span>
                    <p>
                      Vero omnis enim consequatur. Voluptas consectetur unde qui
                      molestiae deserunt. Voluptates enim aut architecto porro
                      aspernatur molestiae modi.
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="col-lg-4 col-md-6 d-flex align-items-stretch"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="chef-member">
                  <div className="member-img">
                  <img
                      src="assets/img/feca/BE/1.png"
                      width={400}
                      className="img-fluid"
                      alt=""
                    />
                    <div className="social">
                      <a href="">
                        <i className="bi bi-twitter"></i>
                      </a>
                      <a href="">
                        <i className="bi bi-facebook"></i>
                      </a>
                      <a href="">
                        <i className="bi bi-instagram"></i>
                      </a>
                      <a href="">
                        <i className="bi bi-linkedin"></i>
                      </a>
                    </div>
                  </div>
                  <div className="member-info">
                    <h4>William Anderson</h4>
                    <span>Cook</span>
                    <p>
                      Vero omnis enim consequatur. Voluptas consectetur unde qui
                      molestiae deserunt. Voluptates enim aut architecto porro
                      aspernatur molestiae modi.
                    </p>
                  </div>
                </div>
              </div>


              <div
                className="col-lg-4 col-md-6 d-flex align-items-stretch"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="chef-member">
                  <div className="member-img">
                  <img
                      src="assets/img/feca/BE/1.png"
                      width={400}
                      className="img-fluid"
                      alt=""
                    />
                    <div className="social">
                      <a href="">
                        <i className="bi bi-twitter"></i>
                      </a>
                      <a href="">
                        <i className="bi bi-facebook"></i>
                      </a>
                      <a href="">
                        <i className="bi bi-instagram"></i>
                      </a>
                      <a href="">
                        <i className="bi bi-linkedin"></i>
                      </a>
                    </div>
                  </div>
                  <div className="member-info">
                    <h4>William Anderson</h4>
                    <span>Cook</span>
                    <p>
                      Vero omnis enim consequatur. Voluptas consectetur unde qui
                      molestiae deserunt. Voluptates enim aut architecto porro
                      aspernatur molestiae modi.
                    </p>
                  </div>
                </div>
              </div>


              <div
                className="col-lg-4 col-md-6 d-flex align-items-stretch"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="chef-member">
                  <div className="member-img">
                  <img
                      src="assets/img/feca/BE/1.png"
                      width={400}
                      className="img-fluid"
                      alt=""
                    />
                    <div className="social">
                      <a href="">
                        <i className="bi bi-twitter"></i>
                      </a>
                      <a href="">
                        <i className="bi bi-facebook"></i>
                      </a>
                      <a href="">
                        <i className="bi bi-instagram"></i>
                      </a>
                      <a href="">
                        <i className="bi bi-linkedin"></i>
                      </a>
                    </div>
                  </div>
                  <div className="member-info">
                    <h4>William Anderson</h4>
                    <span>Cook</span>
                    <p>
                      Vero omnis enim consequatur. Voluptas consectetur unde qui
                      molestiae deserunt. Voluptates enim aut architecto porro
                      aspernatur molestiae modi.
                    </p>
                  </div>
                </div>
              </div>




            </div>
          </div>
        </section>

        <section id="book-a-table" className="book-a-table">
         <RegisterFromClub/>
        </section>

        <section id="gallery" className="gallery section-bg">
          <div className="container" data-aos="fade-up">
            <div className="section-header">
              <h2>gallery</h2>
              <p>
              Consultez <span>notre galerie</span>
              </p>
            </div>

            <div className="gallery-slider swiper">
              <div className="swiper-wrapper align-items-center">
                <div className="swiper-slide">
                  <a
                    className="glightbox"
                    data-gallery="images-gallery"
                    href="assets/img/feca/1.jpeg"
                  >
                    <img
                      src="assets/img/feca/1.jpeg"
                      className="img-fluid"
                      alt=""
                    />
                  </a>
                </div>
                <div className="swiper-slide">
                  <a
                    className="glightbox"
                    data-gallery="images-gallery"
                    href="assets/img/gallery/gallery-2.jpg"
                  >
                    <img
                      src="assets/img/gallery/gallery-2.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </a>
                </div>
                <div className="swiper-slide">
                  <a
                    className="glightbox"
                    data-gallery="images-gallery"
                    href="assets/img/gallery/gallery-3.jpg"
                  >
                    <img
                      src="assets/img/gallery/gallery-3.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </a>
                </div>
                <div className="swiper-slide">
                  <a
                    className="glightbox"
                    data-gallery="images-gallery"
                    href="assets/img/gallery/gallery-4.jpg"
                  >
                    <img
                      src="assets/img/gallery/gallery-4.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </a>
                </div>
                <div className="swiper-slide">
                  <a
                    className="glightbox"
                    data-gallery="images-gallery"
                    href="assets/img/gallery/gallery-5.jpg"
                  >
                    <img
                      src="assets/img/gallery/gallery-5.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </a>
                </div>
                <div className="swiper-slide">
                  <a
                    className="glightbox"
                    data-gallery="images-gallery"
                    href="assets/img/gallery/gallery-6.jpg"
                  >
                    <img
                      src="assets/img/gallery/gallery-6.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </a>
                </div>
                <div className="swiper-slide">
                  <a
                    className="glightbox"
                    data-gallery="images-gallery"
                    href="assets/img/gallery/gallery-7.jpg"
                  >
                    <img
                      src="assets/img/gallery/gallery-7.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </a>
                </div>
                <div className="swiper-slide">
                  <a
                    className="glightbox"
                    data-gallery="images-gallery"
                    href="assets/img/gallery/gallery-8.jpg"
                  >
                    <img
                      src="assets/img/gallery/gallery-8.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </a>
                </div>
              </div>
              <div className="swiper-pagination"></div>
            </div>
          </div>
        </section>

        <section id="contact" className="contact">
          <div className="container" data-aos="fade-up">
            <div className="section-header">
              <h2>Contact</h2>
              <p>
              Besoin d'aide ? <span>Nous contacter</span>
              </p>
            </div>

            <div className="mb-3">
              <iframe
                style={{ border: 0, width: "100%", height: "350px" }}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3980.9915459673803!2d11.519765074162782!3d3.811905996161945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x108bd00a31574c1f%3A0x3008e02104cd96db!2zTWJhw69rb3VtYSBQcmluY2Ug8J-ktA!5e0!3m2!1sfr!2scm!4v1704647579436!5m2!1sfr!2scm"
                frameBorder="0"
                allowfullscreen
              ></iframe>
            </div>

            <div className="row gy-4">
              <div className="col-md-6">
                <div className="info-item  d-flex align-items-center">
                  <i className="icon bi bi-map flex-shrink-0"></i>
                  <div>
                    <h3>Notre adresse</h3>
                    <p>TROPICANA, CAMEROUN, YAOUNDE</p>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="info-item d-flex align-items-center">
                  <i className="icon bi bi-envelope flex-shrink-0"></i>
                  <div>
                    <h3>Nous envoyer un courriel</h3>
                    <p>fecakarate21@gmail.com</p>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="info-item  d-flex align-items-center">
                  <i className="icon bi bi-telephone flex-shrink-0"></i>
                  <div>
                    <h3>Appelez-nous</h3>
                    <p>+237 676296527</p>
                    <p>+237 694014767</p>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="info-item  d-flex align-items-center">
                  <i className="icon bi bi-share flex-shrink-0"></i>
                  <div>
                    <h3>Heures d'ouverture</h3>
                    <div>
                      <strong>LUNDI-SAMEDI:</strong> 08H00 - 17H00;
                      <strong>Dimanche:</strong> Fermé
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <form
              action="forms/contact.php"
              method="post"
              role="form"
              className="php-email-form p-3 p-md-4"
            >
              <div className="row">
                <div className="col-xl-6 form-group">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    id="name"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="col-xl-6 form-group">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                    placeholder="Your Email"
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  name="subject"
                  id="subject"
                  placeholder="Subject"
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  className="form-control"
                  name="message"
                  rows="5"
                  placeholder="Message"
                  required
                ></textarea>
              </div>
              <div className="my-3">
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">
                  Your message has been sent. Thank you!
                </div>
              </div>
              <div className="text-center">
                <button type="submit">Send Message</button>
              </div>
            </form>
          </div>
        </section>
      </main>

      <footer id="footer" className="footer">
        <div className="container">
          <div className="row gy-3">
            <div className="col-lg-3 col-md-6 d-flex">
              <i className="bi bi-geo-alt icon"></i>
              <div>
                <h4>Address</h4>
                <p>
                TROPICANA <br />
                CAMEROUN, YAOUNDE
                  <br />
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 footer-links d-flex">
              <i className="bi bi-telephone icon"></i>
              <div>
                <h4>Reservations</h4>
                <p>
                  <strong>Téléphone:</strong> (+237) 676296527
                  <br />
                  <strong>Email:</strong> fecakarate21@gmail.com
                  <br />
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 footer-links d-flex">
              <i className="bi bi-clock icon"></i>
              <div>
                <h4>Opening Hours</h4>
                <p>
                  <strong>lUNDI-SAMEDI:</strong> 08H00 - 17H00
                  <br />
                  Dimanche: Fermé
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Follow Us</h4>
              <div className="social-links d-flex">
                <a href="#" className="twitter">
                  <i className="bi bi-twitter"></i>
                </a>
                <a href="#" className="facebook">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="#" className="instagram">
                  <i className="bi bi-instagram"></i>
                </a>
                <a href="#" className="linkedin">
                  <i className="bi bi-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="copyright">FEDERATION CAMEROUNAISE DE KARATE</div>
          <div className="credits"></div>
        </div>
      </footer>

      <a
        href="#"
        className="scroll-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short"></i>
      </a>

      {/* <div id="preloader"></div> */}
    </Fragment>
  );
}

export default Index;
