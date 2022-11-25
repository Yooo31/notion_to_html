var originalText, HTMLlist, breakOriginalText, lineBuild, rowCount, tab;

function getResult() {
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

function transformToPicture(sentence) {
  for (var e in sentence) {
    letter = sentence[e];

    if (letter == ']') {
        const startSuppr = parseInt(e);
        sentence = sentence.substring(0, startSuppr);
    }
  }

  sentence = removeCharactere(sentence, 2);
  sentence = '<img data-src="/public/images/blog/dossier/' + sentence + '" alt="' + sentence + '" class="lazy d-block m-auto mt-5 mb-2">';

  return sentence
}

function hasStrongWord(sentence) {
  var newSentence = ''
  var strongStatus = 'ready'

  for (var e in sentence) {
    e = parseInt(e);
    letter = sentence[e];
    nextLetter = sentence[e+1]

    if (letter == '*' && nextLetter == '*') {
      if (strongStatus == 'ready') {
        strongStatus = 'first';
        newSentence += '<strong>';
      } else if (strongStatus == 'first') {
        strongStatus = 'ready';
        newSentence += '</strong>' + sentence[e+2];
      }
    } else {
      if (sentence[e-1] != '*' && sentence[e] == '*' && sentence[e+1] != '*') {
        var add = letter + sentence[e+1];
        newSentence += add;
      } else if (sentence[e-1] != '*') {
        newSentence += letter;
      } else if (sentence[e-2] == '*' && strongStatus == 'first') {
        newSentence += letter;
      }
    }
  }

  return newSentence;
}

function checkFirstCharacter(sentence) {
  if (sentence[0] == '#' && sentence[1] != '#') {
    sentence = transformToTitle(sentence, 'h2', 2);
  } else if (sentence[0] && sentence[1] == '#' && sentence[2] != '#') {
    sentence = transformToTitle(sentence, 'h2', 3);
  } else if (sentence[0] && sentence[1] && sentence[2] == '#' && sentence[3] != '#') {
    sentence = transformToTitle(sentence, 'h3', 4);
  } else if (sentence[0] == '!' && sentence[1] == '[') {
    sentence = transformToPicture(sentence);
  } else {
    sentence = '<p>' + sentence + '</p>';
  }

  return sentence;
}

function isLineBreak(sentence) {
  if (sentence != '') {
    sentence = checkFirstCharacter(sentence)
  }

  return sentence;
}

function convertText(tab) {
  for (var element in tab) {
    sentence = tab[element]
    sentence = checkWhiteSpace(sentence);
    sentence = hasStrongWord(sentence);
    sentence = isLineBreak(sentence)
    console.log(sentence);
  }
}
