

//the game continues untill gameover

var gameOver = false;

while (!gameOver){
	
	//generates random number 1-10
	var randomNumber = Math.floor(Math.random()*10)+1;

	//first guess
	var guess = parseInt(prompt("Guess a number between 1-10: "));
	var i = 0;

	//two more guesses
	while(randomNumber != guess && i<2){
		i++;
		guess = parseInt(prompt("Guess again: "));
	}

	//result, win or lose
	if (randomNumber === guess) {
		alert("Good geuss! The number is " + randomNumber + "!");
	} else {
		alert("Sorry, that was your last geuss. The number is "  + randomNumber + ".");
	}

	//play again?
	var wishToPlay = prompt("Would you like to guess a new number? Y/N: ");
	if (wishToPlay === "N" || wishToPlay === "n"){
		gameOver = true;
	}
}

alert("Game over.")




