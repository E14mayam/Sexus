import React, { useState } from "react";
import { storage, db } from "./firebase";
import firebase from "firebase/compat/app";

const Blogcreate = () => {
  const [coverImg, setCoverImage] = useState(null);
  const [title, setTitle] = useState("");
  const [article, setArticle] = useState("");

  const handleChange = (e) => {
    if(e.target.files[0]) {
      setCoverImage(e.target.files[0])
    }
  }

  const handleUpload = (event) => {
    event.preventDefault();
    
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
              timestamp: firebase.firestore.FieldValue.serverTimestamp(),
              title: title,
              coverImg: url,
              article: article,
            });
          });
          setArticle('');
            setCoverImage(null);
            setTitle('');
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
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="article">Article</label>
        <textarea
          id="article"
          cols="30"
          rows="10"
          value={article}
          onChange={(e) => setArticle(e.target.value)}
        ></textarea>
        <label htmlFor="coverImg" className="coverImg">
          Browse cover image
        </label>
        <input
          type="file"
          accept=".jpg,.jpeg,.png,.svg"
          id="coverImg"
          onChange={handleChange}
        />
        <button type="submit" onClick={handleUpload}>Upload</button>
      </form>
    </div>
  );
};

export default Blogcreate;
