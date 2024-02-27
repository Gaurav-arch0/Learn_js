// 1.  IF-Statement

//IF  statement is used to execute a block of code if the given condition evaluates to true. It allows us to perform different actions based on whether or not// The if statement is used to conditionally execute . 
// We use operators to check this condition (< , > , <= , >= , == , != , === , !==)

// Syntax
// if (condition == true)
// {
//     return true;
// }
// else 
// {
//     return false;    
// }

if(2==2)
{
    console.log(true);
}

const score = 200;
if(score > 100)
{
    const power = "fly";
    console.log(`User power : ${power}`);
} 
// console.log(`User power : ${power}`); - We cannot use power outside as it is not declared in global scope , we can only use it inside the block .But to use it outside the scope there was a a var data type which lets us access the variable outside scope.

// Short-hand Notation - Here we cosider values in implicit scope.
const balance  = 1000;
if(balance > 500)  console.log("You have enough money");
// if(balance > 500)  console.log("You have enough money") , console.log("You are rich");  - Dont use comma notation not a good practice .

const balance1 = 1000;
if(balance1 < 500)
{
    console.log("Not Enough Money!");
}
else if(balance1 < 750)
{
    console.log("You have some money");
}
else if(balance1 < 900)
{   
    console.log("You have more money");
}
else{
    console.log("You are rich");
}

// To check multiple conditions in a if - such as creating realtime shopping websites . 

const UserLoggedIn = true;
const DebitCard = false;
if(UserLoggedIn || DebitCard) // Logical OR Operator
{
    console.log("Access Granted"); 
}
else(UserLoggedIn &&  DebitCard) // Logical AND Operator
{
    console.log("Access Denied");
}



// 2.  Switch-Statement - It is used to perform different actions based on the value of an expression or variable.

// Syntax
// switch(key)
// {
//     case Value: Statement1, Statement2, ... ;

//         break;

//         default:
//             break;
// }


const month = 3;
switch(month){
    case 1 : 
    console.log( "January" );
    break;
    case 2 : 
    console.log( "February" );
    break;
    case 3 : 
    console.log( "March" );
    break;
    case 4 : 
    console.log( "April" );
    break;
    case 5 : 
    console.log( "May" );
    break;
    default :
    console.log("Invalid Month");
    break;
}
// Break statement is used to break the control flow as soon as it reaches a particular point in code(matches the key).


// 3.  Truthy or Falsy values - In JavaScript, a value is considered truthy if it evaluates to true in a Boolean context.We assume that there is a truthy or falsy value . 

const userEmail = "abc@gmail.com";
if(userEmail)
{
    console.log("Got user Email");
}
else{
    console.log("Don't have user email");
}

// Falsy values : false, 0, -0, BigInt On, null, undefined, Nan
// Truthy value : anything except falsy values (objects, array , etc.)
//                "0",'false', "" , [] , {} , function(){}

if(userEmail.length === 0)
{
    console.log("Array is empty.");
}

const emptyObject = {}
if(Object.keys(emptyObject).length === 0)
{
    console.log("Empty Object") ;
}

// false == 0;   // true
// false == '';  // true
// 0 == '';      // true


// 4. Nullish Coalescing Operartor (??): null undefined - if left side is null or undefined then right will be assigned to that variable otherwise left one. 
// Fallback for handling errors.
// Different than ternary operator.

let val ;
let val1;
let val2;
val = 5 ?? 10 ;
console.log(val);
val1 = null ?? 10;
console.log(val1);
val2 = undefined ?? 15;
console.log(val2);


// 5. Ternary Operator - If condition is true then execute this part and return the result of expression before colon . 
// Syntax - Condition ? true : false

const teaPrice = 100;
teaPrice >= 100 ? console.log("Less than 100") : console.log("More than 100");