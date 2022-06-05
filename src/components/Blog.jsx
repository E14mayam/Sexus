import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import createBlogImg from "../icons/plus.svg";
import BlogItems from "./BlogItems";
import { db } from "./firebase";

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("post-data").onSnapshot((snapshot) => {
      setPosts(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  return (
    <div className="blog content container mx-auto row row-cols-3 mt-5">
      {posts.map(( post) => (
        <BlogItems
          title={post.title}
          article={post.article}
          coverImg={post.coverImg}
        />
      ))}

      <Link to="/Blogcreate" className="createBlogIcon">
        <img src={createBlogImg} alt="img" />
      </Link>
    </div>
  );
};

export default Blog;
