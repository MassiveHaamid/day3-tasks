// IIFE:-
//Convert all the strings to title caps in a string array
let stringArray = ["hello", "world", "javascript", "example"];

(function(arr) {
  let titleCapsArray = arr.map(function(str) {
    return str
      .split(" ")
      .map(function(word) {
        return word[0].toUpperCase() + word.slice(1).toLowerCase();
      })
      .join(" ");
  });

  console.log(titleCapsArray);
})(stringArray);
