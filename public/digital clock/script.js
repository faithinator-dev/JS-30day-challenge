const dateDisplay = document.getElementById('dateDisplay');
const timeDisplay = document.getElementById('timeDisplay');
const secondsDisplay = document.getElementById('secondsDisplay');
const ampmDisplay = document.getElementById('ampmDisplay');
const toggleBtn = document.getElementById('toggleFormat');

let is24Hour = false;

function updateClock() {
    const now = new Date();
    const dateOptions = { weekday: 'long', month: 'long', day: 'numeric' };
    dateDisplay.textContent = now.toLocaleDateString('en-US', dateOptions);   
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    let ampm = '';
    if (!is24Hour) {
        ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12 || 12;
        ampmDisplay.style.display = 'block';
    } else {
        ampmDisplay.style.display = 'none';
    }
    
    const hoursStr = String(hours).padStart(2, '0');
    timeDisplay.textContent = `${hoursStr}:${minutes}`;
    secondsDisplay.textContent = seconds;
    ampmDisplay.textContent = ampm;
}

toggleBtn.addEventListener('click', () => {
    is24Hour = !is24Hour;
    toggleBtn.textContent = is24Hour ? 'Switch to 12H' : 'Switch to 24H';
    updateClock();
});

setInterval(updateClock, 1000);
updateClock();