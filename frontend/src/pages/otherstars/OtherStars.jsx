import { useState } from "react";
import { useParams } from "react-router-dom";
import "./OtherStars.scss";
import newstar from "../../../../backend/src/star.json";

function OtherStars() {
  const { name } = useParams();
  const [star, setStar] = useState(name);
  const newstars = newstar.find((el) => el.name === star);

  const handleClick = (starname) => {
    setStar(starname);
  };

  return (
    <>
      <div className="navstar">
        {newstar &&
          newstar.map((stars) => {
            return (
              <section>
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
      <h1 className="titlestar">{newstars && newstars.name}</h1>
      <section className="bodystar">
        {newstars && (
          <img
            className={newstars.name}
            src={`${import.meta.env.VITE_BACKEND_URL}${newstars.photo}`}
            alt=""
          />
        )}
      </section>
      <section>
        {newstars ? null : (
          <>
            <h2 className="styx">
              STYX <br />
              Cliquez sur l'un des boutons pour afficher le corps céleste
              correspondant.
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
      <section className="sectiondesc">
        <p className="descriptionstar">{newstars && newstars.Description}</p>
        {newstars && (
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
            <p className="caracstar">
              type d'étoile : {newstars.type_d_etoile}{" "}
            </p>
          </section>
        )}
      </section>
    </>
  );
}

export default OtherStars;
