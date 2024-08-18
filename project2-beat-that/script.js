// Global Variables
var GAME_STATE_DICE_ROLL = "GAME_STATE_DICE_ROLL";
var GAME_STATE_CHOOSE_DICE_ORDER = "GAME_STATE_CHOOSE_DICE_ORDER";
var GAME_STATE_COMPARE_SCORES = "GAME_STATE_COMPARE_SCORES";
var gameState = GAME_STATE_DICE_ROLL;

var currentPlayer = 1;
var currentPlayerRolls = [];
var allPlayersScore = [];
var playerScore = [];

// Helper Function
var rollDice = function () {
  var randomDecimal = Math.random() * 6;
  var randomInteger = Math.floor(randomDecimal) + 1;
  return randomInteger;
};

var rollDiceForPlayer = function () {
  currentPlayerRolls = [];
  var counter = 0;
  while (counter < 2) {
    currentPlayerRolls.push(rollDice());
    counter = counter + 1;
  }

  return (
    "Welcome, Player " +
    currentPlayer +
    "<br><br> You rolled:<br>Dice 1: " +
    currentPlayerRolls[0] +
    " | Dice 2: " +
    currentPlayerRolls[1] +
    ".<br><br>Now, please input either '1' or '2' to choose the corresponding dice to be used as the first digit of your final value."
  );
};

var getPlayerScore = function (playerInput) {
  console.log("player input", playerInput);
  // playerInput validation
  if (playerInput != 1 && playerInput != 2) {
    return (
      "Error! Please only input '1' or '2' to choose which dice to use as the first digit. <br><br>Your dice rolls are:<br>Dice 1: " +
      currentPlayerRolls[0] +
      " | Dice 2: " +
      currentPlayerRolls[1] +
      "."
    );
  }
  // playerInput == 1
  if (playerInput == 1) {
    playerScore = Number(
      String(currentPlayerRolls[0]) + String(currentPlayerRolls[1])
    );
    // Store playerScore in array
    allPlayersScore.push(playerScore);
    console.log("All players score", allPlayersScore);
    return "Your chosen value is: " + playerScore;
  }

  // playerInput == 2
  if (playerInput == 2) {
    playerScore = Number(
      String(currentPlayerRolls[1]) + String(currentPlayerRolls[0])
    );
    // Store playerScore in array
    allPlayersScore.push(playerScore);
    console.log("All players score", allPlayersScore);
    return "Your chosen value is: " + playerScore;
  }
};

var comparePlayersScores = function () {
  console.log(allPlayersScore);
  var compareMessage =
    "Player 1 score: " +
    allPlayersScore[0] +
    "<br>Player 2 score: " +
    allPlayersScore[1];
  // player 1 wins
  if (allPlayersScore[0] > allPlayersScore[1]) {
    compareMessage = compareMessage + "<br><br>Player 1 wins!";
  }

  // player 2 wins
  if (allPlayersScore[0] < allPlayersScore[1]) {
    compareMessage = compareMessage + "<br><br>Player 2 wins!";
  }

  // tie
  if (allPlayersScore[0] == allPlayersScore[1]) {
    compareMessage = compareMessage + "<br><br>It's a tie!";
  }
  return compareMessage;
};

//if (gameState == GAME_STATE_DICE_ROLL && input == "") {

var main = function (input) {
  var outputMessage = "";
  if (gameState == GAME_STATE_DICE_ROLL) {
    // Display dice rolled as output message
    outputMessage = rollDiceForPlayer();

    // Change the game state
    gameState = GAME_STATE_CHOOSE_DICE_ORDER;
    console.log(outputMessage);
    return outputMessage;
  }

  if (gameState == GAME_STATE_CHOOSE_DICE_ORDER) {
    // Call playerScore function
    outputMessage = getPlayerScore(input);

    if (currentPlayer == 1) {
      currentPlayer = 2;
      gameState = GAME_STATE_DICE_ROLL;
      return outputMessage + "<br><br>It is now player 2's turn!";
    }

    if (currentPlayer == 2) {
      gameState = GAME_STATE_COMPARE_SCORES;

      return outputMessage + "<br><br>Press submit to calculate scores!";
    }
  }

  if (gameState == GAME_STATE_COMPARE_SCORES) {
    outputMessage = comparePlayersScores();
    return outputMessage;
  }
};
