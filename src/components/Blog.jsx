import React from "react";
import placeholderImg from "../assets/tokyo-attention-sign-in-the-web-browser.png";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
const Blog = () => {
  return (
    <div className="blog content container mx-auto row row-cols-3 mt-5">
      <div className="blog-post mx-auto col-lg-4 col-md-6 col-sm-12">
        <img src={image1} alt={placeholderImg} />
        <h5 className="h5 py-2">Best Kissing Practices</h5>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, porro...
          
        </p>
      </div>
      <div className="blog-post mx-auto col-lg-4 col-md-6 col-sm-12">
        <img src={image2} alt={placeholderImg} />
        <h5 className="h5 py-2">Best Kissing Practices</h5>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, porro...
          
        </p>
      </div>
      <div className="blog-post mx-auto col-lg-4 col-md-6 col-sm-12">
        <img src={image3} alt={placeholderImg} />
        <h5 className="h5 py-2">Best Kissing Practices</h5>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, porro...
        
        </p>
      </div>
    </div>
  );
};

export default Blog;
