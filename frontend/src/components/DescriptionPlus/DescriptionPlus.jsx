import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import systeme from "../../../../backend/src/data.json";
import "./DescriptionPlus.scss";

function DescriptionPlus() {
  const { id } = useParams();
  const [currentId, setCurrentId] = useState(parseInt(id, 10));
  const system = systeme.find((el) => el.id === currentId);

  const handleButtonClick = (newId) => {
    setCurrentId(newId);
  };

  return (
    <div className="content-bloc">
      <nav className="navbar-more">
        <ul>
          <li>
            <Link to="/home">
              <img
                className="btn-home"
                src="../../src/assets/image/boutonHome.png"
                alt="bouton-home"
              />
            </Link>
          </li>
          {systeme &&
            systeme.map((planet) => (
              <button
                className="btn"
                onClick={() => handleButtonClick(planet.id)}
                type="button"
                key={planet.id}
              >
                {planet.french_name}
              </button>
            ))}
        </ul>
      </nav>
      <h1 className="title ">{system.french_name}</h1>
      <main className="content">
        {systeme && (
          <>
            <img
              className="d-img"
              src={`${import.meta.env.VITE_BACKEND_URL}${system.image}`}
              alt={system.french_name}
            />

            <ul className="description">
              <li className="summary"> {system.description}</li>{" "}
              <li>
                <span className="specificityPlanet">GRAVITE :</span>{" "}
                {system.gravite}
              </li>{" "}
              <li>
                <span className="specificityPlanet">DENSITE :</span>{" "}
                {system.densite}
              </li>{" "}
              <li>
                <span className="specificityPlanet">MASSE :</span>{" "}
                {system.masse}
              </li>{" "}
              <li>
                <span className="specificityPlanet">
                  PERIODE DE REVOLUTION :
                </span>{" "}
                {system.periode_de_revolution}
              </li>{" "}
              <li>
                <span className="specificityPlanet">
                  NOMBRE D'HEURE DANS UNE JOURNEE :
                </span>{" "}
                {system.nombre_heures_journee}
              </li>{" "}
              <li>
                <span className="specificityPlanet">VITESSE DE ROTATION :</span>{" "}
                {system.vitesse_rotation_equateur}
              </li>{" "}
              <li>
                <span className="specificityPlanet">TYPE DE PLANETE :</span>{" "}
                {system.type_de_planete}
              </li>{" "}
              <li>
                <span className="specificityPlanet">MINIMUM :</span>{" "}
                {system.temperature_de_surface.min}
              </li>{" "}
              <li>
                <span className="specificityPlanet">MAX :</span>{" "}
                {system.temperature_de_surface.max}
              </li>{" "}
              <li>
                <span className="specificityPlanet">MOYENNE :</span>{" "}
                {system.temperature_de_surface.moyenne}
              </li>
            </ul>
          </>
        )}
      </main>
    </div>
  );
}

export default DescriptionPlus;
