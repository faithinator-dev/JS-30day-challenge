const body = document.getElementById('body');
const card = document.getElementById('card');
const hexDisplay = document.getElementById('hexDisplay');
const rgbDisplay = document.getElementById('rgbDisplay');
const generateBtn = document.getElementById('generateBtn');
const tooltip = document.getElementById('tooltip');

function generateRandomColor() {
    const chars = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += chars[Math.floor(Math.random() * 16)];
    }
    return color;
}

function hexToRgb(hex) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgb(${r}, ${g}, ${b})`;
}

function getContrastYIQ(hexcolor){
    const r = parseInt(hexcolor.slice(1, 3), 16);
    const g = parseInt(hexcolor.slice(3, 5), 16);
    const b = parseInt(hexcolor.slice(5, 7), 16);
    const yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
    return (yiq >= 128) ? 'black' : 'white';
}

function updateColor() {
    const newColor = generateRandomColor();
    const contrast = getContrastYIQ(newColor);
    
    body.style.backgroundColor = newColor;
    
    hexDisplay.textContent = newColor;
    rgbDisplay.textContent = hexToRgb(newColor);
    
    body.style.color = contrast;
    generateBtn.style.backgroundColor = contrast;
    generateBtn.style.color = newColor;
    
    if (contrast === 'black') {
        card.style.background = 'rgba(0, 0, 0, 0.05)';
        card.style.borderColor = 'rgba(0, 0, 0, 0.1)';
    } else {
        card.style.background = 'rgba(255, 255, 255, 0.15)';
        card.style.borderColor = 'rgba(255, 255, 255, 0.2)';
    }
}

function copyToClipboard() {
    const text = hexDisplay.textContent;
    navigator.clipboard.writeText(text).then(() => {
        tooltip.classList.add('show');
        setTimeout(() => {
            tooltip.classList.remove('show');
        }, 2000);
    });
}

generateBtn.addEventListener('click', updateColor);

window.addEventListener('keydown', (e) => {
    if (e.code === 'Space') {
        updateColor();
    }
});