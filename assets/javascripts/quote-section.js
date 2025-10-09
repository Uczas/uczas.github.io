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
  { "text": "... Good education polishes the eyes till they see too much. It sharpens the tongue till it questions why the goat must always be led to slaughter.", "author": "Majekodunmi O. Ebhohon" },
  { "text": "The important thing is not to stop questioning. Curiosity has its own reason for existing.", "author": "Albert Einstein" },
  { "text": "Somewhere, something incredible is waiting to be known.", "author": "Carl Sagan" },
  { "text": "Science is a way of thinking much more than it is a body of knowledge.", "author": "Carl Sagan" },
  { "text": "The good thing about science is that it's true whether or not you believe in it.", "author": "Neil deGrasse Tyson" },
  { "text": "If I have seen further it is by standing on the shoulders of Giants.", "author": "Isaac Newton" },
  { "text": "Equipped with his five senses, man explores the universe around him and calls the adventure Science.", "author": "Edwin Hubble" },
  { "text": "In questions of science, the authority of a thousand is not worth the humble reasoning of a single individual.", "author": "Galileo Galilei" },
  { "text": "Science without religion is lame, religion without science is blind.", "author": "Albert Einstein" },
  { "text": "The unexamined life is not worth living.", "author": "Socrates" },
  { "text": "I think, therefore I am.", "author": "René Descartes" },
  { "text": "He who has a why to live can bear almost any how.", "author": "Friedrich Nietzsche" },
  { "text": "Happiness is the highest good.", "author": "Aristotle" },
  { "text": "Man is condemned to be free; because once thrown into the world, he is responsible for everything he does.", "author": "Jean-Paul Sartre" },
  { "text": "The greatest happiness of the greatest number is the foundation of morals and legislation.", "author": "Jeremy Bentham" },
  { "text": "The limits of my language mean the limits of my world.", "author": "Ludwig Wittgenstein" },
  { "text": "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.", "author": "Albert Einstein (commonly attributed)" },
  { "text": "Intelligence is the ability to adapt to change.", "author": "Stephen Hawking" },
  { "text": "The greatest enemy of knowledge is not ignorance, it is the illusion of knowledge.", "author": "Stephen Hawking" },
  { "text": "I would rather have questions that can’t be answered than answers that can’t be questioned.", "author": "Richard Feynman" },
  { "text": "The first principle is that you must not fool yourself—and you are the easiest person to fool.", "author": "Richard Feynman" },
  { "text": "We can only see a short distance ahead, but we can see plenty there that needs to be done.", "author": "Alan Turing" },
  { "text": "What you do makes a difference, and you have to decide what kind of difference you want to make.", "author": "Jane Goodall" },
  { "text": "In a world deluged by irrelevant information, clarity is power.", "author": "Yuval Noah Harari" },
  { "text": "Problems are inevitable. But problems are soluble.", "author": "David Deutsch" },
  { "text": "Reality is not what it seems.", "author": "Carlo Rovelli" },
  { "text": "There’s simply no polite way to tell people they’ve dedicated their lives to an illusion.", "author": "Daniel Dennett" }
];

  // Pick random quote
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  // Display
  document.getElementById('quote-text').textContent = `"${randomQuote.text}"`;
  document.getElementById('quote-author').textContent = `— ${randomQuote.author}`;
});