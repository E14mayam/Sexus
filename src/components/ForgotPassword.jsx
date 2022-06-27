import React, { useRef } from "react";
import { auth } from "./firebase";
import { sendPasswordResetEmail } from "firebase/auth"
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";


const ForgotPassword = () => {
    
    const email = useRef()

  function resetPassword() {
    return sendPasswordResetEmail(auth, email.current.value).then(() =>{
            Toastify({
                text: "Wait Shortly",
                duration: 3000,
                newWindow: true,
                gravity: "bottom",
                position: "center",
                stopOnFocus: true,
                style: {
                  background: "#0d0d0d",
                },
                onClick: function () {},
              }).showToast()
        })
        .catch((err) => {
          console.log(err)
          Toastify({
            text: `${err}`,
            duration: 3000,
            newWindow: true,
            gravity: "bottom",
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
        });
  }

  return(
    <div className="Upload Signup container mx-auto mb-3">
        <form className="d-flex flex-column px-5">
        <div className="form-row d-flex flex-column">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  ref={email}
                />
              </div>

              <button
                type="submit"
                onClick={resetPassword}>
                Recover              
                </button>
        </form>
    </div>
  )
};

export default ForgotPassword;
