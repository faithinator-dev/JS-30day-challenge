
        const input = document.getElementById('search');
        const btn = document.getElementById('search-btn');
        const grid = document.getElementById('grid');
        const modal = document.getElementById('modal');
        const modalBody = document.getElementById('modal-body');
        const close = document.getElementById('close');

        async function getRecipes(query) {
            const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
            const data = await res.json();
            
            grid.innerHTML = '';
            if(data.meals) {
                data.meals.forEach(meal => {
                    const card = document.createElement('div');
                    card.className = 'recipe-card';
                    card.innerHTML = `
                        <img src="${meal.strMealThumb}" class="recipe-img">
                        <div class="recipe-info">
                            <span class="recipe-category">${meal.strCategory}</span>
                            <h3 class="recipe-title">${meal.strMeal}</h3>
                        </div>
                    `;
                    card.onclick = () => showMealDetails(meal);
                    grid.appendChild(card);
                });
            } else {
                grid.innerHTML = '<p style="grid-column: 1/-1; text-align:center;">No recipes found...</p>';
            }
        }

        function showMealDetails(meal) {
            const ingredients = [];
            for(let i=1; i<=20; i++) {
                if(meal[`strIngredient${i}`]) {
                    ingredients.push(`${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`);
                }
            }

            modalBody.innerHTML = `
                <img src="${meal.strMealThumb}">
                <h2>${meal.strMeal}</h2>
                <ul class="ingredients-list">
                    ${ingredients.map(ing => `<li>${ing}</li>`).join('')}
                </ul>
                <h3>Instructions</h3>
                <p>${meal.strInstructions}</p>
                <a href="${meal.strYoutube}" target="_blank" style="display:inline-block; background:#ff0000; color:white; text-decoration:none; padding:12px 25px; border-radius:10px; font-weight:700;">Watch Tutorial on YouTube</a>
            `;
            modal.style.display = 'flex';
        }

        btn.onclick = () => getRecipes(input.value);
        input.onkeypress = (e) => { if(e.key === 'Enter') getRecipes(input.value); };
        close.onclick = () => modal.style.display = 'none';
        window.onclick = (e) => { if(e.target === modal) modal.style.display = 'none'; };

        const foodItems = ['cake', 'beef', 'chicken', 'pasta'];
        const randomIndex = Math.floor(Math.random() * foodItems.length);
        const randomFood = foodItems[randomIndex];
        
        getRecipes(randomFood);
        
    