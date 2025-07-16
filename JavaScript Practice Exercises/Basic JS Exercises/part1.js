/* Exercise 1.
----------
Write a JavaScript program to check two
numbers and return true if one of the number
is 100 or if the sum of the two numbers is
100 
*/

function check100(num1, num2) {
  if (num1 === 100 || num2 === 100 || num1 + num2 === 100) {
    return true;
  } else {
    return false;
  }
}

/* Exercise 2:
-----------
Write a JavaScript program to get the
extension of a filename.
*/

const getFileExtension = (str) => str.slice(str.lastIndexOf("."));

// Die Funktion .slice hat einen Startindex, dieser wird hier durch lastIndexOf bestimmt, welche den Index des letzten im String enthaltenen "." zurückgibt

/* Exercise 3:
------------
Write a JavaScript program to replace every
character in a given string with the character
following it in the alphabet
*/

function replaceWithFollowing(str) {
  str.split(""); // splittet den String in ein Array
  str.map((char) => String.fromCharCode(char.charCodeAt(0) + 1)); // .map erlaubt das Array zu mutieren / fromCharCode wandelt aus der Unicode Nummer zurück zum Buchstaben um / charCodeAt(0) gibt den charcode des Buchstaben zurück und wird dann mit 1 für den nächsten Erhöht => Das wird für jeden Char bzw. jeden Index im Array gemacht
  str.join(""); // Fügt wieder zu einem String zusammen
}

/* Exercise 4:
-----------
Write a JavaScript program to get the current
date.
Expected Output :
mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy
*/

function getDate(date = new Date()) {
  const day = date.getDate();
  const month = date.getMonth() + 1; // Gibt 1 Monat vorher zurück
  const year = date.getFullYear();

  return `${day}-${month}-${year}, ${day}/${month}/${year} `;
}

console.log(getDate());

/* Exercise 5:
-----------
Write a JavaScript program to create a new
string adding "New!" in front of a given string.
If the given string begins with "New!" already
then return the original string.
*/

function addNew(str) {
  if (!str.includes("New!")) {
    return "New! " + str;
  } else {
    return str;
  }
}
console.log(addNew("New! Car"));
