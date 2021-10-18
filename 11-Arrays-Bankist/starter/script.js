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