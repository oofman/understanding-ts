var userInput;
var userName;
userInput = 4;
userInput = "Something";
if (typeof userInput === "string") {
    userName = userInput;
}
function generateError(msg, code) {
    throw { message: msg, errorCode: code };
}
var result = generateError('In here error', 501);
console.log(result);
