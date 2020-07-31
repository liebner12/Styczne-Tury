import React from "react";
import { Link } from "react-router-dom";
import busImage from "../images/bus-image-small.jpg";
import polImage from "../images/poland-image-small.jpg";
import trainImage from "../images/train-image-small.jpg";

class Offert extends React.Component {
  render() {
    return (
      <section id="offert-section" className="my-section">
        <div className="container">
          <h2 className="text-white">Zobacz nasze wycieczki</h2>
          <p className="text-white">
            tworzymy cudowne doświadczenia i jesteśmy w tym naprawdę dobrzy!
          </p>
          <div>
            <div className="row">
              <div className="col-md-4">
                <div className="card bg-dark text-white">
                  <div className="card-img-top st"></div>
                  <Link to="/trip/1" className="text-white">
                    <div className="overlay">
                      <div className="container">
                        <h5 className="card-title">Wycieczka do Warszawy</h5>
                        <p className="card-text">
                          Cudowna przygoda w stolicy Polski, zwiedzanie
                          najpiękniejszego miasta europy wschodniej!
                        </p>
                      </div>
                    </div>
                  </Link>
                  <img className="card-img-top" src={busImage} alt="Bus"></img>
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
                <div className="card bg-dark text-white">
                  <div className="card-img-top nd"></div>
                  <Link to="/trip/2" className="text-white">
                    <div className="overlay">
                      <div className="container">
                        <h5 className="card-title">Wycieczka nad morze!</h5>
                        <p className="card-text">
                          Najlepsze miejsce do odpoczynku, podmuch wiatru i fale
                          sprawiają, że chce się tam być!
                        </p>
                      </div>
                    </div>
                  </Link>
                  <img
                    className="card-img-top"
                    src={polImage}
                    alt="Polska"
                  ></img>
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
                <div className="card bg-dark text-white">
                  <div className="card-img-top rd"></div>
                  <Link to="/trip/3" className="text-white">
                    <div className="overlay">
                      <div className="container">
                        <h5 className="card-title">Wycieczka w góry!</h5>
                        <p className="card-text">
                          Wspinaczka górska na polkie pasmo gór jest niezwykle
                          urokliwa warto się tam udać!
                        </p>
                      </div>
                    </div>
                  </Link>
                  <img
                    className="card-img-top"
                    src={trainImage}
                    alt="Pociąg"
                  ></img>
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
