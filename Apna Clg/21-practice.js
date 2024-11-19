// check every number is divisible by 10 or not
let num=[10,20,30,40];
let result=num.every((el)=>{
    return el%10==0;
});
console.log(result);
// find minimum number in an array
let digit=[2,7,1,9];
let min=0;
function getmin(digit){
    return digit.reduce((a,b)=>a<b?a:b)
}
let ans=digit.reduce((min,el)=>{
    if(min<el){
        return min;
    }
    else{
        return el;
    }
});
console.log(ans);
console.log(getmin(digit));


