import React, { useState } from "react";
import userImage from "../assets/3DDD-3.png";

const Header = () => {
  const [exit, menu] = useState(false);
  function handleToggler(){
    menu(prev => !prev)
  }
  return (
    <div className="Header py-4 d-flex flex-column px-3">
      <header className="container d-flex justify-content-between py-2 px-3">
        <nav className="Navbar d-none d-lg-flex d-md-flex d-sm-none">
          <a href="somewhere.com" className="h6 mx-2">
            Home
          </a>
          <a href="somewhere.com" className="h6 mx-2">
            Blog
          </a>
          <a href="somewhere.com" className="h6 mx-2">
            Forums
          </a>
          <a href="somewhere.com" className="h6 mx-2 mb-0">
            Dark Secrets
          </a>
          <a href="somewhere.com" className="h6 mx-2">
            About
          </a>
        </nav>
        <button
          className={`headerBtn ${exit ? "active" : ""} d-block d-lg-none d-md-none d-sm-block`}
          onClick={handleToggler}
        ></button>
        <div className="User d-flex">
          <img src={userImage} alt="" />
          <h5 className="h5 m-0">User</h5>
        </div>
      </header>
      <h1 className="h2 title mt-4">Erotic Tips</h1>
      <h6 className="headLine h6">IMPROVE YOUR SEX LIFE</h6>
    </div>
  );
};

export default Header;
