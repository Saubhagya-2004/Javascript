function sum(a,b){
    console.log(a+b);
    return a+b;
    // After return statement code will not exicute
    console.log('hi');
}
console.log(sum(sum(2,4),9));
function adult(age){
    if(age<=18){
        return adult;
    }
    else{
        return 'Not adult';
    }
}
console.log(adult(20));


///////////////////////////////////////////////////////////////////////////
// circle area circumference diameter
let radius=[2,3,4,5];
const area=function(radius){
    return Math.floor(Math.PI*radius*radius);
};
const circumference=function(radius){
    return  Math.floor(2 * Math.PI * radius);
};
const diameter=function(radius){
    return Math.floor(2*radius);
};
const calculate=function(radius,logic){
    const output=[];
    for(let i=0;i<radius.length;i++){
        output.push(logic(radius[i]));
    }
    return output;
}
console.log(calculate(radius,area));
console.log(calculate(radius,circumference));
console.log(calculate(radius,diameter));

