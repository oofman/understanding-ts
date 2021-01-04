// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number,string];
// } = {
//   name: 'theo',
//   age: 35,
//   hobbies: ['Sports','Cooking'],
//   role: [2,'Dev']
// };

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role { ADMIN, READ_ONLY = 'ADMIN', AUTHOR = 100 };

const person = {
  name: 'Theo',
  age: 35,
  hobbies: ['Sports','Cooking'],
  role: Role.ADMIN
};

//person.role.push('admin'); //exception
//person.role[1] = 19;
//person.role = [0,'Admin'];

let favoriteActivities: (string | number)[]
favoriteActivities = ['Sports',12]

console.log(person.name)

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}

if (person.role === Role.ADMIN) {
  console.info('is admin');
}
//const product = {
//  id: 'abc1',
//  price: 12.99,
//  tags: ['great-offer', 'hot-and-new'],
//  details: {
//    title: 'Red Carpet',
//    description: 'A great carpet - almost brand-new!'
//  }
//}
//{
//  id: string;
//  price: number;
//  tags: string[],
//  details: {
//    title: string;
//    description: string;
//  }
//}