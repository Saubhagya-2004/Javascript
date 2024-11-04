const digit=[1,2,3,4,5,6,8];
digit.push(9);
digit.splice(6,0,7);
console.log(digit);
//nested
let nums=[[2,3],[3,5],[6,8],[7,9]];
console.log(nums[2][0]);
nums.splice(1,0,[2,0]);
console.log(nums);