function add(n1: number, n2: number) {
  return n1 + n2;
}

function printResult(num: number): void {
  console.log("Result: " + num);
}

function printResult2(num: number): undefined {
  console.log("Result: " + num);
  return;
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

printResult(add(3, 13));

console.log(printResult(add(3, 155)));

let combinedValues: (a: number, b: number) => number;
combinedValues = add;
// combinedValues = printResult; // Error
// combinedValues = 5; // Error

console.log(combinedValues(8, 8));
// let someValue: undefined;

addAndHandle(10, 20, (result) => {
  console.log(result);
  // return result; // nothing will happen
});