const score = 400;
console.log(score);//400

const balance = new Number(100);
console.log(balance);//[Number:100]
console.log(balance.toString());//100 ~ String
console.log(balance.toFixed(2));//100.00
console.log(balance.toFixed(1));//100.0
// .toFixed can be used while building E-Commerce application when GST and other calculations are done as it give a precision value which is not needed .


const Newnum = 23.8966;
console.log(Newnum.toPrecision(3));//23.9
const Num1 = 123.8966;
console.log(Num1.toPrecision(4));//123.9
//.toPrecision gives us value in string and prcises the value according to the value passed.

const hundreds = 1000000;
console.log(hundreds.toLocaleString());//1,000,000 ~ We get the values according to the Us standard number system . 
console.log(hundreds.toLocaleString('en-IN'));//10,00,000 ~ We get the values according to the Indian standard number system . 

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++  MATHS ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ 

console.log(Math.PI);//3.141592653589793
console.log(Math.abs(-4));//4
console.log(Math.round(4.889));//5
console.log(Math.ceil(4.889));//5
console.log(Math.floor(4.889));//5
console.log(Math.min(4,3,6,8));//3
console.log(Math.max(4,3,6,8));//8

console.log(Math.random());//0.9374378926278548 ~ It gives value between 0 and 1 and is always a random value .
console.log((Math.random()*10)+1);//7.249694265402295 
console.log(Math.floor(Math.random()*10)+1);//10

const min = 1;
const max = 6;
console.log(Math.floor(Math.random()*(max-min+1))+min);//17 ~ This is how we get values between a range . Used in a dice game .






