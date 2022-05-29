import React from "react";
import postBlogImg from "../icons/arrow-right.svg"

const Blogcreate = () => {
  return (
    <div className="Upload container mx-auto mb-3">
      <h3 className="h3 mb-5">Create an article</h3>
      <form className="d-flex flex-column px-5">
        <label htmlFor="title">Title</label>
        <input type="text" name="title" id="title" />
        <label htmlFor="subTitle">Subtitle</label>
        <input type="text" name="subtitle" id="subTitle" />
        <label htmlFor="article">Article</label>
        <textarea name="article" id="" cols="30" rows="10"></textarea>
        <label htmlFor="coverImg" className="coverImg">cover image</label>
        <input type="file" accept=".jpg,.jpeg,.png,.svg" name="coverImg" id="coverImg" />

        <button>
         <img src={postBlogImg} alt="" />
        </button>
      </form>
    </div>
  );
};

export default Blogcreate;
