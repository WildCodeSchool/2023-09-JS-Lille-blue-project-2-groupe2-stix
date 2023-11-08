import { Link } from "react-router-dom";
import "./Accueil.scss";
import { useState, useEffect } from "react";

function Accueil() {
  const [systeme, setSysteme] = useState();

  useEffect(() => {
    fetch("http://localhost:3310/planets")
      .then((response) => response.json())
      .then((data) => setSysteme(data));
  }, []);
  return (
    <div className="accueil">
      {systeme ? (
        <>
          <h1>STYX</h1>
          <img
            className="terre"
            src={`${import.meta.env.VITE_BACKEND_URL}${systeme[3].image}`}
            alt=""
          />
          <section className="presentation">
            <p className="textaccueil">
              Bienvenue sur "STYX" ! Notre site est votre passerelle vers les
              merveilles insondables de l'univers, en mettant en lumière le
              joyau de notre coin de cosmos : le système solaire. Que vous soyez
              un passionné d'astronomie chevronné, un étudiant curieux ou
              simplement quelqu'un en quête de connaissances, notre plateforme
              est conçue pour satisfaire votre soif de découvertes cosmiques.
            </p>
            <p className="textaccueil">
              Que vous soyez passionné par les cosmique tempêtes sur Jupiter,
              les lunes glacées d'Encelade, les mystères de Mars, ou les
              dernières découvertes sur les exoplanètes, "STYX" vous offre une
              fenêtre unique sur le monde de l'astronomie. Explorez avec nous
              les énigmes de l'espace, plongez dans les récits d'exploration
              spatiale, et émerveillez-vous devant la beauté et la grandeur de
              notre système solaire.
            </p>
            <p className="textaccueil">
              Rejoignez-nous dans cette aventure et partons ensemble à la
              découverte des merveilles du système solaire. Vous êtes invités à
              explorer, apprendre, partager et participer à cette quête infinie
              de connaissance et d'émerveillement. Bienvenue dans l'univers
              passionnant du système solaire, et préparez-vous à être ébloui par
              les secrets qui se cachent au-delà des étoiles.
            </p>
          </section>
          <img
            className="jupiter"
            src={`${import.meta.env.VITE_BACKEND_URL}${systeme[5].image}`}
            alt=""
          />
          <h2>Envie d'en apprendre plus ?</h2>
          <Link to="/home" className="linkaccueil">
            {" "}
            Clique ici pour découvrir{" "}
          </Link>
        </>
      ) : null}
    </div>
  );
}

export default Accueil;
