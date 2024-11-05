let arr=[1,2,3,4,5,7,2,3];
let num=2;
for(let i=0;i<arr.length;i++){
    if(arr[i]==num){
        arr.splice(i,1);
        
    }
    
}
console.log(arr);
let number=[1,3,7,9,8];
let i=1;
for(;i<=number.length;i++){
}
console.log(i);
//3
let vary=[1,8,0,6,4];
let sum=0;
for(i=0;i<vary.length;i++){
    sum=sum+vary[i];
}
console.log(sum);
//4
let mul=[1,9,7,5,8,4];
let num1=1;
for(i=1;i<mul.length;i++){

    num1=num1*mul[i];
}
console.log(num1);
//factorial
let n=7;
let fact=1;
 fact=fact*n;
console.log(fact);
//Largest
let x=[1,8,9,0,6,7,2,8];
let large=0;
for(i=0;i<x.length;i++){
    if(x[i]>large){
        large=x[i];
    }
}
console.log(large);


