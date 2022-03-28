import React from "react";
import "./CSS/Style.css";
import "./images/mountain.jpg";

function Home() {
  return (
    <>
      <div className="hero-title">
        <img src="./images/mountain.jpg" className="hero-image" alt="" />
        <div className="hero-text">
          <h1>I am John Doe</h1>
          <p>And I'm a Photographer</p>
          <button>Hire me</button>
        </div>
      </div>
    </>
  );
}

export default Home;
