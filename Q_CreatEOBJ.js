// To Convert two arrays into a object.


let arr1 = [1,2,3,4];
let arr2 = ["Amit" , "Somya" , "sia" , "diljit"];
function ConvertToObj(a , b){
    if(a.length != b.length || a.length == 0 || b.length == 0)
    {
    return null;
}
let obj = {};
a.forEach((k, i) => 
{ obj[k] = b[i] })
return obj;
}
console.log(ConvertToObj(arr1 , arr2));
