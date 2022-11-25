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


function convertText(tab) {
  for (var element in tab) {
    sentence = tab[element]
    sentence = checkWhiteSpace(sentence);
    sentence = checkFirstCharacter(sentence)
    console.log(sentence);
  }
}