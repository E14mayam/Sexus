import React from "react";
import { Formik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "./firebase";
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
  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 4) {
    errors.password = "Password too short";
  }
  return errors;
};

const submitForm = (values, { resetForm }) => {
  auth
    .signInWithEmailAndPassword(values.email, values.password)
    .then(() => {
      const navigate = useNavigate();
      Toastify({
        text: "Welcome Back To Sexus",
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
      navigate('/Profile')
    })
    .catch(() => {
      Toastify({
        text: "User not found",
        duration: 3000,
        newWindow: true,
        gravity: "bottom",
        position: "center",
        stopOnFocus: true,
        style: {
          background: "#f03e3e",
        },
        onClick: function () {},
      }).showToast();
    });
  resetForm({ values: "" });
};

const Login = () => {
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

              <Link to="/ForgotPassword" className="login-pass">
                Forgot password ?
              </Link>

              <button
                type="submit"
                className={dirty && isValid ? "" : "disabled-btn"}
                disabled={!(dirty && isValid)}
              >
                Login
              </button>
            </form>
          </div>
        );
      }}
    </Formik>
  );
};

export default Login;
