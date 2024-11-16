const Name=[2,3,4,2,0,8,9];
let num=2;
function getelement(Name,num){
    for(let i=0;i<Name.length;i++){
        if(Name[i]>num){
            console.log(Name[i]);
        }
    }
}
getelement(Name,num);
// 02////////////////////////////////
let str='a,b,v,a,m,b,d,g,g,k,l,k';
function element(str){
    let ans= '';
    let elements = str.split(',');// Split the string by commas
for(i=0;i<elements.length;i++){
let curchar=elements[i];
if(ans.indexOf(curchar)===-1){
    ans+=curchar;
}
}
return ans;


}
console.log(element(str));
// 03
let country=['Australia','Germany','United states of america'];
function longest(country){
    let ansidx=0;
    for(let i=0;i<country.length;i++){
        let anslen=country[ansidx].length; // Length of the current longest name
        let curcuntery=country[i].length;// Length of the current country name
        if(curcuntery>anslen){
            ansidx=i;
        }
    }
    return country[ansidx];

}
console.log(longest(country));
// 04///////
let stri='apnacollege';
function find(stri){
    let count=0;
    for(let i=0;i<stri.length;i++){
        if(stri.charAt(i)==='a'|| stri.charAt(i)==='e'||stri.charAt(i)==='i'||stri.charAt(i)==='o'||stri.charAt(i)==='u'){
            count++;
        }
    }
    return count;
}
console.log(find(stri));
// 05////////////
let start=100;
let end=200;
function found(start,end){
    let diff=end-start;
    let ans=Math.floor(Math.random()*diff)+start;
    return ans;
    
}
console.log(found(start,end));
