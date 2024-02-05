// There are two ways to declare an object as a literal and as a constructor.

// 1) Declare the object using curly braces {} with key-value pairs representing properties of the object:
// const personLiteral = {name:"John", age:30};
// console.log(personLiteral);                // Output: { name: 'John', age: 30 } The value in objects are processed as Key Value pairs.

// 2) Create an object by calling a function with the "new" keyword, which acts like a constructor for that function. The function is called with the "this" variable set
// 2) Create an empty object, then add properties to it by chaining method calls to the object:
// const personConstructor = new Object();   //This is what we called Object constructor and use singleton in this.                  

const mysym = Symbol("key1")
const JSUser = {
    name : "GAURAV",
    "full name" : "GAURAV AHUJA",
    age : 18,
    [mysym] : "mykey1",
    email : "gaurav@gmail.com",
};
// These are the two ways to access an object and in the first one the .accesses value as string but in the second we need to access it as string.
console.log(JSUser.email);
console.log(JSUser["email"]);

// To access full name we have no way other than square notation .
console.log(JSUser["full name"]);

console.log(JSUser[mysym]); // For Symbol data type which is a primitive data type we have to use square notations else we will not be able to get output as symbol datatype.

// To change the value of a  object in JavaScript you can use dot notation or square notation.
JSUser.email =  "ahujagaurav97@gmail.com";
console.log(JSUser.email);

// To freeze the object we apply freeze on object and pass the object name as parameter.
// Object.freeze(JSUser);
// JSUser.email = "ahuja@gmail.com"; //Here we  notice that the value is unchanged as the  Object is frozen.
// console.log(JSUser);

// Functions inside an object ,functions are considered as first citizen type in js and we can treat them like variables.
JSUser.greeting = function(){
    console.log("Hello Js User");
} 
JSUser.greetingTwo = function(){   
    console.log(`Hi ${this.name}`);// We can also use template literals for string interpolation.
} 
console.log(JSUser.greeting());
console.log(JSUser.greetingTwo());

//Here we discussed about Object Literals in the next module we will work on Object Constructor or Singleton.


