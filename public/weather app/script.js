const apiKey = 'b9a1e9d07455e255ec5d771d16ded40e';
const input = document.getElementById('city-input');
const content = document.getElementById('weather-content');
const error = document.getElementById('error');

const cityEl = document.getElementById('city');
const tempEl = document.getElementById('temp');
const descEl = document.getElementById('desc');
const humidityEl = document.getElementById('humidity');
const windEl = document.getElementById('wind');
const dateEl = document.getElementById('date');

input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        getWeather(input.value);
    }
});

async function getWeather(city) {
    if (apiKey === 'YOUR_API_KEY_HERE') {
        showOps(city);
        return;
    }

    try {
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`);
        if (!res.ok) throw new Error();
        const data = await res.json();

        error.style.display = 'none';
        content.style.display = 'block';

        cityEl.innerText = data.name;
        tempEl.innerText = `${Math.round(data.main.temp)}°C`;
        descEl.innerText = data.weather[0].description;
        humidityEl.innerText = `${data.main.humidity}%`;
        windEl.innerText = `${data.wind.speed}km/h`;

        const now = new Date();
        dateEl.innerText = now.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
    } catch (err) {
        content.style.display = 'none';
        error.style.display = 'block';
    }
}

function showOps(city) {
    content.style.display = 'block';
    cityEl.innerText = city || "Lagos";
    tempEl.innerText = "28°C";
    descEl.innerText = "Processing...";
    const now = new Date();
    dateEl.innerText = now.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
}


showOps("Lagos");