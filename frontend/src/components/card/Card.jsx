import { Link } from "react-router-dom";
import "./Card.scss";
import PropTypes, { shape } from "prop-types";

function Card({ choosePlanet, closeCard }) {
  return (
    <section id="card">
      <div className="card__body">
        <img
          className="card__img"
          src={`${import.meta.env.VITE_BACKEND_URL}${choosePlanet.image}`}
          alt={choosePlanet.french_name}
        />
        <div className="card__description">
          <h1 className="card__description__h1">{choosePlanet.french_name} </h1>
          <p className="card__description__p"> {choosePlanet.description} </p>
        </div>
        <section className="card__button">
          <button
            type="button"
            className="card__button__closed"
            onClick={closeCard}
          >
            X
          </button>

          <Link
            to={`/descriptionplus/${choosePlanet.id}`}
            className="card__button__moreInfos"
          >
            npm +
          </Link>
        </section>
      </div>
    </section>
  );
}

Card.propTypes = {
  choosePlanet: PropTypes.objectOf(
    shape({
      french_name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      periode_de_revolution: PropTypes.string.isRequired,
      vitesse_rotation_equateur: PropTypes.string.isRequired,
      type_de_planete: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  closeCard: PropTypes.func.isRequired,
};
export default Card;
