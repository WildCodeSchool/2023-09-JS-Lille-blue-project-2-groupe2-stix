import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./OtherStars.scss";
import newstar from "../../../../backend/src/star.json";
import Logo from "../../components/logo/logo";

function OtherStars() {
  const { name } = useParams();
  const [star, setStar] = useState(name);
  const newstars = newstar.find((el) => el.name === star);

  const handleClick = (starsname) => {
    setStar(starsname);
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "visible";
    };
  }, []);

  return (
    <div className="bodystars">
      <div className="navstar">
        {newstar &&
          newstar.map((stars) => {
            return (
              <section key={stars.name}>
                <nav className="navbar-plus">
                  <button
                    onClick={() => handleClick(stars.name)}
                    type="button"
                    key={stars.name}
                    className="buttonstar"
                  >
                    {stars.name}
                  </button>
                </nav>
              </section>
            );
          })}
      </div>
      {newstars && (
        <section className="bodystar">
          <h1 className={newstars.emplacement}>{newstars.name}</h1>
          {newstars && (
            <img
              className={newstars.name}
              src={`${import.meta.env.VITE_BACKEND_URL}${newstars.photo}`}
              alt=""
            />
          )}
        </section>
      )}
      <section>
        {newstars ? null : (
          <>
            <h2 className="styx">
              <Logo />
            </h2>

            <p className="présentationotherstar">
              "Au sein de l'immensité cosmique, des corps célestes étranges
              éveillent notre curiosité et alimentent notre fascination. Au-delà
              des constellations familières et des planètes de notre propre
              système solaire, l'univers nous réserve une panoplie de phénomènes
              cosmiques mystérieux.
            </p>
          </>
        )}
      </section>
      {newstars && (
        <section className={newstars.type}>
          <p className="descriptionstar">{newstars && newstars.Description}</p>
          <section className="sectioncarac">
            <p className="caracstar">
              Diamètre en km : {newstars.diametre_en_km}
            </p>
            <p className="caracstar">
              Distance de la Terre : {newstars.Distance_de_la_Terre}
            </p>
            <p className="caracstar">
              Emplacement dans l'univers : {newstars.emplacement}{" "}
            </p>
            <p className="caracstar">Type d'étoile : {newstars.type} </p>
          </section>
        </section>
      )}
    </div>
  );
}

export default OtherStars;
