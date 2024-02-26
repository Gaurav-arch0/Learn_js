// Global AND Local Scopes


// let a = 10;
// const b = 20;
// var c = 30;
// console.log(a,b,c); // 10 20 30

{} // It is the way to denote a scope that is  not associated with any variable declaration or function expression.

if(true){
    let a = 10;
    const b = 20;
    var c = 30;
}// Local scope : Whatever is written inside is in the blockscope and outside it is defined as global scope.

//Global scope : 
// console.log(a);// Error as a is defined using let and cannot be accessed outside the blockscope.
// console.log(b);// Error as a is defined using const and cannot be accessed outside the blockscope.
console.log(c);//  Output: 30 As c is defined using var which can be accessed outside the blockscope.

//Nested Scope

function One(){
    const UserName = "Lucas"

    function Two(){
        const Website = "YouTube"
        console.log(UserName);
    }
    //console.log(Website);
    Two();
}
One();

console.log(addOne(5))
function addOne(num){
    return num + 1
}

// addTwo(5);
const addTwo = function(num){
    return num + 2;
}

// The above example shows that the addOne() function is printed  correctly because of lexical scoping . But when we try to print addTwo() it doesn't works as in the addOne we have directly declared a function whereas in addTwo is held in a variable. Here we start the concept of hoisting context where we cannot access the function before its declarartion .

const user = {
    UserName : "Alias",
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.UserName} , Welcome to the website`); // When we are trying to access a parameter inside an object in same scope we use this keyword .
        console.log(this);
    }
}

user.welcomeMessage()
user.UserName = "Lucy";
user.welcomeMessage()

console.log(this); // {}   // Overhere the global object is an empty object whereas in browser global object referes to window.

function chai(){
    let UserName = "x";
    console.log(this.UserName); // this context doesn't works with functions but in objects.
}
chai()

// Arrow Functions - They are shorter compared to normal functions. They have only one expression so they always return that value.

let CODE = () => {
    let UserName = "x";
    console.log(this.UserName);
}
CODE()


// Basic Syntax for Arrow Functions - () => {}

const add = (a , b) => {
    return a+b ;
} // If we use curly braces we need to write return.
console.log(add(3,4));

// Implicit Return  - If there is only one statement inside the arrow function it will automatically return that value.

const add1 = (a , b) =>  a+b ;
const add2 = (a , b) =>  (a+b) ; // If we use paranthesis we do not need to write return.
console.log(add(3,4)); 

