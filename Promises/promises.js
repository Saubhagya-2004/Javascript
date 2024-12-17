const promises=new Promise(function(resolve,reject){
    //do an async task
    // db clls,cryptography
    setTimeout(function(){
        console.log('Async task is completed');
        resolve();
        
    },1000);
})
promises.then(function(){
    console.log('promise consumed');
    
})
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Async task2');
        resolve();
        
    },1000);
}).then(function(){
    console.log('Async resolved');
    
})
//2
const promise2=new Promise(function(resolve,reject){
    setTimeout(function(){

        resolve({user:'saubhagya',email:'bank.gmail'});
    },1000)
});
promise2.then(function(result){
    //here result is user
    console.log(result);
    
})
//3
const promise3=new Promise(function(resolve,reject){
    setTimeout(function(){
        // let error=true; //if error true then return else
        let error=false;
        if(!error){
            resolve({username:'chiku',Email:'chiku@gmail. com'})
        }
        else{
            reject('error something went wrong')
        }
    },1000)
});
promise3.then(function(user){
    console.log(user);
    return user.username;//access only username
    //heres username acess .then under
    
}).then((usernae)=>{
    console.log(usernae);
    //this is called channing
    //use .then multiple time  acess upper value here

}).catch(function(errr){
console.log(errr);

})
//4
//async function use
const promise4=new Promise(function(resolve,reject){
    setTimeout(function(){
        // let error=true; //if error true then return else
        let error=true;
        if(!error){
            resolve({username:'chiku',Email:'chiku@gmail. com'})
        }
        else{
            reject('error something went wrong')
        }
    },1000)
});
async function consumed() {
    // if await keyword use without try cath it runs if error not occurs whenever it occurs await keyword give error
    try{
        const response=await promise4
    console.log(response);
    }
    catch(error){
console.log(error);

    }
}
consumed();
// async function getalluser(params) {
//     try {
//         const response=await fetch('https://jsonplaceholder.typicode.con/user');
//         const data=await response.json();
//         console.log(data);
        
//     } catch (error) {
//         console.log(error);
        
//     }  
// }
// getalluser();