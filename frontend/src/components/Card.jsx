import "./Card.scss";

function Card() {
  return (
    <div className="Card">
      <div className="planetDesc">
        <div className="Description">
          <h1>Planet title</h1>
          <p> Description </p>
        </div>
        <div className="planet">
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
