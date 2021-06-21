// lection 10. Values and Variables
/*
let js = 'amazing';
if (js === 'amazing') {
    alert('JS is fun!');
}

console.log(10 + 1);

let firstName = "Raesup";
console.log(firstName);

let PI = 3.1415;

let myFirstJob = "Project Manager";
let mySecondJob = "Programmer"

// Assignment

let country = "Korea";
let continent = "Asia";
let population = 50;

console.log(country, continent, population);
*/

// lecture 12. Data Types
/*
let raesupIsAwesome = true;
console.log(raesupIsAwesome);
console.log(typeof raesupIsAwesome);

raesupIsAwesome = "true";
console.log(typeof raesupIsAwesome);

let raesup;
console.log(typeof raesup);

let _null = null;
console.log(_null);
console.log(typeof _null);
*/

// Assignment
/*
let isIsland = false;
let language;
console.log(typeof isIsland);
console.log(typeof language);

language = 'Korean';
console.log(typeof language);
*/

/*
// lecture 13. let, const and var
let age = 30;
age = 31;

// Use const by default
const birthYear = 1986;
// Error below because birthYear is constant
// birthYear = 2021;
// Error below because constant does not have value
// const year;

var job = 'Programmer';
job = 'Project Manager';
*/

/*
// Lecture 14. Basic Operators
const now = 2021;
const age = now - 1986;
const age1 = now - 1983;
console.log(age, age1);
console.log(age * 2, age1 / 2, 2 ** 10);

const firstName = "Raesup";
const lastName = "Kim";
console.log(firstName + ' ' + lastName);

let x = 10 + 5;
console.log(x);

x += 10;
console.log(x);

for (y = 0; y < 10; y++) {
    x++;
    console.log(x, y);
}
*/

/*
// Lecture 15. Operator Precedence

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);
*/

/*
// Coding Challenge #1
function calBmi(mass, height) {
    const bmi = mass / height ** 2;
    return bmi;
}

let massMark = 78;
let massJhon = 92;
let heightMark = 1.69;
let heightJohn = 1.88;

let bmiMark = calBmi(massMark, heightMark);
let bmiJohn = calBmi(massJhon, heightJohn);

let markHigherBMI = bmiMark > bmiJohn;
console.log(markHigherBMI);

massMark = 95;
massJhon = 85;
heightMark = 1.88;
heightJohn = 1.76;

bmiMark = calBmi(massMark, heightMark);
bmiJohn = calBmi(massJhon, heightJohn);

markHigherBMI = bmiMark > bmiJohn;
console.log(markHigherBMI);
*/


/*
// Lecture 17. Strings and Template Literals

const name = 'Raesup';
const job = 'programmer';
const birthYear = 1986;
const year = 2021;

//String
const raesup = "I'm " + name + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(raesup);

//Template Literals
const raesupNew = `I'm ${name}, a ${year - birthYear} years old ${job}!`
console.log(raesupNew);

console.log('String with \nnew line');
console.log(`String with
new line`);
*/


/*
// Lecture 18. Taking Decisions: if / else Statements
const age = 10;
const isOldEnough = age >= 18;

// emoji: window + .
if (isOldEnough) {
    console.log(`Hello, person with old enough age! 🤣`);
}
else {
    const yearsLeft = 18 - age;
    console.log(`You are not old enough for driving license! Wait another ${yearsLeft} years! 🤣`);
}
// In a nutshell, 간단히 말해서
*/


/*
// Coding Challenge #2
function calBmi(mass, height) {
    const bmi = mass / height ** 2;
    return bmi;
}

let massMark = 78;
let massJhon = 92;
let heightMark = 1.69;
let heightJohn = 1.88;

let bmiMark = calBmi(massMark, heightMark);
let bmiJohn = calBmi(massJhon, heightJohn);

let markHigherBMI = bmiMark > bmiJohn;
console.log(markHigherBMI);

massMark = 95;
massJhon = 85;
heightMark = 1.88;
heightJohn = 1.76;

bmiMark = calBmi(massMark, heightMark);
bmiJohn = calBmi(massJhon, heightJohn);

markHigherBMI = bmiMark > bmiJohn;
console.log(markHigherBMI);

if (markHigherBMI) {
    console.log(`Mark's BMI(${bmiMark}) is higher than John's(${bmiJohn})!`);
}
else {
    console.log(`John's BMI(${bmiJohn}) is higher than Mark's(${bmiMark})!`);
}
*/


/*
// Lecture 20. Type Conversion and Coercion
// Type conversion
const inputYear = '1986';
console.log(inputYear + 18);

console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);
console.log(parseInt(inputYear) + 18);

console.log(Number('Raesup'));
// result: NaN(Not a Number)

console.log(typeof Number('Raesup'));

console.log(String(23), 23);

// Type coercion
console.log('I am ' + 23 + ' years old.')
console.log('I am ' + 23 + 1 + ' years old.');
console.log('I am ' + (23 + 1) + ' years old.');
console.log('23' + '10' + 3);
console.log('23' - '10' - 3);
console.log('23' * '10');
console.log('24' / '3');
console.log('14' < '13333333');

let n = '1' + 1;
n = n - 1;
console.log(n);
*/


/*
// Lecture 21. Truthy and Falsy Values
// 5 falsy values: 0, '', undefined, null, NaN
// Anything else ohter than above are truthy values
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Raesup'));
// Empty object below
console.log(Boolean({}));

const money = 0;
if (money) {
    console.log("Do not spend it all");
}
else {
    console.log("You should get a job");
}

let height;
if (height) {
    console.log('Height is defined');
}
else {
    console.log('Height is undefined');
}
*/


/*
// Lecture 22. Equality Operators: == vs ===
// Use strict equal operator by default for clean code.

// === strict equal, do not do the type coercion.
const age = 18;
if (age === 18) console.log('age is 18');
if (age === '18') {
    console.log('age is 18');
} else {
    console.log('age is not 18');
}

// == loose equal, do the type coercion.
if (age == '18') {
    console.log('age is 18');
} else {
    console.log('age is not 18');
}

// const favourite = Number(prompt("What is your favourite number?"));
const favourite = prompt("What is your favourite number?");
console.log(typeof favourite, favourite);
if (favourite == 3) {
    console.log('loose, coercion');
}
else {
    console.log('Strict');
}

if (favourite === 3) {
    console.log('loose, coercion');
}
else {
    console.log('Strict');
}

if (favourite !== 3) {
    console.log('not 3');
}

if (favourite != 3) {
    console.log('not 3');
}
*/


/*
// Lecture 24. Logical Operators
const hasDriverLicense = true;
const hasGoodVision = true;

console.log(hasDriverLicense && hasGoodVision);
console.log(hasDriverLicense || hasGoodVision);
console.log(!hasDriverLicense && !hasGoodVision);
console.log(!hasDriverLicense || !hasGoodVision);

const shouldDrive = hasDriverLicense && hasGoodVision;

if (shouldDrive) {
    console.log('Good to drive');
}
else {
    console.log('Should not drive');
}

const isTired = true;
const shouldDrive1 = hasDriverLicense && hasGoodVision && !isTired;
if (shouldDrive1) {
    console.log('Good to drive');
}
else {
    console.log('Should not drive');
}
*/


/*
// Coding Challenge #3
const dolphinScore = [96, 108, 89];
const koalaScore = [88, 91, 110];

const dolphinScore1 = [97, 112, 101];
const koalaScore1 = [109, 95, 123];

const dolphinScore2 = [97, 112, 101];
const koalaScore2 = [109, 95, 106];

const dolphinAvg = (dolphinScore[0] + dolphinScore[1] + dolphinScore[2]) / 3;
const koalaAvg = (koalaScore[0] + koalaScore[1] + koalaScore[2]) / 3;

const dolphinAvg1 = (dolphinScore1[0] + dolphinScore1[1] + dolphinScore1[2]) / 3;
const koalaAvg1 = (koalaScore1[0] + koalaScore1[1] + koalaScore1[2]) / 3;

const dolphinAvg2 = (dolphinScore2[0] + dolphinScore2[1] + dolphinScore2[2]) / 3;
const koalaAvg2 = (koalaScore2[0] + koalaScore2[1] + koalaScore2[2]) / 3;

console.log(dolphinAvg, koalaAvg);
console.log(dolphinAvg1, koalaAvg1);
console.log(dolphinAvg2, koalaAvg2);

if (dolphinAvg > koalaAvg) {
    console.log(`Dolphine wins!`);
} else if (dolphinAvg === koalaAvg) {
    console.log(`Draw game!`);
} else {
    console.log(`Koala wins!`);
}

if (dolphinAvg1 > koalaAvg1) {
    console.log(`Dolphine wins!`);
} else if (dolphinAvg1 === koalaAvg1) {
    console.log(`Draw game!`);
} else {
    console.log(`Koala wins!`);
}

if (dolphinAvg2 > koalaAvg2) {
    console.log(`Dolphine wins!`);
} else if (dolphinAvg2 === koalaAvg2) {
    console.log(`Draw game!`);
} else {
    console.log(`Koala wins!`);
}

// Bonus 1
if (dolphinAvg > koalaAvg && dolphinAvg >= 100) {
    console.log(`Dolphine wins!`);
} else if (dolphinAvg < koalaAvg && koalaAvg >= 100) {
    console.log(`Koala wins!`);
} else {
    console.log(`Draw game!`);
}

if (dolphinAvg1 > koalaAvg1 && dolphinAvg1 >= 100) {
    console.log(`Dolphine wins!`);
} else if (dolphinAvg1 < koalaAvg1 && koalaAvg1 >= 100) {
    console.log(`Koala wins!`);
} else {
    console.log(`Draw game!`);
}

if (dolphinAvg2 > koalaAvg2 && dolphinAvg2 >= 100) {
    console.log(`Dolphine wins!`);
} else if (dolphinAvg2 < koalaAvg2 && koalaAvg2 >= 100) {
    console.log(`Koala wins!`);
} else {
    console.log(`Draw game!`);
}

// Bonus 2
if (dolphinAvg > koalaAvg && dolphinAvg >= 100) {
    console.log(`Dolphine wins!`);
} else if (dolphinAvg < koalaAvg && koalaAvg >= 100) {
    console.log(`Koala wins!`);
} else if (dolphinAvg === koalaAvg && dolphinAvg >= 100 && koalaAvg >= 100) {
    console.log(`Draw game! and both are winners!`);
} else {
    console.log(`Draw game! but no winners.`);
}

if (dolphinAvg1 > koalaAvg1 && dolphinAvg1 >= 100) {
    console.log(`Dolphine wins!`);
} else if (dolphinAvg1 < koalaAvg1 && koalaAvg1 >= 100) {
    console.log(`Koala wins!`);
} else if (dolphinAvg1 === koalaAvg1 && dolphinAvg1 >= 100 && koalaAvg1 >= 100) {
    console.log(`Draw game! and both are winners!`);
} else {
    console.log(`Draw game! but no winners.`);
}

if (dolphinAvg2 > koalaAvg2 && dolphinAvg2 >= 100) {
    console.log(`Dolphine wins!`);
} else if (dolphinAvg2 < koalaAvg2 && koalaAvg2 >= 100) {
    console.log(`Koala wins!`);
} else if (dolphinAvg2 === koalaAvg2 && dolphinAvg2 >= 100 && koalaAvg2 >= 100) {
    console.log(`Draw game! and both are winners!`);
} else {
    console.log(`Draw game! but no winners.`);
}
*/


/*
// Lecture 26. The Switch Statement
const day = 'tuesday';

switch (day) {
    case 'monday':
        console.log(`It is monday`);
        break;
    case 'tuesday':
        console.log(`It is tuesday`);
        break;
    case 'wednesday':
        console.log(`It is wednesday`);
        break;
    case 'thursday':
        console.log(`It is thursday`);
        break;
    case 'friday':
        console.log(`TGIF`);
        break;
    case 'saturday':
    case 'sunday':
        console.log(`It is weekend`);
        break;
}

// assignment
const language = 'korean';

switch (language) {
    case 'korean':
    case 'chinese':
        console.log('Most number of native speakers!');
        break;
    case 'spanish':
        console.log('2nd');
        break;
    case 'english':
        console.log('3rd');
        break;
    case 'hindi':
        console.log('4th');
        break;
    case 'arabic':
        console.log('5th');
        break;
    default:
        console.log('Great language too!');
}
*/


// Lecture 27. Statements and Expressions

/*
// Lecture 28. The Conditional (Ternary) Operator
const age = 34;
age >= 18 ? console.log(`Adult`) : console.log(`Minor`);

const drink = age >= 18 ? `Adult` : `Minor`;
console.log(drink);
*/


/*
// Coding Challenge #4
const bill = 430;
const tip = bill > 50 && bill < 300 ? bill * 0.15 : bill * 0.2;

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);
*/


