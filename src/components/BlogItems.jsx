import React from "react";
import userImage from "../assets/OSLO.png";
// import commentImg from "../icons/message-square.svg"
// import clapImg from "../icons/clap.svg"


const BlogItems = ({title, article, coverImg}) =>{
    
  // const comment = useState(0)
  // const [clap, setClap] = useState(0)

  // function incrementClap(){
  //   setClap(() =>{
  //     return clap + 1
  //   })
  // }

    return(
        <div className="blog-post mx-auto col-lg-4 col-md-6 col-sm-12 d-flex flex-column py-3 g-4 px-3 mb-2">
        <h5 className="h5">{title}</h5>
        <div className="d-flex userInfo" >
          <img src={userImage} alt="" />
          <h6 className="h6" >username</h6>
        </div>
        <img src={coverImg} alt='img' />
      </div>
    )
}

export default BlogItems;