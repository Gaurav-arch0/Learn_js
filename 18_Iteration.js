// FOR Loop - Repeat a block of code for as long as the condition is true.
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