import './App.css';
//import { useEffect, useState } from 'react';
import ScoreDisplayMLB from './components/ScoreDisplayMLB';



function App(props) {
   

  return (
    <div className="App">
      <header className="App-header">
        <h1>Sports Scores</h1>
      </header>
      <div className="container">
        <ScoreDisplayMLB />
      </div>
    </div>
  );

}

export default App;
