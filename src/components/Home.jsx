import React from "react";
import { useEffect, useRef, useState } from "react";
import ScrollToTop from "./ScrollToTop";
import "../App.css";
import { GoDot } from "react-icons/go";
import "bootstrap-icons/font/bootstrap-icons.css";
import Card from "react-bootstrap/Card";
import CartOffCanvas from "./CartOffCanvas";
import {
  removeFromCart,
  setIsCartOpen,
  addToCart,
  incrementQuantity,
} from "../redux/CartSlice.jsx";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Home() {
  const categories = useRef(null);
  const specialProducts = useRef(null);
  const blog = useRef(null);
  const about = useRef(null);
  const dispatch = useDispatch();
  const isCartOpen = useSelector((state) => state.cart.isCartOpen);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <div className="align-navigation-menu">
      <div className="navigation-menu">
        <ScrollToTop />{" "}
        <ul>
          {" "}
          <li onClick={() => scrollToSection(about)} className="nav-link-home">
            <GoDot />
          </li>
          <li
            onClick={() => scrollToSection(categories)}
            className="nav-link-home"
          >
            <GoDot />
          </li>
          <li
            onClick={() => scrollToSection(specialProducts)}
            className="nav-link-home"
          >
            <GoDot />{" "}
          </li>
          <li onClick={() => scrollToSection(blog)} className="nav-link-home">
            <GoDot />
          </li>
        </ul>
      </div>{" "}
      <div className="background-video">
        <video autoPlay loop muted>
          <source src="src\assets\img\videoplayback.mp4" type="video/mp4" />
        </video>
        <div id="hero" className="hero-section container">
          <div className="content-wrapper">
            <h1>Discover the Essence of Fresh Coffee</h1>
            <p className="hero-subheading">
              Embark on a journey through our finest selection of coffee bean
              bags
            </p>
            <Link to="/products/" className="text-decoration-none">
              <button className="btn-hero">
                Explore our products <i className="bi bi-arrow-right ms-2"></i>
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div
        ref={about}
        className="main-section-everything-starts-with-coffee d-flex flex-row"
      >
        <div className="col-lg-5">
          {" "}
          <img
            className="img-sack"
            src="https://abtomsvdwctapkbvozbb.supabase.co/storage/v1/object/public/fotos_varias/sack.png"
            alt=""
          />
        </div>
        <div className="col-lg-7 z-2">
          <h2 className="about-heading">
            Everything Starts With <span className="text-orange">Coffee</span>
          </h2>
          <div className=" d-flex flex-column flex-md-row align-items-center align-items-md-center mb-md-5 mb-4">
            <div className="mr-md-3 mb-md-0 mb-3">
              <img
                src="https://abtomsvdwctapkbvozbb.supabase.co/storage/v1/object/public/fotos_varias/pinlogo.png"
                alt="Big Coffee Image"
                className="about-icon"
              />
            </div>
            <div className="ms-3">
              {" "}
              <h5 className="fw-semibold">Our Mission</h5>
              <p className="about-paragraph">
                Every day we put into practice our belief that our community can
                be revitalized through responsible development.
              </p>
            </div>
          </div>
          <div className=" d-flex flex-column flex-md-row align-items-center align-items-md-center mb-md-5 mb-4">
            <div className="mr-md-3 mb-md-0 mb-3">
              <img
                src="https://abtomsvdwctapkbvozbb.supabase.co/storage/v1/object/public/fotos_varias/3beanslogo.png"
                alt="Big Coffee Image"
                className="about-icon"
              />
            </div>
            <div className=" ms-3">
              {" "}
              <h5 className="fw-semibold">The Utica Coffe Brand</h5>
              <p className="about-paragraph">
                Synonymous with the best qualities of Utica itself: simplicity,
                a no-nonsense attitude, and a richness of unique, shared
                culture.
              </p>
            </div>
          </div>
          <div className=" d-flex flex-column flex-md-row align-items-center align-items-md-center mb-md-5 mb-4">
            <div className="mr-md-3 mb-md-0 mb-3">
              <img
                src="https://abtomsvdwctapkbvozbb.supabase.co/storage/v1/object/public/fotos_varias/coffeemaker.png"
                alt="Big Coffee Image"
                className="about-icon"
              />
            </div>
            <div className=" ms-3">
              {" "}
              <h5 className="fw-semibold">The Best Part?</h5>
              <p className="about-paragraph">
                We get to roast, drink and share our phenomenal coffee in the
                process. Time & love goes into every cup.
              </p>
            </div>
          </div>{" "}
          <div className="floating-bean-div">
            {" "}
            <img
              src="https://abtomsvdwctapkbvozbb.supabase.co/storage/v1/object/public/fotos_varias/b1.png"
              className="img-b1"
              alt=""
            />
            <img
              src="https://abtomsvdwctapkbvozbb.supabase.co/storage/v1/object/public/fotos_varias/b4.png"
              className="img-b4"
              alt=""
            />
          </div>
          <div className="floating-bean-div">
            {" "}
            <img
              src="https://abtomsvdwctapkbvozbb.supabase.co/storage/v1/object/public/fotos_varias/b2.png"
              className="img-b2"
              alt=""
            />
            <img
              src="https://abtomsvdwctapkbvozbb.supabase.co/storage/v1/object/public/fotos_varias/b3.png"
              className="img-b3"
              alt=""
            />
          </div>
          <div className="floating-bean-div">
            {" "}
            <img
              src="https://abtomsvdwctapkbvozbb.supabase.co/storage/v1/object/public/fotos_varias/b1.png"
              className="img-b1-copy"
              alt=""
            />
          </div>
        </div>{" "}
      </div>{" "}
      <div id="categories" ref={categories} className="main-section">
        <div className="splash">
          {" "}
          <img
            src="https://abtomsvdwctapkbvozbb.supabase.co/storage/v1/object/public/fotos_varias/Splash%20con%20beans%20y%20capa%20sombra.png"
            alt=""
            className="img-splash"
          />
        </div>
        <h2>Explore Our Coffee Offerings</h2>
        <div className="container">
          <div className="row">
            <div className=" col-lg-4">
              <Link to="/category/Flavored" className="text-decoration-none">
                <div className="category-card category-flavored ">
                  <h3 className="category-title">Flavored</h3>
                </div>
              </Link>
            </div>
            <div className="col-lg-4">
              <Link to="/category/Blends" className="text-decoration-none">
                <div className="category-card category-blends">
                  <h3 className="category-title">Blends</h3>
                </div>
              </Link>
            </div>
            <div className="col-lg-4">
              <Link
                to="/category/single origin"
                className="text-decoration-none"
              >
                <div className="category-card category-single-origin">
                  <h3 className="category-title">Single Origin</h3>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div id="special-products" ref={specialProducts} className="main-section">
        <div className="container">
          <div className="splash-beans">
            {" "}
            <img
              src="https://abtomsvdwctapkbvozbb.supabase.co/storage/v1/object/public/fotos_varias/splash%20redondo.png?t=2024-04-08T20%3A42%3A37.287Z"
              alt=""
              className="img-splash-beans"
            />
          </div>
          <h2 className="text-center">Discover Our Special Delights</h2>
          <div className="row">
            <div className="col-md-6 col-lg-6 col-xl-3 ">
              <div className="d-flex flex-column h-100 ">
                <div className="special-product-card h-100 d-flex flex-column">
                  <Link to="/products/9" className="text-decoration-none">
                    <div className="special-product-1"></div>
                  </Link>
                  <div className="text-start ">
                    <p className="fs-3 fw-semibold">Art of Darkness</p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Non ad rerum totam aliquid eveniet! Placeat rem, rerum
                      corrupti est odio repellat voluptatibus praesentium
                      distinctio dicta!
                    </p>
                  </div>
                  <div className="mt-auto">
                    <p className="fs-3 fw-semibold text-start">
                      <span className="text-orange me-3 fs-2">$190</span>
                      <span className="text-decoration-line-through fs-5">
                        $250
                      </span>
                    </p>
                    <div className="d-flex justify-content-between">
                      <div className="me-2">
                        <Link to="/products/9" className="text-decoration-none">
                          <button className="btn btn-view-product height65">
                            View Product
                          </button>
                        </Link>
                      </div>

                      <button
                        className="btn rounded-circle btn-cart "
                        onClick={() =>
                          dispatch(
                            incrementQuantity(
                              {
                                name: "Art Of Darkness",
                                id: 9,
                                price: 190,
                                image:
                                  "https://abtomsvdwctapkbvozbb.supabase.co/storage/v1/object/public/product_images/Blends-ArtOfDarkness.png",
                              },
                              dispatch(setIsCartOpen())
                            )
                          )
                        }
                      >
                        <i className="bi bi-cart"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-3 ">
              <div className="d-flex flex-column h-100 ">
                <div className="special-product-card h-100 d-flex flex-column">
                  <Link to="/products/3" className="text-decoration-none">
                    <div className="special-product-2"></div>
                  </Link>
                  <div className="text-start ">
                    <p className="fs-3 fw-semibold">Chocolate Amaretto</p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Non ad rerum totam aliquid eveniet! Placeat rem, rerum
                      corrupti est odio repellat voluptatibus praesentium
                      distinctio dicta!
                    </p>
                  </div>
                  <div className="mt-auto">
                    <p className="fs-3 fw-semibold text-start">
                      <span className="text-orange me-3 fs-2">$190</span>
                      <span className="text-decoration-line-through fs-5">
                        $250
                      </span>
                    </p>
                    <div className="d-flex justify-content-between">
                      <div className="">
                        <Link to="/products/3" className="text-decoration-none">
                          <button className="btn btn-view-product height65">
                            View Product
                          </button>
                        </Link>
                      </div>
                      <button
                        className="btn rounded-circle btn-cart"
                        onClick={() =>
                          dispatch(
                            incrementQuantity(
                              {
                                name: "Chocolate Amaretto",
                                id: 3,
                                price: 190,
                                image:
                                  "https://abtomsvdwctapkbvozbb.supabase.co/storage/v1/object/public/product_images/Flavored-ChocolateAmaretto.png",
                              },
                              dispatch(setIsCartOpen())
                            )
                          )
                        }
                      >
                        <i className="bi bi-cart"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-3 ">
              <div className="d-flex flex-column h-100 ">
                <div className="special-product-card h-100 d-flex flex-column">
                  <Link to="/products/11" className="text-decoration-none">
                    <div className="special-product-3"></div>
                  </Link>
                  <div className="text-start ">
                    <p className="fs-3 fw-semibold">Colombia Organic</p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Non ad rerum totam aliquid eveniet! Placeat rem, rerum
                      corrupti est odio repellat voluptatibus praesentium
                      distinctio dicta!
                    </p>
                  </div>
                  <div className="mt-auto">
                    <p className="fs-3 fw-semibold text-start">
                      <span className="text-orange me-3 fs-2">$190</span>
                      <span className="text-decoration-line-through fs-5">
                        $250
                      </span>
                    </p>
                    <div className="d-flex justify-content-between">
                      <div className="">
                        <Link
                          to="/products/11"
                          className="text-decoration-none"
                        >
                          <button className="btn btn-view-product height65">
                            View Product
                          </button>
                        </Link>
                      </div>
                      <button
                        className="btn rounded-circle btn-cart"
                        onClick={() =>
                          dispatch(
                            incrementQuantity(
                              {
                                name: "Colombia Organic",
                                id: 11,
                                price: 190,
                                image:
                                  "https://abtomsvdwctapkbvozbb.supabase.co/storage/v1/object/public/product_images/SingleOrigin-Colombia.png",
                              },
                              dispatch(setIsCartOpen())
                            )
                          )
                        }
                      >
                        <i className="bi bi-cart"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-3 ">
              <div className="d-flex flex-column h-100 ">
                <div className="special-product-card h-100 d-flex flex-column">
                  <Link to="/products/7" className="text-decoration-none">
                    <div className="special-product-4"></div>
                  </Link>

                  <div className="text-start ">
                    <p className="fs-3 fw-semibold">Italian Roast</p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Non ad rerum totam aliquid eveniet! Placeat rem, rerum
                      corrupti est odio repellat voluptatibus praesentium
                      distinctio dicta!
                    </p>
                  </div>
                  <div className="mt-auto">
                    <p className="fs-3 fw-semibold text-start">
                      <span className="text-orange me-3 fs-2">$190</span>
                      <span className="text-decoration-line-through fs-5">
                        $250
                      </span>
                    </p>
                    <div className="d-flex justify-content-between">
                      <div className="">
                        <Link to="/products/7" className="text-decoration-none">
                          <button className="btn btn-view-product height65">
                            View Product
                          </button>
                        </Link>
                      </div>
                      <button
                        className="btn rounded-circle btn-cart"
                        onClick={() =>
                          dispatch(
                            incrementQuantity(
                              {
                                name: "Italian Roast",
                                id: 7,
                                price: 190,
                                image:
                                  "https://abtomsvdwctapkbvozbb.supabase.co/storage/v1/object/public/product_images/Blends-ItalianRoast.png",
                              },
                              dispatch(setIsCartOpen())
                            )
                          )
                        }
                      >
                        <i className="bi bi-cart"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="blog"
        ref={blog}
        className="main-section-newsletter background-newsletter"
      >
        <section className="py-5">
          <div className="container">
            <div className="text-center">
              <h2 className="mb-4">We Have More To Tell You</h2>
              <p className="mb-4 fs-5 mb-5">
                Subscribe to our newsletter to receive updates and special
                offers!
              </p>
            </div>
            <form>
              <div className="row justify-content-center">
                <div className="col-md-6">
                  <div className="input-group mb-3">
                    <input
                      type="email"
                      className="form-control subscribe-input"
                      placeholder="Your email address"
                      required
                    />
                    <button
                      type="button"
                      className="btn btn-subscribe" // Custom class for styling
                    >
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
