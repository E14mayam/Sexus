import React, { useState, useEffect } from "react";
import { auth } from "./firebase";
import { Formik } from "formik";

const initialValues = {
  username: "",
  email: "",
  password: ""
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

const submitForm = (values) => {
  auth
    .createUserWithEmailAndPassword(values.email, values.password)
    .then((authUser) => {
      return authUser.user.updateProfile({
        displayName: values.username,
      });
    })
    .catch((err) => console.log(err));
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
            <form
              className="d-flex flex-column px-5"
              onSubmit={handleSubmit}
            >
              <div className="form-row d-flex flex-column">
                <label htmlFor="username">Username</label>
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
                <label htmlFor="email">Email</label>
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
                <label htmlFor="password">Password</label>
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

// const schema = yup.object().shape({
//   email: yup.string().email().required("Enter an email ⓧ"),
//   password: yup.string().min(8).max(20).required("Invalid Password ⓧ"),
//   username: yup.string().min(3).max(10).matches(/^[aA-zZ\s]+$/, "Only lower-case alphabets are allowed for this field ⓧ").required("Username must be between 3 and 10 characters ⓧ")
// })

// const signUpUser = (event) => {
//   event.preventDefault();
//   auth
//     .createUserWithEmailAndPassword(email, password)
//     .then((authUser) => {
//       return authUser.user.updateProfile({
//         displayName: username,
//       });
//     })
//     .catch((err) => console.log(err));
// };

export default SignUp;
