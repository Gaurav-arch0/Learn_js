const accountId  = 14452;
let emailId = "gauravahuja@yahoo.com";
var accountPassword = "Jaunpur";

// accountId = 2;
// (Shortcut for commenting is Ctrl + /);

/*
We should not use var now in javascript as javascript doesn't understand block scope & functional scope
so if u change the value of a variable outside the scope also it changes as a whole so use let and const .

In Javascript if u just declare a variable and not initialize it returns undefined .
*/

console.log(accountId);     
console.log(emailId);
console.log(accountPassword); 
console.table([accountId , emailId , accountPassword]);//stand-alone js is when we don't need any HTML to run a js file .
