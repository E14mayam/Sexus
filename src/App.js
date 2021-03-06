import React from "react";
import { Routes, Route } from "react-router-dom";
import "./css/App.css";
import Blog from "./components/Blog";
import DarkSecrets from "./components/DarkSecrets";
import About from "./components/About";
import Forums from "./components/Forums";
import Header from "./components/Header";
import Blogcreate from "./components/Blogcreate";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Article from "./components/Article";
import Profile from "./components/Profile"
import ForgotPassword from "./components/ForgotPassword";
import UpdateProfile from "./components/Updateprofile";


function App() {
  return (
    <div className="App text-center">
      <Header />
      <Routes>
        <Route path="/" element={<Blog />} />
        <Route path="/Article/:id" element={<Article />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Forums" element={<Forums />} />
        <Route path="/DarkSecrets" element={<DarkSecrets />} />
        <Route path="/About" element={<About />} />
        <Route path="/Blogcreate" element={<Blogcreate />} />
        <Route path="/Signup" element={<SignUp />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/ForgotPassword" element={<ForgotPassword />} />
        <Route path="/UpdateProfile" element={<UpdateProfile />} />
      </Routes>
    </div>
  );
}

export default App;
