import React, { useState } from "react";
import {firebase} from "./firebase"
import SignUp from "./SignUp";

const Profile = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");


  const user = firebase.auth().currentUser;

  if (user) {
    // User is signed in.
    setUsername(() =>{
        return user.displayName
    })
    setEmail(()=>{
        return user.email
    })

  } else {
    // No user is signed in.
    return(
        <SignUp/>
    )
  }

  return (
    <div>
      <h1>Welcome {username}</h1>
      <h3>You signed in with {email}</h3>
    </div>
  );
};

export default Profile;
