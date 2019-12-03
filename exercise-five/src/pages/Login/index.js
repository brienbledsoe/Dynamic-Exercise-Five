import React from 'react'

//this is the componenet that we're pushing here
import LoginForm from "../..compoenents/UserProfileComponents"

export default function Login({ loginFunction }) {
  return(
    <div>
      <div>Logging in</div>
      <div><LoginForm submitFunction={loginFunction} /></div>
    </div>
  );

}
