let btn=document.querySelector('button');
let bdy= document.querySelector('body');
// btn.addEventListener('click',function(){
//     bdy.style.backgroundColor='hotpink';
//     btn.style.display='none';
// });
console.log(btn);
btn.onmouseenter=function(){
    // alert('You entered');
};
btn.addEventListener('click',function(){
    let h3=document.querySelector('h3');
    let random=getrandomcolor();
    h3.innerText=random;
    let div=document.querySelector('div');
   div.style.backgroundColor=random;
    console.log('updated');

});
function getrandomcolor(){
    let red=Math.floor(Math.random()*255);
    let green=Math.floor(Math.random()*255);
    let blue=Math.floor(Math.random()*255);
    let color=`rgb(${red},${green},${blue})`;
    return color;
    
}
let p=document.querySelector('p');
let flag=0;
p.addEventListener('click',function(){
    if(flag==0){
        p.style.color='aqua';
        p.style.backgroundColor='black';
        flag++;
    }
    else{
        p.style.color='black';
        p.style.backgroundColor='aliceblue';
        flag--;
    }
})
let form1=document.querySelector('form');
form1.addEventListener('submit',function(event){
    event.preventDefault();//use to not redirect to another page no action taken
    // let input=document.querySelector('input');
    // console.log(input.value);
    let user=document.querySelector('#user');
    let password=this.elements[1];//form1.elements[1] this means acess form1
    console.log(user.value);
    console.log(password.value);
});

form1.elements[2].style.backgroundColor='greenyellow';
