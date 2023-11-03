import "./SolaireInteractif.scss";
import PropTypes, { shape } from "prop-types";
import PlanetImg from "./PlanetImg";
import sun from "../assets/image/1sun.png";
import mercure from "../assets/image/2mercure.png";
import venus from "../assets/image/3venus.png";
import earth from "../assets/image/4earth.png";
import mars from "../assets/image/5mars.png";
import jupiter from "../assets/image/6jupiter.png";
import saturne from "../assets/image/7saturne.png";
import uranus from "../assets/image/8uranus.png";
import neptune from "../assets/image/9neptune.png";

function SolaireInteractif({ systeme }) {
  return (
    <div className="système">
      <PlanetImg
        systeme={systeme}
        name={systeme[0].french_name}
        url={sun}
        revolution={systeme[0].periode_de_revolution}
        vitesse={systeme[0].vitesse_rotation_equateur}
      />
      <PlanetImg
        systeme={systeme}
        name={systeme[1].french_name}
        url={mercure}
        revolution={systeme[1].periode_de_revolution}
        vitesse={systeme[1].vitesse_rotation_equateur}
      />
      <PlanetImg
        systeme={systeme}
        name={systeme[2].french_name}
        url={venus}
        revolution={systeme[2].periode_de_revolution}
        vitesse={systeme[2].vitesse_rotation_equateur}
      />
      <PlanetImg
        systeme={systeme}
        name={systeme[3].french_name}
        url={earth}
        revolution={systeme[3].periode_de_revolution}
        vitesse={systeme[3].vitesse_rotation_equateur}
      />
      <PlanetImg
        systeme={systeme}
        name={systeme[4].french_name}
        url={mars}
        revolution={systeme[4].periode_de_revolution}
        vitesse={systeme[4].vitesse_rotation_equateur}
      />
      <PlanetImg
        systeme={systeme}
        name={systeme[5].french_name}
        url={jupiter}
        revolution={systeme[5].periode_de_revolution}
        vitesse={systeme[5].vitesse_rotation_equateur}
      />
      <PlanetImg
        systeme={systeme}
        name={systeme[6].french_name}
        url={saturne}
        revolution={systeme[6].periode_de_revolution}
        vitesse={systeme[6].vitesse_rotation_equateur}
      />
      <PlanetImg
        systeme={systeme}
        name={systeme[7].french_name}
        url={uranus}
        revolution={systeme[7].periode_de_revolution}
        vitesse={systeme[7].vitesse_rotation_equateur}
      />
      <PlanetImg
        systeme={systeme}
        name={systeme[8].french_name}
        url={neptune}
        revolution={systeme[8].periode_de_revolution}
        vitesse={systeme[8].vitesse_rotation_equateur}
      />
    </div>
  );
}

SolaireInteractif.propTypes = {
  systeme: PropTypes.arrayOf(
    shape({
      french_name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      periode_de_revolution: PropTypes.string.isRequired,
      vitesse_rotation_equateur: PropTypes.string.isRequired,
      type_de_planete: PropTypes.string.isRequired,
      isHover: PropTypes.bool.isRequired,
    }).isRequired
  ).isRequired,
};
export default SolaireInteractif;
