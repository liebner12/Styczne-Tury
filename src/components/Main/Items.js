import React, { Component } from "react";

class Item extends Component {
  render() {
    return (
      <div>
        {this.props.params == 1 ? (
          <div>
            <h1>Wycieczka do Warszawy</h1>
            <h2>Koszt dla 20 osób: 15000zł</h2>
            <h3>Czas trwania: 3 dni</h3>
            <p className="description">
              Pierwszego dnia zwiedzanie miasta z przewodnikiem. Drugiego Kulisy
              Telewizji Polskie oraz Muzeum Powstania Warszawskiego. Trzeciego
              Centrum Nauki Kopernik.
            </p>
          </div>
        ) : this.props.params == 2 ? (
          <div>
            <h1 className="title">Wycieczka do Gdańska</h1>
            <h2>Koszt dla 20 osób: 7500zł</h2>
            <h3>Czas trwania: 2 dni</h3>
            <p className="description">
              Dnia pierwszego zwiedzanie Gdańska oraz rejs statekiem, drugiego
              przejazd do Westerplatte i Molo Orłowo
            </p>
          </div>
        ) : (
          <div>
            <h1 className="title">Wycieczka do Zakopanego</h1>
            <h2>Koszt dla 20 osób: 10000zł</h2>
            <h3>Czas trwania: 3 dni</h3>
            <p className="description">
              Pierwszy dzień zdobycie Morskiego Oka oraz dolina pięciu stawów!
              Drugiego dnia dolina gąsiecnicowa, a trzeciego pobyt w termach
              oraz w restauracji pani Magdy Gessler
            </p>
          </div>
        )}
      </div>
    );
  }
}

export default Item;
