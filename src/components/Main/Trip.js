import React from "react";
import { HashLink as Link } from "react-router-hash-link";
class Trip extends React.Component {
  render() {
    return (
      <div id="offert-section" className="item-page">
        <div className="card bg-dark text-white">
          <div>
            <div class="card-body">
              <h5 class="card-title">Warszawa</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
        <Link to="/#offert-section">
          <button className="btn btn-primary btn-lg">Powrót</button>
        </Link>
      </div>
    );
  }
}

export default Trip;
