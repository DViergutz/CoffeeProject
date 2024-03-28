import React from "react";

function Home() {
  return (
    <div>
      <div className="hero-section">
        <div className="content-wrapper">
          <h1>Discover the Essence of Fresh Coffee</h1>
          <p className="hero-subheading">
            Embark on a journey through our finest selection of coffee bean bags
          </p>
          <button className="btn btn-primary">Explore our products</button>
        </div>
      </div>
      <div className="main-section">
        <h2>Our Categories</h2>
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
      <div className="main-section">
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
      <div className="main-section">
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
