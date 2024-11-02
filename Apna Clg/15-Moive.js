let favorite='Avatar';
let guess =prompt('Enter your favorite moive name');
while((guess!=favorite)&&(guess!='quit')){
     prompt('Wrong guess  :Enter your favorite moive name');
}
if(guess==favorite){
    alert('Congratulation!!!');
}
else{
    console.log('You quit');
}