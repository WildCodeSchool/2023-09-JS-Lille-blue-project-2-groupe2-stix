import PropTypes from "prop-types";
import soleil from "../assets/image/1sun.png";

function Title({ id, handleChange, planet }) {
  return (
    <div className={planet.french_name}>
      <img
        className={planet.isHover ? "contour" : ""}
        onMouseLeave={() => handleChange(id)}
        onMouseOver={() => handleChange(id)}
        onFocus={() => handleChange(id)}
        src={soleil}
        alt=""
        style={{ zIndex: 1 }}
      />
    </div>
  );
}

Title.propTypes = {
  planet: PropTypes.shape({
    french_name: PropTypes.string.isRequired,
    isHover: PropTypes.bool.isRequired,
    image: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
  id: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Title;
