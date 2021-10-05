import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [count, setCount] = React.useState(0);
  const [error, setError] = React.useState(false);

  const increment = () => {
    setError(false);
    return setCount(count + 1);
  };
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      return setError(true);
    }
  };

  return (
    <div data-test='component-app' className='App'>
      {error && (
        <span data-test='error-message' className='error'>
          Counter Can't go below 0
        </span>
      )}
      <h1 data-test='counter-title'>
        The counter is currently&nbsp;
        <span data-test='count'>{count}</span>
      </h1>

      <button data-test='increment-button' onClick={increment}>
        Increment Counter
      </button>
      <button data-test='decrement-button' onClick={decrement}>
        Decrement Count
      </button>
    </div>
  );
}

export default App;
