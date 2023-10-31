import "./homeText.scss";
import { useInView } from "framer-motion";
import { useRef } from "react";

function HomeText() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div className="homeText">
      <p
        className="resumGalaxy"
        ref={ref}
        style={{
          opacity: isInView ? 1 : 0,
          transition: "all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        Le <span className="textColor">système Solaire</span> se trouve dans la
        galaxie nommée <span className="textColor">Voie Lactée</span>
      </p>
      <p
        className="resumSS1"
        style={{
          opacity: isInView ? 1 : 0,
          transition: "all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 1s",
        }}
      >
        Il est constitué d'une étoile, de huit planètes ainsi que de multiple
        petits astres, et météore.
      </p>
      <p
        className="resumSS2"
        style={{
          opacity: isInView ? 1 : 0,
          transition: "all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 1.5s",
        }}
      >
        Les planètes
        <span className="textColor"> gravitent autour du soleil</span> sur leurs
        propres orbites.
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
        soleil, cela se nomme une <span className="textColor"> révolution</span>
        .
      </p>
    </div>
  );
}

export default HomeText;
