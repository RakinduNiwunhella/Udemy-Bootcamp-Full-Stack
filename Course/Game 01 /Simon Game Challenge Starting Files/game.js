let gamePattern = [];
let buttonColours =["red","blue","green","yellow"];

function nextSequence(){
    return Math.floor(Math.random() *4)} 
    let randomChosenColour = buttonColours[nextSequence];
    gamePattern.push(randomChosenColour);
    return randomChosenColour;
    
let num = nextSequence();
console.log(num);
console.log(gamePattern);

