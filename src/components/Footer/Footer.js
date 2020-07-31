import React from "react";
import Contact from "./Contact.js";
import Ending from "./Ending.js";

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <Contact />
        <Ending />
      </footer>
    );
  }
}

export default Footer;
