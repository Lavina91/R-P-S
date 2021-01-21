// settings variables to keep score 
var wins = 0;
var losses = 0;
var ties = 0;

// setting an array to give the computers options to choose 
// INDEX      0    1     2
var choices = ['R', 'P', 'S'];


// function expression that is the main controls of game 
var letsPlay = function() {

 // creating a prompt window to get user's input
var userInput = window.prompt('Do you choose R, P, S ?');
  
// checks user's input and repeats it back 
     if (!userInput) {
         return;
     }
 
  //automatically puts the user input in upper case 
userInput = userInput.toUpperCase

// creating a variable that allows it to grab a random value from the array in var index. 
var getIndex = Math.floor(Math.random()* choices.length);
var  compChoice = choices[getIndex]; 

window.


















}



