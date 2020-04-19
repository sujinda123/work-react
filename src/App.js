import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Navbar, Nav, Button, Form, Modal } from "react-bootstrap";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import _Home_all_1 from './pages/Home_all_1';
import _Testlogin from './pages/Testlogin';
import _Register from './pages/register';

function App() {
  return (

       <Router>
          <Route exact path="/">
            <Redirect to="/HomeAll"/>
          </Route>
          <Route path="/HomeAll" exact component={_Home_all_1} />
          <Route path="/loginseccess" exact component={_Testlogin} />
          <Route path="/Register" exact component={_Register} />
      </Router>

  );
}

export default App;
