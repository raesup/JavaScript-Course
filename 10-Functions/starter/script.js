'use strict';

//////////////////////////////////////////////////
// Default Parameters
const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  // Default Parameters, before ES5
  // numPassengers = numPassengers || 1;
  // price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);
createBooking('LH123', undefined, 1000);
console.log(bookings);

//////////////////////////////////////////////////
// Value vs Reference
const flight = 'LH234';
const raesup = {
  name: 'Raesup Kim',
  passport: 12341234,
};

const checkIn = function (flightNum, passenger) {
  // does not affect to original variable(String)
  flightNum = 'LH999';

  // does affect to original variable(object)
  passenger.name = 'Mr. ' + passenger.name;

  // if (passenger.passport === 12341234) {
  //     alert('Check in');
  // } else {
  //     alert('Wrong passport');
  // }
};

checkIn(flight, raesup);
// passing primitive type such as string is passing copy of value
console.log(flight);
// passing reference type such as object is passing reference itself
console.log(raesup);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000000000);
};

newPassport(raesup);
checkIn(flight, raesup);

//////////////////////////////////////////////////
// Functions accepting callback functions
const oneWord = function (str) {
  // return str.replace(' ', '').toLowerCase();
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

console.log(oneWord('raesup kim'));
console.log(upperFirstWord('raesup kim'));

// Higher-order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

// transformer is high-order function and upperFirstWord is callback function
transformer('JavaScript is the best', upperFirstWord);
transformer('JavaScript is the best', oneWord);

// JS uses callbacks all the time
const high5 = function () {
  console.log('Hello');
};
document.body.addEventListener('click', high5);

['Raesup', 'Deborah', 'Arin', 'Serin'].forEach(high5);

//////////////////////////////////////////////////
// Functions returning functions
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greetArr = greeting => name => console.log(`${greeting} ${name}`);

// Hey Raesup
const greeterHey = greet('Hey');
greeterHey('Raesup');

// Hello Deborah
greet('Hello')('Deborah');

// Hi Somebody
greetArr('Hi')('Somebody');

//////////////////////////////////////////////////
// The Call and Apply Methods
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Raesup Kim');
lufthansa.book(635, 'Deborah Kwon');
console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

// Does not work
// book(23, 'Arin Kim');

// The Call method, explictly tell what the this keyword is
book.call(eurowings, 23, 'Arin Kim');
console.log(eurowings);

book.call(lufthansa, 239, 'Serin Kim');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 111, 'Hello Somebody');
console.log(swiss);

// The Apply method
const flightData = [123, 'Name'];
book.apply(swiss, flightData);
console.log(swiss);

// The Call method
book.call(swiss, ...flightData);
console.log(swiss);

//////////////////////////////////////////////////
// The Bind Method
const bookEw = book.bind(eurowings);
const bookLh = book.bind(lufthansa);
const bookLx = book.bind(swiss);

bookEw(123, 'Name Name');
console.log(eurowings);

const bookEw23 = book.bind(eurowings, 23);
bookEw23('Ew Ew');
bookEw23('Ew Ew Ew');
console.log(eurowings);

// With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};
document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

// There is no this keyword, so null for this keyword and bind 0.23 for tax rate.
const addVAT = addTax.bind(null, 0.23);
console.log(addVAT(200));

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};
const addVAT1 = addTaxRate(0.23);
console.log(addVAT1(200));

//////////////////////////////////////////////////
// Coding Challenge #1

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    poll.answers.push(
      prompt(`${question}
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
        `)
    );
    displayResults(poll.answers);
  },
};

const displayResults = function (type) {
  if (typeof type === 'array') {
    console.log(type);
  } else if (typeof type === 'string') {
    console.log(`Poll results are ` + type);
  }
};

const poll = {
  answers: [],
  registerNewAnswer() {
    poll.answers.push(
      prompt(`
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
        `)
    );
    displayResults(poll.answers);
  },
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer);
console.log(poll);

const array = [1, 2, 3, 4];
console.log(typeof array);
console.log(typeof '1234');

//////////////////////////////////////////////////
// Immediately Invoked Function Expressions (IIFE)
const runOnce = function () {
  console.log('This will never run again');
};
runOnce();

// IIFE
(function () {
  console.log('This will never run again');
  const isPrivate = 23;
})();

// console.log(isPrivate);

(() => console.log('This will ALSO never run again'))();

{
  const isPrivate = 23;
  var notPrivate = 46;
}
// console.log(isPrivate);
console.log(notPrivate);


//////////////////////////////////////////////////
// Closures
const secureBooking = function () {
    let passengerCount = 0;
  
    return function () {
      passengerCount++;
      console.log(`${passengerCount} passengers`);
    };
  };
  
  const booker = secureBooking();
  
  booker();
  booker();
  booker();
  
  console.dir(booker);

  ///////////////////////////////////////
// More Closure Examples
// Example 1
let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();
console.dir(f);

// Re-assigning f function
h();
f();
console.dir(f);

// Example 2
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};

const perGroup = 1000;
boardPassengers(180, 3);