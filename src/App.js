import React from "react";
import "./App.css";
import Trip from "./components/Main/Trip.js";
import Navbar from "./components/Header/Navbar.js";
import MainPage from "./MainPage.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={MainPage} />
          <Route path="/trip" component={Trip} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
