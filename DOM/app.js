let a=document.querySelector('h1');
console.log(a);
//changing HTML
a.innerHTML='Hello world';
//changing css
a.style.color='red';
a.style.backgroundColor='black ';
a.style.boxShadow='3px 4px aqua'
//Event listener
a.addEventListener('click',function(){
    //here click is predefined event
    a.innerHTML='Welcome to my world';
    a.style.color='yellow';
    a.style.backgroundColor='hotpink';
    

});
let bulb=document.querySelector('.bulb');
let btn=document.querySelector('button');
let flag=0;
btn.addEventListener('click',function(){
    // here btn.event fxn use to action taken so we click or unclick this event
    //if we writr bulb.enent then we can click on circle
    if(flag==0){
        bulb.style.backgroundColor='yellow'
        btn.style.borderRadius='5px'
        flag++;
    }
    else{
        bulb.style.backgroundColor='red'
        btn.style.borderRadius='12px'
        bulb.style.borderRadius='55%'
        flag--;
    }
});