var again='y';
while (again == 'y') {
var randomNumber = Math.floor(Math.random()*10)+1;
var guess = parseInt(prompt("Guess nr 1 of 3. Enter your guess (pst, right answer is " + randomNumber +")"));
var n = 0;
while(randomNumber!=guess && n<2){
var guess = parseInt(prompt("Wrong! Guess nr " + (n+2) + " of 3. Enter new guess "));
n++;
}
if(n<2){
alert("You did it! The right number was " + randomNumber);
break;
}
else {
  //alert("You are out of guesses.");
  var again = prompt("Alert you are out of guesses. Would you like to play again (y/n)?");
}
}
