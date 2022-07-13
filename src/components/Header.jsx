import React, { useState } from "react";
import avatar from "../assets/avatar1.svg";
import { Link } from "react-router-dom";
import { auth } from "./firebase";

const Header = () => {
  const [exit, menu] = useState(false);
  function handleToggler(){
    menu(prev => !prev)
  }

  const user = auth.currentUser;
  const profileImg = avatar;
    

  return (
    <div className="Header py-4 d-flex flex-column px-3">
      <header className="container d-flex justify-content-between py-2 px-3">
        <nav className={`Navbar ${exit ? "active" : ""} d-${exit ? "flex" : "none"}`}>
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
          <Link to="/Login" onClick={handleToggler} className="h6 mx-2">Login</Link>
          <Link to="/Signup" onClick={handleToggler} className="h6 mx-2 auth mt-3">SignUp</Link>
        </nav>
        <button
          className={`headerBtn ${exit ? "active" : ""} d-block`}
          onClick={handleToggler}
        ></button>
         <h4 className="h4 m-0">Sexus</h4>
        <div className="User d-flex">
          <Link to="/Profile"><img src={user != null ? profileImg : avatar} alt="" /></Link>
        </div>
      </header>
    </div>
  );
};

export default Header;
