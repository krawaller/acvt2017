var randomNumber = Math.floor(Math.random()*10)+1; //Här tar vi ut ett randomnummer
var guess = parseInt(prompt("Guess a number between 1-10!")); //Promt för att den ska upp i promter. Här måste vi säkerställa att numret som skrivs in är ett nummer. 

var x=0; //Vår räknare för antal varv vi ska göra, vi ska göra 3 varv. 
var guessCorrect=true;
var g=2; 

while(x < 3 || guessCorrect){
	if (guess==randomNumber){ //Om gissningen är lika med numret vi skriver in så är det correct.
		console.log("Correct"); //Visas i konsollen. Behövs inte för att få en utskrift. 
		alert ("you nailed it"); //Visas i rutan. Alert är rutan som dyker upp. Prompt är dialogruta med en inruta. 
		guessCorrect=false; //Om falskt avbryt. 
		break;
		
	} else if (x===2){ //När du gissat 3 gånger ska programmet avslutas. 
		alert ("You failed");
		break;
	}
		
		else {
		console.log ("Not correct");
		console.log ("Guess left");
		var guess = parseInt(prompt("Not guite..." + (g-x) + " guess left. Enter a new guess"));
		x++;
	}
}