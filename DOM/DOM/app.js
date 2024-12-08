let image=document.getElementsByClassName("oldImg");
let spi=document.querySelector('#mainImg');
for(let i=0;i<image.length;i++){
    image[i].src='spiderman_img.png';
    console.log(`value of image ${i} is changed`);
    
};
let lov=0
spi.addEventListener('click',function(){
    spi.src='creation_1.png';
})