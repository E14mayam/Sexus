import React, { useState } from "react";
import userImage from "../assets/OSLO.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [exit, menu] = useState(false);
  function handleToggler(){
    menu(prev => !prev)
  }
  return (
    <div className="Header py-4 d-flex flex-column px-3">
      <header className="container d-flex justify-content-between py-2 px-3">
        <nav className={`Navbar ${exit ? "active" : ""} d-${exit ? "flex" : "none"} d-lg-flex d-md-flex d-sm-${exit ? "flex" : "none"}`}>
          <Link to="/" className="h6 mx-2">
            Home
          </Link>
          <Link to="/Blog" className="h6 mx-2">
            Blog
          </Link>
          <Link to="/Forums" className="h6 mx-2">
            Forums
          </Link>
          <Link to="/DarkSecrets" className="h6 mx-2">
            Dark Secrets
          </Link>
          <Link to="/About" className="h6 mx-2">
            About
          </Link>
        </nav>
        <button
          className={`headerBtn ${exit ? "active" : ""} d-block d-lg-none d-md-none d-sm-block`}
          onClick={handleToggler}
        ></button>
        <div className="User d-flex">
          <img src={userImage} alt="" />
          <h5 className="h6 m-0">Sign Up</h5>
        </div>
      </header>
      <h1 className="h2 title mt-5">Erotic Tips</h1>
      <h6 className="headLine h6">IMPROVE YOUR SEX LIFE</h6>
    </div>
  );
};

export default Header;
