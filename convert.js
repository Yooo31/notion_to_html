var originalText, HTMLlist, breakOriginalText, lineBuild, rowCount, tab;

function getresult() {
  tab = [];
  originalText = document.getElementById('originalContent').value;
  breakOriginalText = originalText.split("\n");
  rowCount = breakOriginalText.length;

  for (var r = 0; r < rowCount; r++) {
    lineBuild = 0 === r ? breakOriginalText[r] : breakOriginalText[r];
    tab.push(lineBuild);
  }

  convertText(tab);
}

function checkWhiteSpace(sentence) {
  var whiteSpace = true;

  while (whiteSpace) {
    if (sentence[0] == ' ') {
      sentence = removeCharactere(sentence, 1);

    } else {
      whiteSpace = false;
    }
  }

  return sentence;
}


function checkFirstCharacter(sentence) {
  if (sentence[0] == '#' && sentence[1] != '#') {
    sentence = sentence.substring(2);
    sentence = '<h2 class="title">' + sentence + '</h2>';
  } else if (sentence[0] && sentence[1] == '#' && sentence[2] != '#') {
    sentence = sentence.substring(3);
    sentence = '<h2 class="title">' + sentence + '</h2>';
  } else if (sentence[0] && sentence[1] && sentence[2] == '#' && sentence[3] != '#') {
    sentence = sentence.substring(4);
    sentence = '<h3 class="title">' + sentence + '</h3>';
  } else if (sentence[0] == '!' && sentence[1] == '[') {
    sentence = transformToPicture(sentence);
  } else {
    sentence = '<p>' + sentence + '</p>';
  }


  return sentence;
}

function convertText(tab) {
  for (var element in tab) {
    sentence = tab[element]
    sentence = checkWhiteSpace(sentence);
    sentence = checkFirstCharacter(sentence)
    console.log(sentence);
  }
}