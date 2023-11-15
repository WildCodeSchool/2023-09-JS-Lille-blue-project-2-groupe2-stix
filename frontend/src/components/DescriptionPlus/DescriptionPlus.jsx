import { useState } from "react";
import { useParams } from "react-router-dom";
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
            <a href="http://localhost:3000/">
              <img
                className="btn-home"
                src="../../src/assets/image/boutonHome.png"
                alt="bouton-home"
              />
            </a>
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
      <p className="title ">{system.french_name}</p>
      <main className="content">
        {systeme && (
          <>
            <div className="rotation">
              <img
                className="d-img"
                src={`${import.meta.env.VITE_BACKEND_URL}${system.image}`}
                alt={system.french_name}
              />
            </div>
            <p className="description">
              <h5 className="summary"> {system.description}</h5>{" "}
              <h5>GRAVITE : {system.gravite}</h5>{" "}
              <h5>DENSITE : {system.densite}</h5>{" "}
              <h5>MASSE : {system.masse}</h5>{" "}
              <h5>PERIODE DE REVOLUTION : {system.periode_de_revolution}</h5>{" "}
              <h5>
                NOMBRE D'HEURE DANS UNE JOURNEE : {system.nombre_heures_journee}
              </h5>{" "}
              <h5>VITESSE DE ROTATION : {system.vitesse_rotation_equateur}</h5>{" "}
              <h5>TYPE DE PLANETE : {system.type_de_planete}</h5>{" "}
              <h5>MINIMUM : {system.temperature_de_surface.min}</h5>{" "}
              <h5>MAX : {system.temperature_de_surface.max}</h5>{" "}
              <h5>MOYENNE : {system.temperature_de_surface.moyenne}</h5>
            </p>
          </>
        )}
      </main>
    </div>
  );
}

export default DescriptionPlus;
