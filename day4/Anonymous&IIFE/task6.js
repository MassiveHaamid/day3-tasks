//Anonymous function:-
//Return median of two sorted arrays of the same size.

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let findMedian = function(arr1, arr2) {
  let combinedArray = arr1.concat(arr2).sort((a, b) => a - b);
  let length = combinedArray.length;

  if (length % 2 === 0) {
    let middleIndex1 = length / 2 - 1;
    let middleIndex2 = length / 2;
    return (combinedArray[middleIndex1] + combinedArray[middleIndex2]) / 2;
  } else {
    let middleIndex = Math.floor(length / 2);
    return combinedArray[middleIndex];
  }
};

let median = findMedian(arr1, arr2);
console.log("Median:", median);
