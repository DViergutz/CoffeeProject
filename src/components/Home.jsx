import React from "react";
import { useEffect, useRef, useState } from "react";
import ScrollToTop from "./ScrollToTop";
import "../App.css";
import { GoDot } from "react-icons/go";
import "bootstrap-icons/font/bootstrap-icons.css";
import Card from "react-bootstrap/Card";

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
            <button className="btn-hero">
              Explore our products <i className="bi bi-arrow-right ms-2"></i>
            </button>
          </div>
        </div>
      </div>
      <div
        id="about"
        ref={about}
        className="main-section-everything-starts-with-coffee  d-flex flex-row"
      >
        <div className="col-6">
          {" "}
          <img className="img-sack" src="/src/assets/img/sack.png" alt="" />
        </div>
        <div className="col-6 z-2">
          <div className="row mb-4">
            <div className="make-responsive">
              <h2 className="text-start">
                Everything starts with{" "}
                <span className="text-orange">Coffee</span>
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
            <div className="make-responsive">
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
            <div className="make-responsive">
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
      <div id="special-products" className="main-section">
        <div className="container">
          <h2 className="text-center">Special Products</h2>
          <div className="row">
            <div className="col-md-6 col-lg-6 col-xl-3 ">
              <div className="d-flex flex-column h-100 ">
                <div className="special-product-card h-100 d-flex flex-column">
                  <div className="special-product-1"></div>
                  {/* <Card.Img variant="top" className="special-product-1 " /> */}
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
                      <a href="/products/9" className="me-2">
                        <button className="btn btn-view-product height65">
                          View Product
                        </button>
                      </a>
                      <button className="btn rounded-circle btn-cart">
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
                  <div className="special-product-2"></div>
                  {/* <Card.Img variant="top" className="special-product-1 " /> */}
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
                      <a href="/products/3" className="">
                        <button className="btn btn-view-product height65">
                          View Product
                        </button>
                      </a>
                      <button className="btn rounded-circle btn-cart">
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
                  <div className="special-product-3"></div>
                  {/* <Card.Img variant="top" className="special-product-1 " /> */}
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
                      <a href="/products/11" className="">
                        <button className="btn btn-view-product height65">
                          View Product
                        </button>
                      </a>
                      <button className="btn rounded-circle btn-cart">
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
                  <div className="special-product-4"></div>
                  {/* <Card.Img variant="top" className="special-product-1 " /> */}
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
                      <a href="/products/7" className="">
                        <button className="btn btn-view-product height65">
                          View Product
                        </button>
                      </a>
                      <button className="btn rounded-circle btn-cart">
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
