// Javascript Dates represent a single moment in time in a platform independent format.
// Javascript object encapsulate an integral number that represents millisecondssince the midnight at 1st January 1970 UTC .
// Later on when we have Temporal as a  standard, the Date object will be replaced with it.      
// The main difference between Date and Temporal is that Temporal has more features like TimeZone API which can make working with dates easier. 
// Date is an object in javascript.

let mydate = new Date();
console.log(mydate.toString()); // thu nov 30 2023 16:18:11 gmt+0530 (Indian standard time)

console.log(mydate.toDateString()); // thu nov 30 2023

console.log(mydate.toISOString());// 2023-11-30t10:51:32.691z

console.log(mydate.toJSON());// 2023-11-30t10:51:32.691z

console.log(mydate.toLocaleString());// 30/11/2023, 4:21:32 pm

// These are some functions of js to get date and time in different formats in js .

let myCreatedDate = new Date(2023,0,23);
console.log(myCreatedDate.toDateString()); // Mon Jan 23 2023 ~ Here we understand that month is indexed with 0 only when writing in array  , If we want to print date structure as("YYYY-MM-DD"/"MM-DD-YYYY") month should be 01.

let mynewDate = new Date(2023,0,23,5,3);// ~ (Year,Month,Date,Hours,Minutes)// 23/1/2023, 5:03:00 am ~ (Year,Month,Date,Hours,Minutes)
console.log(mynewDate.toLocaleString()); // 23/1/2023, 5:03:00 am Custom Date and Time .

let mynwDate = new Date(2023,0,23,5,3);
console.log(mynwDate.toLocaleString('en-In'));//23/1/2023, 5:03:00 am

let indate = new Date(2023,11,1);
console.log(indate.toDateString());// Fri Dec 01 2023

let bigtwo = new Date();
console.log(bigtwo.getDate());//4 

let myCreatedDate1 = new Date("01-14-2023");
let myTimeStamp = Date.now();   
console.log(myTimeStamp);// 1637999777019
console.log(myCreatedDate1.getTime());

console.log(Math.floor(Date.now()/1000)); // Convert in Seconds.