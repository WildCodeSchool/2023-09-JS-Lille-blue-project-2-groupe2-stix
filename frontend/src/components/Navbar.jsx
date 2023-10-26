import React from "react";
import "./Navbar.scss";

function Navbar() {
  return (
    <nav className="navbar carrousel">
      <div className="navbar-items">
        <div className="navbar-item">
          <img
            className="soleil"
            src="../src/assets/image/1sun.png"
            alt="Soleil"
          />
          <h6>SOLEIL</h6>
        </div>
        <div className="navbar-item">
          <img
            className="planete mercure"
            src="../src/assets/image/2mercure.png"
            alt="Mercure"
          />
          <h6>MERCURE</h6>
        </div>
        <div className="navbar-item">
          <img
            className="planete venus"
            src="../src/assets/image/3venus.png"
            alt="Venus"
          />
          <h6>VENUS</h6>
        </div>
        <div className="navbar-item">
          <img
            className="planete terre"
            src="../src/assets/image/4earth.png"
            alt="Terre"
          />
          <h6>TERRE</h6>
        </div>
        <div className="navbar-item">
          <img
            className="planete mars"
            src="../src/assets/image/5mars.png"
            alt="Mars"
          />
          <h6>MARS</h6>
        </div>
        <div className="navbar-item">
          <img
            className="jupiter"
            src="../src/assets/image/6jupiter.png"
            alt="Jupiter"
          />
          <h6>JUPITER</h6>
        </div>
        <div className="navbar-item">
          <img
            className="saturne"
            src="../src/assets/image/7saturne.png"
            alt="Saturne"
          />
          <h6>SATURNE</h6>
        </div>
        <div className="navbar-item">
          <img
            className="planete uranus"
            src="../src/assets/image/8uranus.png"
            alt="Uranus"
          />
          <h6>URANUS</h6>
        </div>
        <div className="navbar-item">
          <img
            className="neptune"
            src="../src/assets/image/9neptune.png"
            alt="Neptune"
          />
          <h6>NEPTUNE</h6>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
