import PropTypes from "prop-types";

function PlanetList({ id, handleChange, planet }) {
  return (
    <div className="List">
      <p
        onMouseLeave={() => handleChange(id)}
        onMouseOver={() => handleChange(id)}
        onFocus={() => handleChange(id)}
        className={planet.isHover ? "text" : null}
      >
        {" "}
        <strong>{planet.french_name} : </strong> <br />
        Periode de révolution : {planet.periode_de_revolution}
        <br />
        vitesse de rotation à l'équateur : {planet.vitesse_rotation_equateur}
      </p>
    </div>
  );
}

PlanetList.propTypes = {
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

export default PlanetList;
