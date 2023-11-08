import React, { useRef } from "react";
import "./homeText.scss";
import { useInView } from "framer-motion";

function HomeText() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div className="homeText">
      <p
        className="resumGalaxy "
        ref={ref}
        style={{
          opacity: isInView ? 1 : 0,
          transition: "all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        Notre <span className="textColor">système solaire</span> se trouve dans
        une galaxie nommée <span className="textColor">Voie lactée</span>
      </p>
      <p
        className="resumSS1"
        style={{
          opacity: isInView ? 1 : 0,
          transition: "all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 1s",
        }}
      >
        Il est constitué d'une étoile, de huit planètes ainsi que d'une
        multitude d'astres et de météores.
      </p>
      <p
        className="resumSS2"
        style={{
          opacity: isInView ? 1 : 0,
          transition: "all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 1.5s",
        }}
      >
        Les planètes
        <span className="textColor"> gravite autour du soleil</span> sur son
        propre orbite.
      </p>
      <p
        className="resumPlanet"
        style={{
          opacity: isInView ? 1 : 0,
          transition: "all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 2s",
        }}
      >
        Chaque planète possède
        <span className="textColor"> sa propre vitesse de déplacement </span>
        autour de l’étoile. Lorsque les planètes font un tour complet autour du
        soleil, cela se nomme une <span className="textColor">révolution</span>.
      </p>
    </div>
  );
}

export default HomeText;
