/*
Exercise 1:
-----------
Given a year, report if it is a leap year.
*/

function isLeapYear(year) {
  if (year % 4 === 0) {
    return true;
  } else {
    return false;
  }
}

// ODER //
const isLeapYear2 = (year) => year % 4 === 0;

console.log(isLeapYear(2014));
console.log(isLeapYear(2016));
console.log(isLeapYear(2013));

/*
Exercise 2:
-----------
Write a JavaScript program to compare two objects
to determine if the first one contains the same
properties as the second one (which may also have
additional properties)
*/

const objA = { a: 1, b: 2, c: 1 };
const objB = { a: 1, b: 1, c: 1 };
const objC = { a: 1, b: 1, d: 1 };

const objectsEqual = (a, b) => {
  Object.keys(a).every((key) => b[key]); // Object.keys gibt die keys eines Objekts als Array zurück // .every Prüft, ob jeder Schlüssel aus Objekt 'a' in Objekt 'b' existiert und dort einen "truthy" Wert hat.
};

console.log(objectsEqual(objA, objB));
console.log(objectsEqual(objA, objC));
console.log(objectsEqual(objB, objC));

/*
Exercise 3:
-----------
Write a JavaScript program to convert a
comma-separated values (CSV) string to a 2D
array. A new line indicates a new row in the
array.

Example:
--------
abc,def,ghi
jkl,mno,pqr
stu,vwx,yza
*/

const parseCSV = (csvString) =>
  csvString.split("\n").map((row) => row.split(",")); // String wird an jeder Stelle, an der ein Zeilenumbruch vorkommt geteilt/ .map wird auf das neu erstellte Array angewendet, sie durchläuft jede Zeile (row) / das zweite .split teilt den einen String in zwei einzelne

const str = `abc,def,ghi
jkl,mno,pqr
stu,vwx,yza`;

console.log(parseCSV(str));

/*
Exercise 4:
-----------
Write a JavaScript program to generate a
random hexadecimal color code.
*/
const getRandomHexNumber = () => Math.floor(Math.random() * 16).toString(16); // gibt eine gerundete Zahl aus, .toString ist ein Trick der eine Zahl direkt in Hexadezimal umwandelt

function getRandomHexColor() {
  for (let i = 0; i < 6; i++) {
    color += getRandomHexNumber();
  }

  return color;
}

/*
Exercise 5:
-----------
Write a JavaScript function that returns true
if the provided predicate function returns
true for all elements in a collection, false
otherwise.
*/

const isEveryElem = (arr, fn) => {
  for (let i = 0; i < arr.length; i += 1) {
    if (!fn(arr[i])) {
      return false;
    }
  }
  return true;
};

// ODER //

// Prüft für jede Ziffer aus dem Array, ob diese größer als 0/3 ist
console.log([1, 2, 3, 4, 5].every((x) => x > 0));
console.log([1, 2, 3, 4, 5].every((x) => x > 3));
