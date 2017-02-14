
runGame();

function runGame() {
	var randomNumber = Math.floor(Math.random()*10)+1;
		
	var guess;
	var amountOfGuesses = 0;

	while(true) {
		var message;
		switch(amountOfGuesses) {
			case 0:
				message = "Enter your guess: ";
				break;
			case 1:
				message = "Wrong! You have two more guesses. Enter your guess: ";
				break;
			case 2:
				message = "Wrong! You have one last guess. Enter your guess: ";
				break;
		}

		guess = parseInt(prompt(message));
		
		if(guess <= 10 && guess >= 1) {
			if(guess == randomNumber) {
				if(amountOfGuesses == 0) {
					alert("You won on the first guess! \"Impressive\".");
				} else {
					alert("You won! (" + (amountOfGuesses + 1) + " guesses)");
					break;
				}
			}
			amountOfGuesses++;		
		} else {
			alert("Guess has to be a number between and including 1 and 10, try again!");
		}

		if(amountOfGuesses == 3) {
			alert("You lost!");
			break;
		}
	} // end while
	
	var rematch = prompt("Play again? y/n");
	if(rematch == "y") {
		runGame();
	} else if(rematch == "n") {
		alert("Until next time!");
	} else {
		alert("You did not type 'y' nor 'n', you lost your chance, game ends.");
	}
} // end function

