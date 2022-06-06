import React, { useState } from "react";
import { auth } from "./firebase";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  email: yup.string().email().required("Enter a recognized email ⓧ"),
  password: yup.string().min(8).max(20).required("Invalid Password ⓧ")
})

const Login = () => {
  const {register, handleSubmit, formState: { errors }} = useForm({
    resolver: yupResolver(schema)
  })

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (event) => {
    event.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .catch((err) => alert(err.message));

    setPassword("");
    setEmail("");
  };


  return (
    <div className="Upload Signup container mx-auto mb-3">
      <form className="d-flex flex-column px-5">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="example@gmail.com"
          ref={register(email, { required: true })}
        />
         <p>{errors.email?.message}</p>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="example123"
          ref={register(password, { required: true })}
        />
        <p>{errors.password?.message}</p>
        <button onClick={handleSubmit(signIn)}>Login</button>
      </form>
    </div>
  );
};

export default Login;
