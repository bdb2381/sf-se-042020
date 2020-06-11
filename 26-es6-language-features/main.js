// const spaceship = {
//   pilot: "elon musk",
//   guidance: "marc zucc",
//   chef: "gordon ramsay",
// };

// // How can we access the pilot inside the spaceship?
// // 1. Dot notation
// const pilot = spaceship.pilot;

// // 2. Bracket notation
// const pilot = spaceship["pilot"];

// // 3. Destructuring
// const { pilot, guidance, chef } = spaceship;

// console.log(pilot); // 'elon musk'
// console.log(chef); // 'gordon ramsay'

// // More about bracket notation (dynamic object keys)
// // If we need to use a variable as a key we have to use bracket notation to retrieve the value
// const pilot = "pilot";
// spaceship[pilot];

// const jobs = ["pilot", "guidance", "chef"];
// jobs.forEach((job) => console.log(spaceship[job]));

// SCOPE

// // Global scope

// myGlobalVar = "hello";
// let myGlobalVar;

// console.log(myGlobalVar);

// let myGlobalLet = "hello";
// const myGlobalConst = "hello";
// functionExpression();

// let functionExpression = function () {};
// let functionExpression2 = () => {};

// // someFunction();

// function someFunction() {
//   // Local scope #1
//   let myVar = "hello";

//   function someOtherFunction() {
//     // Local scope #2
//     myVar = "hi";
//     console.log(myVar);
//   }

//   someOtherFunction();

//   console.log(myVar);
// }

// // // 1st phase: compilation phase
// // // 2nd phase: execution phase
