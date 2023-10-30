import React from "react";
import "./homeText.scss";

function HomeText() {
  return (
    <div className="homeText">
      <p className="resumGalaxy">
        Le <span className="textColor">système Solaire</span> se trouve dans la
        galaxie nommée <span className="textColor">Voie Lactée</span>
      </p>
      <p className="resumSS1">
        Il est constitué d'une étoile, de huit planètes ainsi que de multiple
        petits astres, et météore.
      </p>
      <p className="resumSS2">
        Les planètes
        <span className="textColor"> gravitent autour du soleil</span> sur leurs
        propres orbites.
      </p>
      <p className="resumPlanet">
        Chaque planète possède
        <span className="textColor"> sa propre vitesse de déplacement </span>
        autour de l’étoile. Lorsque les planètes font un tour complet autour du
        soleil, cela se nomme une <span className="textColor"> révolution</span>
        .
      </p>
    </div>
  );
}

export default HomeText;
