// import React, { useState } from 'react';
// import { auth, provider } from './firebase';
// import { signInWithPopup } from 'firebase/auth';
// import Axios from "axios";

//------------------------------------------------------------------------------------------------------------------------

import React, { useState } from 'react';
import { auth, provider } from './firebase';
import { signInWithPopup } from 'firebase/auth';
import Axios from "axios";

function Signin() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const plzSigning = () => {
    signInWithPopup(auth, provider).then(
      function() {
        console.log("we could sign in");
      }
    ).catch(
      function (errs) {
        throw errs;
      }
    )
  } 

  function collectsUsername(event) {
    setUsername(event.target.value);
  }
  function collectsEmail(event) {
    setEmail(event.target.value);
  }
  function collectsPassword(event) {
    setPassword(event.target.value);
  }
  function collectsConfirmPassword(event) {
    setConfirmPassword(event.target.value);
  }

  const sendSignups = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    Axios.post("http://localhost:9000/signin", {
      myUsername: username,
      myEmail: email,
      myPassword: password,
      myConfirmPassword: confirmPassword
    })
    .then((output) => console.log(output))
    // .catch((error) => console.error(error)); // Handle errors if needed
  }

  return (
    <>
    <form method="post">
      Enter Name:<input class="form-control" onChange={collectsUsername} type="text" aria-label="default input example"/>
      Enter Email:<input class="form-control" onChange={collectsEmail} type="email" aria-label="default input example"/>
      Password:<input class="form-control" onChange={collectsPassword} type="password" aria-label="default input example"/>
      Confirm Password:<input class="form-control" onChange={collectsConfirmPassword} type="password" aria-label="default input example"/>
      <button onClick={sendSignups} class="btn btn-outline-info">Sign in</button>
      OR
      <p>Already have an account? <a href="/login">Login here</a></p>
      OR <button onClick={plzSigning} class="btn btn-primary">Sign in with Google</button>
    </form>
    </>
  )
}

export default Signin;