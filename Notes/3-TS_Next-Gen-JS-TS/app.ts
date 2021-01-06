// const userName = "Theo";
// // userName = 'Max';
// let age = 35;

// age = 36;

// const add = (a: number, b: number) => {
//   return a + b;
// };

// const add = (a: number, b: number = 55) => a + b;

// const pringOutput: (a: number | string) => void = (output) => console.log(output);

// const button = document.querySelector("button");

// if (button) {
//   button.addEventListener("click", event => console.log(event));
// }

// pringOutput(add(5));

const hobbies = ["Sports", "Cooking"];
const activeHobbies = ["Hicking"];

// spread opperator
activeHobbies.push(...hobbies);

const person = {
  firstName: "Theo",
  age: 30,
};
// const copiedPerson = person;
const copiedPerson = { ...person };

// rest parameters
const add = (...numbers: number[]) => {
  return numbers.reduce((curResult, curValue) => {
    return curResult + curValue;
  }, 0);
};

const addedNumbers = add(12, 12, 23, 3);
console.log(addedNumbers);

// Destucturing array
const [hobby1, hobby2, ...remaingHobbies] = hobbies;
console.log(hobbies, hobby1, hobby2);

// Destucturing objects
const { firstName: userName, age } = person;
console.log(userName, age, person);
