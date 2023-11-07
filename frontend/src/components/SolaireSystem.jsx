import { useState } from "react";
import PropTypes from "prop-types";
import Text from "./PlanetList";
import "./SolaireSystem.scss";
import Title from "./PlanetTourne";

function SolaireSystem({ systeme }) {
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
          <section key={planet.id}>
            <div className="système" id={planet.french_name}>
              <Title
                id={planet.id}
                handleChange={handleChange}
                planet={planet}
              />
            </div>
            <Text id={planet.id} handleChange={handleChange} planet={planet} />
          </section>
        ))}
    </div>
  );
}

SolaireSystem.propTypes = {
  systeme: PropTypes.arrayOf().isRequired,
};

export default SolaireSystem;
