import React from "react";
import Header from "./Header";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import rightArrow from "../icons/arrow-right.svg";

const Home = () => {
  return (
    <div className="Home">
      <Header />

      <div className="featured-wrapper row container mx-auto my-5">
        <h1 className="h1 my-5 featured-wrapper-txt">Featured</h1>
        <hr className="hr mb-5" />
        <div className="featured-content col-lg-5 col-md-6 col-sm-12 m-2 mb-5 mx-auto">
          <img src={image1} alt="img" />
          <div className="featured-content-txt">
            <h1 className="h3 py-2">Best Kissing Practices</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur, eaque?, Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Quae, quos!...
            </p>
            <a href="somewhere.com" className="d-flex">
              Keep reading <img src={rightArrow} alt="img" />
            </a>
          </div>
        </div>
        <div className="featured-content col-lg-5 col-md-6 col-sm-12 m-2 my-5 my-lg-0 my-md-0 my-sm-5 my-5 my-lg-0 my-md-0 my-sm-5 mx-auto">
          <img src={image2} alt="img" />
          <div className="featured-content-txt">
            <h1 className="h3 py-2">Best Kissing Practices</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur, eaque?, Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Quae, quos!...
            </p>
            <a href="somewhere.com" className="d-flex">
              Keep reading <img src={rightArrow} alt="img" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
