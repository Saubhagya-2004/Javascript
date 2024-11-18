let arr=[{
    name:'chiku',
    age:21,
},{
    name:'charlie',
    age:33,
},{
    name:'chai',
    age:21,
}];
let num=arr.map((el)=>{
return el.age+10;
});
console.log(num);
// print double value
let number=[1,2,9,6];
let double=number.map((el)=>{
    return el*el;
});
console.log(double);

