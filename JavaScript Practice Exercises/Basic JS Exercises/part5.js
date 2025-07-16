/*
Exercise 1:
-----------
Write a JavaScript function that returns a
passed string with letters in alphabetical
order.

Example string: 'webmaster'
Expected Output: 'abeemrstw'
*/
function sortString(str) {
  const charArray = str.split("");

  charArray.sort();

  const sortedString = charArray.join("");

  return sortedString;
}

console.log(sortString("javascript"));

/*
Exercise 2:
-----------
Write a JavaScript function that accepts a
string as a parameter and counts the number
of vowels within the string.
*/

function countVowels(str) {
  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    if (
      str[i] === "a" ||
      str[i] === "e" ||
      str[i] === "i" ||
      str[i] === "o" ||
      str[i] === "u"
    ) {
      counter++;
    }
  }
  return counter;
}

console.log(countVowels("fooding"));

/*
Exercise 3:
-----------
Write a JavaScript function to convert an
amount to coins.
Example input: 46 and possible coins 25, 10,
5, 2, 1
Output: 25, 10, 10, 1
*/

const countCoins = (money, coins = [25, 10, 5, 2, 1]) => {
  const totalCoins = [];

  for (let i = 0; i < coins.length; i += 1) {
    const thisCoinNum = Math.floor(money / coins[i]); // Berechnet, wie oft die aktuelle Münze (coins[i]) in den verbleibenden money-Betrag passt.
    for (let y = 0; y < thisCoinNum; y += 1) {
      totalCoins.push(coins[i]);
    }
    money -= coins[i] * thisCoinNum;
  }
  return totalCoins;
};

console.log(countCoins(46));

/*
Exercise 4:
-----------
Write a JavaScript function to extract unique
characters from a string.
*/

const getUniqueChars = (str) => [...new Set(str.split(""))];

console.log(getUniqueChars("aaaabbbccc"));

/*
Exercise 5:
-----------
Write a JavaScript function to find the first not
repeated character
Example string: 'abacddbec'
Expected output: 'e'
*/

const getNonRepeatedChars = (str) =>
  str
    .split("")
    .filter(
      (item, index, arr) =>
        arr.filter((arrItem) => arrItem === item).length === 1
    );

console.log(getNonRepeatedChars("abacddbec"));
