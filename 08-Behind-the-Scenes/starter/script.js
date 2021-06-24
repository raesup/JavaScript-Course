'use strict';

// var is function scope
// let, const are block scope

function calcAge(birthYear) {
  const age = 2021 - birthYear;

  function printAge() {
    const output = `${firstName}, You are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      const str = `Oh, and you're a millenial, ${firstName}`;
      var millenial = true;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    //var is a function scope variable.
    console.log(millenial);

    // Error occurs when use strict mode
    // console.log(add(2, 3));
  }

  printAge();

  return age;
}

const firstName = 'Raesup';
calcAge(1986);
