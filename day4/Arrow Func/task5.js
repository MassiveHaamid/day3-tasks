//Arrow Function:-
//Return all the palindromes in an array
let stringArray = ["radar", "hello", "level", "world", "deified", "example", "malayalam", "1001", "01010"];

let isPalindrome = (str) => str === str.split("").reverse().join("");

let palindromeArray = stringArray.filter((str) => isPalindrome(str));

console.log("Palindromes:", palindromeArray);
