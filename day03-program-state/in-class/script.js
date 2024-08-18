var rollDice = function () {
  var randomFloat = Math.random() * 3;
  var resultInteger = Math.floor(randomFloat);
  var finalInt = resultInteger + 1;
  return finalInt;
};
var numGuessestoWin = 2;
var numCorrectGuess = 0;

var secretWordBaseMain = function (input) {
  // Complete the Base: Secret Word exercise below with secretWordBaseMain as the main function.
  var randomNum = rollDice();
  console.log("The random no is", randomNum);
  var SecretWord = "";

  if (randomNum == 1) {
    SecretWord = "banana";
  } else if (randomNum == 2) {
    SecretWord = "chisel";
  } else if (randomNum == 3) {
    SecretWord = "faucet";
  }
  console.log("The secret word is", SecretWord);

  var myOutputValue = "";

  if (SecretWord == input) {
    numCorrectGuess += 1;
    console.log("The number of correct guesses is ", numCorrectGuess);
    myOutputValue = "You win but try again!";
  } else {
    myOutputValue = "You lose!";
  }
  if (numCorrectGuess == numGuessestoWin) {
    myOutputValue = "Congrats, you win!";
  }
  return myOutputValue;
};

var secretWordTwiceRowMain = function (input) {
  // Complete the Comfortable: Secret Word Twice in a Row exercise below with secretWordTwiceRowMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var secretWordXRowMain = function (input) {
  // Complete the Comfortable: Secret Word X in a Row exercise below with secretWordXRowMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var diceWithinMain = function (input) {
  // Complete the More Comfortable: Dice Within exercise below with diceWithinMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var diceWithin2DiceMain = function (input) {
  // Complete the More Comfortable: Dice Within with 2 Dice exercise below with diceWithin2DiceMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var dice4DMain = function (input) {
  // Complete the More Comfortable: Dice 4D exercise below with dice4DeMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var secretWordTwice2Main = function (input) {
  // Complete the More Comfortable: Secret Word Twice in a Row 2 exercise below with secretWordTwice2Main as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};
