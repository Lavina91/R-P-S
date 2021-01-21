// settings variables to keep score 
var wins = 0;
var losses = 0;
var ties = 0;

// setting an array to give the computers options to choose 
// INDEX      0    1     2
var index = ['R', 'P', 'S',];


// function expression that is the main controls of game 
var letsPlay = function (){

 // creating a prompt window to get user's input
var userInput = window.prompt('Do you choose R, P, S ?');
//    if (userInput === 'R'){
//     return 'You chose rock !';
//   } 
//    else if (userInput === 'P'){
//      return 'You chose paper !';
//   }
//     else if (userInput === 'S'){
//       return 'You chose scissor !';
//   }
//     else {
//     return 'Please choose again !';
//   }
 
}
// creating a variable that allows it to grab a random value 
     // from the array in var index 
var compInput = Math.floor(Math.random()* index.length);

