import "./SolaireInteractif.scss";
import PropTypes, { shape } from "prop-types";
// import { useState } from "react";
import sun from "../assets/image/1sun.png";
import mercure from "../assets/image/2mercure.png";
import venus from "../assets/image/3venus.png";
import earth from "../assets/image/4earth.png";
import mars from "../assets/image/5mars.png";
import jupiter from "../assets/image/6jupiter.png";
import saturne from "../assets/image/7saturne.png";
import uranus from "../assets/image/8uranus.png";
import neptune from "../assets/image/9neptune.png";

// eslint-disable-next-line no-unused-vars
function SolaireInteractif({ systeme }) {
  // const [hover, setHover] = useState(false);

  // function handleMove() {
  //   setHover(!hover);
  // }

  return (
    <div className="système">
      <div className="sun">
        <img
          src={sun}
          // onMouseOver={handleMove}
          // onMouseLeave={handleMove}
          alt=""
          // className={hover ? "contour" : ""}
        />
      </div>
      <div className="Mercure">
        <img src={mercure} alt="" />
      </div>
      <div className="venus">
        <img src={venus} alt="" />
      </div>
      <div className="earth">
        <img src={earth} alt="" />
      </div>
      <div className="mars">
        <img src={mars} alt="" />
      </div>
      <div className="jupiter">
        <img src={jupiter} alt="" />
      </div>
      <div className="saturne">
        <img src={saturne} alt="" />
      </div>
      <div className="uranus">
        <img src={uranus} alt="" />
      </div>
      <div className="neptune">
        <img src={neptune} alt="" />
      </div>
    </div>
  );
}
SolaireInteractif.propTypes = {
  systeme: PropTypes.arrayOf(
    shape({
      french_name: PropTypes.string.isRequired,

      image: PropTypes.string.isRequired,

      type_de_planete: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
export default SolaireInteractif;
