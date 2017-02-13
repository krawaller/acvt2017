
var randomNumber = Math.floor(Math.random()*10)+1;

var answer = prompt("What is your name?");
alert("Welcome " + answer + " \nLet's play");
var counter = 0;

while(counter < 3){
  counter++;
  var guess = parseInt(prompt("Enter your guess"));

  if(isNaN(guess)){
    alert("Invalid input, try again.");
  }

  if (guess === randomNumber){
    alert("Correct!");
    break;
  }
  else if(guess < randomNumber){
    alert("Your guess is to low, try again!")
  }
  else if(guess > randomNumber){
    alert("Your guess is to high, try again!")
  }
}
