//Using Arrow Function:-
//Convert all the strings to title caps in a string array
let stringArray = ["hello", "world", "javascript", "example"];

let titleCapsArray = stringArray.map((str) =>
  str
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
    .join(" ")
);

console.log(titleCapsArray);
