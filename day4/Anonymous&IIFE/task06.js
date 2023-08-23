//IIFE:-
//Return median of two sorted arrays of the same size.

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

(function(arr1, arr2) {
  let combinedArray = arr1.concat(arr2).sort((a, b) => a - b);
  let length = combinedArray.length;
  
  let median = length % 2 === 0
    ? (combinedArray[length / 2 - 1] + combinedArray[length / 2]) / 2
    : combinedArray[Math.floor(length / 2)];

  console.log("Median (IIFE):", median);
})(arr1, arr2);
