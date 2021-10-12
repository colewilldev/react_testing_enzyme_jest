import logo from './logo.svg';
import './App.css';
import GuessedWords from './GuessedWords';

const data = [
  { guessedWord: 'hello', letterMatchCount: 3 },
  { guessedWord: 'banana', letterMatchCount: 5 },
];

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <GuessedWords guessedWords={[]}></GuessedWords>
      </header>
    </div>
  );
}

export default App;
