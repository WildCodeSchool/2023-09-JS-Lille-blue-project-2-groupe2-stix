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
          return planet;
        }
        return planet;
      })
    );
  };

  return (
    <div className="rotatingSystem">
      {system &&
        system.map((planet) => (
          <article key={planet.id} className="solarlist">
            <section className="système" id={planet.french_name}>
              <PlanetTurn
                id={planet.id}
                handleChange={handleChange}
                planet={planet}
              />
            </section>
            <PlanetList
              id={planet.id}
              handleChange={handleChange}
              planet={planet}
            />
          </article>
        ))}
    </div>
  );
}

PlanetSystem.propTypes = {
  systeme: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

export default PlanetSystem;
