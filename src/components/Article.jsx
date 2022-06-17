import React, { useState } from "react";
import { useParams } from "react-router";
import { db } from "./firebase";
import firebase from "firebase/compat/app";
import clapIcon from "../icons/clap.svg";
import commentIcon from "../icons/comment.svg";
import shareIcon from "../icons/share.svg"
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

const getPostData = async (docId) => {
  const result = await db
    .collection("post-data")
    .where(firebase.firestore.FieldPath.documentId(), "==", docId)
    .get();
  if (result.empty) throw new Error("post not found");
  return result.docs[0].data();
};

const Article = () => {
  const { id } = useParams();
  const [postData, setPostData] = useState({});
  const [time, setTime] = useState("");
  // const [clap, setClap] = useState("");


  getPostData(id).then((post) => {
    setPostData(post);
  });

  function backgroundI(url) {
    return {
      backgroundImage: `url(${url})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "cover",
    };
  }

  async function getTime() {
    await getPostData;

    const TimeinSeconds = postData.timestamp.seconds.toString();
    setTime(() => {
      return new Date(1000 * TimeinSeconds);
    });
  }

  getTime();

  function copy() {
    const el = document.createElement('input');
    el.value = window.location.href;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    Toastify({
      text: "Link Copied",
      duration: 3000,
      newWindow: true,
      gravity: "top",
      position: "right",
      stopOnFocus: true,
      style: {
        background: "#0d0d0d",
      },
      onClick: function () {},
    }).showToast()
  }

  return (
    <div className="container Article mt-4">
      <div
        style={backgroundI(postData.coverImg)}
        className="Article-background px-2"
      >
        <h6 className="h6 pb-2">Sexus Story</h6>
        <h1 className="h1">{postData.title}</h1>
        <h6 className="pt-3">{time.toString().substring(3, 15)}</h6>
      </div>
      <p className="px-3 pt-3">{postData.article}</p>

      <div className="clap-wrapper w-50 mx-auto d-flex justify-content-evenly">
        <button><img src={clapIcon} alt="" /></button>
        <button><img src={commentIcon} alt="" /></button>
        <button onClick={ copy }><img src={shareIcon} alt="" /></button>  
      </div>
    </div>
  );
};

export default Article;
