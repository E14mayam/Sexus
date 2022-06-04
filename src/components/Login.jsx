import React, { useState } from "react";
import { auth } from "./firebase";

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (event ) =>{
      event.preventDefault();

      auth.signInWithEmailAndPassword(email, password).catch((err) => console.log(err))
  }

  return (
    <div className="Upload Signup container mx-auto mb-3">
      <form className="d-flex flex-column px-5">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={signIn}>Login</button>
      </form>
    </div>
  );
};

export default Login;
