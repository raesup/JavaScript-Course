'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
// Simple Array Methods
let arr = ['a', 'b', 'c', 'd', 'e'];

// slice: shallow copy and return other array
// c, d, e
console.log(arr.slice(2))
// c, d
console.log(arr.slice(2,4));
// d, e
console.log(arr.slice(-2));
// b, c
console.log(arr.slice(1, -2));

// splice: no copy, return original array
// c, d, e
console.log(arr.splice(2, 3));
// b
console.log(arr.splice(-1));
// a
console.log(arr)

// Reverse: no copy, return original array
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'j'];
console.log(arr2.reverse());
console.log(arr2);

// concat
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

// join: returns string
console.log(letters.join(' - '));

///////////////////////////////////////
// Looping Arrays: forEach
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

console.log('--------------ForOf--------------')
// for (const movement of movements) {
for (const [i, movement] of movements.entries()) {
  if(movement > 0) {
    console.log(`Movement ${i+1}: You deposited ${movement}`)
  } else {
    console.log(`Movement ${i+1}: You withdrew ${Math.abs(movement)}`)
  }
}

console.log('--------------ForEach--------------')
// movements.forEach(movement => {
// forEach parameter order: element, index, array
movements.forEach((movement, i) => {
  if(movement > 0) {
    console.log(`Movement ${i+1}: You deposited ${movement}`)
  } else {
    console.log(`Movement ${i+1}: You withdrew ${Math.abs(movement)}`)
  }
})

///////////////////////////////////////
// forEach with Maps and Sets

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

console.log(currencies);

currencies.forEach(function(value, key, map) {
  console.log(`${key}: ${value}`)
})

// set does not have index. so do not have to use key
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR', 'WON']);
currenciesUnique.forEach(function(value, key, map) {
  console.log(`${key}: ${value}`)
})

///////////////////////////////////////
//  Data Transformation: Map
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const eurToUsd = 1.1;

const movementsUSD = movements.map(movement => movement * eurToUsd);
console.log(movementsUSD);

const movementsDescriptions = movements.map((movement, i, array) => {
  if(movement > 0) {
    return `Movement ${i+1}: You deposited ${movement}`
  } else {
    return `Movement ${i+1}: You withdrew ${Math.abs(movement)}`
  }
})
console.log(movementsDescriptions);

///////////////////////////////////////
// Coding Challenge #1

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

const dogsJulia = [3, 5, 2, 12, 7];
const dogsKate = [4, 1, 15, 8, 3];

const checkDogs = function(dogsJulia, dogsKate) {
  const dogsJuliaCorrected = dogsJulia.slice(1,-2);
  const dogsKateCorrected = dogsKate.slice(1,-2);

  dogsJuliaCorrected.forEach((dog, i) => {
    dog > 3 ? 
    console.log(`Dog number ${i} is an adult, and is ${dog} years old`) :
    console.log(`Dog number ${i} is still a puppy`)
  })

  dogsKateCorrected.forEach((dog, i) => {
    dog > 3 ? 
    console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old`) :
    console.log(`Dog number ${i + 1} is still a puppy`)
  })
  console.log(dogsJuliaCorrected);
  console.log(dogsKateCorrected);
}

checkDogs(dogsJulia, dogsKate);