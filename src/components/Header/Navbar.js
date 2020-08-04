import React from "react";
import { HashLink as Link } from "react-router-hash-link";
class Navbar extends React.Component {
  state = {
    active: false,
    isTop: true,
  };
  componentDidMount() {
    document.addEventListener("scroll", () => {
      const isTop = window.scrollY < 100;
      if (isTop !== this.state.isTop) {
        this.setState({ isTop });
      }
    });
  }
  render() {
    return (
      <nav
        id="top-nav"
        className={
          this.state.isTop
            ? this.state.active
              ? "navbar navbar-expand-lg navbar-dark fixed-top bg-nav"
              : "navbar navbar-expand-lg navbar-dark fixed-top bg-null"
            : "navbar navbar-expand-lg navbar-dark fixed-top bg-nav"
        }
      >
        <div className="container">
          <Link className="navbar-brand" to="/#landing-page">
            StyczneTury
          </Link>
          <a
            className="navbar-toggler"
            type="button"
            aria-label="Toggle navigation"
            onClick={() => this.setState({ active: !this.state.active })}
          >
            <div
              className={
                this.state.active ? "animated-icon open" : "animated-icon"
              }
            >
              <div></div>
              <div></div>
              <div></div>
            </div>
          </a>
          <div
            className={
              this.state.active ? "navbar-collapse" : "collapse navbar-collapse"
            }
            id="myNav"
          >
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link
                  className="nav-link"
                  to="/#landing-page"
                  onClick={() =>
                    window.screen.width <= 998
                      ? this.setState({ active: !this.state.active })
                      : this.setState({ active: this.state.active })
                  }
                >
                  Strona główna
                </Link>
              </li>
              <li className="nav-item active">
                <Link
                  className="nav-link"
                  to="/#about-section"
                  onClick={() =>
                    window.screen.width <= 998
                      ? this.setState({ active: !this.state.active })
                      : this.setState({ active: this.state.active })
                  }
                >
                  O firmie
                </Link>
              </li>
              <li className="nav-item active">
                <Link
                  className="nav-link"
                  to="/#offert-section"
                  onClick={() =>
                    window.screen.width <= 998
                      ? this.setState({ active: !this.state.active })
                      : this.setState({ active: this.state.active })
                  }
                >
                  Oferta
                </Link>
              </li>
              <li className="nav-item active">
                <Link
                  className="nav-link"
                  to="/#contact-section"
                  onClick={() =>
                    window.screen.width <= 998
                      ? this.setState({ active: !this.state.active })
                      : this.setState({ active: this.state.active })
                  }
                >
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
