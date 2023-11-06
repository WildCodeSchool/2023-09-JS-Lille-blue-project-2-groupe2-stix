import { useState, useEffect } from "react";
import SolarSystem from "../../components/solarSystem/SolarSystem";
import HomeText from "../../components/homeText/homeText";
import Card from "../../components/card/Card";
import Navbar from "../../components/navbar/Navbar";
import Logo from "../../components/navbar/logo";

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
      {systeme ? <Navbar systeme={systeme} /> : ""}
      <Card />
      <Logo />
    </div>
  );
}
