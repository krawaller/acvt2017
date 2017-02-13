
var randomNumber = parseInt(Math.floor(Math.random()*10+1));
var bool = false;
var i = 1;

while (bool == false && i <= 4) {
  var answer = parseInt(prompt("What number is it? Make a guess between 1 and 10"));
  while (isNaN(answer) || answer < 0 || answer > 10) {
    answer = parseInt(prompt("Com'on retard, a number between 1 and 10!!"));
  }
  if (answer == randomNumber) {
    alert("Congratulations, you smart");
    bool = true;
  }
  else {
    if(i < 4) {
      alert("wrong number man!");
      bool = false;
    }
    else {
      alert("That's enough, you suck!!");
      }
    }
    i++;
}
