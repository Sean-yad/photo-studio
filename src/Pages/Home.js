import React from "react";
import "./CSS/Style.css";
import heroimage from "./images/mountain.jpg";
import panda from "./images/pandablue.jpg";
import Button from "./Components/button";

function Home() {
  return (
    <>
      {/* hero section start*/}
      <div
        className="hero-title"
        style={{ backgroundImage: `url(${heroimage})` }}
      >
        <div className="hero-text">
          <h1>yo soy brian</h1>
          <p>And I'm a Photographer</p>
          <Button />
        </div>
      </div>
      {/* hero section end*/}

      {/* flexbox content start*/}
      <section className="landing-page-home">
        <div className="landing-container-home">
          <div
            className="image-container-home"
            style={{ backgroundImage: `url(${panda})` }}
          ></div>
          <div className="text-container-home">
            <h2>Text Container!</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Cupiditate vero aliquam debitis architecto neque nostrum id
              incidunt fuga, obcaecati tempora! Quae recusandae dolorem nam
              dicta soluta quibusdam architecto officiis sit.
            </p>
          </div>
        </div>
      </section>
      {/* flexbox content end*/}
    </>
  );
}

export default Home;
