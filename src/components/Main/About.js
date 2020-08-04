import React from "react";

class About extends React.Component {
  render() {
    function checkPosition() {
      let elements = document.querySelectorAll('.box');
      let window_height = window.innerHeight;
      for (let i = 0; i < elements.length; i++) {
        let element = elements[i];
        let position_top = elements[i].getBoundingClientRect().top;

        if (position_top - window_height <= 0) {
          element.classList.add("fade-in");
        }
      }
    }
    window.addEventListener('scroll', checkPosition);
    
    return (
      <section id="about-section" className="my-section">
        <div className="container">
          <div className="my-container">
            <div id="first-object">
              <div className="card bg-success text-white box">
                <div className="card-body">
                  <h2 className="card-title">Bezpieczny transport</h2>
                  <p className="card-text">
                    Nasza doświadczona załoga zawiezie was wszędzie w
                    najbezpieczniejszy możliwy sposób.
                  </p>
                </div>
              </div>
            </div>
            <div id="second-object" className="box">
              <h1>
                Jesteśmy profesjonalni <i className="fas fa-bus"></i>
              </h1>
            </div>
            <div id="third-object">
              <div className="card bg-success text-white box">
                <div className="card-body">
                  <h2 className="card-title">Niskie ceny</h2>
                  <p className="card-text">
                    Celem naszej firmy jest szczęście każdego z was dlatego
                    jesteśmy bezkonkurencyjni cenowo!
                  </p>
                </div>
              </div>
            </div>
            <div id="fourth-object" className="box">
              <p>
                Nasza firma skupia się na waszej wygodzie. Nie tworzymy tylko
                wycieczki, ale również świetne doświadczenia! Możesz z nami
                podróżować po całej Polsce. Jesteśmy na rynku od wielu lat,
                dołącz do grona naszych zadowolonych klientów!
              </p>
              <div id="background-wave"></div>
            </div>
            <div id="fifth-object">
              <div className="card bg-success text-white box">
                <div className="card-body">
                  <h2 className="card-title">Pełne doświadczenia</h2>
                  <p className="card-text">
                    Oferujemy transport, pożywienie, hotel wszystko co
                    potrzebujesz my mamy!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
