import React from 'react'

//this is the componenet that we're pushing here
import CreateAccountForm from "../..components/createAccountForm"
export default function Signup({ signupFunction }) {
  return(
    <div>
      <div>Sign-up</div>
      <CreateaccountForm submitFunction={signupFunction} />
    </div>
  );

}
