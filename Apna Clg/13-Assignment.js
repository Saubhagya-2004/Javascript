let num=[7,9,0,-2];
let n=3;
let arr=num.slice(0,n);
console.log(arr);
let digit=[1,2,3,4];
console.log(digit.splice(1));
let str='chiku';
if(str===''){
    console.log('String is blank');
}
else{
    console.log('It is not empty');
}

if(str[1]==str[1].toLowerCase()){
    console.log('Yes it lowyer');
}
else{
    console.log('yes it is upper');
}
//Check it is array or not
let obj=['hello','jay',1,3,56,54];
let item='helo';
if(obj.indexOf(item)!=-1){
    console.log('Element exist an array');
}
else{
    console.log('Element doesnot exist as an array');
}
