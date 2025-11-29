document.addEventListener("DOMContentLoaded", async () => {
  // Display date
  const today = new Date();
  const dateElement = document.getElementById('quote-date');
  if (dateElement)
    dateElement.textContent = today.toLocaleDateString('en-US', { 
      weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' 
    });

  const quotes = [
  { "text": "One machine can do the work of fifty ordinary men. No machine can do the work of one extraordinary man": "Elbert Hubbard" },
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
{ "text": "The scientist is not a person who gives the right answers, but the one who asks the right questions.", "author": "Claude Lévi-Strauss" },

// Added 18th October, 2025

    { "text": "The creation of a thousand forests is in one acorn.", "author": "Ralph Waldo Emerson" },

    { "text": "Do not go where the path may lead, go instead where there is no path and leave a trail.", "author": "Ralph Waldo Emerson" },

    { "text": "For what shall it profit a man, if he shall gain the whole world, and lose his own soul?", "author": "Mark 8:36" },

    { "text": "The supreme art of war is to subdue the enemy without fighting.", "author": "Sun Tzu" },

    { "text": "The obstacle in the path becomes the path. Never forget, within every obstacle is an opportunity to improve our condition.", "author": "Ryan Holiday (interpreting Marcus Aurelius)" },

    { "text": "And those who were seen dancing were thought to be insane by those who could not hear the music.", "author": "Friedrich Nietzsche" },

    { "text": "The function of prayer is not to influence God, but rather to change the nature of the one who prays.", "author": "Søren Kierkegaard" },

    { "text": "The beginning of wisdom is the definition of terms.", "author": "Socrates" },

    { "text": "When the student is ready, the teacher will appear.", "author": "Buddhist Proverb" },

    { "text": "The wound is the place where the Light enters you.", "author": "Rumi" },

    { "text": "This is the real secret of life — to be completely engaged with what you are doing in the here and now. And instead of calling it work, realize it is play.", "author": "Alan Watts" },

    { "text": "The price of anything is the amount of life you exchange for it.", "author": "Henry David Thoreau" },

    { "text": "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.", "author": "Maya Angelou" },

    { "text": "The most common way people give up their power is by thinking they don't have any.", "author": "Alice Walker" },

    { "text": "You have power over your mind — not outside events. Realize this, and you will find strength.", "author": "Marcus Aurelius" },

    { "text": "The bamboo that bends is stronger than the oak that resists.", "author": "Japanese Proverb" },

    { "text": "A bird does not sing because it has an answer. It sings because it has a song.", "author": "Chinese Proverb" },

    { "text": "He who knows all the answers has not been asked all the questions.", "author": "Confucius" },

    { "text": "Trust in the LORD with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight.", "author": "Proverbs 3:5-6" },

    { "text": "The sun is new each day.", "author": "Heraclitus" },

    { "text": "No man ever steps in the same river twice, for it's not the same river and he's not the same man.", "author": "Heraclitus" },

    { "text": "We are like butterflies who flutter for a day and think it is forever.", "author": "Carl Sagan" },

    { "text": "For small creatures such as we the vastness is bearable only through love.", "author": "Carl Sagan" },

    { "text": "The nitrogen in our DNA, the calcium in our teeth, the iron in our blood, the carbon in our apple pies were made in the interiors of collapsing stars. We are made of starstuff.", "author": "Carl Sagan" },

    { "text": "The universe is not only queerer than we suppose, but queerer than we *can* suppose.", "author": "J.B.S. Haldane" },

    { "text": "Not everything that can be counted counts, and not everything that counts can be counted.", "author": "William Bruce Cameron" },

    { "text": "The greatest danger for most of us is not that our aim is too high and we miss it, but that it is too low and we reach it.", "author": "Michelangelo" },

    { "text": "The person who says it cannot be done should not interrupt the person who is doing it.", "author": "Chinese Proverb" },

    { "text": "A ship in harbor is safe, but that is not what ships are built for.", "author": "John A. Shedd" },

    { "text": "The act of observation is an act of creation, and the consciousness of the observer is the only true reality.", "author": "Max Planck" },

    { "text": "If you want to find the secrets of the universe, think in terms of energy, frequency and vibration.", "author": "Nikola Tesla" },

    { "text": "The future is already here — it's just not very evenly distributed.", "author": "William Gibson" },

    { "text": "Your time is limited, so don't waste it living someone else's life.", "author": "Steve Jobs" },

    { "text": "Stay hungry, stay foolish.", "author": "Steve Jobs" },

    { "text": "The only way to do great work is to love what you do.", "author": "Steve Jobs" },

    { "text": "The fool doth think he is wise, but the wise man knows himself to be a fool.", "author": "William Shakespeare" },

    { "text": "To be, or not to be, that is the question.", "author": "William Shakespeare" },

    { "text": "We know what we are, but know not what we may be.", "author": "William Shakespeare" },

    { "text": "The first and greatest victory is to conquer yourself.", "author": "Plato" },

    { "text": "At the center of your being you have the answer; you know who you are and you know what you want.", "author": "Lao Tzu" },

    { "text": "When I let go of what I am, I become what I might be.", "author": "Lao Tzu" },

    { "text": "The wise man does not lay up his own treasures. The more he gives to others, the more he has for his own.", "author": "Lao Tzu" },

    { "text": "Do not be daunted by the enormity of the world's grief. Do justly, now. Love mercy, now. Walk humbly, now. You are not obligated to complete the work, but neither are you free to abandon it.", "author": "The Talmud" },

    { "text": "The wound is the place where the Light enters you.", "author": "Rumi" },

    { "text": "You were born with wings, why prefer to crawl through life?", "author": "Rumi" },

    { "text": "The quieter you become, the more you are able to hear.", "author": "Rumi" },

    { "text": "The eye with which I see God is the same eye with which God sees me.", "author": "Meister Eckhart" },

    { "text": "The soul always knows what to do to heal itself. The challenge is to silence the mind.", "author": "Caroline Myss" },

    { "text": "Life is a series of natural and spontaneous changes. Don't resist them; that only creates sorrow. Let reality be reality.", "author": "Lao Tzu" },

    { "text": "Mathematics reveals the order hidden beneath chaos.", "author": "Henri Poincaré" },

    { "text": "The essence of mathematics lies in its freedom.", "author": "Georg Cantor" },

    { "text": "In mathematics, the art of proposing a question must be held of higher value than solving it.", "author": "Georg Cantor" },

    { "text": "Mathematics is the music of reason.", "author": "James Joseph Sylvester" },

    { "text": "Numbers rule the universe.", "author": "Pythagoras" },

    { "text": "It is not knowledge, but the act of learning, that grants the greatest pleasure.", "author": "Carl Friedrich Gauss" },

    { "text": "Pure mathematics is the world’s best game. It is more absorbing than chess, more of a gamble than poker, and lasts longer than Monopoly.", "author": "Richard J. Trudeau" },

    { "text": "Every formula which expresses a law of nature is a hymn of praise to God.", "author": "Maria Mitchell" },

    { "text": "When mathematics loses its connection to truth, it becomes only arithmetic.", "author": "Roger Penrose" },

    { "text": "The price of greatness is responsibility.", "author": "Winston Churchill" },

    { "text": "The soul becomes dyed with the color of its thoughts.", "author": "Marcus Aurelius" },

    { "text": "When you change the way you look at things, the things you look at change.", "author": "Wayne Dyer" },

    { "text": "We must be willing to let go of the life we planned so as to have the life that is waiting for us.", "author": "Joseph Campbell" },

    { "text": "He who conquers himself is the mightiest warrior.", "author": "Confucius" },

    { "text": "The world breaks everyone, and afterward, some are strong at the broken places.", "author": "Ernest Hemingway" },

    { "text": "To be wrong is nothing, unless you continue to remember it.", "author": "Confucius" },

    { "text": "A wise man changes his mind, a fool never will.", "author": "Spanish Proverb" },
  
    { "text": "The wound is the place where the Light enters you.", "author": "Rumi" },

    { "text": "Courage is grace under pressure.", "author": "Ernest Hemingway" },
  
    { "text": "Adversity introduces a man to himself.", "author": "Albert Einstein" },
  
    { "text": "The tallest trees grow from the deepest roots.", "author": "African Proverb" },
  
    { "text": "When the heart is full of gratitude, there is no room for fear.", "author": "James Faust" },
  
    { "text": "No rain, no flowers.", "author": "Anonymous (Modern Proverb)" },

    { "text": "Even the finest sword plunged into salt water will rust.", "author": "Sun Tzu" },
  
    { "text": "Do not let what you cannot do interfere with what you can do.", "author": "John Wooden" },
  
    { "text": "Life is a mirror and will reflect back to the thinker what he thinks into it.", "author": "Ernest Holmes" },
  
    { "text": "Faith is taking the first step even when you don’t see the whole staircase.", "author": "Martin Luther King Jr." },

    { "text": "For as he thinketh in his heart, so is he.", "author": "Proverbs 23:7" },
  
  { "text": "With God all things are possible.", "author": "Matthew 19:26 " },
  
    { "text": "Wisdom is the principal thing; therefore get wisdom: and with all thy getting get understanding.", "author": "Proverbs 4:7" },
  
    { "text": "In quietness and confidence shall be your strength.", "author": "Isaiah 30:15" },
  
    { "text": "The fear of the Lord is the beginning of wisdom.", "author": "Proverbs 1:7" },
  
    { "text": "For God hath not given us the spirit of fear; but of power, and of love, and of a sound mind.", "author": "2 Timothy 1:7 " },
    
    { "text": "Be still, and know that I am God.", "author": "Psalm 46:10" },
  
    { "text": "Whatever you sow is what you will reap.", "author": "Galatians 6:7" },
  
    { "text": "To everything there is a season, and a time to every purpose under the heaven.", "author": "Ecclesiastes 3:1" },
  
    { "text": "For wisdom is better than rubies; and all the things that may be desired are not to be compared to it.", "author": "Proverbs 8:11 " }

];

  // Pick random quote
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  // Display
  document.getElementById('quote-text').textContent = `"${randomQuote.text}"`;
  document.getElementById('quote-author').textContent = `— ${randomQuote.author}`;
});