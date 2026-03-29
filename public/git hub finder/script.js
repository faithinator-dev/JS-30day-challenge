const input = document.getElementById('username');
const btn = document.getElementById('search-btn');
const card = document.getElementById('profile');
const error = document.getElementById('error');

async function getUser(username) {
    try {
        const res = await fetch(`https://api.github.com/users/${username}`);
        if (!res.ok) throw new Error();
        const user = await res.json();

        error.style.display = 'none';
        card.style.display = 'block';

        document.getElementById('avatar').src = user.avatar_url;
        document.getElementById('name').innerText = user.name || user.login;
        document.getElementById('url').innerText = `@${user.login}`;
        document.getElementById('url').href = user.html_url;
        document.getElementById('bio').innerText = user.bio || "This profile has no bio";
        document.getElementById('repos').innerText = user.public_repos;
        document.getElementById('followers').innerText = user.followers;
        document.getElementById('following').innerText = user.following;
        document.getElementById('view-profile').href = user.html_url;

    } catch (err) {
        card.style.display = 'none';
        error.style.display = 'block';
    }
}

btn.onclick = () => {
    if (input.value) getUser(input.value);
};

input.onkeypress = (e) => {
    if (e.key === 'Enter' && input.value) getUser(input.value);
};