var random = Math.random();
    random = random*100;
    random = Math.ceil(random);
var turn = 0;
function guessNumber() {
    var guess = document.getElementById('NewGuess');
    var error = document.getElementById("error");
    var guessBtn = document.getElementById("guessBtn")
    var newguess = guess.value;
    if(turn < 10){
        if(newguess.length < 1){
            error.innerHTML = "* Please Enter A Number";
        }else if(newguess > 100){
            error.innerHTML = "* Number Must be between 1 and 100";
        }else{
            var prevValues = document.querySelector('h6');
            prevValues.innerHTML = prevValues.innerHTML  + newguess + " , ";
            var result = document.querySelector('h5');
            if (random < newguess) {
                result.setAttribute("class" , "text-warning")
                result.textContent = 'Guess is Too High';
                newguess.value = ""
                turn++;
            }  else if (random > newguess) {
                result.setAttribute("class" , "text-danger")
                result.textContent = 'Guess is Too Low';
                newguess.value = ""
                turn++;
            } else if(random == newguess){
                result.setAttribute("class" , "text-success")
                turn++;
                newguess.value = ""
                result.textContent = 'Number Matched';
                guessBtn.setAttribute("hidden" , "true")             
            }
        }
    }else{
        alert("Turn Exceeded from 10")
        guessBtn.setAttribute("hidden" , "true")
    }
}