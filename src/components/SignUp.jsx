import React, { useState, useEffect } from "react";
import { auth } from "./firebase";

const SignUp = () => {
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
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="example@.gmail.com"
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter a password"
        />
        <button onClick={signUpUser}>SignUp</button>
      </form>
    </div>
  );
};

export default SignUp;
