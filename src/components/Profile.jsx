import React, { useState } from "react";
import { firebase } from "./firebase";
import SignUp from "./SignUp";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Userprofile from "./Userprofile";

const Profile = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      setEmail(() =>{
        return user.email
      })
      setUsername(() =>{
        return user.displayName
      })
    } else {
      return (
        <SignUp/>
      )
    }
  });

  const user = firebase.auth().currentUser;
  if (user) {
    return(
      < Userprofile name={username} email={email}/>
    )
  } else {
    // No user is signed in.
    return(
      <SignUp/>
    )
  }
};

export default Profile;
