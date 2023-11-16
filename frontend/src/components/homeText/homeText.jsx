import "./homeText.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

function HomeText() {
  gsap.registerPlugin(ScrollTrigger);
  gsap.fromTo(
    ".resumGalaxy",
    { opacity: 0 },
    {
      scrollTrigger: {
        trigger: ".resumGalaxy",
        start: "top 80%",
        end: "bottom 80%",
        toggleActions: "play complet reverse reset",
      },
      opacity: 1,
      duration: 1,
      x: -20,
    }
  );
  gsap.fromTo(
    ".resumSS1",
    {
      opacity: 0,
    },
    {
      scrollTrigger: {
        trigger: ".resumSS1",
        start: "top 80%",
        end: "bottom 80%",
        toggleActions: "play complet reverse reset",
      },
      opacity: 1,
      duration: 1,
      x: -20,
    }
  );
  gsap.fromTo(
    ".resumSS2",
    { opacity: 0 },
    {
      scrollTrigger: {
        trigger: ".resumSS2",
        start: "top 80%",
        end: "bottom 80%",
        toggleActions: "play complet reverse reset",
      },
      opacity: 1,
      duration: 1,
      x: -20,
    }
  );
  gsap.fromTo(
    ".resumPlanet",
    { opacity: 0 },
    {
      scrollTrigger: {
        trigger: ".resumPlanet",
        start: "top 80%",
        end: "bottom 80%",
        toggleActions: "play complet reverse reset",
      },
      opacity: 1,
      duration: 1,
      x: -20,
    }
  );
  return (
    <div className="homeTexts">
      <p className="resumGalaxy ">
        Notre <span className="textColor">système solaire</span> se trouve dans
        une galaxie nommée la<span className="textColor">Voie lactée</span>.
      </p>
      <p className="resumSS1">
        Il est constitué d'une étoile, de huit planètes, ainsi que d'une
        multitude d'astres et de météores.
      </p>
      <p className="resumSS2">
        Les planètes
        <span className="textColor"> gravitent autour du soleil</span> sur leur
        propre orbite.
      </p>
      <p className="resumPlanet">
        Chaque planète possède
        <span className="textColor"> sa propre vitesse de déplacement </span>
        autour de l’étoile. Lorsque les planètes effectuent un tour complet
        autour du soleil, cela se nomme une{" "}
        <span className="textColor">révolution</span>.
      </p>
    </div>
  );
}

export default HomeText;
