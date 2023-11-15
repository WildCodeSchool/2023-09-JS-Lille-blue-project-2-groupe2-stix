/* eslint-disable import/no-extraneous-dependencies */
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.scss";
import SolarSystem from "../../components/solarSystem/SolarSystem";
import PlanetSystem from "../../components/planetSystem/PlanetSystem";
import HomeText from "../../components/homeText/homeText";
import Navbar from "../../components/navbar/Navbar";
import Logo from "../../components/logo/logo";

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
      <section>
        <Link to="/otherstars" className="otherstar">
          Voir d'autres particularités de notre univers !
        </Link>
      </section>
      <div className="home">
        {systeme ? (
          <SolarSystem
            systeme={systeme}
            choosePlanet={choosePlanet}
            foundPlanet={foundPlanet}
            setShowCard={setShowCard}
            showCard={showCard}
          />
        ) : (
          ""
        )}
        {systeme ? <HomeText /> : ""}
        {systeme ? <PlanetSystem systeme={systeme} Soleil /> : ""}
        <Logo
          systeme={systeme}
          foundPlanet={foundPlanet}
          setShowCard={setShowCard}
        />
        <Navbar
          systeme={systeme}
          foundPlanet={foundPlanet}
          setShowCard={setShowCard}
        />
      </div>
    </div>
  );
}
export default Home;
