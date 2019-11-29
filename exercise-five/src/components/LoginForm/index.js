import React from 'react'

export function Login() {
  return(
    <div>
      <form>
        <label for="loginEmail">Email</label>
        <input type="email" name="loginEmail" placeholder="Email"/>
        <label for="loginPassword">Password</label>
        <input type="password" name="loginPassword" placeholder="Password"/>
        <button>Log in</button>
      </form>
    <div>
  );

}
