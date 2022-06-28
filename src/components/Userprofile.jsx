import React from "react";
import avatar from "../assets/OSLO.png";
import { Link } from "react-router-dom";

const Userprofile = ({ name, email }) => {
  return (
    <div className="Profile container">
      <img src={avatar} alt="" />
      <h1 className="h1">Hello {name}</h1>
      <h5 className="h5">You signed in with {email}</h5>
      <nav className="blognav container px-5 text-center pt-2">
        <Link to="/" className="me-2">
          Posts
        </Link>
      </nav>
    </div>
  );
};

export default Userprofile;