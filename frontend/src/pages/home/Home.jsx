import { useState, useEffect } from "react";
import SolarSystem from "../../components/solarSystem/SolarSystem";
import PlanetSystem from "../../components/planetSystem/PlanetSystem";
import HomeText from "../../components/homeText/homeText";
import Card from "../../components/card/Card";

export default function Home() {
  const [systeme, setSysteme] = useState();

  useEffect(() => {
    fetch("http://localhost:3310/planets")
      .then((response) => response.json())
      .then((data) => setSysteme(data));
  }, []);
  return (
    <div>
      <div> {systeme ? <SolarSystem systeme={systeme} /> : ""} </div>
      <HomeText />
      <Card />
      {systeme ? <PlanetSystem systeme={systeme} /> : ""}
    </div>
  );
}
