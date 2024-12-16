let creat=document.querySelector('h1');
function changecolor(color,delay,nextcolor){
    setTimeout(()=>{
        creat.style.color=color;
        if(nextcolor)nextcolor();
        reset();
    },delay);
}
changecolor('red',1000);
changecolor('pink',2000,()=>{
changecolor('aqua',2000)
});
//here use call back hell
function reset(){
    setTimeout(()=>{

        creat.style.color='black';
},4000);
}