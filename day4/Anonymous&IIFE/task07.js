//IIFE:-
//Remove duplicates from an array
let originalArray = [1, 2, 2, 3, 4, 4, 5, 6, 6, 7];

(function(arr) {
  let uniqueArray = arr.filter(function(item, index) {
    return arr.indexOf(item) === index;
  });

  console.log("Unique Array (IIFE):", uniqueArray);
})(originalArray);
