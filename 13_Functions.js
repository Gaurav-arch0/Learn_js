// Functions are basically a set of tasks  that can be performed.
// They take input and provide output in the form of values or objects.

function saymyname(){
console.log("G");
console.log("A");
console.log("U");
console.log("R");
console.log("A");
console.log("V");
}
saymyname() //In this line saymyname is the reference of the function name and paranthesis denotes the excecution.

function addTwoNumbers(num1,num2){
    console.log(num1+num2);
}
addTwoNumbers(5,7)  //5,7 are arguments that are passed in function . 

function addTwoNumbers1(n1,n2){
    let result = n1 + n2 ;
    console.log("Gaurav"); //   So we get Gaurav as Output.
    return result;  //return statement also prints the value but we use console.log for debugging purpose only   //return keyword is used to send data back   
    //return keyword is used to send back the value from a function . 
    console.log(result);  // Unreachable code as the part of code that is excecuted is written before the return statement. So nothing is printed here.
     

}
const result = addTwoNumbers1(3,5);
console.log("Result:", result );


//Function declaration - It is used to declare a function without specifying its name but it will automatically get assigned with the value of the function'
// let x = function() {return "Hello World!"}; 
// console.log(x());


function loginUserMessage(userName = "Guest"){
    if (userName === undefined){
        console.log("Pleas enter a Username");
        return;
    }
    return `${userName}, just Logged In`;
}
console.log(loginUserMessage());

//Rest Operator - It allows us to store the remaining number of elements in an array or object into a new variable. Its denotation is same as the spread operator i.e (...num1) three dots.

function calculateCartPrice(...num1){
    return num1;
}
console.log(calculateCartPrice(200 , 500 , 600));