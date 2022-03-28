import React from "react";
import "./CSS/Style.css";
import background from "./images/mountain.jpg";
import Button from "./Components/button";

function Home() {
  return (
    <>
      <div
        className="hero-title"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="hero-text">
          <h1>yo soy brian</h1>
          <p>And I'm a Photographer</p>
          <Button />
        </div>
      </div>
    </>
  );
}

export default Home;
