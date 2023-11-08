import { useState, useEffect } from "react";
import SolarSystem from "../../components/solarSystem/SolarSystem";
import PlanetSystem from "../../components/planetSystem/PlanetSystem";
import HomeText from "../../components/homeText/homeText";
import Navbar from "../../components/navbar/Navbar";

function Home() {
  const [systeme, setSysteme] = useState();

  useEffect(() => {
    fetch("http://localhost:3310/planets")
      .then((response) => response.json())
      .then((data) => setSysteme(data));
  }, []);
  return (
    <div>
      {systeme ? <SolarSystem systeme={systeme} /> : ""}
      {systeme ? <HomeText /> : ""}
      {systeme ? <PlanetSystem systeme={systeme} /> : ""}
      <Navbar systeme={systeme} />
    </div>
  );
}
export default Home;
