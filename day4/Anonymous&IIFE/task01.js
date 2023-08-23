//IIFE :-
//Print odd numbers in an array
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

(() => {
  console.log("Odd Numbers:");
  arr.forEach((num) => {
    num % 2 !== 0 ? console.log(num) : null;
  });
})();
