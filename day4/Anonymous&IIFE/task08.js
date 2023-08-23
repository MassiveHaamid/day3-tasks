//IIFE:-
//Rotate an array by k times
let originalArray = [1, 2, 3, 4, 5];
let k = 2; // Number of rotations

(function(arr, k) {
  let rotations = k % arr.length;
  let rotatedArray = arr.slice(rotations).concat(arr.slice(0, rotations));
  console.log("Rotated Array:", rotatedArray);
})(originalArray.slice(), k);
