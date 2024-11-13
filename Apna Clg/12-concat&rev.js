let car=['Audi','Bmw','Benz','Ferrari'];
let bike=['Hero','Honda','Yamaha','Bajaj'];
console.log(car.concat(bike));//concat merge two arrays
console.log(bike.concat(car));
console.log(car.reverse());//reverse of whole array
const total=Object.assign({} ,car,bike);
console.log(total);

