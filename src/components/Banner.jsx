
import React from "react";

function Banner() {
  return (
    <section className="banner" id="banner">
      <div className="container">
        <div className="banner-wrapper">
          <div className="banner-img">
            <img src="/banner.jpg" alt="" />
          </div>
          <div className="banner-content">
            <h6>Hello, I'm Muhammad Hamza.</h6>
            <h3>Web Developer</h3>
            <p>
            A web developer's site serves as a showcase of their skills, professionalism, 
            and personality, helping them attract clients or opportunities in the competitive 
            field of web development.
            </p>
            <a className="btn" href="#projects">
              About Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
