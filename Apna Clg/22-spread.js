let arr=[1,2,34,0.-1,5];
console.log(...arr);
// here ... is spread value
console.log(Math.min(...arr));
console.log(Math.max(...arr));
// we can use spread operator(...) on string
let str='saubhagya baliarsingh';
console.log(...str);
// With array Literals
let arry=[1,2,3,0,8,3];
let newarr=[...arry];//assign arry value to new but still arrry value same
newarr.push(8);
console.log(newarr);
let stri='hello';
let newstr=[...stri];
newstr.unshift('hi');
console.log(newstr);




