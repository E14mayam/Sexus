import React from "react";
import avatar from "../assets/avatar1.svg";
import { Link } from "react-router-dom";
import { auth } from "./firebase";


const Userprofile = ({ username, email }) => {
  const user = auth.currentUser;
  const profileImg = user.photoURL;


  return (
    <div className="Profile container">
      <img src={user.photoURL == null ? avatar : profileImg} alt="" />
      <h1 className="h1">Hello {username}</h1>
      <h5 className="h5">You signed in with {email}</h5>
      <nav className="blognav container px-5 text-center pt-2">
        <Link to="/" className="me-2">
          Posts
        </Link>
        <Link to="/UpdateProfile" className="me-2">
          Edit
        </Link>
      </nav>
    </div>
  );
};

export default Userprofile;
