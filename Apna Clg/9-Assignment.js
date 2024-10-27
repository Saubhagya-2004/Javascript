let num=120;
if(num%10==0)
{
console.log('Good');
}
else{
    console.log('Bad');
}
let month=3;
switch(month){
    case 1:
        console.log('january','February','March')
        break;
        case 2:
        console.log('April','May','June');
        break;
        case 3:
        console.log('July','August','September');
        break;
        case 4:
        console.log('October','November','December');
        break;
        default:
            console.log('Invalid');
        
}
let value='Aoldenstring';
if((value[0]==='A' ||(value[0]==='a') && (value.length>5))){
    console.log('golden');
}
else{
    console.log('NoT');
}
let  a=10;
let b=130;
let c=15;
if((a>b)&&(a>c)){
 console.log('a is greater')
}
else if((b>a)&&(b>c)){
console.log('b is greater');
}
else if((c>a)&&(c>b)){
    console.log('C is greater');
}
else if((a==b) || (a==c)){
    console.log('a is equals');
}
