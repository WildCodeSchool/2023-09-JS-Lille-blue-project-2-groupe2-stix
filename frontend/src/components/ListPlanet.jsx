import { useState } from "react";
import "./ListPlanet.scss";
import PropTypes from "prop-types";

function ListPlanet({ name, revolution, vitesse, url }) {
  const [hoverPlanet, setHoverPlanet] = useState(false);
  function handleMove() {
    setHoverPlanet(!hoverPlanet);
  }
  return (
    <>
      <div className={name}>
        <img
          src={url}
          alt=""
          onMouseOver={handleMove}
          style={{ zIndex: 15 }}
          onMouseLeave={handleMove}
          onFocus={handleMove}
          className={hoverPlanet ? "contour" : ""}
        />
      </div>
      <div className="listName">
        <ul>
          <li>
            <p
              onMouseOver={!hoverPlanet}
              style={{ zIndex: 15 }}
              onMouseLeave={!hoverPlanet}
              onFocus={!hoverPlanet}
              className={hoverPlanet ? "text boldList" : "boldList"}
            >
              {name} :
            </p>
            {revolution} / {vitesse}
          </li>
        </ul>
      </div>
    </>
  );
}
ListPlanet.propTypes = {
  name: PropTypes.string.isRequired,
  revolution: PropTypes.string.isRequired,
  vitesse: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default ListPlanet;
