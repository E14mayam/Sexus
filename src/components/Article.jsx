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
      <h2 className="h2 py-3 w-100 text-center" style={backgroundI(postData.coverImg)}>{postData.title}</h2>
      <p>{postData.article}</p>
    </div>
  );
};

export default Article;
