let arr=[1,2,9,8];
// function sum(...arr){
//     for(let i=0;i<arr.length;i++){
//         console.log('you gave us '+arr[i]);
        
//     }
// };
// sum(...arr);
//using Rest
function sum(...arr){
    return arr.reduce((Max,el)=>Max+el);
}
console.log(sum(...arr));
// here ...arr=rest
function min(...arr){
    return arr.reduce((min,el)=>{
        if(min<el){
            return min;
        }
        else{
            return el;
        }
    });
}
console.log(min(...arr));
