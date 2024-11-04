let fruit=['mango','Apple','Banana','Pinaapple','Litchi'];
fruit.push('Orange');
for(i=0;i<fruit.length;i++){
    console.log(i,fruit[i]);
}
for(i=fruit.length;i>=0;i--){
    console.log(i,fruit[i]);
}
let hero=[['Ironman','Lockyin','Thor','Spidermen'],['Wakanda','Hulk','doctor']];
for(i=0;i<hero.length;i++){
    for(j=0;j<hero[i].length;j++){
        console.log(`${j}`,hero[i][j]);
    }
}
let student=[['Aman',95],['Rock',65],['Chiku',98],['Sam',66]];
for(i=0;i<student.length;i++){
    for(j=0;j<student[i].length;j++){
        console.log(student[i][j]);
        // i intialize to 0 and j=0 then i=0;j=0<2,j=1<2 here student [i] is index of inner array [aman 95] so its 2 so on [00][01][10][11][20][21]
    }
}