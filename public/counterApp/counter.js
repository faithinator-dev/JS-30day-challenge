        let count = 0;
        const valueDisplay = document.getElementById('value');
        const decreaseBtn = document.getElementById('decreaseBtn');
        const resetBtn = document.getElementById('resetBtn');
        const increaseBtn = document.getElementById('increaseBtn');

        function updateDisplay() {
            valueDisplay.textContent = count;
            
            valueDisplay.classList.remove('positive', 'negative', 'zero');
            
            if (count > 0) {
                valueDisplay.classList.add('positive');
            } else if (count < 0) {
                valueDisplay.classList.add('negative');
            } else {
                valueDisplay.classList.add('zero');
            }
        }

        decreaseBtn.addEventListener('click', () => {
            count--;
            updateDisplay();
        });

        increaseBtn.addEventListener('click', () => {
            count++;
            updateDisplay();
        });

        resetBtn.addEventListener('click', () => {
            count = 0;
            updateDisplay();
        });