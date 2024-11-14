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