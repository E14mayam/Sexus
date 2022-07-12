import React from "react";

const Img = ({ image, selected, id }) => {
 

  return (
    <img
      className={`img ${
        selected === id ? "active" : ""
      } col-12 col-lg-4 col-md-4 col-sm-6 mx-0 mx-lg-2 mx-md-3 mx-sm-2 my-0 my-lg-1 my-md-1 my-sm-0`}
      src={image}
      alt=""
    />
  );
};

export default Img;
