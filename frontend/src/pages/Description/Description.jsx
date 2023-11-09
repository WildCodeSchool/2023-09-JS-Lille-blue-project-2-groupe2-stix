import { useState, useEffect } from "react";
import Logo from "../../components/logo/logo";
import DescriptionPlus from "../../components/DescriptionPlus/DescriptionPlus";

function Description() {
  const [systeme, setSysteme] = useState();

  useEffect(() => {
    fetch("http://localhost:3310/planets")
      .then((response) => response.json())
      .then((data) => setSysteme(data));
  }, []);
  return (
    <div>
      <Logo />
      <DescriptionPlus systeme={systeme} />
    </div>
  );
}

export default Description;
