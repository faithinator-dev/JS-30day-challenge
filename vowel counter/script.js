const textInput = document.getElementById("textInput");
const totalCount = document.getElementById("totalCount");
const countA = document.getElementById("countA");
const countE = document.getElementById("countE");
const countI = document.getElementById("countI");
const countO = document.getElementById("countO");
const countU = document.getElementById("countU");

function updateVowelCounts() {
  const text = textInput.value.toLowerCase();

  const aMatches = (text.match(/a/g) || []).length;
  const eMatches = (text.match(/e/g) || []).length;
  const iMatches = (text.match(/i/g) || []).length;
  const oMatches = (text.match(/o/g) || []).length;
  const uMatches = (text.match(/u/g) || []).length;

  const total = aMatches + eMatches + iMatches + oMatches + uMatches;

  totalCount.textContent = total;
  countA.textContent = aMatches;
  countE.textContent = eMatches;
  countI.textContent = iMatches;
  countO.textContent = oMatches;
  countU.textContent = uMatches;

  if (total > 0) {
    totalCount.style.transform = "scale(1.1)";
    setTimeout(() => (totalCount.style.transform = "scale(1)"), 100);
  }
}

function clearText() {
  textInput.value = "";
  updateVowelCounts();
  textInput.focus();
}

textInput.addEventListener("input", updateVowelCounts);
