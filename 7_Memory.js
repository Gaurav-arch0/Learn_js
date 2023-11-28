// Two types of memory in javascript are heap and stack memory .
// Stack is used with Primitive data types . Whenever a stack memory is used you get a copy of a variable . 
// Heap is used with Non-Primitive data types . Whenever a stack memory is used you get a reference of a variable .

let mychannelname = "Gaurav07";

let anothername = mychannelname;
anothername = "Gaurav"

console.log(anothername);//Gaurav
console.log(mychannelname);//Gaurav07

// This shows that in stack copy is created and that is referenced . 

let user1 = {
    email : "google.com",
    upiId : "user@ybl",
}
let user2 = user1 
user2.email = "gaurav@07"

console.log(user1.email); //gaurav@07
console.log(user2.email); //gaurav@07

// This shows that in heap it creates reference of the original variable . 