var yourNumWins = 0;
var comNumWins = 0;

var main = function (input) {
  var rollDice = function () {
    var randomFloat = Math.random() * 3;
    var resultInteger = Math.floor(randomFloat);
    var finalInt = resultInteger + 1;
    return finalInt;
  };
  var randomNum = rollDice();
  console.log("The random no is", randomNum);
  var comChoice = "";

  if (randomNum == 1) {
    comChoice = "Scissors";
  } else if (randomNum == 2) {
    comChoice = "Paper";
  } else if (randomNum == 3) {
    comChoice = "Stone";
  }

  var myOutputValue = "";

  if (input !== "Scissors" && input !== "Stone" && input !== "Paper") {
    var myOutputValue = "Please type only Scissors, Paper or Stone. Try again!";
  } else if (input == comChoice) {
    var myOutputValue = "It's a draw! Your current score: " + yourNumWins;
  } else if (
    (input == "Scissors" && comChoice == "Stone") ||
    (input == "Paper" && comChoice == "Scissors") ||
    (input == "Stone" && comChoice == "Paper")
  ) {
    var myOutputValue = "You lose! Your current score:" + yourNumWins;
  } else {
    yourNumWins += 1;
    var myOutputValue = "You win! Your current score:" + yourNumWins;
  }
  return myOutputValue;
};
