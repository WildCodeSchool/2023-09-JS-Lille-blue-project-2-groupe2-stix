import PropTypes, { shape } from "prop-types";
import "./Navbar.scss";

function Navbar({ systeme }) {
  return (
    <nav className="navbar">
      <div className="planets">
        {systeme.map((planet) => {
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

  // function Navbar() {
  //   return (
  //     <nav className="navbar">
  //       <div className="planets">
  //         <div className="planet">
  //           <img
  //             className="sun-navbar"
  //             src="../src/assets/image/1sun.png"
  //             alt="Soleil"
  //           />
  //           <h6>SOLEIL</h6>
  //         </div>
  //         <div className="planet">
  //           <img
  //             className="planet-img"
  //             src="../src/assets/image/2mercure.png"
  //             alt="Mercure"
  //           />
  //           <h6>MERCURE</h6>
  //         </div>
  //         <div className="planet">
  //           <img
  //             className="planet-img"
  //             src="../src/assets/image/3venus.png"
  //             alt="Venus"
  //           />
  //           <h6>VENUS</h6>
  //         </div>
  //         <div className="planet">
  //           <img
  //             className="planet-img"
  //             src="../src/assets/image/4earth.png"
  //             alt="Terre"
  //           />
  //           <h6>TERRE</h6>
  //         </div>
  //         <div className="planet">
  //           <img
  //             className="planet-img"
  //             src="../src/assets/image/5mars.png"
  //             alt="Mars"
  //           />
  //           <h6>MARS</h6>
  //         </div>
  //         <div className="planet">
  //           <img
  //             className="planet-img"
  //             src="../src/assets/image/6jupiter.png"
  //             alt="Jupiter"
  //           />
  //           <h6>JUPITER</h6>
  //         </div>
  //         <div className="planet">
  //           <img
  //             className="Saturn"
  //             src="../src/assets/image/7saturne.png"
  //             alt="Saturne"
  //           />
  //           <h6>SATURNE</h6>
  //         </div>
  //         <div className="planet">
  //           <img
  //             className="planet-img"
  //             src="../src/assets/image/8uranus.png"
  //             alt="Uranus"
  //           />
  //           <h6>URANUS</h6>
  //         </div>
  //         <div className="planet">
  //           <img
  //             className="neptune-img"
  //             src="../src/assets/image/9neptune.png"
  //             alt="Neptune"
  //           />
  //           <h6>NEPTUNE</h6>
  //         </div>
  //       </div>
  //     </nav>
  //   );
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
