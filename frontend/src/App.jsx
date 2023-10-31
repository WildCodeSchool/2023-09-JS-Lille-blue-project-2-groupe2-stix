import "./App.css";
import Card from "./components/Card";
import SolarSystem from "./components/SolarSystem";
import "./components/SolarSystem.scss";
import HomeText from "./components/homeText";

function App() {
  return (
    <div>
      <SolarSystem />
      <HomeText />
       <Card />
    </div>
  );
}

export default App;
