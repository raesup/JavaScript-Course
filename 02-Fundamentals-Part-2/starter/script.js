'use strict';

/*
// Lecture 32. Activating Strict Mode
let hasDriverLicense = false;
const passTest = true;

if (passTest) {
    hasDriversLicense = true;
}

if (hasDriverLicense) console.log("I can drive");
*/


/*
// Lecture 33. Functions
const name = 'Raesup';

function logger() {
    console.log(`My name is ${name}`);
}

//calling / running / invoking function
logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

console.log(fruitProcessor(2, 1));

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);


// Assignment

function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

const korea = describeCountry('Korea', '50', 'Seoul');
const canada = describeCountry('Canada', '20', 'Otawa');
const usa = describeCountry('USA', '30', 'Washington');

console.log(korea);
console.log(canada);
console.log(usa);
*/


/*
// Lecture 34. Function Declarations vs Expressions

// Function Declaration
// can run the function before declaration
const age1 = calcAge1(1986);
function calcAge1(birthYear) {
    return 2021 - birthYear;
}
console.log(age1);

// Function Expression
const calcAge2 = function (birthYear) {
    return 2021 - birthYear;
}
const age2 = calcAge2(1983);
console.log(age2);

// Assignment
function percentageOfWorld1(population) {
    return population / 7900 * 100;
}

const korea = percentageOfWorld1(50);
const china = percentageOfWorld1(1441);
const canada = percentageOfWorld1(25);

console.log(korea, china, canada);

const percentageOfWorld2 = function (population) {
    return population / 7900 * 100;
}

const korea2 = percentageOfWorld2(50);
const china2 = percentageOfWorld2(1441);
const canada2 = percentageOfWorld2(25);

console.log(korea2, china2, canada2);
*/


/*
// Lecture 35. Arrow Functions
const calcAge2 = function (birthYear) {
    return 2021 - birthYear;
}

const calcAge3 = birthYear => 2021 - birthYear;
console.log(calcAge2(1986), calcAge3(1986));

const yearsUntilRetirement = birthYear => {
    const age = 2021 - birthYear;
    const retirement = 65 - age;
    return retirement;
}
console.log(yearsUntilRetirement(1986));

const yearsUntilRetirement1 = (birthYear, firstName) => {
    const age = 2021 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years.`;
}
console.log(yearsUntilRetirement1(1986, 'Raesup'));

// Assignment
const percentageOfWorld3 = population => population / 7900 * 100;

const korea3 = percentageOfWorld3(50);
const china3 = percentageOfWorld3(1441);
const canada3 = percentageOfWorld3(25);

console.log(korea3, china3, canada3);
*/


/*
// Lecture 36. Functions Calling Other Functions
function cutFruit(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruit(apples);
    const orangePieces = cutFruit(oranges);

    const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`;
    return juice;
}

console.log(fruitProcessor(2, 3));

// Assignment
const percentageOfWorld4 = population => population / 7900 * 100;

const describePopulation = (country, population) => {
    return `${country} has ${population} million people, which is about ${percentageOfWorld4(population)}% of the world`;
}

console.log(describePopulation('Korea', '50'));
*/


/*
// Coding Challenge #1
const calcAverage = (score1, score2, score3) => {
    return (score1 + score2 + score3) / 3;
}

const checkWinner = (avgDolphin, avgKoala) => {
    if (avgDolphin * 2 < avgKoala) {
        console.log(`Koala win (${avgKoala} vs ${avgDolphin})`);
    } else if (avgDolphin > avgKoala * 2) {
        console.log(`Dolphin win (${avgDolphin} vs ${avgKoala})`);
    } else {
        console.log(`No team wins.`)
    }
}

const dolphinAvg = calcAverage(44, 23, 71);
const koalaAvg = calcAverage(65, 54, 49);
checkWinner(dolphinAvg, koalaAvg);

const dolphinAvg1 = calcAverage(85, 54, 41);
const koalaAvg1 = calcAverage(23, 34, 27);
checkWinner(dolphinAvg1, koalaAvg1);
*/

/*
// Lecture 39. Introduction to Arrays
const family1 = 'Deborah';
const family2 = 'Arin';
const family3 = 'Serin';
const family4 = 'Raesup';

const family = ['Deborah1', 'Arin1', 'Serin1', 'Raesup1'];
console.log(family);

const family0 = new Array('Deborah2', 'Arin2', 'Serin2', 'Raesup2');
console.log(family0);

console.log(family0.length);

// can mutate the value of array even though the array is constant
family0[3] = 'Raesup3';
console.log(family0[family0.length - 1]);

const bigFamily = ['Kwon', 'Kim', family0];
console.log(bigFamily);

// Exercise

const calcAge = birthYear => 2021 - birthYear;
const years = [1986, 1983, 2016, 2018];

// not working
console.log(calcAge(years));

// working
for (let i = 0; i < years.length; i++) {
    console.log(calcAge(years[i]));
}
*/

/*
// Lecture 40. Basic Array Operations (Methods)
const family = ['Deborah1', 'Arin1', 'Serin1', 'Raesup1'];

console.log(family.push('?'));
console.log(family);

family.unshift('??');
console.log(family);

console.log(family.pop());
console.log(family);

console.log(family.shift());
console.log(family);

console.log(family.indexOf('Raesup1'));

console.log(family.includes('Raesup1'));
*/

/*
// Coding Challenge #2
const calcTip = bill => {
    let tip = 0;
    if (bill > 50 && bill < 300) {
        tip = bill * 0.15;
    } else {
        tip = bill * 0.2;
    }
    return tip;
}

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [tips[0] + bills[0], tips[1] + bills[1], tips[2] + bills[2]];

console.log(bills, tips, totals);
*/


/*
// Lecture 42. Introduction to Objects
// Array, order matters
const raesupArray = [
    'Raesup',
    'Kim',
    2021 - 1986,
    'programmer',
    ['Deborah', 'Arin', 'Serin']
];

// Object, order does not matter
const raesup = {
    firstName: 'Raesup',
    lastName: 'Kim',
    age: 2021 - 1986,
    job: 'programmer',
    family: ['Deborah', 'Arin', 'Serin']
};

// Assignment
const myCountry = {
    country: 'Korea',
    capital: 'Seoul',
    language: 'Korean',
    population: 50,
    neighbours: ['China', 'Japan']
};

console.log(myCountry);
*/


/*
// Lecture 43. Dot vs Bracket Notation
const raesup = {
    firstName: 'Raesup',
    lastName: 'Kim',
    age: 2021 - 1986,
    job: 'programmer',
    family: ['Deborah', 'Arin', 'Serin']
};

console.log(raesup);

console.log(raesup.firstName, raesup.lastName, raesup.age);
console.log(raesup['firstName'], raesup['lastName'], raesup['age']);

const nameKey = 'Name';
console.log(raesup['first' + nameKey], raesup['last' + nameKey]);

// const interestedIn = prompt(`What do you want to know about Raesup? Choose between firstName, lastName, age, job, and family.`);
// working
// console.log(raesup[interestedIn]);
// not working, undefined.
// console.log(raesup.interestedIn);

// if (raesup[interestedIn]) {
// console.log(raesup[interestedIn]);
// } else {
// console.log(`Wrong request, please try again`)
// }

raesup.location = 'Calgary';
raesup['hometown'] = 'Osan';
console.log(raesup);

console.log(`${raesup.firstName} has ${raesup.family.length} family members, and his favourite member is called ${raesup.family[0]}`);

// Assignment
const myCountry = {
    country: 'Korea',
    capital: 'Seoul',
    language: 'Korean',
    population: 50,
    neighbours: ['China', 'Japan']
};

console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`);

myCountry.population += 2;
console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`);

myCountry['population'] -= 2;
console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`);
*/


/*
// Lecture 44. Object Methods
const raesup = {
    firstName: 'Raesup',
    lastName: 'Kim',
    birthYear: 1986,
    job: 'programmer',
    family: ['Deborah', 'Arin', 'Serin'],
    hasDriverLicense: true,

    // calcAge: function (birthYear) {
    //     return 2021 - birthYear;
    // }

    // use this keyword!!
    // calcAge: function () {
    //     return 2021 - this.birthYear;
    // }

    // store into new property
    calcAge: function () {
        this.age = 2021 - this.birthYear;
        return this.age;
    },

    // driver: function () {
    //     let isDriver = '';
    //     if (this.hasDriverLicense) {
    //         isDriver = 'a';
    //     } else {
    //         isDriver = 'no';
    //     }
    //     return isDriver;
    // }
    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()}-years old ${this.job}, and he has ${this.hasDriverLicense ? 'a' : 'no'} driver's license.`
    }
};

// console.log(raesup.calcAge(raesup.birthYear));
// console.log(raesup['calcAge'](raesup['birthYear']));

// console.log(raesup.calcAge());
// console.log(raesup['calcAge']());

console.log(raesup.calcAge())
console.log(raesup.age);
console.log(raesup['age']);

// console.log(`${raesup.firstName} is a ${raesup.age}-years old ${raesup.job}, and he has ${raesup.driver()} driver's license`)
console.log(raesup.getSummary());


// Assignment
const myCountry = {
    country: 'Korea',
    capital: 'Seoul',
    language: 'Korean',
    population: 50,
    neighbours: ['China', 'Japan'],
    describe: function () {
        console.log(`${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`);
    },
    checkIsland: function () {
        this.isIsland = this.neighbours.length === 0 ? true : false;
    }
};

myCountry.describe();
myCountry.checkIsland();

console.log(myCountry);
*/


/*
// Coding Challenge #3

const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        return this.bmi = this.mass / this.height ** 2;
        // return this.bmi;
    }
}

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        return this.bmi = this.mass / this.height ** 2;
        // return this.bmi;
    }
}

// mark.calcBMI();
// john.calcBMI();

console.log(john.calcBMI() > mark.calcBMI() ? `John's BMI (${john.bmi}) is higher than Mark's (${mark.bmi})!` : `Mark's BMI (${mark.bmi}) is higher than John's (${john.bmi})!`)
*/

/*
// Lecture 46. Iteration: The for Loop
for (let i = 0; i < 10; i++) {
    console.log(`Lifting weights repetition ${i + 1}`);
}
*/


/*
// Lecture 47. Looping Arrays, Breaking and Continuing
const raesupArray = [
    'Raesup',
    'Kim',
    2021 - 1986,
    'programmer',
    ['Deborah', 'Arin', 'Serin'],
    true
];

const raesupTypeArray = new Array();

for (let i = 0; i < raesupArray.length; i++) {
    console.log(raesupArray[i], typeof raesupArray[i]);
    raesupTypeArray.push(typeof raesupArray[i]);
}

console.log(raesupTypeArray);

const years = [1986, 1983, 2016, 2018];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2021 - years[i]);
}

console.log(ages);

// continue and break
for (let i = 0; i < raesupArray.length; i++) {
    if (typeof raesupArray[i] !== 'string') {
        continue;
    }
    console.log(raesupArray[i], typeof raesupArray[i]);
}

for (let i = 0; i < raesupArray.length; i++) {
    if (typeof raesupArray[i] !== 'string') {
        break;
    }
    console.log(raesupArray[i], typeof raesupArray[i]);
}
*/

/*
// Lecture 48. Looping Backwards and Loops in Loops
const raesupArray = [
    'Raesup',
    'Kim',
    2021 - 1986,
    'programmer',
    ['Deborah', 'Arin', 'Serin']
];

for (let i = raesupArray.length - 1; i >= 0; i--) {
    console.log(raesupArray[i]);
}

for (let i = 1; i < 4; i++) {
    console.log(`--- Starting exercise #${i} ---`);
    for (let j = 1; j < 6; j++) {
        console.log(`Lifting weights repetition ${j}`);
    }
}

// Assignment
const listOfNeighbours = [
    ['Canada', 'Mexico'],
    ['Spain'],
    ['Norway', 'Sweden', 'Russia']
];

for (let i = 0; i < listOfNeighbours.length; i++) {
    for (let j = 0; j < listOfNeighbours[i].length; j++) {
        console.log(`Neighbour: ${listOfNeighbours[i][j]}`);
    }
}
*/

/*
// Lecture 49. The While Loop
for (let i = 0; i < 10; i++) {
    console.log(`Lifting weights repetition ${i + 1}`);
}

let j = 0;
while (j < 10) {
    console.log(`Lifting weights repetition ${j + 1}`);
    j++;
}

// let roll = parseInt(Math.random() * 6);
let roll = Math.trunc(Math.random() * 6 + 1);

while (roll !== 6) {
    console.log(roll);
    roll = Math.trunc(Math.random() * 6 + 1);
}
*/

// Coding Challenge #4
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = bills => {
    for (let i = 0; i < bills.length; i++) {
        if (bills[i] > 50 && bills[i] < 300) {
            tips[i] = bills[i] * 0.15;
        } else {
            tips[i] = bills[i] * 0.2;
        }
        totals[i] = bills[i] + tips[i];
    }
}

calcTip(bills);

console.log(bills, tips, totals);

// Bonus
const calcAverage = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length
}

console.log(calcAverage(bills));
console.log(calcAverage(totals));
console.log(calcAverage(tips));
