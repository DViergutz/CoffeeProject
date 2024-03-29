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
    <div>
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
          <button className="btn btn-primary">Explore our products</button>
        </div>
      </div>
      <div id="categories" ref={categories} className="main-section">
        <h2>Our Categories</h2>
        <div className="row">
          <div className="col">
            <div className="category-flavored">
              <h4>Flavored</h4>
            </div>
          </div>
          <div className="col">
            <div className="category-blends">
              <h4>Blends</h4>
            </div>
          </div>
          <div className="col">
            <div className="category-singleOrigin">
              <h4>Single Origin</h4>
            </div>
          </div>
        </div>
      </div>
      <div id="special-products" ref={specialProducts} className="main-section">
        <h2>Special Products</h2>
        <div className="row d-flex justify-content-center">
          <div className="col-lg-3">
            <div className="category">
              <h4>Flavored</h4>
            </div>
          </div>
          <div className="col-3">
            <div className="category">
              <h4>Blends</h4>
            </div>
          </div>
          <div className="col-3">
            <div className="category">
              <h4>Single Origin</h4>
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
