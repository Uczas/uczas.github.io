<script>
// === Display Current Date ===
const today = new Date();
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
document.getElementById('quote-date').textContent = today.toLocaleDateString('en-US', options);

// === Display Random Quote ===
const quotes = [
  { text: "Pure mathematics is, in its way, the poetry of logical ideas.", author: "Albert Einstein" },
  { text: "Mathematics knows no races or geographic boundaries; for mathematics, the cultural world is one country.", author: "David Hilbert" },
  { text: "Without mathematics, there’s nothing you can do. Everything around you is mathematics.", author: "Shakuntala Devi" },
  { text: "Mathematics is not about numbers, equations, or algorithms — it's about understanding.", author: "William Paul Thurston" }
];

const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
document.getElementById('quote-text').textContent = `"${randomQuote.text}"`;
document.getElementById('quote-author').textContent = `— ${randomQuote.author}`;
</script>
