import React from "react";
import "./homeText.scss";

function HomeText() {
  return (
    <>
      <p>
        Notre <span className="textColor">système Solaire</span> se trouve dans
        un galaxie nommée <span className="textColor">Voie Lactée</span>
      </p>
      <p>
        Il est constitué d'une étoile (le soleil), de huit planètes (dont la
        terre) ainsi que'une multitude de petit astre et météore.
      </p>
      <p>
        Chaque planètes
        <span className="textColor">gravitent autour du soleil</span> sur leurs
        propres orbites.
      </p>
      <p>
        Chaque planète possède
        <span className="textColor">sa propre vitesse de déplacement</span>
        autour de l’étoile. Lorsque les planètes font un tour complet autour du
        soleil, cela se nomme une <span className="textColor"> révolution</span>
        .
      </p>
    </>
  );
}

export default HomeText;
