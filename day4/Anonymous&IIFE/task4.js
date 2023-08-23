//Anonymous Function:-
//Return all the prime numbers in an array
let numArray = [2, 3, 4, 5, 6, 7, 8, 9, 10];

let isPrime = function(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++)
    if (num % i === 0) return false;
  return true;
};

let primeArray = numArray.filter(function(num) {
  return isPrime(num);
});

console.log("Prime Numbers (Anonymous Function):", primeArray);
