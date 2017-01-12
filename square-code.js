var inputArg = process.argv[2];

function squareCode(inputSentence) {
  if (!inputSentence || inputSentence.length > 81 || inputSentence.search(" ") !== -1) {
    return "Please enter a sentence with no spaces between 1 and 81 characters!"
  }

  var outputSentence = "";
  var cols = 3;

  for (var i = 0; i < cols; i++) {
    var word = "";
    for (var j = i; j < inputSentence.length; j+= cols) {
      word += inputSentence[j];
    }
    outputSentence += word + " ";
  }

  return outputSentence;
}

// determines closest square number under input string length
function getLowerSquare(numChars) {
  return Math.floor(Math.sqrt(numChars));
}

// determine the number of columns to use
function getNumCols(numChars) {
  var lowerSquare = getLowerSquare(numChars);
  if (Math.floor(numChars / lowerSquare) > lowerSquare) {
    return lowerSquare + 1;
  } else {
    return lowerSquare;
  }
}

console.log(squareCode(inputArg));