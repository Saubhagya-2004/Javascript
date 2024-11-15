function outerf(){
    let x=9;
    let y=3;
    function inner(){
        const a=21;
        console.log(x);
        console.log(y);
        
    }
    // console.log(a); a is not accessible from inner
    inner();
}
outerf();
get();
function get(){
    let x=30;
    console.log(x);
}
