import { useState } from "react";
import PropTypes from "prop-types";
import PlanetList from "./PlanetList";
import "./PlanetSystem.scss";
import PlanetTurn from "./PlanetTurn";

function PlanetSystem({ systeme }) {
  const [system, setSystem] = useState(systeme);

  const handleChange = (id) => {
    setSystem(
      system.map((planet) => {
        if (planet.id === id) {
          // eslint-disable-next-line no-param-reassign
          planet.isHover = !planet.isHover;
          console.info(planet.french_name, planet.isHover, id);

          return planet;
        }

        return planet;
      })
    );
  };

  return (
    <div>
      {system &&
        system.map((planet) => (
          <section key={planet.id} className="solarList">
            <div className="système" id={planet.french_name}>
              <PlanetTurn
                id={planet.id}
                handleChange={handleChange}
                planet={planet}
              />
            </div>
            <PlanetList
              id={planet.id}
              handleChange={handleChange}
              planet={planet}
            />
          </section>
        ))}
    </div>
  );
}

PlanetSystem.propTypes = {
  systeme: PropTypes.arrayOf().isRequired,
};

export default PlanetSystem;
