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
          <Link to="/" onClick={handleToggler}  className="h6 mx-2">
            Stories
          </Link>
          <Link to="/DarkSecrets" onClick={handleToggler}  className="h6 mx-2">
            Dark Secrets
          </Link>
          <Link to="/Forums" onClick={handleToggler}  className="h6 mx-2">
            Forums
          </Link>
          <Link to="/About" onClick={handleToggler}  className="h6 mx-2">
            About
          </Link>
          <Link to="/Signup" onClick={handleToggler} className="h6 mx-2 auth mt-5 mt-lg-0 mt-md-0 mt-sm-5">Sign Up</Link>
        </nav>
        <button
          className={`headerBtn ${exit ? "active" : ""} d-block d-lg-none d-md-none d-sm-block`}
          onClick={handleToggler}
        ></button>
        <div className="User d-flex">
          <img src={userImage} alt="" />
        </div>
      </header>
      <h3 className="h3 title mt-4">Sexus</h3>
      <h6 className="headLine h6 mb-2">IMPROVE YOUR SEX LIFE</h6>
    </div>
  );
};

export default Header;
