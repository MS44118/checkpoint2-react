import React from 'react';
import './App.css';
import GameList from './Components/GameList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>list-games</h1>
      </header>
      <GameList />
    </div>
  );
}

export default App;
