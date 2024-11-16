const sum=(a,b)=>{
    console.log(a+b);
};
sum(9,2);
const mul=(a,b)=>{
    return a*b;
}
console.log(mul(2,7));
const pow=(m)=>{
for(let i=1;i<=10;i++){
console.log(m*i);
}
}
pow(9);
// implicity return//////
const sub=(a,b)=>(a-b);
// in implicity return we use bracket in place of curly brace
console.log(sub(9,3));

