function SolarSystem() {
  return (
    <div className="SolarSystem">
      <img className="sun" src="./src/assets/soleil.png" alt="Soleil" />
      <div className="imageSVG">
        <svg>
          <path d="M -300,450 A 900 110 0 0 0 393,300" />
          <path d="M -300,470 A 800 117 0 0 0 390,295" />
          <path d="M -300,490 A 700 124 0 0 0 390,292" />
          <path d="M -300,510 A 710 133 0 0 0 390,289" />
          <path d="M -300,560 A 710 159 0 0 0 389,285" />
          <path d="M -400,700 A 740 210 0 0 0 387,280" />
          <path d="M -400,850 A 785 240 0 0 0 385,275" />
          <path d="M -460,1000 A 950 310 0 0 0 383,269" />
        </svg>
        <img className="mercure" src="./src/assets/mercure.png" alt="Mercure" />
        <img className="venus" src="./src/assets/venus.png" alt="Venus" />
        <img className="terre" src="./src/assets/earth.png" alt="Terre" />
        <img className="mars" src="./src/assets/mars.png" alt="Mars" />
        <img className="jupiter" src="./src/assets/jupiter.png" alt="Jupiter" />
        <img className="saturne" src="./src/assets/saturne.png" alt="Saturne" />
        <img className="uranus" src="./src/assets/uranus.png" alt="Uranus" />
        <img className="neptune" src="./src/assets/Neptune.png" alt="Neptune" />
      </div>
    </div>
  );
}
export default SolarSystem;
