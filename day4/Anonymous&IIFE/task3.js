//Using Anonymous Function:
//Sum of all numbers in an array
let numArray = [1, 2, 3, 4, 5];

(function(arr) {
  let sum = arr.reduce(function(acc, num) {
    return acc + num;
  }, 0);

  console.log("Sum:", sum);
})(numArray);
