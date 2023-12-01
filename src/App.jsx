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
// function MainGoal() {
//   return <p>Learn React in-depth and from the ground up</p>;
// }

// function App() {
//   return (
//     <div>
//       <header>
//         <h1>TIME TO</h1>
//         <h1>PRACTICE!</h1>
//       </header>
//       <main>
//         <p>
//           Build a <MainGoal />
//           component and insert it below this text. Your <MainGoal />
//           component should simply output some text that describes your main
//           course goal.
//         </p>
//         <br></br>
//         Important: You custom component must contain the text "My main goal:"
//         <br></br>
//         Also important: For the automatic checks to succeed, you must export
//         your custom component function! Not as a default but simply by adding
//         the export keyword in front of your function
//       </main>
//       <center>
//         {" "}
//         <p>
//           <MainGoal />
//         </p>
//       </center>
//     </div>
//   );
// }

// export default App;

// function Header() {
//   return (
//     <header>
//       <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
//       <h1>React Essentials</h1>
//       <p>
//         {reactDescriptions[genRandomInt(2)]} React concepts you will need for
//         almost any app you are going to build!
//       </p>
//     </header>
//   );
// }

// export const userData = {
//   firstName: "MAXIMILIAN",
//   lastName: "SCHWARZMULLER",
//   profession: "INSTRUCTOR",
// };

// export function User() {
//   return (
//     <div id="user">
//       <h2>
//         {userData.firstName} {userData.lastName}
//       </h2>
//       <p>{userData.profession}</p>
//     </div>
//   );
// }

// function Header() {
//   return (
//     <header>
//       <h1>TIME TO PRACTICE</h1>
//     </header>
//   );
// }

// //ketu thirren te gjitha funksionet
// function App() {
//   return (
//     <center>
//       {" "}
//       <div>
//         {/* ktu kemi thirrur funksionin e Header */}
//         <Header />
//         <main>
//           <h2>Welcome on board of this course! You got this💪</h2>
//         </main>
//         {/* ktu kemi thirrur funksionin e User */}
//         <User />
//       </div>
//     </center>
//   );
// }
// export default App;

// CHALLENGE

// export function CourseGoal({ title, description }) {
//   return (
//     <li id="li">
//       <h2>{title}</h2>
//       <p>{description}</p>
//     </li>
//   );
// }

// function App() {
//   return (
//     <div>
//       <h1>TIME TO PRACTICE</h1>
//       <p> One course, many goals! ☄️</p>
//       <center>
//         <ul id="app">
//           <CourseGoal title="LEARN REACT" description="In-depth" />
//         </ul>
//         <ul id="app">
//           <CourseGoal
//             title="PRACTICE"
//             description="Practice working withReact components etc."
//           />
//         </ul>
//       </center>
//     </div>
//   );
// }

// export default App;
// import { useState } from "react";
// import TabButton from "./assets/components/TabButton.jsx";
// // import Login from "./assets/components/Login.jsx";
// import "./index.css";
// function Header() {
//   return (
//     <header>
//       <h1>TIME TO PRACTICE</h1>
//     </header>
//   );
// }

// // export const user = {
// //   email: "",
// //   password: "",
// //   loggedIn: false,
// // };

// export const user = {
//   name: "",
// };

// // let tabContent = "Plese click a button...";
// function App() {
//   // const [selectedTopic, setSelectedTopic] = useState("Plese click a button...");
//   const [selectedTopic, setSelectedTopic] = useState("APPLY DISCOUNT");
//   function handleSelect(selectedButton) {
//     setSelectedTopic(selectedButton);
//     console.log(selectedButton);
//   }
//   // const handleLogin = () => {
//   //   user.email = "example@example.com";
//   //   user.password = "dummyPassword";
//   //   user.loggedIn = true;
//   //   console.log(user);
//   // };

//   function handleCreateUser(name) {
//     user.name = name;
//     name = "genta";
//     console.log(name);
//   }

//   function applyDiscount(price) {
//     setSelectedTopic(price);
//   }
//   return (
//     <div>
//       <Header />
//       <main>
//         <h2>Time to get started!</h2>

//         <section id="examples">
//           <h2>Examples</h2>
//           <menu>
//             <TabButton onSelect={() => handleSelect("components")}>
//               Components
//             </TabButton>
//             <TabButton onSelect={() => handleSelect("JSX")}>JSX</TabButton>
//             <TabButton onSelect={() => handleSelect("Props")}>Props</TabButton>
//             <TabButton onSelect={() => handleSelect("State")}>State</TabButton>
//           </menu>
//           {/* {tabContent} */}
//           {selectedTopic}
//         </section>
//         <section id="login">
//           {/* <h1>User Login</h1>
//           <p>
//             <label>Email</label>
//           </p>
//           <p>
//             <input type="email" />
//           </p>

//           <p>
//             <label>Password</label>
//           </p>
//           <p>
//             <input type="password" />
//           </p> */}
//           <h1>USER LOGIN</h1>
//           <label>Name</label>
//           <p>
//             <input type="text"></input>
//           </p>
//           <div>
//             {/* <button onClick={handleLogin}>Login</button> */}
//             <button onClick={handleCreateUser}>Create User</button>
//           </div>
//         </section>
//         <div>
//           <section>
//             <Discount onSelect={() => applyDiscount("$100")}>$100</Discount>
//             <Discount onSelect={() => applyDiscount("$75")}>$75</Discount>
//             <Discount onSelect={() => applyDiscount("$100")}>
//               APPLY DISCOUNT
//             </Discount>
//           </section>
//         </div>
//       </main>
//     </div>
//   );
// }

// export default App;

/*
import Card from "./assets/components/Card.jsx";
import "./index.css";
function App() {
  return (
    <div id="app">
      <h1>Available Experts</h1>
      <Card name="Anthony Blake">
        <p>
          Blake is a professor of Computer Science at the University of
          Illinois.
        </p>
        <p>
          <a href="mailto:blake@example.com">Email Anthony</a>
        </p>
      </Card>

      <Card name="Maria Miles">
        <p>
          Maria is a professor of Computer Science at the University of
          Illinois.
        </p>
        <p>
          <a href="mailto:blake@example.com">Email Maria</a>
        </p>
      </Card>
    </div>
  );
}

export default App;
// */
// import TabButton from "./assets/components/TabButton.jsx";
// import { useState } from "react";
// import CoreConcept from "./assets/components/CoreConcept.jsx";
// import { EXAMPLES } from "./data.js";
// import Header from "./assets/components/Header.jsx";

// function App() {
//   const [selectedTopic, setSelectedTopic] = useState();

//   function handleSelect(selectedButton) {
//     setSelectedTopic(selectedButton);
//   }

//   console.log("APP COMPONENT EXECUTING");
//   return (
//     <div>
//       <Header />
//       <main>
//         <section id="core-concepts">
//           <h2>Core Concept</h2>
//           <ul>
//             <CoreConcept
//               title={CORE_CONCEPTS[0].title}
//               description={CORE_CONCEPTS[0].description}
//               image={CORE_CONCEPTS[0].image}
//             />
//             <CoreConcept {...CORE_CONCEPTS[1]} />
//             <CoreConcept {...CORE_CONCEPTS[2]} />
//             <CoreConcept {...CORE_CONCEPTS[3]} />
//           </ul>
//         </section>

//         <section id="examples">
//           <h2>Examples</h2>
//           <menu>
//             <TabButton onSelect={() => handleSelect("components")}>
//               Components
//             </TabButton>
//             <TabButton onSelect={() => handleSelect("jsx")}>JSX</TabButton>
//             <TabButton onSelect={() => handleSelect("props")}>Props</TabButton>
//             <TabButton onSelect={() => handleSelect("state")}>State</TabButton>
//           </menu>
//           <div id="tab-content">
//             <h3>{EXAMPLES[selectedTopic].title}</h3>
//             <p>{EXAMPLES[selectedTopic].description}</p>
//             <pre>
//               <code>{EXAMPLES[selectedTopic].code}</code>
//             </pre>
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// }
// export default App;

/////////////////////////////////////////////////////////////////////////////////////////////////////
/*
//CHALLENGE 10 kur klikon te nje buton te shfaqet nje warning window dhe me pas te butoni ne warning window te klikohet dhe te hiqet si warning

import React, { useState } from "react";

export default function App() {
  // function handleClick() {
  //   alert("You clicked me!");

  // }
  const [showWarning, setShowWarning] = useState(false); //te mos e shfaqim ne fillim

  function handleClick() {
    setShowWarning(true);
  }

  function removeClick() {
    setShowWarning(false);
  }
  return (
    <main>
      <section id="button">
        <center>
          <button onClick={handleClick}>Delete</button>
        </center>
      </section>
      <div>
        {showWarning && (
          <center>
            <section id="warning">
              <h2>Are you sure?</h2>
              <p>These changes can't be reverted!</p>
              <button id="proceed" onClick={removeClick}>
                Proceed
              </button>
            </section>
          </center>
        )}
      </div>
    </main>
  );
}

*/

/*
//CHALLENGE 11: MENYRA 1

import React from "react";

export default function App() {
  const [isButtonClicked, setButtonClicked] = React.useState(false);
  const style = () => {
    setButtonClicked(true);
  };
  return (
    <div>
      <p className={isButtonClicked ? "active" : ""}>Style me!</p>
      <button onClick={style}>Toggle style</button>
    </div>
  );
}
//CHALLENGE 11: MENYRA 2

// import React, { useState } from "react";

// export default function App() {

//   function style() {
//     console.log("genta");
//     const paragraph = document.querySelector("p");
//     paragraph.style.color = "red";
//   }
//   return (
//     <div>
//       <p>Style me!</p>
//       <button onClick={style}>Toggle style</button>
//     </div>
//   );
// }
*/

//////////////////////////////////////////////////////////////////////
/*
//CHALLENGE 12

import React from "react";
import Todo from "./Todo";

export const DUMMY_TODOS = ["Learn React", "Practice React", "Profit!"];

export default function App() {
  return (
    <section>
      <ul>
        {DUMMY_TODOS.map((todoItem, index) => (
          <Todo key={index} text={todoItem} />
        ))}
      </ul>
    </section>
  );
}
*/

/*
// CHALLENGE 13

function Summary({ text }) {
  return (
    <>
      <h1>Summary</h1>
      <p>{text}</p>
    </>
  );
}

function App() {
  return (
    <div id="app" data-testid="app">
      <Summary text="Fragments help you avoid unnecessary HTML element." />
    </div>
  );
}
*/
/*
/////////////////////////////////////////////////////////////////////////////////////////
// COURSE
import CoreConcepts from "./assets/components/CoreConcepts.jsx"; // Corrected import
import Header from "./assets/components/Header.jsx";
import Examples from "./assets/components/Examples.jsx";
function App() {
  // const [selectedTopic, setSelectedTopic] = useState();

  // function handleSelect(selectedButton) {
  //   setSelectedTopic(selectedButton);
  // }

  // console.log("APP COMPONENT EXECUTING");
  // let tabContent = <p>Please select a topic</p>;
  // if (selectedTopic) {
  //   tabContent = (
  //     <div id="tab-content">
  //       <h3>{EXAMPLES[selectedTopic].title}</h3>
  //       <p>{EXAMPLES[selectedTopic].description}</p>
  //       <pre>
  //         <code>{EXAMPLES[selectedTopic].code}</code>
  //       </pre>
  //     </div>
  //   );
  // }

  return (
    <>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
        {/* <section id="core-concepts">
          <h2>Core Concept</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem) => (
              <CoreConcept key={conceptItem.title} {...conceptItem} />
            ))}
          </ul>
        </section> */

{
  /* <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton
              isSelected={selectedTopic === "components"}
              onSelect={() => handleSelect("components")}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "jsx"}
              onSelect={() => handleSelect("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "props"}
              onSelect={() => handleSelect("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "state"}
              onSelect={() => handleSelect("state")}
            >
              State
            </TabButton>
          </menu>
          {tabContent}
        </section> */
}
/*
      </main>
    </>
  );
}

export default App;
*/

// CHALLENGE 14
// import React from "react";

// function Input({ type, placeholder, richText }) {
//   if (richText) {
//     // Render a rich text input
//     return (
//       <div>
//         <label>{placeholder}</label>
//         <textarea placeholder={placeholder}></textarea>
//       </div>
//     );
//   }

//   // Render a regular input
//   return (
//     <div>
//       <label>{placeholder}Your Name</label>
//       <input type={type} placeholder={placeholder} />
//     </div>
//   );
// }

// export default Input;
// import Input from "./Input.jsx";

// function App({ type, placeholder }) {
//   return (
//     <div id="appi">
//       <Input type="text" placeholder="Your name" />
//       <Input richText placeholder="Your message" />
//     </div>
//   );
// }

// export default App;

//CHALLENGE 15 CREATING FLEXIBLE COMPONENTS
import Button from "./assets/components/Button";
import Home from "./assets/components/Home";
import Add from "./assets/components/Add";

function App() {
  return (
    <div>
      <h2>Filled Button (Default)</h2>
      <main>
        <section id="button">
          <button>Default</button>
          <div>
            <br></br>
            <Button mode="filled">Filled (Default)</Button>
          </div>
        </section>
        <h2>Button with Outline</h2>
        <section id="button1">
          <Button mode="outline">Outline</Button>
        </section>
        <h2>Text-only Button</h2>
        <section id="button2">
          <Button mode="text">Text</Button>
        </section>
        <h2>Text-only Button</h2>
        <section id="button3">
          <Button>
            <i class="fa fa-home" aria-hidden="true">
              {" "}
            </i>
            <span>Home</span>
          </Button>
        </section>
        <br></br>
        <section id="button4">
          <Button>
            <i class="fa fa-plus" aria-hidden="true">
              {" "}
            </i>
            <span>Add</span>{" "}
          </Button>
        </section>
        <section id="button5">
          <h2>Buttons Should Support Any Props</h2>
          <Button> Disabled</Button>
        </section>
        <section id="button6">
          <br></br>
          <Button>Click me</Button>
        </section>
      </main>
    </div>
  );
}

export default App;
