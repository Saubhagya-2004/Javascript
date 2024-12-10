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
//giving style
box1.style.backgroundColor='pink';
box1.style.border='2px solid aqua';
box1.appendChild(newp);
let btn =document.createElement('button');
btn.innerText='click me';
box1.appendChild(btn);
let select=document.querySelector('#description');
// select.prepend(newp);
  //insert adjecent
select.insertAdjacentElement('afterbegin',btn)
select.insertAdjacentElement('afterend',btn)
// select.insertAdjacentElement('afterbegin',btn)
// select.insertAdjacentElement('afterbegin',btn)
