import "./ListPlanet.scss";
import PropTypes, { shape } from "prop-types";

function ListPlanet({ systemeList }) {
  return (
    <div className="cursorPlanet">
      <ul>
        <li>
          <strong>Vitesse :</strong> {systemeList.vitesse_rotation_equateur} /
          <strong> période de révolution :</strong>{" "}
          {systemeList.periode_de_revolution}
        </li>
      </ul>
    </div>
  );
}
ListPlanet.propTypes = {
  systemeList: PropTypes.arrayOf(
    shape({
      french_name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      periode_de_revolution: PropTypes.string.isRequired,
      vitesse_rotation_equateur: PropTypes.string.isRequired,
      type_de_planete: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default ListPlanet;
