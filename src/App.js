import React from "react";
import "./App.css";
import Trip from "./components/Main/Trip.js";
import Navbar from "./components/Header/Navbar.js";
import MainPage from "./MainPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop"
function App() {
  return (
    <Router>
      <div className="App">
        <ScrollToTop />
        <Navbar />
        <section>
          <Switch>
            <Route path="/" exact component={MainPage} />
            <Route path="/trip/:id" component={Trip} />
          </Switch>
        </section>
      </div>
    </Router>
  );
}

export default App;
