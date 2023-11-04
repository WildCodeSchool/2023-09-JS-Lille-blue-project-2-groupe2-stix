import PropTypes from "prop-types";

function Text({ id, handleChange, planet }) {
  return (
    <div>
      <p
        onMouseLeave={() => handleChange(id)}
        onMouseOver={() => handleChange(id)}
        onFocus={() => handleChange(id)}
        className={planet.isHover ? "text" : "bold"}
      >
        {" "}
        {planet.french_name} :
      </p>
      <p>
        {planet.periode_de_revolution} / {planet.vitesse_rotation_equateur}
      </p>
    </div>
  );
}

Text.propTypes = {
  planet: PropTypes.shape({
    french_name: PropTypes.string.isRequired,
    isHover: PropTypes.bool.isRequired,
    image: PropTypes.string.isRequired,
    periode_de_revolution: PropTypes.string.isRequired,
    vitesse_rotation_equateur: PropTypes.string.isRequired,
  }).isRequired,
  id: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Text;
