import PropTypes from "prop-types";
import ListPlanet from "./ListPlanet";

function PlanetImg({ name, url, revolution, vitesse }) {
  return (
    <ListPlanet
      name={name}
      url={url}
      revolution={revolution}
      vitesse={vitesse}
    />
  );
}

PlanetImg.propTypes = {
  revolution: PropTypes.string.isRequired,
  vitesse: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default PlanetImg;
