import PropTypes, { shape } from "prop-types";
import "./Navbar.scss";

function Navbar({ systeme }) {
  return (
    <nav className="navbar">
      <div className="planets">
        {systeme &&
          systeme.map((planet) => {
            return (
              <div className="planet" key={planet.id}>
                <img
                  className="planet-img"
                  src={`${import.meta.env.VITE_BACKEND_URL}${planet.image}`}
                  alt={planet.french_name}
                />
                <p>{planet.french_name}</p>
              </div>
            );
          })}
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  systeme: PropTypes.arrayOf(
    shape({
      french_name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      periode_de_revolution: PropTypes.string.isRequired,
      vitesse_rotation_equateur: PropTypes.string.isRequired,
      type_de_planete: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default Navbar;
