const video = document.getElementById("video");
const playBtn = document.getElementById("play-pause");
const stopBtn = document.getElementById("stop");
const progress = document.getElementById("progress-bar");
const progressCont = document.getElementById("progress-container");
const volume = document.getElementById("volume");
const timestamp = document.getElementById("timestamp");
const speed = document.getElementById("speed");
const fullBtn = document.getElementById("fullscreen");

function togglePlay() {
  if (video.paused) {
    video.play();
    playBtn.innerText = "II";
  } else {
    video.pause();
    playBtn.innerText = "▶";
  }
}

function updateProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progress.style.width = `${percent}%`;

  let mins = Math.floor(video.currentTime / 60);
  let secs = Math.floor(video.currentTime % 60);
  timestamp.innerText = `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
}

function setProgress(e) {
  const newTime = (e.offsetX / progressCont.offsetWidth) * video.duration;
  video.currentTime = newTime;
}

video.addEventListener("click", togglePlay);
video.addEventListener("timeupdate", updateProgress);
playBtn.addEventListener("click", togglePlay);
stopBtn.addEventListener("click", () => {
  video.pause();
  video.currentTime = 0;
  playBtn.innerText = "▶";
});
progressCont.addEventListener("click", setProgress);
volume.addEventListener("input", (e) => (video.volume = e.target.value));
speed.addEventListener("change", (e) => (video.playbackRate = e.target.value));
fullBtn.addEventListener("click", () => video.requestFullscreen());
