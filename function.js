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
     if (
         (userInput === 'R') ||
         (userInput === 'P') ||
         (userInput === 'S') 
         ) {
         window.alert('You chose ' + userInput + ' !');
     }

     // repeats prompt screen if user chose wrong answer 
     else {
         window.alert('Wrong Answer !')
         var userInput = window.prompt('Do you choose R, P, S ?');
          
     }
 
  //automatically puts the user input in upper case 
userInput = userInput.toUpperCase();

// creating a variable that allows it to grab a random value from the array in var index. 
var getIndex = Math.floor(Math.random()* choices.length);
var  compChoice = choices[getIndex]; 

// creates an alert window to display computers choice 
window.alert('Computer chose ' + compChoice + ' !');


// if statement to check if it is a tie
if(userInput === compChoice) {
    ties++;
    window.alert('Its a tie !');
}

// else if statement to check if user won
else if (
          (userInput === 'R' && compChoice ==='S') ||
          (userInput === 'P' && compChoice === 'R')||
          (userInput === 'S' && compChoice === 'P')  
        ) {
             wins++;  
            window.alert("You've Won !");                                                   
    }

// else statement to see if computer won 
else {
        losses++
        window.alert("You've Lost !");
    }


// creates window to display stats
window.alert(
    'Stats:\nWins:' + wins + '\nLosses:' + losses + '\nTies:' + ties
);

//creates a window to ask the user if they want to play again 
var playAnotherRound = window.confirm('Do you want to play another round ?');

// stops if user chooses cancel
if(! playAnotherRound){
    return;
}
// or they can play again 
else {
    letsPlay();
  }
}

// calls function to run 1 time 
letsPlay()


