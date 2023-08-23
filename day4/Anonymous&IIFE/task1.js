//Anonymouse Function :-
//Print odd numbers in an array
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

(function(arr) {
  console.log("Odd Numbers:");
  arr.forEach(function(num) {
    if (num % 2 !== 0) {
      console.log(num);
    }
  });
})(arr);

