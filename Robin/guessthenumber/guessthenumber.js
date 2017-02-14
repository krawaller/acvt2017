
var theNumber = Math.floor(Math.random()*10)+1;
var i = 1;	
var guess = parseInt(prompt("Enter your guess"));
	while (i < 3){
		if (guess === theNumber){
		alert("Coooooorecto!!!!");
		break;
		}
		else {
		i++;
		alert("WRONG!");
		var guess = parseInt(prompt("Guess again!"));
		}
	}
alert("Ohh that was so bad!! \n GAME OVER!");
