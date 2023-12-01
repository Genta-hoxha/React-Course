import reactImg from "./assets/react-core-concepts.png";

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}
export default function Header() {
  const description = reactDescriptions[genRandomInt(2)]; //e ben dhe ne kete menyre, duke deklaruar nje konstante
  return (
    <header>
      {/* /* <img src="src/assets/react-core-concepts.png" alt="Stylized atom" /> */}
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}
