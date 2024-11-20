let names=['Aman','chiku','Rajesh','winz0','hulk'];
let [winner,runnerup,...other]=names;
console.log(winner);
console.log(other);
// here ...other basically use in rest concept take nuktiple value and give output into single
//with objects
let student={
    name:'saubhagya',
    age:23,
    place:'paradeep',
    username:'chiku@23',
    password:'asnjs',
};
const{username:user,password,city='mumbai'}=student;
console.log(city);
// still print city but not change in student object
//if u want to change then
// console.log(student.city='mumbai');
console.log(user);
console.log(student);
console.log(password);



