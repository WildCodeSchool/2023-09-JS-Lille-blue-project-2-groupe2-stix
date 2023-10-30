import { useState, useEffect } from "react";
import SolaireInteractif from "../../components/SolaireInteractif";
import ListPlanet from "../../components/ListPlanet";

function Home() {
  const [systeme, setSysteme] = useState();

  useEffect(() => {
    fetch("http://localhost:3310/planets")
      .then((response) => response.json())
      .then((data) => setSysteme(data));
  }, []);
  return (
    <>
      <div>{systeme ? <SolaireInteractif systeme={systeme} /> : ""}</div>
      <div className="listPlanet">
        {systeme
          ? systeme.map((systemeList) => {
              return (
                <div className="textList">
                  <ListPlanet systemeList={systemeList} />
                </div>
              );
            })
          : ""}
      </div>
    </>
  );
}
export default Home;
