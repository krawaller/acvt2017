function gissaNumret() {
    var randomNumber = Math.floor(Math.random() * 10 + 1);
    var flag = true;
    var threetimes = 1;
    while (flag) {
        var guess = parseInt(prompt("Gissa vad numret är!"));
        if (guess == randomNumber) {
            alert("RÄTT");
            document.getElementById("hidewin").style.display = "block";
            document.getElementById("hidegameover").style.display = "none";
            flag = false;
        }
        else if (threetimes === 3) {
            document.getElementById("hidewin").style.display = "none";
            document.getElementById("hidegameover").style.display = "block";
            flag = false;
        }
        else {
            alert("FFFFFFFFFFFFFFFFFeEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEeeeeeeeeeeEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEeEEEEEEEEEEEEEEEEEeEEEEEEEEEEEEEEEEEEELLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1111111111111");
            alert(3 - threetimes + " försök kvar!")
            threetimes++;
        }
    }
}