import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.scss";
import SolarSystem from "../../components/solarSystem/SolarSystem";
import PlanetSystem from "../../components/planetSystem/PlanetSystem";
import HomeText from "../../components/homeText/homeText";
import Navbar from "../../components/navbar/Navbar";
import "./Home.scss";

function Home() {
  const [showCard, setShowCard] = useState(false);
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
      <Link to="/otherstar" className="otherstar">
        🢡 Click for see strange and other star 🢠
      </Link>
      </div>
    <div className="home">
      {systeme ? (
        <SolarSystem
          systeme={systeme}
          choosePlanet={choosePlanet}
          foundPlanet={foundPlanet}
          showCard={showCard}
          setShowCard={setShowCard}
        />
      ) : (
        ""
      )}
      {systeme ? <HomeText /> : ""}
      {systeme ? <PlanetSystem systeme={systeme} Soleil /> : ""}
      <Navbar
        systeme={systeme}
        foundPlanet={foundPlanet}
        setShowCard={setShowCard}
      />
    </div>
  );
}
export default Home;
