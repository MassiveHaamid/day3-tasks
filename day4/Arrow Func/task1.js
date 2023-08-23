//Using Arrow Function:-
//Print odd numbers in an array
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let printOddNumbers = (arr) => {
  console.log("Odd Numbers:");
  arr.forEach((num) => {
    if (num % 2 !== 0) {
      console.log(num);
    }
  });
};

printOddNumbers(arr);
