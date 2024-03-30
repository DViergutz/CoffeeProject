import React from "react";
import { useEffect, useRef, useState } from "react";
import ScrollToTop from "./ScrollToTop";
import "../App.css";
import { GoDot } from "react-icons/go";

function Home() {
  const categories = useRef(null);
  const specialProducts = useRef(null);
  const blog = useRef(null);

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
      </div>
      <div id="hero" className="hero-section">
        <div className="content-wrapper">
          <h1>Discover the Essence of Fresh Coffee</h1>
          <p className="hero-subheading">
            Embark on a journey through our finest selection of coffee bean bags
          </p>
          <button className="btn-hero">Explore our products</button>
        </div>
      </div>
      <div id="categories" ref={categories} className="main-section">
        <h2>Our Categories</h2>
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
        <h2>Special Products</h2>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="special-product-card">
                <div className="special-product-1 mb-2"></div>
                <div className="text-start">
                  <p className="fs-3 fw-semibold">Product 1</p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                    nihil aliquid a cupiditate error neque adipisci, dolorum rem
                    asperiores!
                  </p>
                  <p className="fs-3 fw-semibold">$250</p>
                </div>
                <div className="d-flex justify-content-between">
                  <button className="btn btn-view-product">View Product</button>
                  <span>Add to Cart Icon</span>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="special-product-card">
                <div className="special-product-2 mb-2"></div>
                <div className="text-start">
                  <p className="fs-3 fw-semibold">Product 1</p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                    nihil aliquid a cupiditate error neque adipisci, dolorum rem
                    asperiores!
                  </p>
                  <p className="fs-3 fw-semibold">$250</p>
                </div>
                <div className="d-flex justify-content-between">
                  <button className="btn btn-view-product">View Product</button>
                  <span>Add to Cart Icon</span>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="special-product-card">
                <div className="special-product-3 mb-2"></div>
                <div className="text-start">
                  <p className="fs-3 fw-semibold">Product 1</p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                    nihil aliquid a cupiditate error neque adipisci, dolorum rem
                    asperiores!
                  </p>
                  <p className="fs-3 fw-semibold">$250</p>
                </div>
                <div className="d-flex justify-content-between">
                  <button className="btn btn-view-product">View Product</button>
                  <span>Add to Cart Icon</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="blog" ref={blog} className="main-section">
        <h2>Latest Blogs</h2>
        <div className="row">
          <div className="col">
            <div className="category">
              <h4>Flavored</h4>
            </div>
          </div>
          <div className="col">
            <div className="category">
              <h4>Blends</h4>
            </div>
          </div>
          <div className="col">
            <div className="category">
              <h4>Single Origin</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
