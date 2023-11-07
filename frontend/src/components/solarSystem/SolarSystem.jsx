import "./SolarSystem.scss";
import PropTypes, { shape } from "prop-types";
import { useState } from "react";
import { createPortal } from "react-dom";
import Card from "../card/Card";
import ButtonAndImg from "../buttonAndImg/buttonAndImg";

function SolarSystem({ systeme }) {
  const [showCard, setShowCard] = useState(false);
  const [choosePlanet, setChoosePlanet] = useState();

  return (
    <div className="sun">
      {showCard &&
        createPortal(
          <Card
            planet={systeme[choosePlanet]}
            closeCard={() => setShowCard(false)}
          />,
          document.body
        )}
      <div className="imageSVG">
        <svg>
          <path d="M -300,450 A 900 110 0 0 0 393,300" />
          <path d="M -300,470 A 800 117 0 0 0 390,295" />
          <path d="M -300,490 A 700 124 0 0 0 390,292" />
          <path d="M -300,510 A 710 133 0 0 0 390,289" />
          <path d="M -300,560 A 710 159 0 0 0 389,285" />
          <path d="M -400,700 A 740 210 0 0 0 387,280" />
          <path d="M -400,850 A 785 240 0 0 0 385,275" />
          <path d="M -460,1000 A 950 310 0 0 0 383,269" />
        </svg>

        {systeme.map((planet) => (
          <ButtonAndImg
            planet={planet}
            setChoosePlanet={setChoosePlanet}
            setShowCard={setShowCard}
          />
        ))}
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
};
export default SolarSystem;
