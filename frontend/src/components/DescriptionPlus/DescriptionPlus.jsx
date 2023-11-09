import { useState } from "react";
import { useParams } from "react-router-dom";
import "./DescriptionPlus.scss";
import systeme from "../../../../backend/src/data.json";

function DescriptionPlus() {
  const { id } = useParams();
  const [currentId, setCurrentId] = useState(parseInt(id, 10));
  const system = systeme.find((el) => el.id === currentId);

  const handleButtonClick = (newId) => {
    setCurrentId(newId);
  };

  return (
    <div className="Description">
      <nav className="navbar-plus">
        <ul>
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
      <p className="description ">{system.french_name}</p>
      <main className="content">
        {systeme && (
          <div>
            <img
              className="d-img"
              src={`${import.meta.env.VITE_BACKEND_URL}${system.image}`}
              alt={system.french_name}
            />
            <p className="description">{system.description}</p>
          </div>
        )}
      </main>
    </div>
  );
}

export default DescriptionPlus;
