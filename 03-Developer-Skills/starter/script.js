// Remember, we're gonna use strict mode in all scripts now!
'use strict';

/*
const xyzabc = 23;

const calcAge = birthYear => 2021 - birthYear;

console.log('test');
console.log(calcAge(1986));
*/

/*
// Using Google, StackOverflow and MDN

// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// What is temp amplitude? Between the highest and the lowest temp
// How to compute max and min temp?
// What is a sensor error and what to do?

// 2) Breaking up into sub-problems
// How to ignore sensor error
// Find max and min temp
// Compute max - min and return the value

const calcTempAmplitude = temps => {
  let highest = temps[0];
  let lowest = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const currentTemp = temps[i];
    if (typeof currentTemp !== 'string') {
      if (currentTemp > highest) {
        highest = currentTemp;
      }

      if (currentTemp < lowest) {
        lowest = currentTemp;
      }
    } else {
      continue;
    }
  }
  return highest - lowest;
};

console.log(calcTempAmplitude(temperatures));
*/

/*
// PROBLEM 2:
// Function should now receive 2 arrays of temps

// 1) Understanding the problem
// - With 2 arrays, should we implement functionality twice? NO! Just merge two arrays

// 2) Breaking up into sub-problems
// - Merge 2 arrays

const testArray = [21, 32];
const testArray1 = [1, 3];

const testArray3 = testArray.concat(testArray1);
console.log(testArray3);

const calcTempAmplitude1 = (temps1, temps2) => {
  const mergedArray = temps1.concat(temps2);
  let highest = mergedArray[0];
  let lowest = mergedArray[0];

  for (let i = 0; i < mergedArray.length; i++) {
    const currentTemp = mergedArray[i];
    if (typeof currentTemp !== 'string') {
      if (currentTemp > highest) {
        highest = currentTemp;
      }

      if (currentTemp < lowest) {
        lowest = currentTemp;
      }
    } else {
      continue;
    }
  }
  return highest - lowest;
};

console.log(calcTempAmplitude1(testArray, testArray1));
*/

/*
const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    value: prompt('Degrees celsius: '),
  };

  console.table(measurement);

  // Error below
  //   const kelvin = measurement.value + 273;

  const kelvin = Number(measurement.value) + 273;
  return kelvin;
};

console.log(measureKelvin());
*/

/*
const calcTempAmplitudeBug = (temps1, temps2) => {
  const mergedArray = temps1.concat(temps2);
  let highest = 0;
  let lowest = 0;

  for (let i = 0; i < mergedArray.length; i++) {
    const currentTemp = mergedArray[i];
    if (typeof currentTemp !== 'string') {
      debugger;
      if (currentTemp > highest) {
        highest = currentTemp;
      }

      if (currentTemp < lowest) {
        lowest = currentTemp;
      }
    } else {
      continue;
    }
  }
  return highest - lowest;
};

console.log(calcTempAmplitudeBug([1, 2, 3], [4, 5, 6]));
*/

/*
// Coding Challenge #1

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

const printForecast = arr => {
  let text = '...';
  for (let i = 0; i < arr.length; i++) {
    text += `${arr[i]}\u00B0C in ${i + 1} days...`;
  }
  return text;
};

console.log(printForecast(data1));
console.log(printForecast(data2));
*/
