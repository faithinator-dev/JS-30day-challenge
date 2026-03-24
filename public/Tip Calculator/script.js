const billInput = document.getElementById('bill');
const tipBtns = document.querySelectorAll('.tip-btn');
const customTipInput = document.getElementById('custom-tip');
const peopleInput = document.getElementById('people');
const peopleGroup = document.getElementById('people-group');
const tipDisplay = document.getElementById('tip-amount');
const totalDisplay = document.getElementById('total-amount');
const resetBtn = document.getElementById('reset-btn');

let billValue = 0;
let tipPercent = 0;
let peopleCount = 1;

function calculate() {
    if (peopleCount <= 0) {
        peopleGroup.classList.add('error');
        return;
    } else {
        peopleGroup.classList.remove('error');
    }

    if (billValue > 0 && peopleCount > 0) {
        const totalTip = billValue * (tipPercent / 100);
        const totalBill = billValue + totalTip;

        const tipPerPerson = totalTip / peopleCount;
        const totalPerPerson = totalBill / peopleCount;

        tipDisplay.textContent = `$${tipPerPerson.toFixed(2)}`;
        totalDisplay.textContent = `$${totalPerPerson.toFixed(2)}`;
        
        resetBtn.classList.add('active');
    } else {
        tipDisplay.textContent = '$0.00';
        totalDisplay.textContent = '$0.00';
        resetBtn.classList.remove('active');
    }
}

billInput.addEventListener('input', () => {
    billValue = parseFloat(billInput.value) || 0;
    calculate();
});

tipBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        tipBtns.forEach(b => b.classList.remove('active'));
        customTipInput.value = '';
        btn.classList.add('active');
        tipPercent = parseFloat(btn.dataset.tip);
        calculate();
    });
});

customTipInput.addEventListener('input', () => {
    tipBtns.forEach(b => b.classList.remove('active'));
    tipPercent = parseFloat(customTipInput.value) || 0;
    calculate();
});

peopleInput.addEventListener('input', () => {
    peopleCount = parseInt(peopleInput.value) || 0;
    calculate();
});

resetBtn.addEventListener('click', () => {
    billValue = 0;
    tipPercent = 0;
    peopleCount = 1;
    billInput.value = '';
    peopleInput.value = '';
    customTipInput.value = '';
    tipBtns.forEach(b => b.classList.remove('active'));
    tipDisplay.textContent = '$0.00';
    totalDisplay.textContent = '$0.00';
    resetBtn.classList.remove('active');
    peopleGroup.classList.remove('error');
});