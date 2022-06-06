import React, {useState, useEffect} from "react";
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
import { db } from "./components/firebase"



function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("post-data")
      .orderBy("timestamp")
      .onSnapshot((snapshot) => {
        setPosts(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);


  return (
    <div className="App text-center">
      <Header />
      <Routes>
        <Route path="/" element={<Blog />} />
        <Route path="/Article" element={<Article title={posts.map(post => post.title)} article={posts.map(post => post.article)} coverImg={posts.map(post => post.coverImg)}/>} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Forums" element={<Forums />} />
        <Route path="/DarkSecrets" element={<DarkSecrets />} />
        <Route path="/About" element={<About />} />
        <Route path="/Blogcreate" element={<Blogcreate />} />
        <Route path="/Signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
