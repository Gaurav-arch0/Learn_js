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

//Array_Prototypes .push() -  method allows you to add one or more elements to the end of an array.
//The push() method does not change the length property of an Array object. It returns the new length of the object.
       
// const array1 = [1,2,3,4,5];
// array1.push(6);
// console.log(array1);       //[ 1, 2, 3, 4, 5, 6 ]

//Array_Prototypes .pop() - method removes the last element of the array , no need to give  any argument.
        
// const array1 = [1,2,3,4,5];
// array1.pop();     
// console.log(array1);        //[ 1, 2, 3, 4 ]  

// Array_Prototypes .unshift() - method adds elements at the beginning of an array and returns new length.
// const array1 = [1,2,3,4,5];
// array1.unshift(8);
// console.log(array1);       //[8, 1, 2, 3, 4, 5]


// Array_Prototypes .shift() - method removes elements at the beginning of an array and returns new length.
// const array1 = [8,1,2,3,4];
// array1.shift();
// console.log(array1);        //[ 1, 2, 3, 4 ]


//  Array Prototypes .indexOf() - returns the index of particular element.

//  Array  Prototypes .lastIndexOf() - returns the index of the last occurrence of a specified value

//  Array Prototypes .includes() - checks if array includes a certain value among its entries, returns true or false.

//  Array Prototypes .join() -  joins all elements of an array into a string.
// const arr=['I','love','to','code']
// console.log(arr.join('-'));     // I-love-to-code

// Array Prototypes .typeOf() - Gives the data typeof  that array.

//  Array Prototypes .sort() method sorts the elements in ascending order by default.