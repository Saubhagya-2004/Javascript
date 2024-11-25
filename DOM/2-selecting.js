let a=document.querySelectorAll('h1');
// console.log(a);
//print like node
// print like array element in a single line
a.forEach(function(e){
console.log(e);
});
//acess by class name and id name in queryselector
let h=document.getElementsByClassName('box');
console.log(h);
let y=document.getElementById('box1');
console.log(y);
//change name in html in js
let ch=document.querySelector('h1')
ch.innerHTML='Hello ji Namamste';
//but in innerhtml if we try
ch.innerHTML='<h1>hi<h1>'
//it takes h1 tag we solve this problem and
ch.textContent='<h1>hi<h1>'