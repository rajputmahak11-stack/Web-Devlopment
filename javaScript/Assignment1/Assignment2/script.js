var randomNumber = Math.floor(Math.random() * 10) + 1;


function checkNumber() {


var userGuess = document.getElementById("guess").value;

var message = document.getElementById("message");


if (userGuess === "" || userGuess < 1 || userGuess > 10) {
message.className = "alert alert-warning mt-4";
message.innerHTML = "Please enter a number between 1 and 10";
message.classList.remove("d-none");
return;
}

if (userGuess > randomNumber) {
message.className = "alert alert-danger mt-4";
message.innerHTML = "OOPS! SORRY! TRY A SMALLER NUMBER";
}
else if (userGuess < randomNumber) {
message.className = "alert alert-danger mt-4";
message.innerHTML = "OOPS SORRY! TRY A LARGER NUMBER";
}
else {
message.className = "alert alert-success mt-4";
message.innerHTML = "CONGRATULATIONS,YOU GUESSED IT RIGHT";
}

message.classList.remove("d-none");
}