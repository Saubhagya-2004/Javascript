const student={
    name:'John',
    age:12,
    math:89,
    eng:43,
    sci:21,
    getavg(){
        let avg=(this.math+this.eng+this.sci)/3;
        console.log(avg);
    }
}
console.log(student.getavg());
//////////////////////Example//////////
function showThis() {
    console.log(this);//In browsers, this is the `window` object
  }
