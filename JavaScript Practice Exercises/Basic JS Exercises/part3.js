/*
Exercise 1:
-----------
Write a JavaScript program to find the number of even
digits in a an array of integers
*/

function countEven(arr) {
  let counter = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      counter++;
    }
  }
  return counter;
}

// ODER //

const countEvenNumbers = (arr) => arr.filter((num) => num % 2 === 0).length; // filter erstellt ein neues Array

console.log(countEvenNumbers([1, 2, 3, 4, 5, 6]));
console.log(countEvenNumbers([2, 2, 2, 2, 2, 2]));
console.log(countEvenNumbers([3, 2, 3, 4, 5, 6]));

console.log(countEven([1, 2, 3, 4, 5, 6]));
console.log(countEven([2, 2, 2, 2, 2, 2]));
console.log(countEven([3, 2, 3, 4, 5, 6]));

/*
Exercise 2:
-----------
Write a JavaScript program to find the number of even
values up to a given number
*/

function countEvenUpTo(limit) {
  let count = 0;

  for (let i = 1; i <= limit; i++) {
    if (i % 2 === 0) {
      count++;
    }
  }
  return count;
}

// ODER //

const countEvenNumbersWithLimit = (arr) =>
  arr.filter((num) => num % 2 === 0).length;

const createArrayOfNumbers = (num) => {
  const returnArray = [];
  for (let i = 1; i <= num; i += 1) {
    returnArray.push(i);
  }
  return returnArray;
};

/*
Exercise 3:
-----------
Write a JavaScript program to check whether a given array
of integers is sorted in ascending order
*/

function isAscending(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
}

// ODER //

const isAscending2 = (arr) => {
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i + 1] < arr[i]) return false;
  }
  return true;
};

console.log(isAscending([1, 2, 3, 4, 5]));
console.log(isAscending([1, 3, 2, 4, 5]));
console.log(isAscending([5, 4, 3, 2, 1]));

/*
Exercise 4:
-----------
Write a JavaScript program to get the largest even number
from an array of integers.
*/

function largestEven(arr) {
  let largest = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest && arr[i] % 2 === 0) {
      largest = arr[i];
    }
  }
  return largest;
}

// ODER //

const largestEven2 = (arr) => Math.max(...arr.filter((num) => num % 2 === 0));

console.log(largestEven([1, 2, 3, 33, 5, 6]));

/*
Exercise 5:
-----------
Write a JavaScript program to replace the first digit in a
string (should contains at least digit) with $ character.
*/

replaceFirstDigit = (str) => str.replace(/[0-9]/, "$"); // Es wird nur die erste Ziffer replaced mit einem /g würden alle ziffern replaced werden

console.log(replaceFirstDigit("Abcd1Abcde"));
console.log(replaceFirstDigit("A123Abcde"));
console.log(replaceFirstDigit("A1cd1Abcd1"));
