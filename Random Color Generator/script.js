const colorChangeBtn = document.getElementById('colorChanger');
colorChangeBtn.addEventListener('click', () => {
const color = ['#FF5733', '#33FF57', '#3357FF', '#F333FF', '#33FFF5', '#F5FF33', '#FF33A8', '#A833FF', '#33FFA8', '#FFA833', '#33A8FF', '#A8FF33', '#FF5733', '#33FF57', '#3357FF', '#F333FF', '#33FFF5', '#F5FF33', '#FF33A8', '#A833FF', '#33FFA8'];
    colorChangeBtn.addEventListener('click', () => {
        const randomColor = color[Math.floor(Math.random() * color.length)];
        document.body.style.backgroundColor = randomColor;
    });
});