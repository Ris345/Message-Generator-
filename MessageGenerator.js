# Message-Generator-

// Quotes Collection
const inspiration =[' "Just when the caterpillar thought the world was ending, he turned into a butterfly." --Proverb',
' "Try not to become a person of success, but rather try to become a person of value."--Albert Einstein',
' "You must expect great things of yourself before you can do them." --Michael Jordan',
' "Courage is resistance to fear, mastery of fear--not absence of fear." --Mark Twain',
' "I have not failed. I\'ve just found 10,000 ways that won\'t work." --Thomas A. Edison',
' "If you can\'t explain it simply, you don\'t understand it well enough." --Albert Einstein',
' "Only put off until tomorrow what you are willing to die having left undone." --Pablo Picasso',
'The successful warrior is the average man  with laser-like focus." --Bruce Lee',
'"Be kind whenever possible. It is always possible." — Dalai Lama',
' "Believe you can and you are halfway there."— Theodore roosevelt',
' "All things good to know are difficult to learn." —greek proverb',
' "Happiness is when what you think, what you say and what you do are in harmony." — Mahatma Gandhi',
' "Don\'t raise your voice, improve your argument." --Anonymous',
'An investment in knowledge always pays the best interest. — Benjamin Franklin']

const days =  ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']

const phrase = ['meditate on:','how about:','focus on:','consider:','remember:','keep in mind:'];
// Function to generate random Number.
function generateRandomNumber(num){
 let x = Math.floor(Math.random() * inspiration.length);
 let y = Math.floor(Math.random() * days.length);
 let z = Math.floor(Math.random() * phrase.length);
 // The result, randomizes the output.
 return `${days[y]} ${phrase[z]} ${inspiration[x]}`;
}

generateRandomNumber(days);

