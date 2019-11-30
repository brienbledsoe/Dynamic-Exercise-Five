import React from 'react';
import './App.css';
import {Route,BrowserRouter as Router} from 'react-router-dom'
import Header from "./components/Header"
import Login from "./pages/Login"
import Logout from "./pages/Logout"
import Signup from "./pages/Signup"
import UserProfile from "./pages/UserProfile"


function App() {
  return (
    <div className="App">
    <Header loggedIn={false} />
      <Router>
          <Route exact path="/" component={UserProfile} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/sign-up" component={Signup} />
          <Route exact path="/log-out" component={Logout} />

      </Router>
    </div>
  );
}

export default App;
