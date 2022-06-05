import React from "react";
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
        <div className="blog-post mx-auto col-lg-4 col-md-6 col-sm-12 d-flex flex-column justify-content-between py-3 g-1 px-3">
        <h4 className="h4">{title}</h4>
        <img src={coverImg} alt='img' />
      </div>
    )
}

export default BlogItems;