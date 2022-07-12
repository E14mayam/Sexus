import React, { useState } from "react";
import { useParams } from "react-router";
import { db } from "./firebase";
import firebase from "firebase/compat/app";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
import facebook from "../assets/facebook.svg";
import twitter from "../assets/twitter.svg";

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
  // const [comments, setComments] = useState("");
  // const [clap, setClap] = useState("");

  getPostData(id).then((post) => {
    setPostData(post);
  });

  // useEffect(() => {
  //   let unsubscribe;
  //   if (id) {
  //     unsubscribe = db
  //       .collection("post-data")
  //       .doc(id)
  //       .collection("comments")
  //       .onSnapshot((snapshot) => {
  //         setComments(snapshot.docs.map((doc) => doc.data()));
  //       });
  //   }
  //   return() =>{
  //     unsubscribe();
  //   }
  // }, [id]);

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
    const el = document.createElement("input");
    el.value = window.location.href;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    Toastify({
      text: "Link Copied",
      duration: 3000,
      newWindow: true,
      gravity: "top",
      position: "center",
      stopOnFocus: true,
      style: {
        background: "#0d0d0d",
        borderRadius: "40px",
      },
      onClick: function () {},
    }).showToast();
  }

  return (
    <div className="container Article mt-4 mb-5 pb-5">
      <div
        style={backgroundI(postData.coverImg)}
        className="Article-background px-2"
      >
        <h6 className="h6 pb-2">Sexus Story</h6>
        <h1 className="h1">{postData.title}</h1>
        <h6 className="pt-3">{time.toString().substring(3, 15)}</h6>
      </div>
      <h4 className="h4 h-txt pt-4">A sexus article written by Chris Doe, </h4>
      <h4 className="h4 pb-3">Posted on {time.toString().substring(0, 15)}</h4>
      <p className="px-3 pt-3">{postData.article}</p>

      <div className="clap-wrapper mx-auto d-flex justify-content-evenly">
        <button>
          <svg width="24" height="24" viewBox="0 0 24 24" aria-label="clap">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M11.37.83L12 3.28l.63-2.45h-1.26zM15.42 1.84l-1.18-.39-.34 2.5 1.52-2.1zM9.76 1.45l-1.19.4 1.53 2.1-.34-2.5zM20.25 11.84l-2.5-4.4a1.42 1.42 0 0 0-.93-.64.96.96 0 0 0-.75.18c-.25.19-.4.42-.45.7l.05.05 2.35 4.13c1.62 2.95 1.1 5.78-1.52 8.4l-.46.41c1-.13 1.93-.6 2.78-1.45 2.7-2.7 2.51-5.59 1.43-7.38zM12.07 9.01c-.13-.69.08-1.3.57-1.77l-2.06-2.07a1.12 1.12 0 0 0-1.56 0c-.15.15-.22.34-.27.53L12.07 9z"
            ></path>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M14.74 8.3a1.13 1.13 0 0 0-.73-.5.67.67 0 0 0-.53.13c-.15.12-.59.46-.2 1.3l1.18 2.5a.45.45 0 0 1-.23.76.44.44 0 0 1-.48-.25L7.6 6.11a.82.82 0 1 0-1.15 1.15l3.64 3.64a.45.45 0 1 1-.63.63L5.83 7.9 4.8 6.86a.82.82 0 0 0-1.33.9c.04.1.1.18.18.26l1.02 1.03 3.65 3.64a.44.44 0 0 1-.15.73.44.44 0 0 1-.48-.1L4.05 9.68a.82.82 0 0 0-1.4.57.81.81 0 0 0 .24.58l1.53 1.54 2.3 2.28a.45.45 0 0 1-.64.63L3.8 13a.81.81 0 0 0-1.39.57c0 .22.09.43.24.58l4.4 4.4c2.8 2.8 5.5 4.12 8.68.94 2.27-2.28 2.71-4.6 1.34-7.1l-2.32-4.08z"
            ></path>
          </svg>{" "}
        </button>
        <button>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12 1.99994C6.47717 1.99994 2.00002 6.47709 2.00002 11.9999C2.00002 13.5226 2.34101 14.9682 2.95147 16.2621L2.02043 20.7989C1.95286 21.1282 2.05523 21.4694 2.29291 21.707C2.53059 21.9447 2.87178 22.0471 3.20105 21.9795L7.73782 21.0485C9.03181 21.6589 10.4773 21.9999 12 21.9999C17.5229 21.9999 22 17.5228 22 11.9999C22 6.47709 17.5229 1.99994 12 1.99994Z"
              fill="#292929"
            />
          </svg>
        </button>
      </div>

      <div className="share-wrapper mb-1 d-flex justify-content-center">
        <button class="button-33 mx-2 h6">
          <img src={facebook} alt="" />
        </button>
        <button class="button-33 mx-2 h6">
          <img src={twitter} alt="" />
        </button>
        <button class="button-33 mx-2 h6" onClick={copy}>
          Copy Link
        </button>
      </div>
    </div>
  );
};

export default Article;
