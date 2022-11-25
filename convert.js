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

function removeCharactere(sentence, count) {
  sentence = sentence.substring(count);

  return sentence;
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

function transformToTitle(sentence, titleType, removeCount) {
  sentence = sentence.substring(removeCount);
  sentence = '<' + titleType + ' class="title">' + sentence + '</' + titleType + '>';

  return sentence;
}


function checkFirstCharacter(sentence) {
  if (sentence[0] == '#' && sentence[1] != '#') {
    transformToTitle(sentence, 'h2', 2);
  } else if (sentence[0] && sentence[1] == '#' && sentence[2] != '#') {
    transformToTitle(sentence, 'h2', 3);
  } else if (sentence[0] && sentence[1] && sentence[2] == '#' && sentence[3] != '#') {
    transformToTitle(sentence, 'h3', 4);
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