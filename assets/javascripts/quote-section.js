document.addEventListener("DOMContentLoaded", () => {
  // === Display Current Date ===
  const today = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const dateElement = document.getElementById('quote-date');
  if (dateElement) {
    dateElement.textContent = today.toLocaleDateString('en-US', options);
  }

  // === Display Random Quote ===
  const quotes = [
    { text: "Pure mathematics is, in its way, the poetry of logical ideas.", author: "Albert Einstein" },
    { text: "Mathematics knows no races or geographic boundaries; for mathematics, the cultural world is one country.", author: "David Hilbert" },
    { text: "Without mathematics, there’s nothing you can do. Everything around you is mathematics.", author: "Shakuntala Devi" },
    { text: "Mathematics is not about numbers, equations, or algorithms — it's about understanding.", author: "William Paul Thurston" }
    { text: "... Good education polishes the eyes till they see too much. It sharpens the tongue till it questions why the goat must always be led to slaughter.", author: "Majekodunmi 0. Ebhohon" }
  ];

  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  const quoteText = document.getElementById('quote-text');
  const quoteAuthor = document.getElementById('quote-author');

  if (quoteText && quoteAuthor) {
    quoteText.textContent = `"${randomQuote.text}"`;
    quoteAuthor.textContent = `— ${randomQuote.author}`;
  }
});
