//Array_ Prototypes .at() - instances at particular index

// const array1 = [5,10,20,15,60];
// let index = 2;
// console.log(` ${index}    ${array1.at(index)}`);    // 2    20
// index = -2;          //Negative integers count back from the last item of the array.
// console.log(`${index}    ${array1.at(index)}`);    //-2    15


//Array_Prototypes  .concat() - instances is used to merge two or more arrays 

// const array1 = [5,10,15,20,25];
// const array2 = [30,35,40,45,50];
// const array3 = array1.concat(array2);
// console.log(array3);     //[5, 10, 15, 20, 25, 30, 35, 40, 45, 50]

//Array_Prototypes .copyWithin() - instances are used to create shallow copies of array to another location in the same array and returns array without modifying its length.

// const array1 = ['a','b','c','d','e','f'];
// console.log(array1.copyWithin(0,3,4));//[ 'd', 'b', 'c', 'd', 'e', 'f' ]
// console.log(array1.copyWithin(1,3));//[ 'd', 'd', 'e', 'f', 'e', 'f' ]

//Array_Prototypes .every() - instances tests whether all the elements in the array pass the test provided by the function.

// const isBelowThreshhold = (currentvalue) => currentvalue < 40;
// const array1 = [5,10,15,20,25];
// console.log(array1.every(isBelowThreshhold)) ;   //true