// Create a new component, this will produce some html.
// Take this components generated html and put it on the DOM
import React from 'react';
import ReactDOM from 'react-dom'
import SearchBar from './components/searchbar'

const API_KEY = 'AIzaSyC4isWVq58rvw56p7RZGherMZS2ZUOVA2g';


const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('.container'));
