//Anonymous Function:-
//Return all the palindromes in an array
let stringArray = ["radar", "hello", "level", "world", "deified", "example"];

let isPalindrome = function(str) {
  return str === str.split("").reverse().join("");
};

let palindromeArray = stringArray.filter(function(str) {
  return isPalindrome(str);
});

console.log("Palindromes:", palindromeArray);
