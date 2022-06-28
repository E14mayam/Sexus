import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import createBlogImg from "../icons/plus.svg";
import BlogItems from "./BlogItems";
import { db } from "./firebase";

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("post-data")
      .orderBy("timestamp")
      .onSnapshot((snapshot) => {
        setPosts(
          snapshot.docs.map((doc) => {
            return { ...doc.data(), id: doc.id };
          })
        );
      });
  }, []);

  return (
    <div>
      <nav className="blognav container px-5 d-flex pt-5">
        <Link to="/" className="me-2">
          Feed
        </Link>
        <Link to="/" className="me-2">
          News
        </Link>
        <Link to="/" className="me-2">
          Requests
        </Link>
        <Link to="/Blogcreate" className="createBlogIcon">
          <img src={createBlogImg} alt="img" />
        </Link>
      </nav>
      <div className="blog content container mx-auto row row-cols-3 mt-1">
        {posts.map((post) => (
          <BlogItems
            title={post.title}
            article={post.article}
            coverImg={post.coverImg}
            timestamp={post.timestamp}
            id={post.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Blog;
