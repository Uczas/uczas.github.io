document.addEventListener("DOMContentLoaded", async () => {
  // Display date
  const today = new Date();
  const dateElement = document.getElementById('quote-date');
  if (dateElement)
    dateElement.textContent = today.toLocaleDateString('en-US', { 
      weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' 
    });

  const quotes = [
  { "text": "Pure mathematics is, in its way, the poetry of logical ideas.", "author": "Albert Einstein" },
  { "text": "Mathematics is a universal language, and its truths are independent of time and place.", "author": "David Hilbert" },
  { "text": "Without mathematics, there’s nothing you can do. Everything around you is mathematics.", "author": "Shakuntala Devi" },
  { "text": "If people do not believe that mathematics is simple, it is because they do not realize how complicated life is.", "author": "John von Neumann" },
  { "text": "... Good education polishes the eyes till they see too much. It sharpens the tongue till it questions why the goat must always be led to slaughter.", "author": "Majekodunmi O. Ebhohon" }
];

  // Pick random quote
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  // Display
  document.getElementById('quote-text').textContent = `"${randomQuote.text}"`;
  document.getElementById('quote-author').textContent = `— ${randomQuote.author}`;
});