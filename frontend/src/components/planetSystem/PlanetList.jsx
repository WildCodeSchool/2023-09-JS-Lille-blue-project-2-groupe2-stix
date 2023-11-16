import PropTypes from "prop-types";

function PlanetList({ id, handleChange, planet }) {
  return (
    <div className="List">
      <div
        onMouseLeave={() => handleChange(id)}
        onMouseOver={() => handleChange(id)}
        onFocus={() => handleChange(id)}
        className={planet.isHover ? "text listplacement" : "listplacement"}
      >
        <strong className="nameplanet">{planet.french_name} : </strong>
        <div
          onMouseLeave={() => handleChange(id)}
          onMouseOver={() => handleChange(id)}
          onFocus={() => handleChange(id)}
          className={
            planet.isHover ? "text textsecondairelist" : "textsecondairelist"
          }
        >
          Période de révolution : {planet.periode_de_revolution}
          <div
            onMouseLeave={() => handleChange(id)}
            onMouseOver={() => handleChange(id)}
            onFocus={() => handleChange(id)}
            className={
              planet.isHover ? "text textsecondairelist" : "textsecondairelist"
            }
          >
            vitesse de rotation à l'équateur :{" "}
            {planet.vitesse_rotation_equateur}
          </div>
        </div>
      </div>
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
