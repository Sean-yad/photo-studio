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
      <div className="about_block">
        <div>
          <h1>This is my Home Page!</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
            alias, odit voluptatibus dolores odio impedit, molestias veniam
            delectus et sapiente eligendi. Quaerat reiciendis unde accusamus?
            Sit perferendis ut, molestias accusamus molestiae natus cum placeat
            consectetur quisquam, doloribus nostrum at! Fuga ab facere cumque
            voluptatem. Aliquid, repellat! Quis totam impedit perferendis. Sit,
            non. Dolores blanditiis modi necessitatibus libero. Dignissimos,
            animi temporibus.
          </p>
        </div>
      </div>
    </>
  );
}

export default Home;
