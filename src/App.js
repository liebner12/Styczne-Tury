import React from "react";
import "./App.css";
import Trip from "./components/Main/Trip.js";
import Navbar from "./components/Header/Navbar.js";
import Main from "./Main";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <section>
          <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/trip/:id" component={Trip} />
          </Switch>
        </section>
      </div>
    </Router>
  );
}

export default App;
