import { useState, useEffect } from "react";
import SolarSystem from "../../components/solarSystem/SolarSystem";
import HomeText from "../../components/homeText/homeText";

function Home() {
  const [systeme, setSysteme] = useState();
  const [choosePlanet, setChoosePlanet] = useState();
  const foundPlanet = (id) => {
    systeme.map((element) => {
      if (element.id === id) {
        setChoosePlanet(element);
      }
      return setChoosePlanet;
    });
  };

  useEffect(() => {
    fetch("http://localhost:3310/planets")
      .then((response) => response.json())
      .then((data) => setSysteme(data));
  }, []);
  return (
    <div>
      {systeme ? (
        <SolarSystem
          systeme={systeme}
          choosePlanet={choosePlanet}
          foundPlanet={foundPlanet}
        />
      ) : (
        ""
      )}
      <HomeText />
    </div>
  );
}
export default Home;
