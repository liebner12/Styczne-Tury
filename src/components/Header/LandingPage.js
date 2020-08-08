import React from "react";
import wallpaper3 from "../images/wallpaper-5-small.jpg";
import wallpaper2 from "../images/wallpaper-6-small.jpg";
import wallpaper1 from "../images/wallpaper-8-small.jpg";
import wallpaper3_webp from "../images/wallpaper-5.webp";
import wallpaper2_webp from "../images/wallpaper-6.webp";
import wallpaper1_webp from "../images/wallpaper-7.webp";
import { HashLink as Link } from "react-router-hash-link";
class LandingPage extends React.Component {
  render() {
    return (
      <section id="landing-page">
        <div id="main-text">
          <div className="text-center">
            <h1 className="display-2">Biuro podróży StyczneTury</h1>
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
              <picture>
                <source srcset={wallpaper1_webp} type="image/webp"></source>
                <source srcset={wallpaper1} type="image/jpeg"></source>
                <img
                  src={wallpaper1}
                  alt="First slide"
                  className="d-block w-100"
                ></img>
              </picture>
              <div className="carousel-caption d-md-block">
                <h2>Numer 1 w okolicy</h2>
                <p>skontaktuj się z nami!</p>
              </div>
            </div>
            <div className="carousel-item">
              <picture>
                <source srcset={wallpaper2_webp} type="image/webp"></source>
                <source srcset={wallpaper2} type="image/jpeg"></source>
                <img
                  src={wallpaper1}
                  alt="Second slide"
                  className="d-block w-100"
                ></img>
              </picture>
              <div className="carousel-caption d-md-block">
                <h2>Sprawdź naszą ofertę</h2>
                <p>zawieziemy Ciebie wszędzie!</p>
              </div>
            </div>
            <div className="carousel-item">
              <picture>
                <source srcset={wallpaper3_webp} type="image/webp"></source>
                <source srcset={wallpaper3} type="image/jpeg"></source>
                <img
                  src={wallpaper3}
                  alt="Third slide"
                  className="d-block w-100"
                ></img>
              </picture>
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
