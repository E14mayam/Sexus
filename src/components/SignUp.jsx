import React, { useState, useEffect } from "react";
import { auth } from "./firebase";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";


const schema = yup.object().shape({
  email: yup.string().email().required("Enter an email ⓧ"),
  password: yup.string().min(8).max(20).required("Invalid Password ⓧ"),
  username: yup.string().min(3).max(10).matches(/^[a-z\s]+$/, "Only lower-case alphabets are allowed for this field ⓧ").required("Username must be between 3 and 10 characters ⓧ")
})

const SignUp = () => {
  const {register, handleSubmit, formState: { errors }} = useForm({
    resolver: yupResolver(schema)
  })


  const [username, setUsername] = useState("");
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //user has logged in
        setUser(authUser);
        if (authUser.displayName) {
          //don't update
        } else {
          //create new user
          return authUser.updateProfile({
            displayName: username,
          });
        }
      } else {
        //user has logged out
        setUser(null);
      }
    });
    return () => {
      //perform cleanup actions
      unsubscribe();
    };
  }, [user, username]);

  const signUpUser = (event) => {
    event.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        return authUser.user.updateProfile({
          displayName: username,
        });
      })
      .catch((err) => console.log(err));

    setPassword("");
    setEmail("");
    setUsername("");
  };

  return (
    <div className="Upload Signup container mx-auto mb-3">
      <form className="d-flex flex-column px-5">
        <label htmlFor="userName">Username</label>
        <input
          type="text"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter a username"
          ref={register(username, { required: true })}
        />
        <p>{errors.username?.message} </p>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="example@.gmail.com"
          ref={register(email, { required: true })}
        />
        <p>{errors.email?.message}</p>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter a password"
          ref={register(password, { required: true })}
        />
        <p>{errors.password?.message}</p>
        <button onClick={handleSubmit(signUpUser)}>SignUp</button>
      </form>
    </div>
  );
};

export default SignUp;
