const student={
    name:'john',
    age:this,//global scope----window default object
    grade:90,
    getname:function(){
        console.log(this);//in function it obj.function means student.getname
        return this.name;
        
    },
    getnums:()=>{
        console.log(this);//but in arrow fxn parrent this is arrow fxn this same lexical scope obj.fxn-->here obj=window
        return this.age;
        
    },
    getinfo1:function(){
        setTimeout(()=>{
            console.log(this);  //student  bcz arrow fxn here parrent is getonfo1 fxn so student obj print
        },2000);
    },
    getinfo2:function(){
        setTimeout(function(){//parrent default window obj
            console.log(this);
            
        },2000);
    },

};
console.log(student.getname());
console.log(student.getnums());//default object of parrent
console.log(student.getinfo1());
console.log(getinfo2());



