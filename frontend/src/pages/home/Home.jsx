import { useState, useEffect } from "react";
import SolaireSystem from "../../components/SolaireSystem";

function Home() {
  const [systeme, setSysteme] = useState();

  useEffect(() => {
    fetch("http://localhost:3310/planets")
      .then((response) => response.json())
      .then((data) => setSysteme(data));
  }, []);

  return <div>{systeme ? <SolaireSystem /> : ""}</div>;
}
export default Home;
