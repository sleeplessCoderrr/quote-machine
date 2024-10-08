import React, { useState, useEffect } from 'react';  

const QuoteMachine = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  // Function to fetch a random quote
  const fetchData = async () => {
    const response = await fetch('https://type.fit/api/quotes');
    const data = await response.json();

    // Get a random quote
    const randomQuote = data[Math.floor(Math.random() * data.length)];
    setQuote(randomQuote.text);
    setAuthor(randomQuote.author || 'Unknown');
  };

  useEffect(() => {
    fetchData();
  }, []);  

  return (
    <div id="quote-box" className="d-flex justify-content-center align-items-center vh-100">
      <div className="text-center">
        <p id="text">{quote}</p>
        <p id="author">- {author}</p>
        <button id="new-quote" onClick={fetchData} className="btn btn-primary">
          New Quote
        </button>
        <a
          id="tweet-quote"
          href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
            `"${quote}" - ${author}`
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-info"
        >
          Tweet
        </a>
      </div>
    </div>
  );
};

export default QuoteMachine;
