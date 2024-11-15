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
