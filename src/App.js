import './App.css';
//import { useEffect, useState } from 'react';
import MLBScores from './components/MLBScores';
import NFLScores from './components/NFLScores';
import MLSScores from './components/MLSScores';
//import NHLScores from './components/NHLScores';

function App(props) {
   

  return (
    <div className="App">
      <header className="App-header">
        <h1>Sports Scores</h1>
      </header>
      <div className="container">
        <MLBScores />
        <NFLScores />
        <MLSScores />
        {/* <NHLScores /> is currently not active */}
      </div>
    </div>
  );

}

export default App;
