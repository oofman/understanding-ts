function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  //console.info(typeof n1);
  //if (typeof n1 !== 'number' || typeof n2 !== 'number'){
  //  throw new Error('Incorrect Input!');
  //}
  if (showResult){
    console.info(phrase + (n1 + n2));
  }
  return n1 + n2;
}

const number1 = 5;
const number2 = 2.8;
let printResult: boolean;
printResult = true;
let resultPhrase = 'Result is: ';

const result = add(number1, number2, printResult, resultPhrase);
console.log(result);
