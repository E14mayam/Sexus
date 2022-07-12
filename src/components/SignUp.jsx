import React from "react";
import { auth } from "./firebase";
import { Formik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

const initialValues = {
  username: "",
  email: "",
  password: "",
};

const validate = (values) => {
  let errors = {};
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  const usernamevalid = /^[aA-zZ\s]+$/;
  if (!values.username) {
    errors.username = "Enter a username";
  } else if (!usernamevalid.test(values.username)) {
    errors.username = "Invalid Username";
  }
  if (!values.email) {
    errors.email = "Email is required";
  } else if (!regex.test(values.email)) {
    errors.email = "Invalid Email";
  }
  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 4) {
    errors.password = "Password too short";
  }
  return errors;
};

const submitForm = (values, { resetForm }) => {
  auth
    .createUserWithEmailAndPassword(values.email, values.password)
    .then((authUser) => {
      return authUser.user.updateProfile({
        displayName: values.username,
      });
    })
    .then(() => {
      Toastify({
        text: "Welcome To Sexus",
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
      const navigate = useNavigate();
      navigate('/Profile')
    })
    .catch(() =>
      Toastify({
        text: "Email is in use by another user",
        duration: 5000,
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
      }).showToast()
    );

  resetForm({ values: "" });
};

const SignUp = () => {
  return (
    <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={submitForm}
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
            <form className="d-flex flex-column px-5" onSubmit={handleSubmit}>
              <div className="form-row d-flex flex-column">
                <label htmlFor="username">Username :</label>
                <input
                  type="username"
                  name="username"
                  id="username"
                  value={values.username}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.username && touched.username ? "input-error" : null
                  }
                />
                {errors.username && touched.username && (
                  <span className="error">{errors.username}</span>
                )}
              </div>

              <div className="form-row d-flex flex-column">
                <label htmlFor="email">Email :</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.email && touched.email ? "input-error" : null
                  }
                />
                {errors.email && touched.email && (
                  <span className="error">{errors.email}</span>
                )}
              </div>

              <div className="form-row d-flex flex-column">
                <label htmlFor="password">Password :</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.password && touched.password ? "input-error" : null
                  }
                />
                {errors.password && touched.password && (
                  <span className="error">{errors.password}</span>
                )}
              </div>

              <Link to="/Login" className="login-pass">
                have an account ?
              </Link>

              <button
                type="submit"
                className={dirty && isValid ? "" : "disabled-btn"}
                disabled={!(dirty && isValid)}
              >
                Signup
              </button>
            </form>
          </div>
        );
      }}
    </Formik>
  );
};

export default SignUp;
