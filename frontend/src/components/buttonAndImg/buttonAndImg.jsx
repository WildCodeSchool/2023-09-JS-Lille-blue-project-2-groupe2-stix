import PropTypes, { shape } from "prop-types";

function ButtonAndImg({ planets, setIndexPlanet, setShowCard }) {
  return (
    <div key={planets.french_name}>
      <img
        id={planets.french_name}
        className={planets.french_name}
        src={`${import.meta.env.VITE_BACKEND_URL}${planets.image}`}
        alt={planets.french_name}
      />
      <button
        aria-labelledby={planets.french_name}
        className={`button__img__${planets.french_name}`}
        type="button"
        onClick={() => {
          setIndexPlanet(planets.id);
          setShowCard(true);
        }}
      />
    </div>
  );
}

ButtonAndImg.propTypes = {
  planets: PropTypes.arrayOf(
    shape({
      french_name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      periode_de_revolution: PropTypes.string.isRequired,
      vitesse_rotation_equateur: PropTypes.string.isRequired,
      type_de_planete: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  setShowCard: PropTypes.func.isRequired,
  setIndexPlanet: PropTypes.func.isRequired,
};

export default ButtonAndImg;
