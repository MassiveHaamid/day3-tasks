//IIFE:-
//Return all the palindromes in an array
let stringArray = ["radar", "hello", "level", "world", "deified", "example"];

(function(arr) {
    let isPalindrome = (str) => str === str.split("").reverse().join("");
  
    let palindromeArray = arr.filter((str) => isPalindrome(str));
  
    console.log("Palindromes:", palindromeArray);
  })(stringArray);
  