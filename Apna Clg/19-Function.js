function hello(){
    console.log('Hi chiku');
}
// Calling function
function Name(){
    console.log('Hi i am chiku');
    console.log('I am an engineer');
    
}
console.log(Name());
console.log(hello());
function printf(){
    for(let i=1;i<=5;i++){
        console.log(i);
    }

}
console.log(printf());
function Adult(){
    let age=18;
    if(age>=19){
        console.log('You are adult');
    }
    else{
        console.log('Adult Not');
    }
}
console.log(Adult());

// function with argument
function Name(name,age){
    console.log(`${name}'is ${age} years old`)
}
Name('chiku',23);
function sum(a,b){
    console.log(a+b);   
}
sum(1,9);

 