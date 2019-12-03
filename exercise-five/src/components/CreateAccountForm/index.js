import React from 'react'

export default function CreateAccountForm({ submitFunction }) {
  return(
    <div>
      <form onSubmit ={ e => submitFunction(e)}>
        <label htmlfor="loginEmail">Email</label>
        <input type="email" name="loginEmail" placeholder="Email"/>
        <label htmlfor="loginPassword">Password</label>
        <input type="password" name="loginPassword" placeholder="Password"/>
        <button>Create Account</button>
      </form>
    <div>
  );

}
