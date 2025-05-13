// src/pages/HomePage.jsx
import React from "react";
import "../style/HomePage.css";

function HomePage() {
  return (
    <div className="home-page">
      <h2>Welcome to Intershipstore</h2>
      <p>Your favorite online store for amazing products.</p>

      <div className="home-categories">
        <div className="category-card">
          <h3>Clothing</h3>
          <p>Discover the latest fashion trends</p>
        </div>
        <div className="category-card">
          <h3>Accessories</h3>
          <p>Complete your style with unique accessories</p>
        </div>
        <div className="category-card">
          <h3>Shoes</h3>
          <p>Comfort and style for your feet</p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
