const quotes = [
            { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
            { text: "Stay hungry, stay foolish.", author: "Steve Jobs" },
            { text: "Your time is limited, so don't waste it living someone else's life.", author: "Steve Jobs" },
            { text: "Imagination is more important than knowledge.", author: "Albert Einstein" },
            { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
            { text: "The purpose of our lives is to be happy.", author: "Dalai Lama" },
            { text: "Get busy living or get busy dying.", author: "Stephen King" },
            { text: "You only live once, but if you do it right, once is enough.", author: "Mae West" },
            { text: "Never let the fear of striking out keep you from playing the game.", author: "Babe Ruth" },
            { text: "Money and success don’t change people; they merely amplify what is already there.", author: "Will Smith" },
            { text: "Design is not just what it looks like and feels like. Design is how it works.", author: "Steve Jobs" },
            { text: "Simplicity is the ultimate sophistication.", author: "Leonardo da Vinci" },
            { text: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" },
            { text: "Don't let yesterday take up too much of today.", author: "Will Rogers" },
            { text: "If you are working on something that you really care about, you don’t have to be pushed. The vision pulls you.", author: "Steve Jobs" }
        ];

        const textElement = document.getElementById('text');
        const authorElement = document.getElementById('author');
        const newQuoteBtn = document.getElementById('new-quote');
        const tweetBtn = document.getElementById('tweet-quote');

        function getRandomQuote() {
            return quotes[Math.floor(Math.random() * quotes.length)];
        }

        function displayQuote() {
            // Apply fade-out
            textElement.classList.add('fade-out');
            authorElement.classList.add('fade-out');

            setTimeout(() => {
                const quote = getRandomQuote();
                textElement.textContent = quote.text;
                authorElement.textContent = `— ${quote.author}`;
                
                // Update Twitter link
                tweetBtn.href = `https://twitter.com/intent/tweet?text=${encodeURIComponent('"' + quote.text + '" ' + quote.author)}`;
                
                // Remove fade-out
                textElement.classList.remove('fade-out');
                authorElement.classList.remove('fade-out');
            }, 500);
        }

        newQuoteBtn.addEventListener('click', displayQuote);

        // Initial Load
        displayQuote();