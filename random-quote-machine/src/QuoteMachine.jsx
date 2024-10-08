import React from 'react';
import axios from  'axios';
import './QuoteMachine.css';

function QuoteMachine(){
  //Usestate
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  //Fetching Api
  const fetchData = async () => {
    const response = await axios.get('https://api.quotable.io/random');
    setQuote(response.data.content);
    setAuthor(response.data.author);
  };

  useEffect(()=>{
    fetchData();
  }, []);
  
  return (
    <div id="quote-box" className="quote-box">
          <p id="text">{quote}</p>
          <p id="author">{author}</p>
          <button id="new-quote" onClick={fetchQuote}>New Quote</button>
          <a 
              id="tweet-quote" 
              href={`https://twitter.com/intent/tweet?text="${quote}" - ${author}`} 
              target="_blank" 
              rel="noopener noreferrer">
              Tweet Quote
          </a>
      </div>
  );
}

export default QuoteMachine