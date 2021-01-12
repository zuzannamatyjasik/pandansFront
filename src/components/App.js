import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "../pages/About";
import Home from "../pages/Home";
import Details from "../pages/Details";
import Login from "../pages/Login";
import Messages from "../pages/Messages";
import Edit from "../pages/Edit";
import Add from "../pages/Add";
import Footer from "../components/Footer";
import Admin from "../components/Admin";
import Baner from "../components/Baner";
import Error from "../pages/Error";
import AccessDenied from "../pages/AccessDenied";
import { useEffect } from "react";
import "./App.css";
import AuthService from "../services/auth.service";

const App = () => {
  // useEffect(() => {
  //   const timer = setInterval(async () => {
  //     let result = await AuthService.checkAuth();
  //     console.log(result);
  //   }, 5000);
  //   return () => {
  //     clearInterval(timer);
  //   };
  // });
  return (
    <div className="cont bg-color">
      <Router>
        <Admin />
        <main className="ui container sitecontent" id="bGround">
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
            <Route path="/ac" component={AccessDenied}></Route>
            <Route path="/login" component={Login}></Route>
            <Route exact path="/">
              <Baner />
              <Home />
            </Route>
            <Route component={Error} />
          </Switch>
        </main>
        <Footer className="foter" />
      </Router>
    </div>
  );
};
export default App;
