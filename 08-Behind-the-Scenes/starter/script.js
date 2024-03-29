'use strict';

// var is function scope
// let, const are block scope

// function calcAge(birthYear) {
//   const age = 2021 - birthYear;

//   function printAge() {
//     const output = `${firstName}, You are ${age}, born in ${birthYear}`;
//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 1996) {
//       const str = `Oh, and you're a millenial, ${firstName}`;
//       var millenial = true;
//       console.log(str);

//       function add(a, b) {
//         return a + b;
//       }
//     }
//     //var is a function scope variable.
//     console.log(millenial);

//     // Error occurs when use strict mode
//     // console.log(add(2, 3));
//   }

//   printAge();

//   return age;
// }

// const firstName = 'Raesup';
// calcAge(1986);

// Hoisting

//undefined
// console.log(me);

// //Error
// // console.log(job);
// // console.log(year);

// var me = 'Raesup';
// let job = 'Programmer';
// const year = 1986;

// //works
// console.log(addDecl(2, 3));

// //Error
// // console.log(addExpr(2, 3));
// // console.log(addArrow(2, 3));

// function addDecl(a, b) {
//   return a + b;
// }

// const addExpr = function (a, b) {
//   return a + b;
// };

// const addArrow = (a, b) => {
//   return a + b;
// };

// if (!numProducts) deleteShoppingCart();

// var numProducts = 10;

// function deleteShoppingCart() {
//   console.log('All products deleted!');
// }

// var x = 1;
// let y = 2;
// const z = 3;

// //var create window property
// console.log(x === window.x);
// console.log(y === window.y);
// console.log(z === window.z);

// this keyword

//this = window
// console.log(this);

// //this = global object which is window only when it is not strict mode
// //this = undefined when strict mode
// const calcAge = function (birthYear) {
//   console.log(2021 - birthYear);
//   console.log(this);
// };
// calcAge(1986);

// //this = parent's scope in arrow function
// const calcAgeArrow = birthYear => {
//   console.log(2021 - birthYear);
//   console.log(this);
// };
// calcAgeArrow(1986);

// const raesup = {
//   year: 1986,
//   calcAge: function () {
//     //in method, this = object which is calling the method
//     console.log(this);
//     console.log(2021 - this.year);
//   },
// };
// raesup.calcAge();

// const deborah = {
//   year: 1983,
// };

// // method borrowing
// deborah.calcAge = raesup.calcAge;
// // this keyword actually indicate deborah object
// deborah.calcAge();

// const f = raesup.calcAge;
// // Error because year property is not defined for object
// // f();

// // Arrow functions vs Regualar functions
// var firstName = 'Deborah';

// const raesup = {
//   firstName: 'Raesup',
//   year: 1986,
//   calcAge: function () {
//     //in method, this = object which is calling the method
//     console.log(this);
//     console.log(2021 - this.year);

//     //inner function cannot recongnize this keyword so that have to declare extra variable for this.
//     const self = this;

//     const isMillenial = function () {
//       console.log(self.year >= 1981 && self.year <= 1996);
//     };
//     isMillenial();

//     //arrow function's this keyword inherits parents scope's this keyword, so works in this case.
//     const isMillenial1 = () =>
//       console.log(this.year >= 1981 && this.year <= 1996);
//     isMillenial1();
//   },

//   //   arrow function does not work with this keyword
//   greet: () => console.log(`Hey, ${this.firstName}`),

//   //   works fine
//   //   greet: function () {
//   //     console.log(`Hey, ${this.firstName}`);
//   //   },
// };

// // print deborah instead of raesup, risk of var and risk of using this keyword in arrow function
// raesup.greet();
// raesup.calcAge();

// const addExpr = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };

// addExpr(2, 5, 8);

// // arrow function do not have arguments objects
// const addArrow = (a, b) => {
//   //   console.log(arguments);
//   return a + b;
// };

// addArrow(2, 5, 8);

// let age = 34;
// let oldAge = age;
// age = 35;
// console.log(age);
// console.log(oldAge);

// // const object can be modified because it is stored in the heap, not stack.
// const me = {
//   name: 'raesup',
//   age: 34,
// };

// const raesup = me;
// raesup.age = 35;

// console.log('Raesup', raesup);
// console.log('Me', me);

// Primitive Types
let lastName = 'Kim';
let oldLastName = lastName;
lastName = 'Deborah';
console.log(lastName, oldLastName);

// Reference Types
const raesup = {
  firstName: 'Raesup',
  lastName: 'Kim',
  age: 34,
};

const marriedRaesup = raesup;
marriedRaesup.lastName = 'Kwon';
console.log('Before marriage:', raesup);
console.log('After marriage:', marriedRaesup);

// Copying objects
const raesup2 = {
  firstName: 'Raesup',
  lastName: 'Kim',
  age: 34,
  family: ['Deborah', 'Arin'],
};

const raesupCopy = Object.assign({}, raesup2);
raesupCopy.lastName = 'Kwon';
raesupCopy.family.push('Serin');
console.log(raesup2);
console.log(raesupCopy);
