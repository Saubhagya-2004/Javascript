let nums=[1,3,9,3];
const squre=nums.map((num)=>{
    return num*num;
});
console.log(squre);
let sum=squre.reduce((total,el)=>{
    return total+el;
});
console.log(sum);
let average=Math.floor(sum/nums.length);
console.log(average);
//02
let x=[2,3,9,6];
const sums=x.map((x)=>{
    return x+5;
});
console.log(sums);
//03
let strings=["adam","bob","catlyn","donald","eve"];
console.log(strings.map((string)=>string.toUpperCase()));
//04
const double=(arr,...arr1)=>[
    ...arr,...arr1.map((v)=>v*2)
];
console.log(double([1,2,3],4,8,9));
//merge
const merge=(arg1,arg2)=>{
    return[...arg1,...arg2];

};
console.log(merge([1,2,9,0],[0,1,2,3,4]));

