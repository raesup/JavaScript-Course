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

const openingHours = {
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
};

//////////////////////////////////////////////////////////////////
// // Working with Strings - Part 1 (slice)

// const airline = 'TAP Air Portugal';
// const plane = 'A320';

// // A,a,4,10,1,4
// console.log(plane[0]);
// console.log('Koeran Air'[4]);
// console.log(plane.length);
// console.log('Korean Air'.length)
// console.log(airline.indexOf('A'));
// console.log(airline.lastIndexOf('A'));

// // Air Portugal, Air
// console.log(airline.slice(4));
// console.log(airline.slice(4, 7));

// // First word, Last word
// console.log(airline.slice(0, airline.indexOf(' ')));
// console.log(airline.slice(airline.lastIndexOf(' ') + 1));

// // al, AP Air Portuga
// console.log(airline.slice(-2));
// console.log(airline.slice(1,-1));

// // Checking if the seat is middle seat or not
// const checkMiddleSeat = function(seat) {
//   const s = seat.slice(-1);
//   if (s === 'B' || s === 'E') {
//     console.log('You got the middle seat')
//   } else {
//     console.log('You got lucky')
//   }
// }
// checkMiddleSeat('11B');
// checkMiddleSeat('23C');
// checkMiddleSeat('3E');

// //////////////////////////////////////////////////////////////////
// // Working with Strings - Part 2 (trim, replace, includes, regular expression, startsWith, endsWith)
// console.log(airline.toLowerCase());
// console.log(airline.toUpperCase());

// // Fix capitalization in name
// const passenger = 'rAEsUp';
// const passengerLower = passenger.toLowerCase();
// const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);
// console.log(passengerCorrect);

// // Comparing emails
// const email = 'hello@raesup.com'
// const loginEmail = '  Hello@Raesup.com \n';
// const trimmedEmail = loginEmail.toLowerCase().trim();
// console.log(trimmedEmail);

// // replacing
// const priceGB = '288,97#';
// const priceUS = priceGB.replace('#', '$').replace(',', '.');
// console.log(priceUS);

// const announcement = 'All passengers come to boarding door 23, bording door 23!';
// // console.log(announcement.replaceAll('door', 'gate'));

// // Regular expression! g meas global, syntax -> /string/g
// console.log(announcement.replace(/door/g, 'gate'));

// const plane1 = 'A320neo';
// // true
// console.log(plane1.includes('A320'));
// // fasle
// console.log(plane1.startsWith('Air'));

// if (plane1.startsWith('A') && plane1.endsWith('neo')) {
//   console.log('Correct');
// }

// const checkBaggage = function(items) {
//   const baggage = items.toLowerCase();
//   if (baggage.includes('knife') || baggage.includes('gun')) {
//     console.log('You are not allowed on board')
//   } else {
//     console.log('Welcome aboard!')
//   }
// }

// checkBaggage('I hae a laptop, some Food and a pocket Knife');
// checkBaggage('Socks and camera');
// checkBaggage('Got some snacks and a gun for protection');

// //////////////////////////////////////////////////////////////////
// // Working with Strings - Part 3 (split, join, padStart, padEnd, repeat)

// console.log('a+very+nice+string');
// // array of a, very, nice, and string
// console.log('a+very+nice+string'.split('+'));

// const [firstName, lastName] = 'Raesup Kim'.split(' ');
// console.log(firstName);

// const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
// console.log(newName);

// const capitalizeName = function(name) {
//   const names = name.split(' ');
//   const correctNames = [];
//   const correctNames1 = [];
  
//   for (name of names) {
//     correctNames.push(name[0].toUpperCase() + name.slice(1));
//     correctNames1.push(name.replace(name[0], name[0].toUpperCase()));
//   }
//   console.log(correctNames.join(' ')); 
//   console.log(correctNames1.join(' ')); 
// }
// capitalizeName('deborah arin serin raesup');

// // Padding
// const message = 'Go to the gate 23!';
// console.log(message.padStart(25, '+'));
// console.log(message.padEnd(25, '+'));

// const maskCreditCard = function(number) {
//   const str = number + '';
//   const last = str.slice(-4);
//   return console.log(last.padStart(str.length, '*'));
// }
// maskCreditCard(96846354684351);
// maskCreditCard('654968463546843546549853');

// // repeat
// const message2 = 'Bad wearther... All Departures Delayed...\n';
// console.log(message2.repeat(3));

// const planesInLine = function(n) {
//   console.log(`There are ${n} planes in line ${'plane'.repeat(n)}`);
// };

// planesInLine(2);
//////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////
// // Maps Fundametals
// const rest = new Map();
// rest.set('name', 'Classico Italiano');
// rest.set(1, 'Firenze, Italy');
// rest.set(2, 'Lisbon, Portugal');
// rest
//   .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'We are open')
//   .set(false, 'We are closed');

// console.log(rest);

// console.log(rest.get('name'));
// console.log(rest.get(true));
// console.log(rest.get(1));

// const time = 21;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// console.log(rest.has('categories'));
// rest.delete(2);
// console.log(rest);
// console.log(rest.size);

// const arr = [1, 2];
// rest.set(arr, 'Test');
// rest.set(document.querySelector('h1'), 'Heading');
// console.log(rest);
// console.log(rest.get(arr));

// // rest.clear();
// // console.log(rest);
// //////////////////////////////////////////////////////////////////

// //////////////////////////////////////////////////////////////////
// // Maps Iteration
// const question = new Map([
//   ['question', 'What is the ....'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'JavaScript'],
//   ['correct', 3],
//   [true, 'Correct'],
//   [false, 'Try again!'],
// ]);
// console.log(question);

// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);

// // Quiz App
// console.log(question.get('question'));

// for (const [key, value] of question) {
//   if (typeof key === 'number') {
//     console.log(`Answer ${key}: ${value}`);
//   }
// }

// // const answer = Number(prompt('Your answer?'));
// // console.log(answer);

// // console.log(
// //   answer === question.get('correct') ? question.get(true) : question.get(false)
// // );

// // console.log(question.get(answer === question.get('correct')));

// // Convert map to array
// console.log([...question]);
// console.log([...question.keys()]);
// console.log([...question.values()]);
//////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////
// Sets
// Sets is a Object data structure which ignore duplicates
// const ordersSet = new Set([
//   'Pasta',
//   'Pizza',
//   'Pizza',
//   'Risotto',
//   'Pasta',
//   'Pizza',
// ]);

// // Pasta, Pizza, Risotto
// console.log(ordersSet);

// // 3
// console.log(ordersSet.size);

// // true
// console.log(ordersSet.has('Pizza'));
// // false
// console.log(ordersSet.has('Bread'));

// ordersSet.add('Garlic Bread');
// ordersSet.add('Garlic Bread');
// // Pasta, Pizza, Risotto, Garlic Bread
// console.log(ordersSet);

// // Pasta, Pizza, Garlic Bread
// ordersSet.delete('Risotto');
// console.log(ordersSet);

// ordersSet.clear();
// console.log(ordersSet);

// for (const order of ordersSet) {
//   console.log(order);
// }

// //R,a,e,s,u,p
// console.log(new Set('Raesup'));

// // Example
// const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
// const staffUnique = new Set(staff);
// // Set -> Waiter, Chef, Manager
// console.log(staffUnique);

// const staffUniqueArray = [...new Set(staff)];
// // Array -> Waiter, Chef, Manager
// console.log(staffUniqueArray);
//////////////////////////////////////////////////////////////////

// //////////////////////////////////////////////////////////////////
// // Looping Object: Object Keys, Values, and Entries.

// // Property NAMES
// const properties = Object.keys(restaurant.openingHours);
// console.log(properties);
// console.log(properties.length);

// let str = `It is the information of the restaurant: `;
// for (const day of properties) {
//   str += `${day}, `;
// }
// console.log(str);

// // Property VALUES
// const values = Object.values(restaurant.openingHours);
// console.log(values);

// // Property ENTRIES
// const entries = Object.entries(restaurant.openingHours);
// console.log(entries);

// for (const [i, { open, close }] of entries) {
//   console.log(i, open, close);
// }
// ////////////////////////////////////////////////////////////////////

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

//////////////////////////////////////////////////////////////////
// Coding Challenge

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

// Coding Challenge #2

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/

// // 1.
// for (const [i, scored] of game.scored.entries()) {
//   console.log(`Goal ${i + 1}: ${scored}`);
// }

// // 2.
// const odds = Object.values(game.odds);
// let sum = 0;
// for (const odd of odds) {
//   sum += odd;
// }
// console.log(sum / odds.length);

// // 3.
// for (const [team, odd] of Object.entries(game.odds)) {
//   const teamString = team === 'x' ? 'draw' : `victory ${game[team]}`;
//   console.log(`Odd of ${teamString}: ${odd}`);
// }

// // Bonus.
// const scorers = {};
// for (const player of game.scored) {
//   scorers[player] ? scorers[player]++ : (scorers[player] = 1);
// }
// console.log(scorers);

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

// // 1.
// const events = new Set(gameEvents.values());
// console.log(events)

// // 2.
// gameEvents.delete(64);
// console.log(gameEvents)

// // 3.
// console.log(`An event happened, on average, every ${90/gameEvents.size} minutes`)

// // 4.
// for (const [m, event] of gameEvents) {
//   console.log(`${m < 45 ? '[FIRST HALF] ' : '[SECOND HALF] '}${m}: ${event}`)
// }


// Coding Challenge #4

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/

// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));

// document.querySelector('button').addEventListener('click', function () {
//   const text = document.querySelector('textarea').value;
//   const texts = text.toLowerCase().split('\n');
//   console.log(texts);
  
//   for (const t of texts) {
//     const [x, y] = t.split('_');
    
//     console.log([x, y[0].toUpperCase() + y.slice(1)].join('').trim());
//   }
// });


// String Methods Practice

const flights1 =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

const lows = flights1.split('+');
console.log(lows)

for (const low of lows) {
  const [status, from, to, time] = low.split(';');
  console.log(`${status.includes('Delayed') ? '!!' : ''} ${status.replaceAll('_', '')} from ${from.toUpperCase().slice(0,3)} to ${to.toUpperCase().slice(0,3)} (${time.replace(':', 'h')})`.padStart(50));
}


//////////////////////////////////////////////////////////////////
