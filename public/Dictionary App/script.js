const input = document.getElementById("search");
const btn = document.getElementById("search-btn");
const wordEl = document.getElementById("word");
const phoneticEl = document.getElementById("phonetic");
const audioBtn = document.getElementById("audio-btn");
const meaningsEl = document.getElementById("meanings");
const header = document.getElementById("word-header");
const error = document.getElementById("error");

let currentAudio = null;

async function fetchWord(word) {
  try {
    const res = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`,
    );
    if (!res.ok) throw new Error();
    const data = await res.json();
    const entry = data[0];

    error.style.display = "none";
    header.style.display = "flex";

    wordEl.innerText = entry.word;
    phoneticEl.innerText = entry.phonetic || "";

    // Audio handling
    const audio = entry.phonetics.find((p) => p.audio);
    if (audio) {
      currentAudio = new Audio(audio.audio);
      audioBtn.style.display = "flex";
    } else {
      audioBtn.style.display = "none";
    }

    meaningsEl.innerHTML = "";
    entry.meanings.forEach((m) => {
      const section = document.createElement("div");
      section.className = "meaning-section";
      section.style.display = "block";

      let defsHtml = "";
      m.definitions.slice(0, 3).forEach((d) => {
        defsHtml += `
                            <li class="definition-item">
                                ${d.definition}
                                ${d.example ? `<p class="example">"${d.example}"</p>` : ""}
                            </li>
                        `;
      });

      section.innerHTML = `
                        <div class="part-of-speech">${m.partOfSpeech}</div>
                        <p class="sub-heading">Meaning</p>
                        <ul class="definition-list">${defsHtml}</ul>
                    `;
      meaningsEl.appendChild(section);
    });
  } catch (err) {
    header.style.display = "none";
    meaningsEl.innerHTML = "";
    error.style.display = "block";
  }
}

btn.onclick = () => {
  if (input.value) fetchWord(input.value);
};
input.onkeypress = (e) => {
  if (e.key === "Enter" && input.value) fetchWord(input.value);
};
audioBtn.onclick = () => {
  if (currentAudio) currentAudio.play();
};
