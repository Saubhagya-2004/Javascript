// print hello after 5 times at intervals of 2s
// let id=setInterval(() => {
//     console.log('hello');
// },2000);
// setTimeout(()=>{
//     clearInterval(id);//call id 
// }, 12000);
// console.log(id);
//write an arrow fxn returns squre of n
const squre=(n)=>{
return n*n;
}

console.log(squre(5));
// 01////////////
let arr=[2,3,9,4,1,8];
const average=(arr)=>{
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];

    }
    return sum/arr.length;
}
console.log(average(arr));
// 02//////////even or not\
const even=(n)=>n%2==0;
console.log(even(80));





