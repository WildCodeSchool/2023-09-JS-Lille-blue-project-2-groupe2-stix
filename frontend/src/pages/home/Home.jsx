import { useState, useEffect } from "react";
import SolarSystem from "../../components/solarSystem/SolarSystem";
import PlanetSystem from "../../components/planetSystem/PlanetSystem";
import HomeText from "../../components/homeText/homeText";
import Navbar from "../../components/navbar/Navbar";

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
      {systeme ? <HomeText /> : ""}
      {systeme ? <PlanetSystem systeme={systeme} /> : ""}
      <Navbar systeme={systeme} />
    </div>
  );
}
export default Home;
