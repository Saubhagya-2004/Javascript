let a=document.querySelector('#container');
let b=document.getElementById('heart');
let c=document.getElementById('unheart');
a.addEventListener('dblclick', function() {
    b.style.transform='translate(-50%,-50%) scale(1)';

    a.style.opacity='1';
    setTimeout(function(){
        b.style.transform='translate(-50%,-50%) scale(0)';
    },1000);
    setTimeout(function()  {
        c.style.color='red';
    }, 190);
});
c.addEventListener('click',function(){
    c.style.color='white';
})