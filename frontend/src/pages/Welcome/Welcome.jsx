import { Link } from "react-router-dom";
import "./Welcome.scss";
import { useState, useEffect } from "react";

function Welcome() {
  const [systeme, setSysteme] = useState();

  useEffect(() => {
    fetch("http://localhost:3310/planets")
      .then((response) => response.json())
      .then((data) => setSysteme(data));
  }, []);

  return (
    <div className="welcomebackground">
      <section className="welcome">
        {systeme ? (
          <>
            <h1 className="welcometitle">STYX</h1>
            <div className="welcomeplanet">
              {systeme.map((planet) => {
                return (
                  <img
                    key={planet.id}
                    className={planet.french_name}
                    src={`${import.meta.env.VITE_BACKEND_URL}${planet.image}`}
                    alt=""
                  />
                );
              })}
            </div>
            <section className="presentation">
              <p className="textwelcome">
                Bienvenue sur "STYX" ! Notre site est votre passerelle vers les
                merveilles insondables de l'univers, en mettant en lumière le
                joyau de notre coin de cosmos : le système solaire. Que vous
                soyez un passionné d'astronomie chevronné, un étudiant curieux
                ou simplement quelqu'un en quête de connaissances, notre
                plateforme est conçue pour satisfaire votre soif de découvertes
                cosmiques.
              </p>
              <p className="textwelcome">
                Que vous soyez passionné par les tempêtes cosmique sur Jupiter,
                les lunes glacées d'Encelade, les mystères de Mars, ou les
                dernières découvertes sur les exoplanètes, "STYX" vous offre une
                fenêtre unique sur le monde de l'astronomie. Explorez avec nous
                les énigmes de l'espace, plongez dans les récits d'exploration
                spatiale, et émerveillez-vous devant la beauté et la grandeur de
                notre système solaire.
              </p>
              <p className="textwelcome">
                Rejoignez-nous dans cette aventure et partons ensemble à la
                découverte des merveilles du système solaire. Vous êtes invités
                à explorer, apprendre, partager et participer à cette quête
                infinie de connaissance et d'émerveillement. Bienvenue dans
                l'univers passionnant du système solaire, et préparez-vous à
                être ébloui par les secrets qui se cachent au-delà des étoiles.
              </p>
            </section>

            <Link to="/home" className="linkwelcome">
              🢡 Clique ici pour en découvrir plus 🢠
            </Link>
          </>
        ) : null}
      </section>
    </div>
  );
}

export default Welcome;
