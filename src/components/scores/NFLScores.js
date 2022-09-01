import { useState, useEffect } from 'react';


const NFLScores = (props) => {
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
    fetch('https://odds.p.rapidapi.com/v4/sports/americanfootball_nfl/scores?daysFrom=3', options)
    .then(response => response.json())
    .then(response => setScoresArray(response))
    .catch(err => console.error(err))
  }, []);  

  if(scoresArray.length > 0 ) {
   
    console.log(scoresArray)
    
    const displayScores = scoresArray.map(scoreArray => {
      const startTime = new Date(scoreArray.commence_time);
      const hour = startTime.getHours();
      const minute = startTime.getMinutes();
      const formattedMinute = minute < 10 ? `0${minute}` : minute;
      const ampm = hour >= 12 ? 'PM' : 'AM';
      const formattedHour = hour % 12 || 12;
      const formattedTime = `${formattedHour}:${formattedMinute} ${ampm}`; 
      const game = scoreArray.scores
      if(game !== null) {
        return (
          <div className='singleGameDiv' key={scoreArray.id}>
            <div className='teamDiv'>
              <h4>{game[0].name}: {game[0].score} </h4>
              <br></br>
              <h4>{game[1].name}: {game[1].score}</h4>
            </div>
            <div className='scoreDiv'>
              <h4>{game[0].score}</h4>
              <br></br>
              <h4>{game[1].score}</h4>
            </div>
          </div>
        )
      } else {
        return (
          <div className='singleGameDiv' key={scoreArray.id}>
            <div className='teamDiv'>
              <h4>{scoreArray.away_team}</h4>  
              <br></br>
              <h4>{scoreArray.home_team}</h4>
            </div>
            <div className='scoreDiv'>
              <h4>{formattedTime}</h4>
            </div>  
          </div>
        )
      }
    }
 )

  return (
    <div className="displayDiv">
      <h2>NFL</h2>
      {displayScores} 
    </div>
  )
  } else {
    return (
      <div className="displayDiv">
        <p>Loading...</p>
      </div>
    )
  }
}

export default NFLScores;