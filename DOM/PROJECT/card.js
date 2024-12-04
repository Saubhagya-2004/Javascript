let a=document.querySelector('h3');
let b=document.querySelector('#add');
let obj=0;
a.addEventListener('click',function(){
    if(obj==0){
        a.innerHTML='Developer';
        a.style.color='aqua';
        obj++;
    }
    else{
        a.innerHTML='Full Stack WebDeveloper';
        a.style.color='red';
        obj--
    }
});
b.addEventListener('click',function(){
    if(obj==0){
        b.innerHTML='ADD FRIEND';
        obj++;
    }
    else{
        b.innerHTML='Cancel Request -->'
        obj--;
    }
});

