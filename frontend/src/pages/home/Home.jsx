import { useState, useEffect } from "react";
import SolarSystem from "../../components/solarSystem/SolarSystem";
import HomeText from "../../components/homeText/homeText";
import Navbar from "../../components/navbar/Navbar";
import Logo from "../../components/logo/logo";

function Home() {
  const [systeme, setSysteme] = useState();

  useEffect(() => {
    fetch("http://localhost:3310/planets")
      .then((response) => response.json())
      .then((data) => setSysteme(data));
  }, []);
  return (
    <div>
      <Logo systeme={systeme} />
      <Navbar systeme={systeme} />
      {systeme ? <SolarSystem systeme={systeme} /> : ""}
      <HomeText />
    </div>
  );
}
export default Home;
