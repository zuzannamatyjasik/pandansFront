import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "../pages/About";
import Home from "../pages/Home";
import Details from "../pages/Details";
import Login from "../pages/Login";
import Messages from "../pages/Messages";
import Edit from "../pages/Edit";
import Add from "../pages/Add";

import AuthService from "../services/auth.service";

import "./App.css";

const App = () => {
  return (
    <Router>
      <main className="ui container" id="bGround">
        <div id="pic">
          <div id="ecl">
            tutaj napis
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/Messages">Messages</Link>
                </li>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <button
                    onClick={() => {
                      AuthService.logout();
                      window.location.reload();
                    }}
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <Switch>
          <Route path="/about" component={About}></Route>
          <Route path="/messages">
            <Messages />
          </Route>
          <Route path="/edit/:id" component={Edit}></Route>
          <Route path="/details/:id?">
            <Details />
          </Route>
          <Route path="/add" component={Add}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </main>
    </Router>
  );
};
export default App;
