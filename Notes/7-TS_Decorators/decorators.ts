// Decorator
// function Logger(constructor: Function) {
//   console.log('Logging...');
//   console.log(constructor);
// }

// Decorator Factory
function Logger(logString: string) {
  console.log("Logger Factory");
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

function WithTemplate(template: string, hookId: string) {
  console.log("Template Factory");
  return function <T extends { new (...args: any[]): { name: string } }>(
    originalConstructor: T
  ) {
    //replace constructor
    return class extends originalConstructor {
      constructor(..._: any[]) {
        super();
        console.log("Rendering Template");
        const hookEl = document.getElementById(hookId);

        if (hookEl) {
          hookEl.innerHTML = template;
          hookEl.querySelector("h1")!.textContent = this.name;
        }
      }
    };
  };
}

@Logger("LOGGING - Person")
@WithTemplate("<h1>My Person Object</h1>", "app")
class Person {
  name = "Theo";

  constructor() {
    console.log("Created person object...");
  }
}

const person = new Person();

console.log(person);

// ----
function log(target: any, propertyName: string | Symbol) {
  console.log("Property decorator!");
  console.log(target, propertyName);
}

function log2(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log("Accesor decorator!");
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

function log3(
  target: any,
  name: string | Symbol,
  descriptor: PropertyDescriptor
) {
  console.log("Method decorator!");
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

function log4(target: any, name: string | Symbol, position: number) {
  console.log("Parametor decorator!");
  console.log(target);
  console.log(name);
  console.log(position);
}

class Product {
  @log
  title: string;
  private _price: number;

  @log2
  set price(val: number) {
    if (val > 0) {
      this._price = val;
    } else {
      throw new Error("Invalid Proice - Should be possitive");
    }
  }

  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }

  @log3
  getPriceWithTax(@log4 tax: number) {
    return this._price * (1 + tax);
  }
}

const p1 = new Product("Book 1", 19);
const p2 = new Product("Book 2", 10);

function AutoBind(
  _target: any,
  _methodName: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;
  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: true,
    get() {
      const boundFn = originalMethod.bind(this);
      return boundFn;
    },
  };
  return adjDescriptor;
}

class Printer {
  message = "This Works!";

  @AutoBind
  showMessage() {
    console.log(this.message);
  }
}

const p = new Printer();
const button = document.querySelector("button")!;
button.addEventListener("click", p.showMessage);

// ----

interface ValidatorConfig {
  [property: string]: {
    [validatableProp: string]: string[] // ['required','positive']
  }
}

const registeredValidator: ValidatorConfig = {};

function Required(target: any, propName: string) {
  registeredValidator[target.constructor.name] = {
    [propName] : ['required']
  };
}

function PositiveNumber(target: any, propName: string) {
  registeredValidator[target.constructor.name] = {
    [propName] : ['positive']
  };
}

function validate(obj: any){
  const objValidatorConfig = registeredValidator[obj.constructor.name];
  if (!objValidatorConfig){
    return true;
  }

  let isValid = true;
  for (const prop in objValidatorConfig){
    for (const validator of objValidatorConfig[prop]){
      switch(validator){
        case 'required':
          isValid = isValid && !!obj[prop];
          break;
        case 'positive':
          isValid = isValid && obj[prop] > 0;
          break;
      }
    }
  }
  return isValid;
}

class Course {
  @Required
  title: string;
  @PositiveNumber
  price: number;

  constructor(t: string, p: number) {
    this.title = t;
    this.price = p;
  }
}

const courseForm = document.querySelector("form")!;
courseForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const titleEl = document.getElementById("title") as HTMLInputElement;
  const priceEl = document.getElementById("price") as HTMLInputElement;

  const title = titleEl.value;
  const price = +priceEl.value;

  const createdCourse = new Course(title, price);
  if(!validate(createdCourse)){
    alert('Please Try again!');
    return;
  }

  console.log(createdCourse);
});
