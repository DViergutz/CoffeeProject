import React from "react";
import { useEffect, useRef, useState } from "react";
import ScrollToTop from "./ScrollToTop";
import "../App.css";
import { GoDot } from "react-icons/go";
import "bootstrap-icons/font/bootstrap-icons.css";

function Home() {
  const categories = useRef(null);
  const specialProducts = useRef(null);
  const blog = useRef(null);
  const about = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <div className="align-navigation-menu">
      <ScrollToTop />
      <div className="navigation-menu">
        <ul>
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
        <div id="hero" className="hero-section">
          <div className="content-wrapper">
            <h1>Discover the Essence of Fresh Coffee</h1>
            <p className="hero-subheading">
              Embark on a journey through our finest selection of coffee bean
              bags
            </p>
            <button className="btn-hero">Explore our products</button>
          </div>
        </div>
      </div>
      <div id="about" className="main-section d-flex flex-row">
        <div className="col-6">
          {" "}
          <img className="img-sack" src="/src/assets/img/sack.png" alt="" />
        </div>
        <div className="col-6">
          <div className="row mb-4">
            <div className="">
              <h2 className="text-start">
                Everything starts with <span>Coffee</span>
              </h2>
              <div className=" d-flex flex-column flex-md-row align-items-center align-items-md-center">
                <div className="mr-md-3 mb-md-0 mb-3">
                  <img
                    src="https://i.pinimg.com/564x/e3/bf/78/e3bf780bb7d3fcf166422c74f39c38bc.jpg"
                    alt="Big Coffee Image"
                    className="img-fluid about-icon"
                  />
                </div>
                <div className="ms-3">
                  {" "}
                  <h5 className="fw-semibold">Our Mission</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                    fuga maiores sequi magni perspiciatis quisquam dolor modi,
                    itaque magnam aliquam illo, natus praesentium iusto
                    accusamus dicta officiis neque? Ut vel hic ipsum.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row mb-4">
            <div className="">
              <div className=" d-flex flex-column flex-md-row align-items-center align-items-md-center">
                <div className="mr-md-3 mb-md-0 mb-3">
                  <img
                    src="https://i.pinimg.com/564x/e3/bf/78/e3bf780bb7d3fcf166422c74f39c38bc.jpg"
                    alt="Big Coffee Image"
                    className="img-fluid about-icon"
                  />
                </div>
                <div className=" ms-3">
                  {" "}
                  {/* Reduced the margin to ms-3 */}
                  <h5 className="fw-semibold">The Utica Coffe Brand</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                    fuga maiores sequi magni perspiciatis quisquam dolor modi,
                    itaque magnam aliquam illo, natus praesentium iusto
                    accusamus dicta officiis neque? Ut vel hic ipsum.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="">
              <div className=" d-flex flex-column flex-md-row align-items-center align-items-md-center">
                <div className="mr-md-3 mb-md-0 mb-3">
                  <img
                    src="https://i.pinimg.com/564x/e3/bf/78/e3bf780bb7d3fcf166422c74f39c38bc.jpg"
                    alt="Big Coffee Image"
                    className="img-fluid about-icon"
                  />
                </div>
                <div className=" ms-3">
                  {" "}
                  <h5 className="fw-semibold">The Best Part?</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                    fuga maiores sequi magni perspiciatis quisquam dolor modi,
                    itaque magnam aliquam illo, natus praesentium iusto
                    accusamus dicta officiis neque? Ut vel hic ipsum.
                  </p>
                </div>
              </div>
              <div className="mt-5">
                <button className="btn-hero">Explore our products</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="categories" ref={categories} className="main-section">
        <h2>Our Coffee Collections</h2>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="category-card category-flavored">
                <h3 className="category-title">Flavored</h3>
              </div>
            </div>
            <div className="col-md-4">
              <div className="category-card category-blends">
                <h3 className="category-title">Blends</h3>
              </div>
            </div>
            <div className="col-md-4">
              <div className="category-card category-single-origin">
                <h3 className="category-title">Single Origin</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="special-products" ref={specialProducts} className="main-section">
        <div className="container">
          <h2 className="text-center">Special Products</h2>
          <div className="row">
            <div className="col-md-3">
              <div className="special-product-card">
                <div className="special-product-1 mb-2"></div>
                <div className="text-start">
                  <p className="fs-3 fw-semibold">Art of Darkness</p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                    nihil aliquid a cupiditate error neque adipisci, dolorum rem
                    asperiores!
                  </p>
                  <p className="fs-3 fw-semibold">
                    $250{" "}
                    <span className="text-decoration-line-through fs-5 fw-light">
                      $220
                    </span>
                  </p>
                </div>
                <div className="d-flex justify-content-between">
                  <button className="btn btn-view-product">View Product</button>
                  <div className="secondary-button">
                    <i className="bi bi-cart"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="special-product-card">
                <div className="special-product-2 mb-2"></div>
                <div className="text-start">
                  <p className="fs-3 fw-semibold">Chocolate Amaretto</p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                    nihil aliquid a cupiditate error neque adipisci, dolorum rem
                    asperiores!
                  </p>
                  <p className="fs-3 fw-semibold">
                    $250{" "}
                    <span className="text-decoration-line-through fs-5 fw-light">
                      $220
                    </span>
                  </p>
                </div>
                <div className="d-flex justify-content-between">
                  <button className="btn btn-view-product">View Product</button>
                  <div className="secondary-button">
                    <i className="bi bi-cart"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="special-product-card">
                <div className="special-product-3 mb-2"></div>
                <div className="text-start">
                  <p className="fs-3 fw-semibold">Colombia Organic</p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                    nihil aliquid a cupiditate error neque adipisci, dolorum rem
                    asperiores!
                  </p>
                  <p className="fs-3 fw-semibold">
                    $250{" "}
                    <span className="text-decoration-line-through fs-5 fw-light">
                      $220
                    </span>
                  </p>
                </div>
                <div className="d-flex justify-content-between">
                  <button className="btn btn-view-product">View Product</button>
                  <div className="secondary-button">
                    <i className="bi bi-cart"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="special-product-card">
                <div className="special-product-4 mb-2"></div>
                <div className="text-start">
                  <p className="fs-3 fw-semibold">Italian Roast</p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                    nihil aliquid a cupiditate error neque adipisci, dolorum rem
                    asperiores!
                  </p>
                  <p className="fs-3 fw-semibold">
                    $250{" "}
                    <span className="text-decoration-line-through fs-5 fw-light">
                      $220
                    </span>
                  </p>
                </div>
                <div className="d-flex justify-content-between">
                  <button className="btn btn-view-product">View Product</button>
                  <div className="secondary-button">
                    <i className="bi bi-cart"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="blog" ref={blog} className="main-section background-newsletter">
        <section className="py-5">
          <div className="container">
            <div className="text-center">
              <h2 className="mb-4">We have more to tell you</h2>
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
