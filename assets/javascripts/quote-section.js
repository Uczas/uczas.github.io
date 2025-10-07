document.addEventListener("DOMContentLoaded", async () => {
  // Display date
  const today = new Date();
  const dateElement = document.getElementById('quote-date');
  if (dateElement)
    dateElement.textContent = today.toLocaleDateString('en-US', { 
      weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' 
    });

  // Fetch quotes from JSON file
  const response = await fetch('src="quote.json');
  const quotes = await response.json();

  // Pick random quote
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  // Display
  document.getElementById('quote-text').textContent = `"${randomQuote.text}"`;
  document.getElementById('quote-author').textContent = `— ${randomQuote.author}`;
});