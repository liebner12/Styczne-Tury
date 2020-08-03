import React, { lazy, Suspense } from "react";
import LazyLoad from "react-lazyload";

const GoogleApiWrapper = lazy(() => import("./Map"));

class Contact extends React.Component {
  render() {
    const renderLoader = () => <p>Loading</p>;
    return (
      <section id="contact-section" className="my-section">
        <div className="container">
          <div className="my-grid">
            <div>
              <div>
                <h2>Skontaktuj się z nami</h2>
                <p>Dowiedz się szczegółów o naszych wycieczkach ⛱</p>
              </div>
              <div className="ending-link">
                <a href="tel:733479253" rel="noreferrer">
                  <i className="fas fa-phone"></i> Telefon: 733 479 253
                </a>
              </div>
              <div className="ending-link">
                <a href="mailto:liebner15@gmail.com" rel="noreferrer">
                  <i className="fas fa-at"></i> Email: liebner15@gmail.com
                </a>
              </div>
              <div className="ending-link">
                <a
                  href="https://www.facebook.com/liebner12"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-facebook"></i> Facebook
                </a>
              </div>
              <div className="ending-link">
                <a
                  href="https://www.instagram.com/liebner12"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-instagram"></i> Instagram
                </a>
              </div>
              <div className="ending-link">
                <a
                  href="https://www.google.pl/maps/place/Bralin/@51.2832106,17.8220742,12z/data=!3m1!4b1!4m5!3m4!1s0x47100a32e7807c53:0x898a2df75a4093ec!8m2!3d51.2922684!4d17.8948326"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-map-marker-alt"></i> Adres
                </a>
              </div>
            </div>
            <div id="map">
              <Suspense fallback={<p>Loading...</p>}>
                <LazyLoad>
                  <GoogleApiWrapper />
                </LazyLoad>
              </Suspense>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
