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