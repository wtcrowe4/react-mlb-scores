import { useState, useEffect } from 'react';


const MLSScores = (props) => {
  const [scoresArray, setScoresArray] = useState([]);

  useEffect(() => {
    const RapidAPIKey = process.env.REACT_APP_RAPIDAPIKEY
    const options = {
      method: 'GET',
      headers: {
      'X-RapidAPI-Key': RapidAPIKey,
        'X-RapidAPI-Host': 'odds.p.rapidapi.com'
      }
    };
    fetch('https://odds.p.rapidapi.com/v4/sports/soccer_usa_mls/scores?daysFrom=3', options)
    .then(response => response.json())
    .then(response => setScoresArray(response))
    .catch(err => console.error(err))
  }, []);  

  if(scoresArray.length > 0 ) {
 
    console.log(scoresArray)
    
    const displayScores = scoresArray.map(scoreArray => {
      //const displayStartTime = turn datetime into a readable time
      //const startTime = new Date(scoreArray.commence_time); 
      const game = scoreArray.scores
      if(game !== null) {
        return (
          <div className='singleGameDiv' key={scoreArray.id}>
            <h4>{game[0].name}: {game[0].score} </h4>
            
            <h4>{game[1].name}: {game[1].score}</h4>
            
          </div>
        )
      } else {
        return (
          <div className='singleGameDiv' key={scoreArray.id}>
            <p>{scoreArray.commence_time}</p>
            <p>{scoreArray.away_team} @ {scoreArray.home_team}</p>
          </div>
        )
      }
    }
 )

  return (
    <div className="MLSscores">
      <h2>MLS</h2>
      {displayScores} 
    </div>
  )
  } else {
    return (
      <div className="MLSscores">
        <p>Loading...</p>
      </div>
    )
  }
}

export default MLSScores;