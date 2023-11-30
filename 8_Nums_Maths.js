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