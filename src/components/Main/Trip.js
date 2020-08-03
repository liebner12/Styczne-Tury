import React from "react";
import { HashLink as Link } from "react-router-hash-link";
class Trip extends React.Component {
  render() {
    return (
      <section id="item-section" className="my-section text-white">
        <div className="container">
          <div className="row">
            <div className="text-grid col-md">
              <h1 className="title">
                {this.props.match.params.id == 1
                  ? "Wycieczka do Warszawy"
                  : this.props.match.params.id == 2
                  ? "Wycieczka nad Gdańska"
                  : "Wycieczka do Zakopanego"}
              </h1>
              <h3>
                {this.props.match.params.id == 1 ||
                this.props.match.params.id == 3
                  ? "Czas trwania: 3 dni"
                  : "Czas trwania: 2 dni"}
              </h3>
              <p className="description">
                {this.props.match.params.id == 1
                  ? "Pierwszego dnia zwiedzanie miasta z przewodnikiem. Drugiego Kulisy Telewizji Polskie oraz Muzeum Powstania Warszawskiego. Trzeciego Centrum Nauki Kopernik."
                  : this.props.match.params.id == 2
                  ? "Dnia pierwszego zwiedzanie Gdańska oraz rejs statekiem, drugiego przejazd do Westerplatte i Molo Orłowo"
                  : "Pierwszy dzień zdobycie Morskiego Oka oraz dolina pięciu stawów! Drugiego dnia dolina gąsiecnicowa, a trzeciego pobyt w termach oraz w restauracji pani Magdy Gessler"}
              </p>
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
