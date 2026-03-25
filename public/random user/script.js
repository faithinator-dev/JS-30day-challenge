const card = document.getElementById('user-card');
const img = document.getElementById('img');
const nameEl = document.getElementById('name');
const userEl = document.getElementById('username');
const emailEl = document.getElementById('email');
const phoneEl = document.getElementById('phone');
const locEl = document.getElementById('location');
const ageEl = document.getElementById('age');
const btn = document.getElementById('gen-btn');

async function fetchUser() {
    card.classList.add('loading');
    try {
        const res = await fetch('https://randomuser.me/api/');
        const data = await res.json();
        const user = data.results[0];

        img.src = user.picture.large;
        nameEl.innerText = `${user.name.first} ${user.name.last}`;
        userEl.innerText = `@${user.login.username}`;
        emailEl.innerText = user.email;
        phoneEl.innerText = user.phone;
        locEl.innerText = `${user.location.city}, ${user.location.country}`;
        ageEl.innerText = user.dob.age;
    } catch (err) {
        nameEl.innerText = "Failed to load";
    }
    card.classList.remove('loading');
}

btn.onclick = fetchUser;
fetchUser(); // Initial load
