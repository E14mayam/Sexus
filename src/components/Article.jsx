import React, { useState } from "react";
import { useParams } from "react-router";
import { db } from "./firebase";
import firebase from "firebase/compat/app";

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

  getPostData(id).then((post) => {
    setPostData(post);
  });

  function backgroundI(url) {
    return {
      backgroundImage: `url(${url})`,
      backgroundRepeat  : 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: "cover"
    }
  }


  return (
    <div className="container Article">
      <div style={backgroundI(postData.coverImg)} className="Article-background px-3">
      <h6 className="h6 pb-2">Sexus Article</h6>
      <h1 className="h1">{postData.title}</h1>
      {/* <h6>{postData.timestamp.toString().substring(3, 15).toUpperCase()}</h6> */}
      </div>
      <p>{postData.article}</p>
    </div>
  );
};

export default Article;
