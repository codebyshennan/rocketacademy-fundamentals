var madLibsAdjectivesMain = function (input) {
  // Complete the Base: Mad Libs Adjectives exercise below with madLibsAdjectivesMain as the main function.
  var userWordLib = [];

  var rollDice = function () {
    return Math.floor(Math.random() * userWordLib.length);
  };

  var randomAdj = "";

  if (input !== "create") {
    userWordLib.push(input);
  }

  var myOutputValue = "Please type in the adjectives you like.";

  // When user type create, completes the madlib
  if (input == "create") {
    var randomIndex = rollDice();
    var randomAdj = userWordLib[randomIndex];
    var madLib = `"WOW!" he said EXCITEDLY as he jumped into his convertible PAPAYA and drove off with his ${randomAdj} wife.`;
    var myOutputValue = madLib;
  }

  return myOutputValue;
};

var userWordLib = [];

var madLibsInputCreateMain = function (input) {
  // Complete the Comfortable: Input and Create Mode exercise below with madLibsInputCreateMain as the main function.

  var mode = "input";

  if (input == "create") {
    var mode = "create";
  }
  if (mode == "input") {
    userWordLib.push(input);
  }

  var rollDice = function () {
    return Math.floor(Math.random() * userWordLib.length);
  };

  var randomAdj = "";
  // declare var for changing mode

  var myOutputValue = "Please type in the adjectives you like.";

  // When user type create, completes the madlib

  if (mode == "create") {
    var randomIndex = rollDice();
    var randomAdj = userWordLib[randomIndex];
    var madLib = `"WOW!" he said EXCITEDLY as he jumped into his convertible PAPAYA and drove off with his ${randomAdj} wife.`;
    var myOutputValue = madLib;
  }

  return myOutputValue;
};

var madLibsMultipleWordsMain = function (input) {
  // Complete the Comfortable: Input Multiple Words exercise below with madLibsMultipleWordsMain as the main function.
  var userWordLib = [];

  var mode = "input";

  if (input == "create") {
    var mode = "create";
  }
  if (mode == "input") {
    var userWord = input.split(" ");
    userWordLib = userWordLib.concat(userWord);
  }

  var rollDice = function () {
    return Math.floor(Math.random() * userWordLib.length);
  };

  var randomAdj = "";
  // declare var for changing mode

  var myOutputValue = "Please type in the adjectives you like.";

  // When user type create, completes the madlib

  if (mode == "create") {
    var randomIndex = rollDice();
    var randomAdj = userWordLib[randomIndex];
    var madLib = `"WOW!" he said EXCITEDLY as he jumped into his convertible PAPAYA and drove off with his ${randomAdj} wife.`;
    var myOutputValue = madLib;
  }

  return myOutputValue;
};

var madLibsMultipleTypesMain = function (input) {
  // Complete the More Comfortable: Mad Libs Multiple Word Types exercise below with madLibsMultipleTypesMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var madLibsPopularMain = function (input) {
  // Complete the More Comfortable: Popular Mad Libs exercise below with madLibsPopularMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var madLibsSetsMain = function (input) {
  // Complete the More Comfortable: Sets of Mad Libs exercise below with madLibsSetsMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};
