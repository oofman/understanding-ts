type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: "Theo",
  privileges: ["create-server"],
  startDate: new Date(),
};

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

function add(a: number, b: number): number;
function add(a: string, b: number): string;
function add(a: number, b: string): string;
function add(a: string, b: string): string;
function add(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

const result = add('Max', ' Place');
result.split(' ');

const fetchedUserData = {
  id: 'u1',
  name: 'Theo',
  job: { title: 'CEO', description: 'My own Company'}
};

console.log(fetchedUserData?.job?.title);

const userInput = '';

const stroredData = userInput ?? 'Default';

console.log(stroredData);


// type UnknownEmployee = Employee | Admin;

// function printEmployeeInformation(emp: UnknownEmployee) {
//   console.log("Name: " + emp.name);
//   if ("privileges" in emp) {
//     console.log("Privileges: " + emp.privileges);
//   }
//   if ("startDate" in emp) {
//     console.log("Start Date: " + emp.startDate);
//   }
// }
// printEmployeeInformation(e1);
// printEmployeeInformation({ name: "Test", startDate: new Date() });

// class Car {
//   drive() {
//     console.log("Driving....");
//   }
// }

// class Truck {
//   drive() {
//     console.log("Driving Truck....");
//   }

//   loadCargo(amount: number) {
//     console.log("Loading Cargo..." + amount);
//   }
// }

// type Vehicle = Car | Truck;

// const v1 = new Car();
// const v2 = new Truck();

// function useVehicle(vehicle: Vehicle) {
//   vehicle.drive();
//   if (vehicle instanceof Truck) {
//     vehicle.loadCargo(123);
//   }
// }

// useVehicle(v1);
// useVehicle(v2);

// // - Discriminated union
// interface Brid {
//   type: "bird";
//   flyingSpeed: number;
// }

// interface Horse {
//   type: "horse";
//   runningSpeed: number;
// }

// type Animal = Brid | Horse;

// function moveAnimal(animal: Animal) {
//   let speed;
//   switch (animal.type) {
//     case "bird":
//       speed = animal.flyingSpeed;
//       break;
//     case "horse":
//       speed = animal.runningSpeed;
//   }
//   console.log("Moving with speed: " + speed);
// }

// moveAnimal({ type: "bird", flyingSpeed: 10 });

// const paragraph = document.querySelector("p");

// // const inputElement = <HTMLInputElement>document.getElementById('user-input')!;
// // const inputElement = document.getElementById('user-input')! as HTMLInputElement;
// const inputElement = document.getElementById("user-input");

// if (inputElement) {
//   (inputElement as HTMLInputElement).value = "Hi there!";
// }

// interface ErrorContainer {
//   // { email: 'not a valid email', username: 'Must start with a char'}
//   [prop: string]: string;
// }

// const errorBag: ErrorContainer = {
//   email: "Not a valid email!",
//   username: "Not a valid username!",
// };
