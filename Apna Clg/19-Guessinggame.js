const max=prompt('Enter your maximun number');
const random=Math.floor(Math.random()*max)+1;
let guess=prompt('Please enter your guess');
while(true){
    if(guess=='quit'){
        alert('User quit');
        break;
    }
     if(guess==random){
        alert('Congrationtts!! You are correct Your guess is ' +random);
        break;

    }
    else if(guess<random){
       guess=prompt('Your guess is too small !! please try again');
    }
    else{
        guess=prompt('Your guess is too large !! please try again');
    }
}