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
  { "text": "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.", "author": "Albert Einstein" },
  { "text": "Intelligence is the ability to adapt to change.", "author": "Stephen Hawking" },
  { "text": "The greatest enemy of knowledge is not ignorance, it is the illusion of knowledge.", "author": "Stephen Hawking" },
  { "text": "I would rather have questions that can’t be answered than answers that can’t be questioned.", "author": "Richard Feynman" },
  { "text": "The first principle is that you must not fool yourself—and you are the easiest person to fool.", "author": "Richard Feynman" },
  { "text": "We can only see a short distance ahead, but we can see plenty there that needs to be done.", "author": "Alan Turing" },
  { "text": "What you do makes a difference, and you have to decide what kind of difference you want to make.", "author": "Jane Goodall" },
  { "text": "In a world deluged by irrelevant information, clarity is power.", "author": "Yuval Noah Harari" },
  { "text": "Problems are inevitable. But problems are soluble.", "author": "David Deutsch" },
  { "text": "Reality is not what it seems.", "author": "Carlo Rovelli" },
  { "text": "There’s simply no polite way to tell people they’ve dedicated their lives to an illusion.", "author": "Daniel Dennett" },
{ "text": "We suffer more often in imagination than in reality.", "author": "Seneca" },
{ "text": "It's not what happens to you, but how you react to it that matters.", "author": "Epictetus" },
{ "text": "Be the change you wish to see in the world.", "author": "Mahatma Gandhi" },
{ "text": "In the midst of chaos, there is also opportunity.", "author": "Sun Tzu" },
{ "text": "The journey of a thousand miles begins with a single step.", "author": "Lao Tzu" },
{ "text": "It is during our darkest moments that we must focus to see the light.", "author": "Aristotle" },
{ "text": "The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well.", "author": "Ralph Waldo Emerson" },
{ "text": "Fall seven times, stand up eight.", "author": "Japanese Proverb" },
{ "text": "Give a man a fish, and you feed him for a day. Teach a man to fish, and you feed him for a lifetime.", "author": "Chinese Proverb" },
{ "text": "Smooth seas do not make skillful sailors.", "author": "African Proverb" },
{ "text": "If you want to go fast, go alone. If you want to go far, go together.", "author": "African Proverb" },
{ "text": "The pen is mightier than the sword.", "author": "Edward Bulwer-Lytton" },
{ "text": "The man who asks a question is a fool for a minute, the man who does not ask is a fool for life.", "author": "Confucius" },
{ "text": "Knowing others is intelligence; knowing yourself is true wisdom. Mastering others is strength; mastering yourself is true power.", "author": "Lao Tzu" },
{ "text": "The only true wisdom is in knowing you know nothing.", "author": "Socrates" },
{ "text": "To know what you know and what you do not know, that is true knowledge.", "author": "Confucius" },
{ "text": "The mind is not a vessel to be filled, but a fire to be kindled.", "author": "Plutarch" },
{ "text": "The greatest discovery of my generation is that a human being can alter his life by altering his attitudes.", "author": "William James" },
{ "text": "The cave you fear to enter holds the treasure you seek.", "author": "Joseph Campbell" },
{ "text": "Until you make the unconscious conscious, it will direct your life and you will call it fate.", "author": "Carl Jung" },
{ "text": "The good life is a process, not a state of being. It is a direction, not a destination.", "author": "Carl Rogers" },
{ "text": "What is necessary to change a person is to change his awareness of himself.", "author": "Abraham Maslow" },
{ "text": "In the middle of difficulty lies opportunity.", "author": "Albert Einstein" },
{ "text": "The privilege of a lifetime is to become who you truly are.", "author": "Carl Jung" },
{ "text": "The opposite of love is not hate, it's indifference. The opposite of art is not ugliness, it's indifference. The opposite of faith is not heresy, it's indifference. And the opposite of life is not death, it's indifference.", "author": "Elie Wiesel" },
{ "text": "We are what we repeatedly do. Excellence, then, is not an act, but a habit.", "author": "Aristotle" },
{ "text": "Nothing in life is to be feared, it is only to be understood. Now is the time to understand more, so that we may fear less.", "author": "Marie Curie" },
{ "text": "The most beautiful experience we can have is the mysterious. It is the fundamental emotion that stands at the cradle of true art and true science.", "author": "Albert Einstein" },
{ "text": "If you can't explain it simply, you don't understand it well enough.", "author": "Albert Einstein" },
{ "text": "To raise new questions, new possibilities, to regard old problems from a new angle, requires creative imagination and marks real advance in science.", "author": "Albert Einstein" },
{ "text": "Falsity in intellectual action is intellectual immorality.", "author": "Thomas Chrowder Chamberlin" },
{ "text": "An expert is a person who has made all the mistakes that can be made in a very narrow field.", "author": "Niels Bohr" },
{ "text": "No, no, you're not thinking; you're just being logical.", "author": "Niels Bohr" },
{ "text": "If I have seen further it is by standing on the shoulders of Giants.", "author": "Isaac Newton" },
{ "text": "Science is the great antidote to the poison of enthusiasm and superstition.", "author": "Adam Smith" },
{ "text": "The scientist is not a person who gives the right answers, but the one who asks the right questions.", "author": "Claude Lévi-Strauss" }
];

  // Pick random quote
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  // Display
  document.getElementById('quote-text').textContent = `"${randomQuote.text}"`;
  document.getElementById('quote-author').textContent = `— ${randomQuote.author}`;
});