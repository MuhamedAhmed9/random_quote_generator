var quote = document.getElementById("quote");
var author = document.getElementById("author");
var quoteGenerator = document.getElementById("quoteGenerator");

var quotes_list = [
  {
    author: `--Madeleine L'Engle`,
    quote: `"You have to write the book that wants to be written. And if the book will be too difficult for grown-ups, then you write it for children."`,
  },
  {
    author: `--Stephen King`,
    quote: `"If you don't have time to read, you don't have the time (or the tools) to write. Simple as that."`,
  },
  {
    author: `--Anaïs Nin `,
    quote: `"We write to taste life twice, in the moment and in retrospect."`,
  },
  {
    author: `--Mark Twain`,
    quote: `"Substitute 'damn' every time you're inclined to write 'very;' your editor will delete it and the writing will be just as it should be."`,
  },
  {
    author: `--Toni Morrison`,
    quote: `"If there's a book that you want to read, but it hasn't been written yet, then you must write it."`,
  },
  {
    author: `--Jack Kerouac, The Dharma Bums`,
    quote: `"One day I will find the right words, and they will be simple."`,
  },
  {
    author: `--Benjamin Franklin`,
    quote: `"Either write something worth reading or do something worth writing."`,
  },
];

quoteGenerator.onclick = generateQuote;

function generateQuote() {
  let random_number = Math.floor(Math.random() * quotes_list.length);
  author.innerHTML = quotes_list[random_number].author;
  quote.innerHTML = quotes_list[random_number].quote;
}
