// 1.  FOR Loop - Repeat a block of code for as long as the condition is true.
// The loop will execute at least once, even if the condition is false.

for(let i = 0 ; i<= 10 ; i++)
{
    const element = i;
    console.log(element);
}
for(let i = 0 ; i<= 10 ; i++)
{
    const element = i;
    if(element == 5){
        console.log("5 is the best no.");
    }
    // console.log(element);
}

for(let i = 0 ; i <= 10 ; i++)
{
    console.log(`Outer Loop : ${i}`);
    for(let j=0 ; j <= 10 ; j++)
    //console.log(`Inner Loop value ${j} in Inner Loop ${i}`);
    console.log(`${i} *  ${j}  = ${i*j} `);
}

let myarr = ["flash", "batman" , "superman"];
console.log(myarr.length);
for(let k = 0 ; k < myarr.length ; k++){
    const ele = myarr[k];
    console.log(ele);
}

// Break Statement - Used to stop execution of a loop prematurely.
// It transfers the control out of the loop.

// for(let a = 1; a <=20; a++)
// {
//     if(a == 5 ){
//         console.log(`Detected 5`);
//         break;
//     }
//     console.log(`Value of  A: ${a}`);
// }


// Continue Statement - Used to skip the current iteration of a loop and continue with the next iteration.It does not affect the execution order of other iterations.

for(let a = 1; a <=20; a++)
 {
     if(a == 5 ){
         console.log(`Detected 5`);
         continue;
     }
     console.log(`value of  a: ${a}`);
}

// 2. While Loop - Repeats a block of code as long as the condition remains true.

// Syntax 
// while (condition) {
//    // code block to be executed     
// }

let b = 0 ;
while(b <= 10)
{
    console.log(`Value of b is ${b}`);
    b+=2;
}

let myarr1 = ["flash" , "batman" , "superman"]
let arr = 0;
while(arr < myarr1.length)
{
    console.log(`Value is ${myarr1[arr]}`);
    arr++;
}


// 3. DO-WHILE Loop - It executes the block of code at least once and then continues executing it as long as the condition remains. It is a exit control loop.

 let score = 1;
 do{
    console.log(`Score is ${score}`);
    score++;
 }
 while(score <= 10) 