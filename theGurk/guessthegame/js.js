var again = "Y";
while (again === "Y")	{

var randomNumber = Math.floor(Math.random()*10)+1;
var guess = parseInt(prompt("Enter a number between 1 - 10"));

var x = 0;
var guessCorrect = true;
var g = 2


while (x < 3 || guessCorrect)	{
console.log(randomNumber);	
// for (var i=0; i<2; i++)	{
if (guess === randomNumber){
  console.log("Correct!");
  alert("You nailed it!!");
  guessCorrect = false;
  break;
} 
else if (x === 2)	{
	alert("You failed, no more guess left");
break;
	}
else  {
  console.log("Not quite...");
  console.log(3-x+" guess left");
  var guess = parseInt(prompt("Not quite... " + (g-x) + " guess left. Enter your guess"));
 x++;
  }	
}
var again = prompt("Do you want to play again. Y/N");
if(again==="N")	{
	alert("You must play again you stupid m*********");
	var again="Y";
}
else if(again==="S")	{
	alert("You find the secret stop!");
}

}