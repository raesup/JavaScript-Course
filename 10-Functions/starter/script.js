'use strict';

//////////////////////////////////////////////////
// Default Parameters
const bookings = [];

const createBooking = function(flightNum, numPassengers = 1, price = 199 * numPassengers) {
    // Default Parameters, before ES5
    // numPassengers = numPassengers || 1;
    // price = price || 199;

    const booking = {
        flightNum,
        numPassengers,
        price,
    }
    console.log(booking);
    bookings.push(booking);
}

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
    passport: 12341234
}

const checkIn = function(flightNum, passenger) {
    // does not affect to original variable(String)
    flightNum = 'LH999';

    // does affect to original variable(object)
    passenger.name = 'Mr. ' + passenger.name;

    // if (passenger.passport === 12341234) {
    //     alert('Check in');
    // } else {
    //     alert('Wrong passport');
    // }
}

checkIn(flight, raesup);
// passing primitive type such as string is passing copy of value
console.log(flight);
// passing reference type such as object is passing reference itself
console.log(raesup);

const newPassport = function(person) {
    person.passport = Math.trunc(Math.random() * 10000000000);
}

newPassport(raesup);
checkIn(flight, raesup);

//////////////////////////////////////////////////
// Functions accepting callback functions
const oneWord = function(str) {
    // return str.replace(' ', '').toLowerCase();
    return str.replace(/ /g, '').toLowerCase();
}

const upperFirstWord = function(str) {
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
}

console.log(oneWord('raesup kim'));
console.log(upperFirstWord('raesup kim'));

// Higher-order function
const transformer = function(str, fn) {
    console.log(`Original string: ${str}`)
    console.log(`transformed string: ${fn(str)}`);

    console.log(`Transformed by: ${fn.name}`)
}

// transformer is high-order function and upperFirstWord is callback function
transformer('JavaScript is the best', upperFirstWord);
transformer('JavaScript is the best', oneWord);

// JS uses callbacks all the time
const high5 = function() {
    console.log('Hello');
}
document.body.addEventListener('click', high5);

['Raesup', 'Deborah', 'Arin', 'Serin'].forEach(high5);

//////////////////////////////////////////////////
// Functions returning functions
const greet = function(greeting) {
    return function(name) {
        console.log(`${greeting} ${name}`);
    }
}

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
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
        this.bookings.push({flight: `${this.iataCode}${flightNum}`, name})
    }
}

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
}

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
lufthansa.buyPlane = function() {
    console.log(this);
    this.planes++;
    console.log(this.planes)
};
document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

// There is no this keyword, so null for this keyword and bind 0.23 for tax rate.
const addVAT = addTax.bind(null, 0.23);
console.log(addVAT(200));