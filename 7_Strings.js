// Strings are objects not arrays.
const name = "Gaurav" //Here the object is being called at the behind the scene .
const age  = 23
console.log(name + age );

const gamename = new String ('Gaurav')
console.log(gamename);//While here we call it as a string object .
console.log(gamename[0]);//This is how we acccess the key value in a string .
console.log(gamename.__proto__);//We get an object which contains value and can be seen on the browser .
console.log(gamename.length);//Function to find length of the string.
console.log(gamename.toUpperCase());//Function to convert string to uppercase.
// There are many prototypes used in String .



// String interpolation is a programming language feature that allows you to embed expressions within string literals . 
// Instead of concatenating strings and variables or using complex formatting methods,
// string interpolation provides a more concise and readable way to embed variables or expressions directly into a string .

console.log(`Hello my name is ${name} and my age is ${age} .`);

// This is a better way to concatenate strings so use backticking.