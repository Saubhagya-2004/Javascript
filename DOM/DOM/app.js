let image=document.querySelectorAll(".oldImg");
let spi=document.querySelector('#mainImg');
// for(let i=0;i<image.length;i++){
//     image[i].src='spiderman_img.png';
//     console.log(`value of image ${i} is changed`);
    
// };
let lov=0
spi.addEventListener('click',function(){
    spi.src='creation_1.png';
})

    // image.setAttribute('src','spiderman_img.png');
    //style
let box=document.querySelectorAll('.box a');
for(link of box){
    link.style.color='hotpink';
}
//create new element
let newp=document.createElement('p');
newp.innerText='Hi i am new p';
let body=document.querySelector('body');
body.appendChild(newp);
let box1=document.querySelector('.box');
box1.appendChild(newp);
let btn =document.createElement('button');
btn.innerText='click me';
box1.appendChild(btn);