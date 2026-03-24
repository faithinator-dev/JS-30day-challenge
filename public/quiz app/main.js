const questions = [
{
    q: "Which language runs in a web browser?",
    a: ["Java", "C", "Python", "JavaScript"],
    correct: 3,
},
{
    q: "What does CSS stand for?",
    a: [
    "Central Style Sheets",
    "Cascading Style Sheets",
    "Cascading Simple Sheets",
    "Cars SUVs Sailboats",
    ],
    correct: 1,
},
{
    q: "What does HTML stand for?",
    a: [
    "Hypertext Markup Language",
    "Hypertext Markdown Language",
    "Hyperloop Machine Language",
    "Helicopters Terminals Motorboats Lamborghinis",
    ],
    correct: 0,
},
{
    q: "What year was JavaScript launched?",
    a: ["1996", "1995", "1994", "none of the above"],
    correct: 1,
},
{
    q: "Which is a JS framework?",
    a: ["React", "Laravel", "Django", "Sass"],
    correct: 0,
},
];

let currentIdx = 0;
let score = 0;
let selectedIdx = null;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const progressEl = document.getElementById("progress");
const quizContent = document.getElementById("quiz-content");
const resultScreen = document.getElementById("result");
const scoreCircle = document.getElementById("final-score");

function loadQuestion() {
selectedIdx = null;
nextBtn.classList.remove("active");
const current = questions[currentIdx];
questionEl.innerText = current.q;
progressEl.innerText = `Question ${currentIdx + 1} of ${questions.length}`;

optionsEl.innerHTML = "";
current.a.forEach((opt, i) => {
    const li = document.createElement("div");
    li.className = "option";
    li.innerText = opt;
    li.onclick = () => selectOption(i);
    optionsEl.appendChild(li);
});
}

function selectOption(idx) {
if (selectedIdx !== null) return;
selectedIdx = idx;
const options = document.querySelectorAll(".option");
const correct = questions[currentIdx].correct;

options[idx].classList.add(idx === correct ? "correct" : "wrong");
if (idx !== correct) options[correct].classList.add("correct");

if (idx === correct) score++;
nextBtn.classList.add("active");
nextBtn.innerText =
    currentIdx === questions.length - 1
    ? "Show Results"
    : "Next Question";
}

nextBtn.onclick = () => {
currentIdx++;
if (currentIdx < questions.length) {
    loadQuestion();
} else {
    showResults();
}
};

function showResults() {
quizContent.style.display = "none";
resultScreen.style.display = "block";
scoreCircle.innerText = `${score}/${questions.length}`;
}

loadQuestion();
