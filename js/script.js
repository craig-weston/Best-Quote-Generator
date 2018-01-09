//event listener for when the user clicks the button to show a random quote
document.getElementById('loadQuote').addEventListener('click', printQuote, false);

var message = '';
var red;
var green;
var blue;
var viewedQuotes =[];
var arr = [];

var quotes = [
  {
    quote: 'You can do anything but not everything',
    source: 'David Allen',
    citation: 'Making It All Work',
    year: 2009,
  },
   {
    quote: 'Learning never exhausts the mind.',
    source: 'Leonardo da Vinci',
    citation: '',
    year: 1519,
  },
  
   {
    quote: 'Think in the morning. Act in the noon. Eat in the evening. Sleep in the night.',
    source: 'William Blake',
    citation: '',
    year: 1757,
  },
    {
    quote: 'Keep your face always toward the sunshine - and shadows will fall behind you.',
    source: 'Walt Whitman',
    citation: '',     
    year: 1855,
  }, 
  {
		quote: "What we think, we become",
		source: "Buddha",
		citation: "",
		year: "",
	},
    {
    quote: 'The only true wisdom is in knowing you know nothing.',
    source: 'Socrates',
    citation: '',
    year: 399,
  },    
       
];

  
function print(quote) {
	var outputDiv = document.getElementById('quote-box');
	outputDiv.innerHTML = quote;
}
  
// function to get a random quote
function getRandomQuote() {
	var flag = '1';
	

	do {
		var randomIndex = Math.floor(Math.random() * quotes.length);
		
		// if all random quote displayed, start again
		if (arr.length === quotes.length) {
			arr = [];
		}

		// check if index is already generated
		if (arr.indexOf(randomIndex) === -1) {
			arr.push(randomIndex);
			flag = 0;
		}

	} while(flag === '1');
	
	// return quote
	return quotes[randomIndex];
}

//function to genereate random rgb color value
function randomColorGenerator() {
	var randomColor;
	red = Math.floor(Math.random() * 256 );
	green = Math.floor(Math.random() * 256 );
	blue = Math.floor(Math.random() * 256 );
	randomColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
	return randomColor;
}


// print random function to screen from the qoutes array 
function printQuote() {

	var quotes = getRandomQuote();
	message ='<p class="quote">' + quotes.quote + '</p>';
	message  += '<p class="source">' + quotes.source;
	if ( quotes.citation ) {
		message += '<span class="citation">' + quotes.citation + '</span>';
	} else {
		message += '';
	}
	if (quotes.year) {
		message += '<span class="year">' + quotes.year + '</span></p>';	
	} else {
		message += '';
	}
	print(message);
	//Generate random color
	randomColorGenerator();
	//Update background with new random color
	document.querySelector('body').style.backgroundColor = randomColorGenerator();
}


