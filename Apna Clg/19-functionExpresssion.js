const sum=function(a,b){
    return a+b;
}
console.log(sum(1,3));
// High order expression
function multiplegreet(func,n){
    for(let i=1;i<=n;i++){
        func();
    }
};
let greet=function(){
    console.log('hello');
}
multiplegreet(greet,2);
// High order return
function oddeventest(request){
    if(request==='odd'){
        let odd=function(n){
            console.log(!(n%2==0));
        }
        odd(9);
    }
    else if(request==='even'){
        let even=function(n){
            console.log(n%2==0);
            
        }
        even(1);
    }
    else{
        console.log('Wrong output');
    }
    
   
};
oddeventest('even');
oddeventest('odd');