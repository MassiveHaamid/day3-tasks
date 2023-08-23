//Anonymous Function
//Remove duplicates from an array

let originalArray = [1, 2, 2, 3, 4, 4, 5, 6, 6, 7];

let uniqueArray = function(arr) {
  return arr.filter(function(item, index) {
    return arr.indexOf(item) === index;
  });
};

let result = uniqueArray(originalArray);
console.log("Unique Array:", result);
