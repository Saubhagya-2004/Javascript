let url='https://catfact.ninja/fact';
let btn=document.querySelector('button');
btn.addEventListener('click',async()=>{
    //async fxn call here
        let fact=await getdata();
        //await keyword used here whenever getdata fxn not resolved
        console.log(fact);
        let h=document.querySelector('h1');
        h.innerText=fact;aaaaaaaasssfff1234444
        
    }
)
async function getdata() {
    try{
        let res=await axios.get(url);
        return res.data.fact;
        
    }
    catch(err){
console.log(err);

    }
}