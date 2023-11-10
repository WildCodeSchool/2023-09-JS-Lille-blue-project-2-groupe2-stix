import { useState } from "react";
import { useParams } from "react-router-dom";
import "./OtherStar.scss";
import newstar from "../../../../backend/src/star.json";

function OtherStar() {
  const { name } = useParams();
  const [star, setStar] = useState(name);
  const newstars = newstar.find((el) => el.name === star);

  const handleClick = (starid) => {
    setStar(starid);
  };

  return (
    <>
      <div className="navstar">
        {newstar &&
          newstar.map((stars) => {
            return (
              <section>
                <nav>
                  <button
                    onClick={() => handleClick(stars.name)}
                    type="button"
                    key={stars.name}
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
        <p className="présentationotherstar">
          {newstars
            ? null
            : "Au sein de l'immensité cosmique, des corps célestes étranges éveillent notre curiosité et alimentent notre fascination. Au-delà des constellations familières et des planètes de notre propre système solaire, l'univers nous réserve une panoplie de phénomènes cosmiques mystérieux. Des pulsars pulsants aux quasars lumineux, en passant par les étoiles à neutrons énigmatiques, chaque coin de l'univers semble abriter des merveilles célestes qui dépassent notre compréhension.Parmi ces énigmes célestes, les trous noirs défient toute logique connue. Ces régions de l'espace où la gravité est si intense que rien, pas même la lumière, ne peut s'échapper, sont des portails vers l'inconnu. Leur présence soulève des questions fondamentales sur la nature même de l'espace-temps. Les trous noirs sont des objets cosmiques étranges et captivants, aspirant la matière et la lumière, pliant la réalité à des limites inimaginables.Naviguer à travers ce panorama céleste étrange nous invite à repousser les frontières de notre connaissance astronomique. Le cosmos se déploie devant nous, révélant des secrets cosmiques qui défient notre logique et élargissent notre vision de l'univers infini qui s'étend bien au-delà de notre coin galactique."}
        </p>
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

export default OtherStar;
