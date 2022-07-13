import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Img from "./Img";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { auth } from "./firebase";
import avatar1 from "../assets/avatar1.svg";
import avatar2 from "../assets/avatar2.svg";
import avatar3 from "../assets/avatar3.svg";
import avatar4 from "../assets/avatar4.svg";
import avatar5 from "../assets/avatar5.svg";
import avatar6 from "../assets/avatar6.svg";
import Toastify from "toastify-js";

const UpdateProfile = () => {
  const images = [avatar1, avatar2, avatar3, avatar4, avatar5, avatar6];
  const [image, setImage] = useState(null);
  const [selected, setselected] = useState(false);
  const navigate = useNavigate();

  function handleToggler(index) {
    setselected(index);
    setImage(images[index].substring(14, 21) + ".svg");
    console.log(image);
  }

  const complete = () => {
    const storage = getStorage();
    getDownloadURL(ref(storage, `images/${image}`)).then((url) => {
      // `url` is the download URL for 'images/stars.jpg'
      const user = auth.currentUser;
      user
        .updateProfile({ photoURL: url })
        .then(function () {
          navigate("/Profile");
        })
        .catch((error) => {
          console.log(error);
        });
    });
  };

  function err() {
    return Toastify({
      text: "Select an avatar",
      duration: 5000,
      newWindow: true,
      gravity: "top",
      position: "center",
      stopOnFocus: true,
      style: {
        background: "#ff63633b",
        color: "#f03e3e",
        border: "1px solid #f03e3e",
        borderRadius: "2px",
      },
      onClick: function () {},
    }).showToast();
  }

  return (
    <div className="Updateprofile container pt-5">
      <h4 className="h4 pb-5">Select Your Avatar : </h4>
      <div>
        {images.map((img, index) => (
          <div
            className="d-inline-block mb-5"
            onClick={() => handleToggler(index)}
          >
            <Img image={img} key={index} id={index} selected={selected} />
          </div>
        ))}
      </div>
      <button onClick={image != null ? complete : err} className="my-5">
        Select
      </button>
    </div>
  );
};

export default UpdateProfile;
