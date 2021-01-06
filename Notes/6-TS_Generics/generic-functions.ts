// // const names = ['Theo','Max'];
// const names: Array<string> = []; //string[]
// //names[0].split(" ");

// const promise: Promise<string> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("This is done!");
//   }, 2000);
// });

// promise.then(data =>{
//   data.split(' ');
// });

function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObj = merge<{ name: string; hobbies: string[] }, { age: number }>(
  { name: "Theo", hobbies: ["Sports"] },
  { age: 30 }
);
const mergedObj2 = merge({ name: "Test", hobbies: ["Place"] }, { age: 31 });
// const mergedObj3 = merge({ name: "Test", hobbies: ["Place"] }, 30);
console.log(mergedObj.age);
console.log(mergedObj2);
// console.log(mergedObj3);

interface Lengthy {
  length: number;
}

function countAndDescription<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = "Got no value.";
  if (element.length === 1) {
    descriptionText = `Got 1 element.`;
  }else if (element.length > 1) {
    descriptionText = `Got ${element.length} elements.`;
  }
  return [element, descriptionText];
}
console.log(countAndDescription("Hi there!"));
console.log(countAndDescription(['Sports','Coocking']));
// console.log(countAndDescription(56));
console.log(countAndDescription(''));

function extractAndConvert<T extends Object, U extends keyof T>(obj: T, key: U) {
  return 'Value: ' + obj[key];
}
extractAndConvert({name: 'Theo'},'name');

