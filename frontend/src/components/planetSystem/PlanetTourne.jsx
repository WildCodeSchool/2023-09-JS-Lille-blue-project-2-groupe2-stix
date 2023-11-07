import PropTypes from "prop-types";

function PlanetTourne({ id, handleChange, planet }) {
  return (
    <div className={planet.french_name}>
      <img
        src={`${import.meta.env.VITE_BACKEND_URL}${planet.image}`}
        className={planet.isHover ? "contour" : ""}
        onMouseLeave={() => handleChange(id)}
        onMouseOver={() => handleChange(id)}
        onFocus={() => handleChange(id)}
        alt=""
      />
    </div>
  );
}

PlanetTourne.propTypes = {
  planet: PropTypes.shape({
    french_name: PropTypes.string.isRequired,
    isHover: PropTypes.bool.isRequired,
    image: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
  id: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default PlanetTourne;
