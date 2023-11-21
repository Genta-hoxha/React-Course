// function App() {
//   return (
//     <div>
//       <header>
//         <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
//         <h1>React Essentials</h1>
//         <p>
//           Fundamental React concepts you will need for almost any app you are
//           going to build!
//         </p>
//       </header>
//       <main>
//         <h2>Time to get started!</h2>
//       </main>
//     </div>
//   );
// }

// export default App;
/*
// CHALLENGE 1
function combine(a, b, c) {
  console.log((a * b) / c);
}
combine(2, 4, 2);

const combine2 = (a, b, c) => {
  console.log((a * b) / c);
};
combine2(2, 4, 1);

//CHALLENGE 2
const value = [1, 2, 3];
function transformToObjects(array) {
  const transform = array.map((item) => ({ val: item }));
  return transform;
}
console.log(transformToObjects(value));

//CONTROL STRUCTURES
const password = prompt("Enter your password");
if (password === "Hello") {
  console.log("Hello Genta");
} else if (password === "Hello") {
  console.log("Hello Genta");
} else {
  console.log("Access not granted");
}

*/
function MainGoal() {
  return <p>Learn React in-depth and from the ground up</p>;
}

function App() {
  return (
    <div>
      <header>
        <h1>TIME TO</h1>
        <h1>PRACTICE!</h1>
      </header>
      <main>
        <p>
          Build a <MainGoal />
          component and insert it below this text. Your <MainGoal />
          component should simply output some text that describes your main
          course goal.
        </p>
        <br></br>
        Important: You custom component must contain the text "My main goal:"
        <br></br>
        Also important: For the automatic checks to succeed, you must export
        your custom component function! Not as a default but simply by adding
        the export keyword in front of your function
      </main>
      <center>
        {" "}
        <p>
          <MainGoal />
        </p>
      </center>
    </div>
  );
}

export default App;
