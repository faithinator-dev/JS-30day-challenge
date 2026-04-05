let startTime;
let elapsedTime = 0;
let timerInterval;

const display = document.getElementById("display");
const startBtn = document.getElementById("start");
const pauseBtn = document.getElementById("pause");
const resetBtn = document.getElementById("reset");
const lapBtn = document.getElementById("lap");
const lapsContainer = document.getElementById("laps");

function timeToString(time) {
  let diffInHrs = time / 3600000;
  let hh = Math.floor(diffInHrs);

  let diffInMin = (diffInHrs - hh) * 60;
  let mm = Math.floor(diffInMin);

  let diffInSec = (diffInMin - mm) * 60;
  let ss = Math.floor(diffInSec);

  let diffInMs = (diffInSec - ss) * 100;
  let ms = Math.floor(diffInMs);

  let formattedMM = mm.toString().padStart(2, "0");
  let formattedSS = ss.toString().padStart(2, "0");
  let formattedMS = ms.toString().padStart(2, "0");

  return `${formattedMM}:${formattedSS}:${formattedMS}`;
}

function print(txt) {
  display.innerHTML = txt;
}

function start() {
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(function printTime() {
    elapsedTime = Date.now() - startTime;
    print(timeToString(elapsedTime));
  }, 10);
  showButton("PAUSE");
}

function pause() {
  clearInterval(timerInterval);
  showButton("START");
}

function reset() {
  clearInterval(timerInterval);
  print("00:00:00");
  elapsedTime = 0;
  lapsContainer.innerHTML = "";
  showButton("START");
}

function lap() {
  const lapTime = timeToString(elapsedTime);
  const lapItem = document.createElement("div");
  lapItem.className = "lap-item";
  lapItem.innerHTML = `<span>Lap ${lapsContainer.children.length + 1}</span> <span>${lapTime}</span>`;
  lapsContainer.prepend(lapItem);
}

function showButton(buttonKey) {
  if (buttonKey === "PAUSE") {
    startBtn.style.display = "none";
    pauseBtn.style.display = "flex";
  } else {
    startBtn.style.display = "flex";
    pauseBtn.style.display = "none";
  }
}

startBtn.addEventListener("click", start);
pauseBtn.addEventListener("click", pause);
resetBtn.addEventListener("click", reset);
lapBtn.addEventListener("click", lap);
