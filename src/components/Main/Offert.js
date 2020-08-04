import React from "react";
import { Link } from "react-router-dom";
import LazyLoad from "react-lazyload";
import busImage from "../images/warsaw-small.jpg";
import polImage from "../images/baltyk-small.jpg";
import trainImage from "../images/tatry-small.jpg";

class Offert extends React.Component {
  render() {
    return (
      <section id="offert-section" className="my-section">
        <div className="container">
          <div className="offert-text">
            <h2 className="text-white">Zobacz nasze wycieczki</h2>
            <p className="text-white">
              tworzymy cudowne doświadczenia i jesteśmy w tym naprawdę dobrzy!
            </p>
            <hr></hr>
          </div>
          <div>
            <div className="row">
              <div className="col-md-4">
                <div className="card bg-dark text-white box">
                  <div className="card-img-top st"></div>
                  <div className="overlay text-white">
                    <div className="container">
                      <h3 className="card-title">Wycieczka do Warszawy</h3>
                      <p className="card-text">
                        Cudowna przygoda w stolicy Polski, zwiedzanie
                        najpiękniejszego miasta europy wschodniej!
                      </p>
                    </div>
                  </div>
                  <LazyLoad>
                    <img
                      className="card-img-top"
                      src={busImage}
                      alt="Bus"
                    ></img>
                  </LazyLoad>
                  <div className="card-body">
                    <div className="mybtn">
                      <Link to="/trip/1" className="mybtn-text text-white">
                        Wycieczka do Warszawy{" "}
                        <i className="fas fa-hand-pointer"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card bg-dark text-white box">
                  <div className="card-img-top nd"></div>
                  <div className="overlay text-white">
                    <div className="container">
                      <h3 className="card-title">Wycieczka nad morze!</h3>
                      <p className="card-text">
                        Najlepsze miejsce do odpoczynku, podmuch wiatru i fale
                        sprawiają, że chce się tam być!
                      </p>
                    </div>
                  </div>
                  <LazyLoad>
                    <img
                      className="card-img-top"
                      src={polImage}
                      alt="Polska"
                    ></img>
                  </LazyLoad>
                  <div className="card-body">
                    <div className="mybtn">
                      <Link to="/trip/2" className="mybtn-text text-white">
                        Wycieczka nad morze{" "}
                        <i className="fas fa-hand-pointer"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card bg-dark text-white box">
                  <div className="card-img-top rd"></div>
                  <div className="overlay text-white">
                    <div className="container">
                      <h3 className="card-title">Wycieczka w góry!</h3>
                      <p className="card-text">
                        Wspinaczka górska na polkie pasmo gór jest niezwykle
                        urokliwa warto się tam udać!
                      </p>
                    </div>
                  </div>
                  <LazyLoad>
                    <img
                      className="card-img-top"
                      src={trainImage}
                      alt="Pociąg"
                    ></img>
                  </LazyLoad>
                  <div className="card-body">
                    <div className="mybtn">
                      <Link to="/trip/3" className="mybtn-text text-white">
                        Wycieczka w góry <i className="fas fa-hand-pointer"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default Offert;
