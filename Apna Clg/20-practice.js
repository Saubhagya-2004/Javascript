// print hello after 5 times at intervals of 2s
let id=setInterval(() => {
    console.log('hello');
},2000);
setTimeout(()=>{
    clearInterval(id);//call id 
}, 12000);
console.log(id);
//write an arrow fxn returns squre of n
const squre=(n)=>{
return n*n;
}

console.log(squre(5));


