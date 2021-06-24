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

// Arrow functions vs Regualar functions
