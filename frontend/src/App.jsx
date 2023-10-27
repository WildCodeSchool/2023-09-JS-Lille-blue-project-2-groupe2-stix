import { useState } from "react";
import SolarSystem from "./components/SolarSystem";
import "./components/SolarSystem.scss";

function App() {
  const [planets, setPlanets] = useState();

  fetch("http://localhost:3310/planets")
    .then((response) => response.json())
    .then((data) => setPlanets(data))
    .catch((error) => console.error(error));
  return (
    <div>
      <SolarSystem planets={setPlanets} planet={planets} />
    </div>
  );
}

export default App;
