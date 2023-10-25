import "./Card.scss";

function Card() {
  return (
    <div className="Card">
      {/* <img src={Croix} className="croix" alt="" /> */}
      <div className="planetDesc">
        <div className="Description">
          <h1>Titre de la planètes</h1>
          <p> Superbe Description de la planète !!! </p>
        </div>
        <div className="planète">
          <img className="earth" src={Image} alt="" />
        </div>
      </div>
      <div className="moreInfos">
        <button type="button"> More Infos</button>
      </div>
    </div>
  );
}
export default Card;
