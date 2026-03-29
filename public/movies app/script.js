const API_KEY = '5824f9cd';
        const searchInput = document.getElementById('search');
        const grid = document.getElementById('grid');
        const loading = document.getElementById('loading');

        async function searchMovies(query) {
            if(!query) return;
            loading.style.display = 'block';
            try {
                const res = await fetch(`https://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`);
                const data = await res.json();
                
                grid.innerHTML = '';
                if(data.Search) {
                    data.Search.forEach(movie => {
                        const card = document.createElement('div');
                        card.className = 'movie-card';
                        const poster = movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/300x450?text=No+Poster';
                        card.innerHTML = `
                            <img src="${poster}" class="poster">
                            <div class="movie-info">
                                <h3 class="movie-title">${movie.Title}</h3>
                                <p class="movie-year">${movie.Year} • ${movie.Type}</p>
                            </div>
                        `;
                        grid.appendChild(card);
                    });
                } else {
                    grid.innerHTML = `<div class="empty-msg">No results found for "${query}"</div>`;
                }
            } catch (err) {
                grid.innerHTML = `<div class="empty-msg">Failed to connect to movie database</div>`;
            }
            loading.style.display = 'none';
        }


        let timeout = null;
        searchInput.addEventListener('input', (e) => {
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                searchMovies(e.target.value);
            }, 500);
        });