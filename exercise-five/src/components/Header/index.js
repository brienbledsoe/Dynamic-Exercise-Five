import React from 'react';

export default function Header(){
  return(
    <header className="Header">
    <nav>
      {loggedIn && <a href="/">Home</a>}
      {!loggedIn && <a href="/login">Login</a>}
      {!loggedIn && <a href="/sign-up">Signup</a>}
      {loggedIn && <a href="/log-out">Logout</a>}
    </nav>
    </header>
  )


}
