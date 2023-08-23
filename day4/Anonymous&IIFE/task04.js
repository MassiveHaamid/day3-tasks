//IIFE:-
//Return all the prime numbers in an array 
let numArray = [2, 3, 4, 5, 6, 7, 8, 9, 10];

(function(arr) {
  let isPrime = function(num) {
    return num <= 1 ? false : Array.from({ length: Math.floor(Math.sqrt(num)) + 1 }, (_, i) => i + 2).every(divisor => num % divisor !== 0);
  };

  let primeArray = arr.filter(function(num) {
    return isPrime(num);
  });

  console.log("Prime Numbers:", primeArray);
})(numArray);
