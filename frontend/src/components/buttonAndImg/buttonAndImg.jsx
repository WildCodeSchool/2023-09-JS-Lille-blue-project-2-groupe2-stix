import PropTypes, { shape } from "prop-types";

function ButtonAndImg({ planet, setChoosePlanet, setShowCard }) {
  return (
    <div key={planet.id}>
      <img
        id={planet.english_name}
        className={planet.english_name}
        src={`${import.meta.env.VITE_BACKEND_URL}${planet.image}`}
        alt={planet.english_name}
      />
      <button
        id={planet.id}
        className={`button__img__${planet.english_name}`}
        type="button"
        onClick={() => {
          setChoosePlanet(planet.id);
          setShowCard(true);
        }}
      >
        {planet.french_name}
      </button>
    </div>
  );
}

ButtonAndImg.propTypes = {
  planet: PropTypes.arrayOf(
    shape({
      french_name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      periode_de_revolution: PropTypes.string.isRequired,
      vitesse_rotation_equateur: PropTypes.string.isRequired,
      type_de_planete: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  setShowCard: PropTypes.func.isRequired,
  setChoosePlanet: PropTypes.func.isRequired,
};

export default ButtonAndImg;
