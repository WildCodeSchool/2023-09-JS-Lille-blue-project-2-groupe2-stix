import React from "react";
import "./homeText.scss";

function HomeText() {
  return (
    <div className="homeText">
      <p className="resumGalaxy ">
        Notre <span className="textColor">système solaire</span> se trouve dans
        une galaxie nommée <span className="textColor">Voie lactée</span>
      </p>
      <p className="resumSS1">
        Il est constitué d'une étoile (le soleil), de huit planètes (dont la
        Terre) ainsi que d'une multitude de petits astres et météores.
      </p>
      <p className="resumSS2">
        Chaque planète
        <span className="textColor"> gravite autour du soleil</span> sur sa
        propre orbite.
      </p>
      <p className="resumPlanet">
        Chaque planète possède
        <span className="textColor"> sa propre vitesse de déplacement </span>
        autour de l’étoile. Lorsque les planètes font un tour complet autour du
        soleil, cela se nomme une <span className="textColor">révolution</span>.
      </p>
    </div>
  );
}

export default HomeText;
