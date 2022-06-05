import React, { useState } from "react";
import { storage, db } from "./firebase";

const Blogcreate = () => {
  const [coverImg, setCoverImage] = useState("");
  const [title, setTitle] = useState("");
  const [subTitle, setSubtitle] = useState("");
  const [article, setArticle] = useState("");

  const handleUpload = () => {
    const uploadTask = storage.ref(`images/${coverImg.name}`).put(coverImg);
    uploadTask.on(
      "state_changed",  
      () => {
        storage
          .ref("images")
          .child(coverImg.name)
          .getDownloadURL()
          .then((url) => {
            db.collection("post-data").add({
              title: title,
              coverImg: url,
              article: article,
              subtitle: subTitle
            }).catch(err => console.log(err));
            setTitle("");
            setSubtitle("");
            setArticle("");
            setCoverImage(null);
          });
      },
      (error) => {
        //error function
        console.log(error);
        alert(error.message);
      }
    );
  };

  return (
    <div className="Upload container mx-auto mb-5">
      <form className="d-flex flex-column px-5">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <label htmlFor="subTitle">Subtitle</label>
        <input
          type="text"
          id="subTitle"
          value={subTitle}
          onChange={(event) => setSubtitle(event.target.value)}
        />
        <label htmlFor="article">Article</label>
        <textarea
          id="article"
          cols="30"
          rows="10"
          value={article}
          onChange={(event) => setArticle(event.target.value)}
        ></textarea>
        <label htmlFor="coverImg" className="coverImg">
          Browse cover image
        </label>
        <input
          type="file"
          accept=".jpg,.jpeg,.png,.svg"
          value={coverImg}
          id="coverImg"
        />
        <button onClick={handleUpload}>Upload</button>
      </form>
    </div>
  );
};

export default Blogcreate;
