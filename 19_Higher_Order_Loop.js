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


/*********************************************************************/

// Filter , Map , Reduce

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

// More Exercises with Filter
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];
const userBooks = books.filter( (bk) => bk.genre === 'Non-Fiction')
console.log(userBooks);
const userBooks1 = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre ===  "History" 
})
console.log(userBooks1);

const myNumbers = [1,2,3,4,5,6,7,8,9,10]
// const newNumss = myNumbers.map( (num) => num + 10) 
// [
//   11, 12, 13, 14, 15,
//   16, 17, 18, 19, 20
// ]

const newNumss = myNumbers.map((num) => num*10)
                          .map( (num) => num + 1)
                          .filter((num) => num >= 40)

console.log(newNumss);
