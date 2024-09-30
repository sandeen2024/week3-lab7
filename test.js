//Exercise 1: Calculating the Sum of Numbers in an Array
let sum = 0;
const numbers = [65, 44, 12, 4];
function addNumberToSum(item) {
  sum += item;
}
numbers.forEach(addNumberToSum);
console.log("Sum of numbers:", sum);


//Exercise 2: Logging Each Element of an Array
const fruits = ["apple", "orange", "cherry"];
function logFruit(fruit) {
  console.log(fruit);
}
fruits.forEach(logFruit);


//Exercise 3: Logging Each Element of an Array with an Anonymous Function
const array1 = ['a', 'b', 'c'];
array1.forEach(function (element) {
  console.log(element);
});


//Exercise 4: Adding 10 to Each Element of an Array.   *numbers variable changed into numbers2 in order to remove repeat word error*
const numbers2 = [1, 2, 3, 4, 5];
numbers2.forEach(function (num, index, arr) {
  arr[index] = num + 10;
});

console.log(numbers);


//Exercise 5: Reversing Strings in an Array
const strings = ["program", "world", "javascript"];
strings.forEach(function (str, index, arr) {
  arr[index] = str.split('').reverse().join('');
});
console.log(strings);


//Exercise 6: Filtering Out Odd Numbers from an Array. *numbers variable changed into numbers1 in order to remove repeat word error*
const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = [];
numbers1.forEach(function (num) {
  if (num % 2 === 0) {
    evenNumbers.push(num);
  }
});
console.log(evenNumbers);


//Exercise 7: Converting Celsius to Fahrenheit
const celsiusTemperatures = [0, 10, 20, 30, 40];
celsiusTemperatures.forEach(function (celsius, index, arr) {
  arr[index] = (celsius * 9/5) + 32;
});
console.log(celsiusTemperatures);


//Exercise 8: Capitalizing Each Element of an Array
const words = ["apple", "banana", "cherry"];
words.forEach(function (word, index, arr) {
  arr[index] = word.charAt(0).toUpperCase() + word.slice(1);
});
console.log(words);


//Exercise 9: Finding the Maximum Number in an Array.  *numbers variable changed into numbers3 in order to remove repeat word error*
const numbers3 = [10, 20, 5, 30, 15];
let maxNumber = numbers3[0];
numbers3.forEach(function (num) {
  if (num > maxNumber) {
    maxNumber = num;
  }
});
console.log("Maximum number:", maxNumber);


//Exercise 10: Creating HTML List Items
const names = ["John", "Jane", "Bob", "Alice"];
const listItems = [];
names.forEach(function (name) {
  listItems.push("<li>" + name + "</li>");
});
console.log(listItems.join(""));

//Exercise 11: Counting Occurrences of Each Letter in a String
const sentence = "The quick brown fox jumps over the lazy dog";
const letterCounts = {};
const letters = sentence.split('');
letters.forEach(function (letter) {
  if (letter !== ' ') {
    letter = letter.toLowerCase();
    letterCounts[letter] = (letterCounts[letter] || 0) + 1;
  }
});
console.log(letterCounts);