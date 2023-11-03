import { useState, useEffect } from "react";
import SolaireInteractif from "../../components/SolaireInteractif";

function Home() {
  const [systeme, setSysteme] = useState();
  const [hover, setHover] = useState();

  useEffect(() => {
    fetch("http://localhost:3310/planets")
      .then((response) => response.json())
      .then((data) => setSysteme(data));
  }, []);

  return (
    <div>
      {systeme ? (
        <SolaireInteractif
          systeme={systeme}
          hover={hover}
          setHover={setHover}
        />
      ) : (
        ""
      )}
    </div>
  );
}
export default Home;
