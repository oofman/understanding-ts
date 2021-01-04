const button = document.querySelector("button")!;

function clickHandler(msg: string) {
  console.log('Clicked! ' + msg);
}
//a comment will not be compiled
if (button){
  button.addEventListener("click", clickHandler.bind(null,'Your Here'));
}
