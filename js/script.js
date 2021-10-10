/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
const quotes = [
  {
    quote: `All the world's a stage, and all the men and women merely players.`,
    source: 'William Shakespeare',
    citation: 'As You Like It',
    year: 1623,
    tags: 'Poetry'
  },

  {
    quote: `Our lives are not our own. We are bound to others, past and present, and by each crime and every kindness, we birth our future.`,
    source: 'David Mitchell',
    citation: 'Cloud Atlas',
    year: 2004,
    tags: 'Philosophical'
  },

  {
    quote: `You must take life the way it comes at you and make the best of it.`,
    source: 'Yann Martel',
    citation: 'Life of Pi',
    year: 2001,
    tags: 'Inspiring'
  },

  {
    quote: `Those who wish to learn magic ought to begin by looking around them.`,
    source: 'Paulo Coelho',
    citation: 'Hippie',
    year: 2018,
    tags: 'Inspiring'
  },

  {
    quote: `Yesterday I was clever, so I wanted to change the world. Today I am wise, so I am changing myself.`,
    source: 'Rumi',
    citation: `Masnavi-I Ma'navi`,
    year: 1260,
    tags: 'Philosophical'
  },

  {
    quote: `You were born with wings, why prefer to crawl through life?`,
    source: 'Rumi',
    citation: `Masnavi-I Ma'navi`,
    year: 1260,
    tags: 'Motivational'
  },

  {
    quote: `All we have to decide is what to do with the time that is given to us.`,
    source: 'J.R.R. Tolkien',
    citation: 'Lord of the Rings',
    year: 1954,
    tags: 'Motivational'
  },

  {
    quote: `Every path is the right path. Everything could've been anything else. And it would have just as much meaning.`,
    source: 'Nemo',
    citation: 'Mr. Nobody',
    year: 2009,
    tags: 'Philosophical'
  },

  {
    quote: `Just because I'm losing, doesn't mean I'm lost.`,
    source: 'Coldplay',
    citation: 'Lost',
    year: 2008,
    tags: 'Motivational'
  },

  {
    quote: `Our lives are difined by opportunities, even the ones we miss.`,
    source: 'Benjamin Button',
    citation: 'The Curious Case of Benjamin Button',
    year: 2009,
    tags: 'Philosophical'
  }
];




/***
 * `getRandomQuote` function
***/
function getRandomQuote() {
  let randomNumber = Math.floor( Math.random() * 10 );
  let randomQuote = quotes[randomNumber];
  return randomQuote;
};



/***
 * `printQuote` function
***/
let html = '';

function printQuote() {
 let randomQuote = getRandomQuote();
 html = `
  <p class="quote"> ${randomQuote.quote} </p>
  <p class="source"> ${randomQuote.source}
 `;
  if( randomQuote.citation !== undefined ) {
    html += `<span class="citation"> ${randomQuote.citation} </span>`;
  };
  if ( randomQuote.year !== undefined ) {
    html += `<span class="year"> ${randomQuote.year} </span>`
  };
  if ( randomQuote.tags !== undefined ) {
    html += `<span class="year"> ${randomQuote.tags} </span>`
  };
  html += `</p>`;
  document.getElementById('quote-box').innerHTML = html ;
};

//randomRGB function - creates a random color
const randomValue = () => Math.floor( Math.random*256 );

function randomRGB() {
  const color = `rgb( ${randomValue()}, ${randomValue()}, ${randomValue()} )`;
  color;
}









/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);