let json= {
    "fact": "Ailurophile is the word cat lovers are officially called.",
    "length": 57
};
// https://dog.ceo/api/breeds/image/random  valid api
console.log(json);
// let val=JSON.parse(json);
// console.log(val);
let student={name:'saubhagya',age:'23',Qualification:'Btech cse'};
console.log(JSON.stringify(student));
//convert it into valid json data
let user='https://catfact.ninja/fact';
fetch(user)
.then((res)=>{
console.log(res.json());

})
.catch((err)=>{
    console.log('error',err);
    
})
