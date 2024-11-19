let num=[1,2,3,4];
let result=num.every((el)=>{
    return el%2==0
});
// if one element return false then it false
console.log(result);
let number=[2,4,8];
let results=number.every((el)=>{
    return el%2==0
});
console.log(results);
// if every element return true then it true like and
// some////////////////////////////////////////
let digit=[2,4,9,1];
let ans=digit.some((el)=>(el%2==0));
console.log(ans);
// if one element true then its true like or condition

