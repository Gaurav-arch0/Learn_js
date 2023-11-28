let score = "33";
console.log(typeof score);

let value = Number(score);
console.log(typeof value);
// This is how we can do explicit conversion of Datatype .

let big = "33abc"
console.log(big);
console.log(typeof big);

let valu = Number(big);
console.log(valu);
// This will print Nan which is Nan(Not a Number) which is also a type .
// Incase of null it will print (0) .
// Incase of undefined it will again print Nan(Not a Number) .

// Incase of String it will again give Nan.

console.log(typeof valu);

let small = false;
console.log(small);
console.log(Number(small));
// Incase of boolean it will 1 in true and 0 in false .
console.log(typeof small);


let num = 33;
let negnum = -num;
console.log(negnum);
