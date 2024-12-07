let a=document.querySelector('#main');
let b=document.querySelector('.cursor');
a.addEventListener('mousemove',function(dets){
    b.style.left=dets.x+'px';
    b.style.top=dets.y+'px';
})

