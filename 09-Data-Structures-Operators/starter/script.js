'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  // Destructuring object with default values in the function arguments
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]}, and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is you delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

//////////////////////////////////////////////////////////////////
// Looping Object: Object Keys, Values, and Entries.

// Property NAMES
const properties = Object.keys(restaurant.openingHours);
console.log(properties);
console.log(properties.length);

let str = `It is the information of the restaurant: `;
for (const day of properties) {
  str += `${day}, `;
}
console.log(str);

// Property VALUES
const values = Object.values(restaurant.openingHours);
console.log(values);

// Property ENTRIES
const entries = Object.entries(restaurant.openingHours);
console.log(entries);

for (const [i, {open, close}] of entries) {
  console.log(i, open, close);
}

//////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////
// // Optional Chaining (?)
// if(restaurant.openingHours && restaurant.openingHours.mon) {
//   console.log(restaurant.openingHours.mon.open);
// }

// // With optional chaining
// // if exists, do next. or return undefined.
// console.log(restaurant?.openingHours?.mon?.open);

// // Examples
// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']; 

// // for of loop
// for (const day of days) {
//   console.log(day);
//   //optional chaining operator and nullish coalescing operator
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
//   console.log (`On ${day}, we open at ${open}`);
// }

// // Methods
// console.log(restaurant.order?.(0,1) ?? 'Method does not exist');
// console.log(restaurant.orderRisotto?.(0,1) ?? 'Method does not exist');

// // Arrays
// const users = [
//   {name: 'Raesup',email: 'raesupkim@gmail.com'}
// ];

// console.log(users[2]?.name ?? 'User array is empty');
//////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////
// // Enhanced Object Literals
// const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// const openingHours = {
//   [weekdays[3]]: {
//     open: 12,
//     close: 22,
//   },
//   [weekdays[4]]: {
//     open: 11,
//     close: 23,
//   },
//   [weekdays[5]]: {
//     open: 0, // Open 24 hours
//     close: 24,
//   },
// };

// const restaurant1 = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],
//   //openingHours: openingHours,
//   //es6 enhanced object literals
//   openingHours,

//   order (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },

//   // Destructuring object with default values in the function arguments
//   orderDelivery ({
//     starterIndex = 1,
//     mainIndex = 0,
//     time = '20:00',
//     address,
//   }) {
//     console.log(
//       `Order received! ${this.starterMenu[starterIndex]}, and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
//     );
//   },

//   orderPasta (ing1, ing2, ing3) {
//     console.log(`Here is you delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
//   },

//   orderPizza (mainIngredient, ...otherIngredients) {
//     console.log(mainIngredient);
//     console.log(otherIngredients);
//   },
// }

// console.log(restaurant1.order(1,1));
// restaurant1.orderDelivery({address: 'ee'});
//////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////
// // For-of loop, forEach
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// // for-of loop
// for(const item of menu) {
//   console.log(item);
// }

// // for-of loop with entries
// for(const item of menu.entries()) {
//   console.log(item);
//   console.log(`${item[0]+1}: ${item[1]}`)
// }

// for(const [index, item] of menu.entries()) {
//   console.log(item);
//   console.log(`${index+1}: ${item}`)
// }


// // forEach
// menu.forEach(item => console.log(item))
//////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////
// Coding Challenge
// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// Coding Challenge #1

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/

// // 1.
// const[players1, players2] = game.players;
// console.log(players1, players2);

// // 2.
// const[gk, ...fieldPlayers] = players1;
// console.log(gk);
// console.log(fieldPlayers);

// // 3.
// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

// // 4.
// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// console.log(players1Final);

// // 5.
// const {
//   odds: {
//     team1, x:draw, team2
//   }
// } = game;
// console.log(team1, draw, team2);

// // 6.
// function printGoals(...players) {
//   console.log(players);
//   console.log(`${players.length} goals were scored!`);
// }
// printGoals('Davies', 'Muller', 'Lewandowski','Kimmich');
// printGoals(...game.scored);

// // && keeps doing when it is true.
// // || keeps doing when it is false.
// // 7.
// team1 < team2 && console.log('Team1 is more likely to win!');
// team1 > team2 && console.log('Team2 is more likely to win!');
//////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////
// Nulish Coalescing ?? Operator
// restaurant.numGuests = 0;
// const guests = restaurant.numGuests || 10;
// console.log(guests);

// // Nullish => ??: Null and Undefined are faulsy (Not 0 or '')
// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect);
//////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////
// Use ANY data type, return ANY data type, short-circuiting
// console.log("------------ OR ------------");
// console.log(3 || 'Raesup');
// console.log('' || 'Raesup');
// console.log(undefined || null);
// console.log(true || 0);

// console.log(undefined || 0 || '' || 'Hello' || 23 || null);

// restaurant.numGuests = 23;
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);

// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);


// console.log("------------ AND ------------");
// console.log(0 && 'Raesup');
// console.log(7 && 'Raesup');

// console.log('Hello' && 23 && null && 'Raesup');

// if (restaurant.orderPizza) {
//   restaurant.orderPizza('mushrooms', 'spinach');
// }

// restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');
//////////////////////////////////////////////////////////////////


// ////////////////////////////////////////////////////////////////
// // Rest Pattern and Parameters

// // 1. Destructuring
// // Spread operator, because on RIGHT side of =
// const arr = [1, 2, ...[3, 4]];
// console.log(arr);
// //
// // Rest operator, because on LEFT side of =
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

// const [c, , d, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(c, d, otherFood);

// // Objects
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(sat);
// console.log(weekdays);

// // 2. Functions
// const add = function (...numbers) {
//   console.log(numbers);
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   return console.log(sum);
// };

// add(2, 3);
// add(5, 3, 7, 2);
// add(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// const x = [23, 5, 7];
// add(...x);

// const addArray = function (numbers) {
//   console.log(numbers);
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   return console.log(sum);
// };

// addArray(x);

// restaurant.orderPizza('mushrooms', 'a', 'b', 'c', 'd');
// ////////////////////////////////////////////////////////////////

// ////////////////////////////////////////////////////////////////
// // Spread Operator (...)
// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

// const goodNewArr = [1, 2, ...arr];
// console.log(goodNewArr);

// console.log(...goodNewArr);

// const newMenu = [...restaurant.mainMenu, 'Fried Chicken'];
// const newMenu1 = [restaurant.mainMenu, 'Fried Chicken'];
// console.log(newMenu);
// console.log(newMenu1);

// // Copy Array
// const mainMenuCopy = [...restaurant.mainMenu];
// console.log(mainMenuCopy);

// // Join Arrays
// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(menu);

// // Iteralbles: arrays, strings, maps, sets. Not objects.
// const str = 'Raesup';
// const letters = [...str, ' ', 'S.'];
// console.log(letters);
// console.log(str);
// console.log(...str);

// // const ingredients = [
// //   prompt("Let's make pasta! Ingredient 1?"),
// //   prompt("Let's make pasta! Ingredient 2?"),
// //   prompt("Let's make pasta! Ingredient 3?"),
// // ];

// // restaurant.orderPasta(...ingredients);

// //Objects
// const newRestaurant = { foundedIn: 2021, ...restaurant, founder: 'Raesup' };
// console.log(newRestaurant);

// //Shallow Copy
// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = 'New Name';
// console.log(restaurantCopy.name);
// console.log(restaurant.name);
////////////////////////////////////////////////////////////////

// ///////////////////////////////////////////////////////////////
// // Destructuring Objects
// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// // Default values
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// // Mutating variables
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };

// ({ a, b } = obj);
// console.log(a, b);

// // nested objects
// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);

// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Patina Park SW',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// restaurant.orderDelivery({
//   address: 'Patina Park SW',
//   starterIndex: 2,
// });
///////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////
// Destructuring Arrays
// let [first, , second] = restaurant.categories;
// console.log(first, second);

// // const temp = first;
// // first = second;
// // second = temp;
// // console.log(first, second);

// [first, second] = [second, first];
// console.log(first, second);

// const [starter, main] = restaurant.order(2, 0);
// console.log(starter, main);

// const arr = [1, 2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;

// console.log(a, b, c);
// console.log(x, y, z);

// const nested = [2, 4, [5, 6]];
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);
//////////////////////////////////////////////////////////////
