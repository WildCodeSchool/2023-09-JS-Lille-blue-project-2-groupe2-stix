import { Link } from "react-router-dom";
import "./Card.scss";
import PropTypes, { shape } from "prop-types";

function Card({ planet, closeCard }) {
  return (
    <section id="card">
      <div className="card__body">
        <img
          className="card__img"
          src={`${import.meta.env.VITE_BACKEND_URL}${planet.image}`}
          alt={planet.french_name}
        />
        <div className="card__description">
          <h1 className="card__description__h1">{planet.french_name} </h1>
          <p className="card__description__p"> {planet.description} </p>
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
            to={`/DescriptionPlus/${planet.id}`}
            className="card__button__moreInfos"
          >
            More Infos
          </Link>
        </section>
      </div>
    </section>
  );
}

Card.propTypes = {
  planet: PropTypes.objectOf(
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
