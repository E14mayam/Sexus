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
  const [time, setTime] = useState('')

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

  async function getTime(){
    await getPostData;

    const TimeinSeconds = postData.timestamp.seconds.toString();
    setTime(() => {
      return new Date( 1000 * TimeinSeconds)
    })
  }

  getTime();

  return (
    <div className="container Article">
      <div
        style={backgroundI(postData.coverImg)}
        className="Article-background px-2"
      >
        <h6 className="h6 pb-2">Sexus Article</h6>
        <h1 className="h1">{postData.title}</h1>
        <h6 className="pt-3">{time.toString().substring(3, 15)}</h6>
      </div>
      <p className="px-3 pt-3">{postData.article}</p>
    </div>
  );
};

export default Article;
