type Combineable = string | number;
type Litteral = "as-number" | "as-string";

function combine(
  input1: Combineable,
  input2: Combineable,
  resultType: Litteral
) {
  let result;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultType === "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  // if (resultType === 'as-number'){
  //   //return parseFloat(result);
  //   return +result
  // }else{
  //   return result.toString();
  // }

  return result;
}

const combinedAges = combine(30, 35, "as-number");
console.log(combinedAges);

const combinedStringAges = combine("30", "35", "as-number");
console.log(combinedStringAges);

const combinedNames = combine("Max", "Theo", "as-string");
console.log(combinedNames);
