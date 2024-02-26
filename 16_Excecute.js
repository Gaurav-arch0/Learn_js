// Javascript Excecution Context

// As we know Js is a single-threaded language , it means that at any time only one block of code can be executed by the interpreter. // The execution context is a runtime environment that contains// The execution context is a runtime environment in which 

// 1. Global Execution context {} - Global Excecution Context which is different for each browser window/node/dino.We can access using this keyword.

// 2. Function/Functional Excecution context - When a function is called, an execution context for that function is created and pushed onto the call stack .

// 3. Eval Execution Context - It is used to execute the code passed as a string argument to the eval() function.

// There are two phases  of execution context in JavaScript: 
/*
1. Creation phase - This is the first phase where an ExecutionContext object is created by JavaScript runtime. It involves creating variables, functions . 
2. Excecution phase - In this phase, the code is executed and values are assigned to variables declared using let or const keywords.
*/

// When the excecution phase reaches the function line it creates a different (memory phase and excecution phase) known as variable enviornment again and then deletes it and we again reach back to the excecution phase we were working on.


// Javascript Call Stack (Call Stack) - A call stack is a part of the runtime environment that stores and manages function calls. It also includes Global Excecution phase.
// Here we follow LIFO structure that is Last In First Out .


function One(){
    console.log(One);
}

function Two(){
    console.log(Two);
}

function Three(){
    console.log(Three);
}
// Call Stack
//One
//Two
//Three




function One(){
    console.log(One);
    Two();
}

function Two(){
    console.log(Two);
    Three();
}

function Three(){
    console.log(Three);
}
// Call Stack
//One
//Two
//Three
//Two
//Three
//Three
