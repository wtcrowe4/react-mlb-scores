import './App.css';
import { useEffect, useState } from 'react';
// import { getScores } from './helper';
//import ScoreDisplay from './components/ScoreDisplay';

function App() {
  const [scoresArray, setScoresArray] = useState([]);
  
  
  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'd825f6ccc4msh5c52f4fbeced2a9p13985fjsne7ef710dac4e',
        'X-RapidAPI-Host': 'odds.p.rapidapi.com'
      }
    };
    fetch('https://odds.p.rapidapi.com/v4/sports/baseball_mlb/scores?daysFrom=3', options)
    .then(response => response.json())
    .then(response => setScoresArray(response))
    .catch(err => console.error(err))
  }
  , []);
  console.log(scoresArray)
  
  

  if(scoresArray.length > 0 ) {
    // const sport = scores[0].sport_title
    // const homeTeam = score.scores[0].name;
    // const awayTeam = score.scores[1].name;
    const displayScores = scoresArray.map(scoreArray => {
      const game = scoreArray.scores
      if(game !== null) {
        return (
          <div className='singleGameDiv' key={scoreArray.id}>
            <h4>{game[0].name}: {game[0].score} </h4>
            <p>at</p>
            <h4>{game[1].name}: {game[1].score}</h4>
            
          </div>
        )
      } else {
        return (
          <div className='singleGameDiv' key={scoreArray.id}>
            <h4>Not Started</h4>
            <p>{scoreArray.away_team} @ {scoreArray.home_team}</p>
          </div>
        )
      }
    })

  return (
    <div className="App">
      <header className="App-header">
        <h1>MLB Scores</h1>
      </header>
      <div className="container">
        {/* <ScoreDisplay data={scores}/> */}
        {displayScores}
      
      </div>
    </div>
  );
  } else {
    return <div>Loading...</div>
  }
}

export default App;
