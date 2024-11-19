let num=[1,7,9,3];
let ans=num.reduce((res,el)=>{
    return res+el;
});
console.log(ans);
// Find maximun in normal code
let arr=[1,8,9,10,3,2,5];
let max=0;
for(let i=0;i<arr.length;i++){
    if(arr[i]>max){
        max=arr[i];
    }
};
console.log(max);
// Find maximun number in reduce method
let digit=[2,4,5,0,2,8,9,1000,800];
let maximun=digit.reduce((max,el)=>{
    if(el>max){
        return el;
    }
    else{
        return max;
    }
});
console.log(maximun);
