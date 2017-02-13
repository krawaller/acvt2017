var name = prompt("What is your name?");
console.log("hej " + name);
var randomNumber = Math.floor(Math.random()*10)+1;
console.log(randomNumber);

flag=true;
var j = 0;
while (flag){
var guess = parseInt(prompt("Enter your guess"));
if (guess == randomNumber){
flag = false;
}
else {
  j++;
  if (j > 2){
    flag = false;
}
}
}
alert("R�tt nummer �r " + randomNumber);
