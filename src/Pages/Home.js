import React from "react";
import "./CSS/Style.css";
import background from "./images/mountain.jpg";

function Home() {
  return (
    <>
      <div className="hero-title" style={{ backgroundImage: `url(${background})` }}>
        <div className="hero-text" >
          <h1>I am John Doe</h1>
          <p>And I'm a Photographer</p>
          <button>Hire me</button>
        </div>
      </div>
    </>
  );
}

export default Home;
