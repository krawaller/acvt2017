

var randomNumber = Math.floor(Math.random()*10)+1;
var playAgain;

do { 

	for (var x = 0; x < 3; x++) {
		var guess = prompt("Gissa ett nummer mellan 1-10!");
		if(guess == undefined) {
		break; 
		}
		if (isNaN(guess))
		{ alert ("En siffra TACK!")
		}
		
		else {
		
			if (guess === randomNumber)
			{ alert ("RÄTT, DU ÄR BÄST!");
			  break;
			
			}
			
			else if (guess !== randomNumber && x < 2)
			{ alert ("FEL!! DUMJÄKEL, gör ett nytt försök :)")	
			}
			
			else
			{ alert ("FEL ALLA gånger, GAME OVER!");
			
			}
			
		}
		
	}

	playAgain = confirm("Vill du spela igen?");

} while(playAgain);




