import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import Item from "./Items";
class Trip extends React.Component {
  render() {
    return (
      <section id="item-section" className="my-section text-white">
        <div className="container">
          <div className="row">
            <div className="text-grid col-md">
              <Item params={this.props.match.params.id} />
              <a className="btn btn-warning text-dark btn-gap">
                Zarezerwuj wycieczkę!
              </a>
              <Link to="/#offert-section">
                <a className="btn btn-primary text-white">
                  <i class="fas fa-arrow-left"></i> Powrót
                </a>
              </Link>
            </div>
            <div
              id="carouselExampleIndicators"
              class="carousel slide carousel-fade col-md"
              data-ride="carousel"
            >
              <ol className="carousel-indicators">
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="0"
                  className="active"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="1"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="2"
                ></li>
              </ol>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src={require("../images/item-1-" +
                      this.props.match.params.id +
                      ".jpg")}
                    alt="..."
                    className="carousel-image"
                  ></img>
                </div>
                <div className="carousel-item">
                  <img
                    src={require("../images/item-2-" +
                      this.props.match.params.id +
                      ".jpg")}
                    className="carousel-image"
                    alt="..."
                  ></img>
                </div>
                <div className="carousel-item">
                  <img
                    src={require("../images/item-3-" +
                      this.props.match.params.id +
                      ".jpg")}
                    className="carousel-image"
                    alt="..."
                  ></img>
                </div>
              </div>
              <a
                className="carousel-control-prev"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Trip;
