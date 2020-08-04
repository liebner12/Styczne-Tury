import React from "react";
import wallpaper3 from "../images/wallpaper-5-small.jpg";
import wallpaper2 from "../images/wallpaper-6-small.jpg";
import wallpaper1 from "../images/wallpaper-8-small.jpg";
import { HashLink as Link } from "react-router-hash-link";
class LandingPage extends React.Component {
  render() {
    return (
      <section id="landing-page">
        <div id="main-text">
          <div className="text-center">
            <h1 className="display-2 font-weight-bold">
              Biuro podróży StyczneTury
            </h1>
            <p className="lead font-weight-bold">
              Jesteśmy najlepsi w tym co robimy!
            </p>
            <Link className="btn btn-primary btn-gap" to="/#about-section">
              Sprawdź nas!
            </Link>
            <Link className="btn btn-warning" to="/#contact-section">
              Kontakt
            </Link>
            <div className="glyphicon glyphicon-star" aria-hidden="true"></div>
          </div>
        </div>
        <div
          id="carouselExampleIndicators"
          className="carousel slide carousel-fade"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                className="d-block w-100"
                src={wallpaper1}
                alt="First slide"
              ></img>
              <div className="carousel-caption d-md-block">
                <h2>Numer 1 w okolicy</h2>
                <p>skontaktuj się z nami!</p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100"
                src={wallpaper2}
                alt="First slide"
              ></img>
              <div className="carousel-caption d-md-block">
                <h2>Sprawdź naszą ofertę</h2>
                <p>zawieziemy Ciebie wszędzie!</p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100"
                src={wallpaper3}
                alt="First slide"
              ></img>
              <div className="carousel-caption d-md-block">
                <h2>Twoja satyfsakcja</h2>
                <p>jest naszym głównym priorytetem</p>
              </div>
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
      </section>
    );
  }
}
export default LandingPage;
