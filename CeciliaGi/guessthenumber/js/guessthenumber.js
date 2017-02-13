var name = prompt("What is your name?");

Game();
function Game(){ // void hade det stått om det var java. Det betyder ett tomt returvärde. Hade man velat ha en int som returvärde hade man skrivik public static int Game
	var randomNumber = Math.floor(Math.random()*10)+1; //floor gör att den avrundar nedåt till en int
	var guess = parseInt(prompt("Enter your guess"));
	if(isNaN(guess)) return;
	for(var i=0; i<3; i=i+1){
		if (guess<randomNumber){
			guess = parseInt(prompt("WRONG! Guess higher!"));
		}
		else if (guess>randomNumber){
			guess = parseInt(prompt("WRONG! Guess lower!"));
		}
		else if (guess === randomNumber){
			alert ("Congratulations "+name+"! Your number was " + guess);
			break;
		}
		if (i+1==3){
			alert ("Game Over " + name + ", you suck!");
		}
	}
}
var spelaIgen = prompt("Would you like to play again? (yes or no)")
	if(spelaIgen == "yes"){
		Game ();
	} 