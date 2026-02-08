document.addEventListener('DOMContentLoaded', () => {
    const nameInput = document.getElementById('nameInput');
    const themeSelect = document.getElementById('themeSelect');
    const card = document.getElementById('card');
    const displayName = document.getElementById('recipient-name');
    const displayQuote = document.getElementById('valentine-quote');

    const quotes = [
        "You make my heart skip a beat.",
        "To the moon and back, I love you.",
        "Life is better with you by my side.",
        "You are my favorite notification.",
        "You're the sprinkles on my cupcake.",
        "Every day with you is a gift.",
        "You're my favorite place to be."
    ];

    function updateCard() {
        // Update Name
        if (nameInput.value.trim()) {
            displayName.textContent = nameInput.value;
        }

        // Update Theme
        card.className = `theme-${themeSelect.value}`;

        // Randomize Quote
        const newQuote = quotes[Math.floor(Math.random() * quotes.length)];
        displayQuote.textContent = `"${newQuote}"`;
    }

    // Event Listeners
    document.getElementById('generateBtn').addEventListener('click', updateCard);
    document.getElementById('printBtn').addEventListener('click', () => window.print());
    
    document.getElementById('downloadBtn').addEventListener('click', () => {
        html2canvas(card, { scale: 3 }).then(canvas => {
            const link = document.createElement('a');
            link.download = `Valentine-${displayName.textContent}.png`;
            link.href = canvas.toDataURL();
            link.click();
        });
    });

    // Handle Enter Key
    nameInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') updateCard();
    });
});