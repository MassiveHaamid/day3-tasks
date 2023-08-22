// https://docs.google.com/document/d/1TPk3wqxDFi64WV-6hJOkYEzBaAYxNvZ4T9hRJGgvFjw/edit?usp=sharing

let obj1 = { name: "Person 1", age: 5 };
let obj2 = { age: 5, name: "Person 1" };

// Sort the properties of the objects
let sortedObj1 = {};
Object.keys(obj1).sort().forEach(key => {
    sortedObj1[key] = obj1[key];
});

let sortedObj2 = {};
Object.keys(obj2).sort().forEach(key => {
    sortedObj2[key] = obj2[key];
});

// Convert the sorted objects to JSON strings
let jsonString1 = JSON.stringify(sortedObj1);
let jsonString2 = JSON.stringify(sortedObj2);

// Compare the JSON strings
if (jsonString1 === jsonString2) {
    console.log("The objects are equal.");
} else {
    console.log("The objects are not equal.");
}
