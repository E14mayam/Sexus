import React from "react";
import { Link } from "react-router-dom";
import addForum from "../icons/plus.svg";

const Forums = () => {
  return (
    <div>
      <nav className="blognav container px-5 d-flex pt-5">
        <Link to="/" className="me-2">
          Featured
        </Link>
        <Link to="/" className="me-2">
          Recent
        </Link>
        <Link to="/" className="createBlogIcon">
          <img src={addForum} alt="img" />
        </Link>
      </nav>
    </div>
  );
};

export default Forums;
