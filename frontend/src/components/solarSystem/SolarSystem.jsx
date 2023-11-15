import "./SolarSystem.scss";
import PropTypes, { shape } from "prop-types";
import { createPortal } from "react-dom";
import Card from "../card/Card";
import ButtonAndImg from "../buttonAndImg/buttonAndImg";

function SolarSystem({
  systeme,
  foundPlanet,
  choosePlanet,
  showCard,
  setShowCard,
}) {
  return (
    <div className="sun">
      {systeme.map((planet) => (
        <ButtonAndImg
          planet={planet}
          setShowCard={setShowCard}
          foundPlanet={foundPlanet}
        />
      ))}
      {showCard &&
        createPortal(
          <Card
            choosePlanet={choosePlanet}
            closeCard={() => setShowCard(false)}
          />,
          document.body
        )}
      <div className="imageSVG">
        <svg>
          <path
            className="path_Mercury"
            d="M -300,450 A 900 110 0 0 0 393,300"
          />
          <path className="path_Venus" d="M -300,470 A 800 117 0 0 0 390,295" />
          <path className="path_Earth" d="M -300,490 A 700 124 0 0 0 390,292" />
          <path className="path_Mars" d="M -300,510 A 710 133 0 0 0 390,289" />
          <path
            className="path_Jupiter"
            d="M -300,560 A 710 159 0 0 0 389,285"
          />
          <path
            className="path_Saturn"
            d="M -400,700 A 740 210 0 0 0 387,280"
          />
          <path
            className="path_Uranus"
            d="M -400,850 A 785 240 0 0 0 385,275"
          />
          <path
            className="path_Neptune"
            d="M -460,1000 A 950 310 0 0 0 383,269"
          />
        </svg>
      </div>
    </div>
  );
}

SolarSystem.propTypes = {
  systeme: PropTypes.arrayOf(
    shape({
      french_name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      periode_de_revolution: PropTypes.string.isRequired,
      vitesse_rotation_equateur: PropTypes.string.isRequired,
      type_de_planete: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  foundPlanet: PropTypes.func.isRequired,
  choosePlanet: PropTypes.func.isRequired,
  showCard: PropTypes.func.isRequired,
  setShowCard: PropTypes.func.isRequired,
};
export default SolarSystem;
