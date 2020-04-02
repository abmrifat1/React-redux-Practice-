import React from "react";
import logo from "../logo.svg";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../page/Home";
import Login from "../page/Login";
import Register from "../page/Register";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
