import React from "react";
import About from "./components/Main/About.js";
import Offert from "./components/Main/Offert.js";
import Header from "./components/Header/Header.js";
import Footer from "./components/Footer/Footer.js";

class MainPage extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <About />
        <Offert />
        <Footer />
      </div>
    );
  }
}

export default MainPage;
