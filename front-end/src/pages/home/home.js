import React from "react";
import "./Home.css";

const HomePage = () => {
  return (
    <section className="homepage">
      <div className="container">
        <div className="homepage-content">
          <div className="homepage-text">
            <h2>Transform Your Career with a Standout CV</h2>
            <p>
              Create a professional, eye-catching resume in minutes with our
              easy-to-use CV builder.
            </p>
            <a href="#get-started" className="cta-button">
              Create CV
            </a>
          </div>
          <div className="homepage-picture">
            <img src="CVBuilder.png" alt="CV Builder Image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
