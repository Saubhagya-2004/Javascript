const student={
    name:'Chiku',
    Rollno:220124143,
    city:'BBSR'
};
console.log(student);
// Twitter post
const post={
    name:'@Saubhagya',
    content:'Reels',
    Likes:52,
    Reposts:2,
    tags:['@Rec','@student']
};
console.log(post);
// Get value
console.log(post.name);
console.log(post['Likes']);
let prop='Reposts';
console.log(post[prop]);
// console.log(post.prop);
// it comes undefined not work
console.log(post.tags[0]);
// symbol////
const mysym=Symbol('Key1');
const person={
    Name:'chiku',
    Roll:'32',
    [mysym]:'value'
};
// console.log(person[mysym]);
console.log(typeof mysym);
// write keys and key value
console.log(Object.keys(post));
console.log(Object.values(post));


