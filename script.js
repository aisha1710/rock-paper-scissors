var wins = 0;
var loss = 0;
var ties = 0;

var options = ["R", "P", "S"];

function play() {
  var usersChoice = window.prompt("Enter R, P, S");
  console.log(usersChoice);

  let index = Math.floor(Math.random() * options.length);
  var computerChoice = options[index];
  console.log(computerChoice);

  if (usersChoice === computerChoice) {
    ties++;
  } else if (
    (usersChoice === "R" && computerChoice === "S") ||
    (usersChoice === "S" && computerChoice === "P") ||
    (usersChoice === "p" && computerChoice === "R")
  ) {
    wins++;
  } else {
    loss++;
  }

  window.alert("wins: " + wins + " loss: " + loss + "ties: " + ties);
  var playAgain = window.confirm("play again");
  if (playAgain) {
    play();
  }
}
play();
