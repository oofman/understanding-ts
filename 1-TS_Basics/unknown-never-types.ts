let userInput: unknown;
let userName: string;

userInput = 4;
userInput = "Something";

if (typeof userInput === "string") {
  userName = userInput;
}

function generateError(msg: string, code: number): never {
  throw {message: msg, errorCode: code};
  // while (true) {} // infinite loop
}
const result = generateError('In here error',501);
console.log(result);