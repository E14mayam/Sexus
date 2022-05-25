import React, {useState} from "react";
import placeholderImg from "../assets/tokyo-attention-sign-in-the-web-browser.png";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import commentImg from "../icons/message-square.svg"
import clapImg from "../icons/clap.svg"

const Blog = () => {

  const comment = useState(0)
  const [clap, setClap] = useState(0)

  function incrementClap(){
    setClap(() =>{
      return clap + 1
    })
  }

  return (
    <div className="blog content container mx-auto row row-cols-3 mt-5">
      <div className="blog-post mx-auto col-lg-4 col-md-6 col-sm-12">
        <img src={image1} alt={placeholderImg} />
        <h5 className="h5 py-2">Best Kissing Practices</h5>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
          porro...
        </p>
        <div className="blog-post-icons d-flex">
          <button>
          <h6 className="d-flex me-1"><img src={commentImg} alt="" /> {comment} </h6>
          </button>
          <button onClick={incrementClap} className="d-flex">
          <h6 className="d-flex"><img src={clapImg} alt="" /> {clap} </h6>
          </button>
        </div>
      </div>
      <div className="blog-post mx-auto col-lg-4 col-md-6 col-sm-12">
        <img src={image2} alt={placeholderImg} />
        <h5 className="h5 py-2">Best Kissing Practices</h5>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
          porro...
        </p>
        <div className="blog-post-icons d-flex">
          <button>
          <h6 className="d-flex me-1"><img src={commentImg} alt="" /> {comment} </h6>
          </button>
          <button onClick={incrementClap} className="d-flex">
          <h6 className="d-flex"><img src={clapImg} alt="" /> {clap} </h6>
          </button>
        </div>
      </div>
      <div className="blog-post mx-auto col-lg-4 col-md-6 col-sm-12">
        <img src={image3} alt={placeholderImg} />
        <h5 className="h5 py-2">Best Kissing Practices</h5>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
          porro...
        </p>
        <div className="blog-post-icons d-flex">
          <button>
          <h6 className="d-flex me-1"><img src={commentImg} alt="" /> {comment} </h6>
          </button>
          <button onClick={incrementClap} className="d-flex">
          <h6 className="d-flex"><img src={clapImg} alt="" /> {clap} </h6>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
