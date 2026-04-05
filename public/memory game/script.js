
        const letters = ['X', 'X', 'C', 'C', 'J', 'C', 'J', 'K', 'K', 'I', 'I', 'O', 'O', 'G', 'G', 'A', 'A', 'J']; 
        const actualTexts = ['X', 'C', 'J', 'K', 'I', 'O', 'G', 'A'];
        let gameCards = [...actualTexts, ...actualTexts];
        
        const gridEl = document.getElementById('grid');
        const movesEl = document.getElementById('moves');
        const matchesEl = document.getElementById('matches');

        let flippedCards = [];
        let moves = 0;
        let matchedCount = 0;
        let canFlip = true;

        function shuffle(array) {
            return array.sort(() => Math.random() - 0.5);
        }

        function initGame() {
            gridEl.innerHTML = '';
            flippedCards = [];
            moves = 0;
            matchedCount = 0;
            canFlip = true;
            movesEl.innerText = moves;
            matchesEl.innerText = `0/8`;
            
            shuffle(gameCards).forEach(letter => {
                const card = document.createElement('div');
                card.className = 'card';
                card.innerHTML = `
                    <div class="card-face card-front">${letter}</div>
                    <div class="card-face card-back"></div>
                `;
                card.onclick = () => flipCard(card, letter);
                gridEl.appendChild(card);
            });
        }

        function flipCard(card, letter) {
            if (!canFlip || flippedCards.includes(card) || card.classList.contains('matched')) return;

            card.classList.add('flipped');
            flippedCards.push({ card, letter });

            if (flippedCards.length === 2) {
                moves++;
                movesEl.innerText = moves;
                checkMatch();
            }
        }

        function checkMatch() {
            canFlip = false;
            const [c1, c2] = flippedCards;

            if (c1.letter === c2.letter) {
                c1.card.classList.add('matched');
                c2.card.classList.add('matched');
                matchedCount++;
                matchesEl.innerText = `${matchedCount}/8`;
                flippedCards = [];
                canFlip = true;
                if (matchedCount === 8) alert('You Win!');
            } else {
                setTimeout(() => {
                    c1.card.classList.remove('flipped');
                    c2.card.classList.remove('flipped');
                    flippedCards = [];
                    canFlip = true;
                }, 1000);
            }
        }

        initGame();