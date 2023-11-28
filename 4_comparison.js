console.log(null == 0);  //=>false
console.log(null <= 0);  //=>false
console.log(null > 0);   //=>true

// // In this we do not know that if we null is converted into Nan or 0 .

console.log(undefined == 0);  //=>false
console.log(undefined > 0);   //=>false
console.log(undefined <= 0 ); //=>false

// In this also we do not know how the comparison operator converts the undefined while comparing .

console.log("2" > 1);         //=>true

//Equality Operator
console.log(2 == 2);
//This does not compares the data type during the comparison

console.log("2" === 2); 
// This checks in strict mode so it also compares the data type hence it gives the output false .