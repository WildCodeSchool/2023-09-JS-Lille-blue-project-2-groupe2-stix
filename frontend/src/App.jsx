import { useState } from "react";

import SolarSystem from "./components/SolarSystem";
import "./components/SolarSystem.scss";
import HomeText from "./components/homeText";

function App() {
  const [planets, setPlanets] = useState();

  fetch("http://localhost:3310/planets")
    .then((response) => response.json())
    .then((data) => setPlanets(data))
    .catch((error) => console.error(error));
  return (
    <div>
      <SolarSystem planets={setPlanets} planet={planets} />
      return <HomeText />;
    </div>
  );
}

export default App;
