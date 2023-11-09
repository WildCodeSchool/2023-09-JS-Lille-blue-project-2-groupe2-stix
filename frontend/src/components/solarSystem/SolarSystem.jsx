/* eslint-disable import/no-extraneous-dependencies */
import "./SolarSystem.scss";
import PropTypes, { shape } from "prop-types";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Card from "../card/Card";
import ButtonAndImg from "../buttonAndImg/buttonAndImg";
import Navbar from "../navbar/Navbar";

function SolarSystem({ systeme }) {
  const [showCard, setShowCard] = useState(false);
  const [indexPlanet, setIndexPlanet] = useState(0);
  const planets = systeme.slice(1);

  gsap.registerPlugin(ScrollTrigger);

  const slideInBottom = (elem, duration) => {
    gsap.fromTo(
      elem,
      {
        opacity: 1,
      },
      {
        opacity: 0,
        duration: duration || 0.2,
        scrollTrigger: {
          trigger: elem,
          start: "top top",
          end: "center center",
        },
      }
    );
  };

  useEffect(() => slideInBottom("#navbar", 1, 1), []);

  return (
    <div className="soleil">
      <img
        id="0"
        className="sun"
        src={`${import.meta.env.VITE_BACKEND_URL}${systeme[0].image}`}
        alt="Soleil"
      />
      <button
        data-index="0"
        aria-labelledby="sun"
        className="button__img__sun"
        type="button"
        onClick={() => {
          setIndexPlanet(systeme[0].id);
          setShowCard(true);
        }}
      />
      {showCard &&
        createPortal(
          <Card
            planet={systeme[indexPlanet]}
            closeCard={() => setShowCard(false)}
          />,
          document.body
        )}{" "}
      */
      <div className="imageSVG">
        <svg>
          <path d="M -300,450 A 900 110 0 0 0 393,300" />
          <path d="M -300,470 A 800 117 0 0 0 390,295" />
          <path d="M -300,490 A 700 124 0 0 0 390,292" />
          <path d="M -300,510 A 710 133 0 0 0 390,289" />
          <path d="M -300,560 A 710 159 0 0 0 389,285" />
          <path d="M -400,700 A 740 210 0 0 0 387,280" />
          <path d="M -400,850 A 785 240 0 0 0 385,275" />
          <path d="M -460,1000 A 950 310 0 0 0 383,269" />
        </svg>

        {planets.map((planet) => (
          <ButtonAndImg
            planets={planet}
            setIndexPlanet={setIndexPlanet}
            setShowCard={setShowCard}
          />
        ))}
      </div>
      <section id="navbar">
        <Navbar
          systeme={systeme}
          setIndexPlanet={setIndexPlanet}
          setShowCard={setShowCard}
        />
      </section>
    </div>
  );
}

SolarSystem.propTypes = {
  systeme: PropTypes.arrayOf(
    shape({
      french_name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      periode_de_revolution: PropTypes.string.isRequired,
      vitesse_rotation_equateur: PropTypes.string.isRequired,
      type_de_planete: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
export default SolarSystem;
