const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterButton = document.getElementById('twitter');
const newQuoteButton = document.getElementById('new-quote');
const loader = document.getElementById('loader');

// let apiQuotes = [];

function showLoadingSpinner() {
    loader.hidden = false;
    quoteContainer.hidden = true;
}

function removeCompleteSpinner() {
    quoteContainer.hidden = false;
    loader.hidden = true;
}

// Display New Quotes
function newQuote() {
    showLoadingSpinner();
    // Pick a random quote from local quote array
    const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
    // Checkif Author field is blankand replace it with 'Unknown' 
    if (!quote.author) {
        authorText.textContent = "Unknown";
    }else {
        authorText.textContent = quote.author;
    }
    //Checking quote lenght to determine the styling
    if (quote.text.length > 100) {
        quoteText.classList.add('long-quote');
    }else {
        quoteText.classList.remove('long-quote');
    }
    // set quote and hide loader
    quoteText.textContent = quote.text;
    removeCompleteSpinner();
}

// Get Quotes from API
/*
async function getQuotes() {
    const apiUrl = 'https://type.fit/api/quotes';

    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuote();
    } catch (error) {
        // catch error
    }
}
*/

//Tweet Quote
function tweetQuotes() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, '_blank');
}

//Event Listeners
newQuoteButton.addEventListener('click', newQuote);
twitterButton.addEventListener('click', tweetQuotes);

//On load
// getQuotes();
newQuote();
