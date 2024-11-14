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