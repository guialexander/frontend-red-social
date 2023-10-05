/* eslint-disable jsx-quotes */
import React from 'react';
import './notfound.css';
import imagenofound from '../../assets/img/notfound.png.jpg';

function NotFound() {
  return (
    <div className="container__notfound">
      <img
        src={imagenofound}
        alt="notfound"
        className="container__notfound--img"
      />
      <h1 className="container__notfound--title">404</h1>
      <div className="container__notfound--text">
        <div className="container__notfound--text--head">
          ¡Sorry! Something Went Wrong...
        </div>
      </div>
    </div>
  );
}

export default NotFound;
