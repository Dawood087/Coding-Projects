/*
Exercise 1:
-----------
Write a JavaScript program to create a new string
from a given string taking the first 3 characters
and the last 3 characters of a string and adding
them together. The string length must be 3 or more,
if not, the original string is returned.
*/

function addTogether(str) {
  if (str.length < 3) {
    return str;
  } else {
    let first3 = str.slice(0, 3);
    let last3 = str.slice(str.length - 3);
    return first3 + last3;
  }
}

// ODER //

const makeNewString = (str) =>
  str.length < 3 ? str : str.slice(0, 3) + str.slice(-3);

console.log(addTogether("Wettessen"));

/*
Exercise 2:
-----------
Write a JavaScript program to extract the first half of a
string of even length.
*/

function extractEven(str) {
  if (str.length % 2 != 0) {
    return;
  } else {
    return str.slice(0, str.length / 2);
  }
}

// ODER //

const firstHalf = (str) => str.slice(0, str.length / 2);

/*
Exercise 3:
-----------
Write a JavaScript program to concatenate two strings
except their first character.
*/

function concatStrings(str1, str2) {
  return str1.slice(1) + str2.slice(1);
}

// ODER //

const concatenate = (str1, str2) => {
  str.slice(1) + str.slice(1);
};

console.log(concatStrings("Hallo", "Welt"));

/*
Exercise 4:
-----------
Given two values, write a JavaScript program to find out
which one is nearest to 100
*/

function closestTo100(val1, val2) {
  if (100 - val1 < 100 - val2) {
    return val1;
  } else {
    return val2;
  }
}

// ODER //

const closetTo100 = (a, b) => (100 - a < 100 - b ? a : b);

console.log(closestTo100(99, 84));

/*
Exercise 5:
-----------
Write a JavaScript program to check a given string contains
2 to 4 occurrences of a specified character.
*/

function containsCharacters(str, char) {
  let occurrences = 0;

  let checkString = str.split("");
  for (let i = 0; i < checkString.length; i++) {
    if (checkString[i].includes(char)) {
      occurrences += 1;
    }
  }
  if (occurrences >= 2 && occurrences <= 4) {
    return true;
  } else {
    return false;
  }
}

// ODER //
const countChars = (str, char) =>
  str.split("").filter((ch) => ch === char).length;

const contains2To4 = (str, char) =>
  countChars(str, char) >= 2 && countChars(str, char) <= 4;

console.log(containsCharacters("banana", "a"));
console.log(containsCharacters("hello", "l"));

console.log(contains2To4("programming", "g"));
console.log(contains2To4("developer", "e"));
