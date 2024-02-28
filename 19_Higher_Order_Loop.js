// 1. For-of Loop - 
// ["" , "" , ""];
// [{} , {} , {}];

const arr = [1,2,3,4,5]
for(const num of arr)
{
    console.log(num);
}

const greetings = "Hello World!"
for(const greet of greetings)
{
    console.log(`Each char is ${greet}`);
}


// Maps - It is an object that holds key value pairs .

const map = new Map()
map.set('IN' , "India")
map.set("US", "United States")  
console.log(map);

for (const [key , value] of map) {
    console.log(key , ':- ',value);
}

const myObject = {
    'game1' : 'NFS',
    'game2' : 'COD',
    'game3' : 'PUBG',
}

// for (const [key,value] of myObject) {
//     console.log(key + " :- " + value);
// } // myObject is not iteratable so for of loop with above syntax doesn't works for  objects.


// 2. For-in Loop - This loops through all the enumerable properties of an object and returns each property name in turn. 

const myObject1 = {
    'game1' : 'NFS',
    'game2' : 'COD',
    'game3' : 'PUBG',
}
for (const key in myObject1) 
{
    console.log(key+ " :- "+myObject1[key]);
} // In Objects

const programming = ["js" , "rb" , "py" , "java" , "cpp"]
for (const key in programming) 
{
    // console.log(key); // Output - key are coming as numbers because array index starts from zero.
    console.log(programming[key]); // Values  
    //Output 
    // js
    // rb
    // py
    // java
    // cpp
}


// 3. For-each Loop - It can be used on both Array and Objects but it only gives the values not keys.

const program = ["js" , "rb" , "py" , "java" , "cpp"]
program.forEach( function (val) {
    console.log(val);
}) // Since it is a call-back function there is no need of function name . 

const coding = ["js" , "rb" , "py" , "java" , "cpp"]
coding.forEach( (item) => {
    console.log(item);
})// Arrow Functions

function printMe(item){
    console.log(item + " is a good language");
}
coding.forEach(printMe); // Calling a function inside forEach loop


coding.forEach( (item , index ,arr) => {
    console.log(item , index ,arr);
} )

//js 0 [ 'js', 'rb', 'py', 'java', 'cpp' ]
//rb 1 [ 'js', 'rb', 'py', 'java', 'cpp' ]
//py 2 [ 'js', 'rb', 'py', 'java', 'cpp' ]
//java 3 [ 'js', 'rb', 'py', 'java', 'cpp' ]
//cpp 4 [ 'js', 'rb', 'py', 'java', 'cpp' ]


const myCoding = [
    {
        languagename: "javascript",
        languageextension: "js"
    },
    {
        languagename: "java",
        languageextension: "java"
    },
    {
        languagename: "python",
        languageextension: "py "
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageextension);
}) // This is how we loop through values inside an array containing object .


// Filter -  It will return new array with the elements that satisfy the condition provided in filter() method.Whereas, foreach doesn't returns values.

const myNums = [1,2,3,4,5,6,7,8,9,10]
const newNums = myNums.filter( (num) => num > 4)
console.log(newNums); //[ 5,  6, 7, 8,  9, 10] // In this we can access values as we are using parameters to define the condition but if we use a scope we need to give return as it does not return value on its own.

// const myNums1 = [1,2,3,4,5,6,7,8,9,10]
// const newNums1 = myNums.filter( (num) => {
//     num > 4
// })
// console.log(newNums1); //[ ] // Hence we get an empty array as we have not given return statement. 

const myNums1 = [1,2,3,4,5,6,7,8,9,10]
const newNums1 = myNums.filter( (num) => {
    return num > 4
})
console.log(newNums1); //we use a scope we need to give return as it does not return value on its own.

const myNums2 = [1,2,3,4,5,6,7,8,9,10]
const newNums2 = []
myNums2.forEach( (num) => {
    if(num > 4)
    {
        newNums2.push(num)
    }
})
console.log(newNums2);