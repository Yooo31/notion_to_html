var originalText, HTMLlist, result, breakOriginalText, lineBuild, rowCount, tab;

function getresult() {
    tab = [];
    originalText = document.getElementById('originalContent').value;
    result = "[";
    breakOriginalText = originalText.split("\n");
    rowCount = breakOriginalText.length;

    for (var r = 0; r < rowCount; r++) {
      lineBuild = 0 === r ? breakOriginalText[r] : breakOriginalText[r];
      tab.push(lineBuild);
    }
}