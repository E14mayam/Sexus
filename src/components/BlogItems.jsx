import React, {useState} from "react";
import commentImg from "../icons/message-square.svg"
import clapImg from "../icons/clap.svg"


const BlogItems = ({title, subTitle, coverImg}) =>{
    
  const comment = useState(0)
  const [clap, setClap] = useState(0)

  function incrementClap(){
    setClap(() =>{
      return clap + 1
    })
  }

    return(
        <div className="blog-post mx-auto col-lg-4 col-md-6 col-sm-12">
        <img src={coverImg} alt='img' />
        <h5 className="h5">{title}</h5>
        <p>
          {subTitle}
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
    )
}

export default BlogItems;