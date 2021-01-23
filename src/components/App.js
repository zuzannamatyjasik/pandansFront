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
import Thanks from "../pages/Thanks";
import { useEffect, useState } from "react";
import "./App.css";
import AuthService from "../services/auth.service";

const App = () => {
  const [valid, setValid] = useState(false);
  if (localStorage.getItem("user")) {
    AuthService.checkAuth().then((data) => setValid(data));
  }

  useEffect(() => {
    const timer = setInterval(async () => {
      let result = await AuthService.checkAuth();
      setValid(result);
    }, 12000);
    return () => {
      clearInterval(timer);
    };
  });

  return (
    <div className="cont bg-color">
      <Router>
        <Admin valid={valid} />
        <main className="ui container sitecontent" id="bGround">
          <Switch>
            <Route path="/about" component={About}></Route>
            <Route path="/edit/:id" component={Edit}></Route>
            <Route path="/details/:id?" component={Details}></Route>

            <Route
              path="/messages"
              component={valid ? Messages : AccessDenied}
            ></Route>

            <Route path="/add" component={valid ? Add : AccessDenied}></Route>

            <Route path="/ac" component={AccessDenied}></Route>
            <Route path="/thanks" component={Thanks}></Route>
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
