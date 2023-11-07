import "./SolarSystem.scss";
import PropTypes, { shape } from "prop-types";

function SolarSystem({ systeme }) {
  return (
    <div className="soleil">
      <img
        className="sun"
        src={`${import.meta.env.VITE_BACKEND_URL}${systeme[0].image}`}
        alt="Soleil"
      />
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
        <img
          className="mercure"
          src={`${import.meta.env.VITE_BACKEND_URL}${systeme[1].image}`}
          alt="Mercure"
        />
        <img
          className="venus"
          src={`${import.meta.env.VITE_BACKEND_URL}${systeme[2].image}`}
          alt="Venus"
        />
        <img
          className="terre"
          src={`${import.meta.env.VITE_BACKEND_URL}${systeme[3].image}`}
          alt="Terre"
        />
        <img
          className="mars"
          src={`${import.meta.env.VITE_BACKEND_URL}${systeme[4].image}`}
          alt="Mars"
        />
        <img
          className="jupiter"
          src={`${import.meta.env.VITE_BACKEND_URL}${systeme[5].image}`}
          alt="Jupiter"
        />
        <img
          className="saturne"
          src={`${import.meta.env.VITE_BACKEND_URL}${systeme[6].image}`}
          alt="Saturne"
        />
        <img
          className="uranus"
          src={`${import.meta.env.VITE_BACKEND_URL}${systeme[7].image}`}
          alt="Uranus"
        />
        <img
          className="neptune"
          src={`${import.meta.env.VITE_BACKEND_URL}${systeme[8].image}`}
          alt="Neptune"
        />
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
