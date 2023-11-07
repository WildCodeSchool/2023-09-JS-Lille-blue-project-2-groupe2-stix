import { useState, useEffect } from "react";
import SolarSystem from "../../components/solarSystem/SolarSystem";
import HomeText from "../../components/homeText/homeText";

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

      <HomeText />
    </div>
  );
}
export default Home;
