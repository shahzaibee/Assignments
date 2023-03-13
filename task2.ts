// 2- Task: Create an Array Manipulation Program

// · Use array methods to perform the following manipulations:

// o Append a string to the end of the array

let fruits = ["apple", "banana", "cherry", "date","elderberry"];

 fruits.push("Mango");
 console.log(fruits);
// o Prepend a string to the beginning of the array
 fruits.unshift("Mango");
 console.log(fruits);
// o Remove a string from a specific index in the array and replace it with another string
 fruits.splice(2,1, "lemon","kiwi")
 console.log(fruits);
// · Display the array before and after each manipulation to the user as output.
