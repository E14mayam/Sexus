import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// import commentImg from "../icons/message-square.svg"
// import clapImg from "../icons/clap.svg"

const BlogItems = ({ title, coverImg, article, timestamp, id }, props) => {
  // const comment = useState(0)
  // const [clap, setClap] = useState(0)

  // function incrementClap(){
  //   setClap(() =>{
  //     return clap + 1
  //   })
  // }


  const [time, setTime] = useState("");

  useEffect(() => {
    function getCurrentTime() {
      const date = timestamp.seconds.toString();
      setTime(() => {
        return new Date(date * 1000);
      });
    }
    getCurrentTime();
  }, [timestamp.seconds]);

  return (
    <div className="blog-post mx-auto col-lg-4 col-md-6 col-sm-12 d-flex flex-column g-5 px-3">
      <Link to={`/Article/${id}
      `} >
        <img src={coverImg} alt="img" />
        <h6 className="h6 pt-1">{title}</h6>
        <h6 className="h6 date py-1">
          Chris Doe · {time.toString().substring(3, 15).toUpperCase()}
        </h6>
        <p>{article.slice(0, 70) + "..."}</p>
      </Link>
    </div>
  );
};

export default BlogItems;

