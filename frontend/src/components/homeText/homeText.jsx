import React from "react";
import "./homeText.scss";

function HomeText() {
  return (
    <div className="HomeText">
      <p className="text1">
        Notre <span className="textColor">système Solaire</span> se trouve dans
        un galaxie nommée <span className="textColor">Voie Lactée</span>
      </p>
      <p className="text2">
        Il est constitué d'une étoile (le soleil), de huit planètes (dont la
        terre) ainsi que'une multitude de petit astre et météore.
      </p>
      <p className="text3">
        Chaque planètes
        <span className="textColor">gravitent autour du soleil</span> sur leurs
        propres orbites.
      </p>
      <p className="text4">
        Chaque planète possède
        <span className="textColor">sa propre vitesse de déplacement</span>
        autour de l’étoile. Lorsque les planètes font un tour complet autour du
        soleil, cela se nomme une <span className="textColor"> révolution</span>
        .
      </p>
    </div>
  );
}

export default HomeText;
