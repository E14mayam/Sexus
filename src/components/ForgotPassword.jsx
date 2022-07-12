import React, { useRef } from "react";
import { auth } from "./firebase";
import { sendPasswordResetEmail } from "firebase/auth";
import { Formik } from "formik";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

const initialValues = {
  email: "",
  password: "",
};

const validate = (values) => {
  let errors = {};
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  if (!values.email) {
    errors.email = "Email is required";
  } else if (!regex.test(values.email)) {
    errors.email = "Invalid Email";
  }
  return errors;
};

const ForgotPassword = (values, { resetForm }) => {
  const email = useRef();

  function resetPassword() {
    return sendPasswordResetEmail(auth, email.current.value)
      .then(() => {
        return Toastify({
          text: "Email Sent",
          duration: 3000,
          newWindow: true,
          gravity: "bottom",
          position: "center",
          stopOnFocus: true,
          style: {
            background: "#0d0d0d",
          },
          onClick: function () {},
        }).showToast();
      })
      .catch(() => {
        Toastify({
          text: 'User not found',
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
    <Formik
    initialValues={initialValues}
    validate={validate}
    onSubmit={resetPassword}
  >
    {(formik) => {
      const {
        values,
        handleChange,
        handleSubmit,
        errors,
        touched,
        handleBlur,
        isValid,
        dirty,
      } = formik;
      return (
        <div className="Upload Signup container mx-auto mb-3">
          <form className="d-flex flex-column px-5">
            <div className="form-row d-flex flex-column">
              <label htmlFor="email">Email :</label>
              <input
                ref={email}
                type="email"
                name="email"
                id="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.email && touched.email ? "input-error" : null}
              />
              {errors.email && touched.email && (
                <span className="error">{errors.email}</span>
              )}
            </div>

            <button type="submit" className={dirty && isValid ? "" : "disabled-btn"}
                disabled={!(dirty && isValid)} onClick={handleSubmit}>
              Recover
            </button>
          </form>
        </div>
      );
    }}
  </Formik>
  )

};

export default ForgotPassword;
