const decrementBtn = document.getElementById('decrement');
const incrementBtn = document.getElementById('increment');
const counterDisplay = document.getElementById('counter');
const autoCount = document.getElementById('autoCount');
const resetBtn = document.getElementById('reset');

let counter = 0;
let intervalId;

function updateCounter() {
    counterDisplay.textContent = counter;
}

decrementBtn.addEventListener('click', () => {
    if (counter > 0) {
        counter--;
        updateCounter();
    }
});

incrementBtn.addEventListener('click', () => {
    counter++;
    updateCounter();
});

updateCounter(); 

autoCount.addEventListener('click', (e) => {
    if (e.target.id === 'start') {
        autoCount.innerHTML = `<button id="pause">Pause</button>`;
        intervalId = setInterval(() => {
            counter++;
            updateCounter();
        }, 1000);
    } else if (e.target.id === 'pause') {
        autoCount.innerHTML = `<button id="start">Start</button>`;
        clearInterval(intervalId);
    }
});

    resetBtn.addEventListener('click', () => {
        clearInterval(intervalId);
        counter = 0;
        updateCounter();
        autoCount.innerHTML = `<button id="start">Start</button>`;
    });
