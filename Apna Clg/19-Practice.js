function Name(){
    console.log('Twinkle, twinkle, little star,');
    console.log('How I wonder what you are!');
    console.log('Up above the world so high,');
    console.log('Like a diamond in the sky.');
    
}
console.log(Name());
function dice(){
    let num=Math.floor(Math.random()*6)+1;
    console.log(num);
}
console.log(dice());
// Find average of three number
function num(a,b,c){
    const average= Math.floor((a+b+c)/3);
    console.log(average);
    
}
num(5,10,4);
// print a number table
function Number(a){
    for(let i=a;i<=a*10;i+=a){
        console.log(i);
    }

}
Number(2);
// return sum of the number 1 to n
function num(n){
    let sum=0;
    for(let i=1;i<=n;i++){
        sum+=i;
        }
        return sum;
}
console.log(num(10));
// Concat all the string in an array
let str=['hi','hlw','Bye','hi'];
function get(str){
    let result='';
    for(let i=0;i<str.length;i++){
        result+=str[i];
    }
    return result;
}
console.log(get(str));