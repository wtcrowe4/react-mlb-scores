import { useState, useEffect } from 'react';

const ScoreDisplay = ({ scores }) => {
  const [displayScores, setDisplayScores] = useState([]);
  useEffect(() => {
    setDisplayScores(scores);
  }
  , [scores]);
  return (
    <div className="container">
      {displayScores.map(score => (
        <div key={score.id}>
          <h2>{score.home_team.name}</h2>
          <h2>{score.away_team.name}</h2>
          <h2>{score.home_team.score}</h2>
          <h2>{score.away_team.score}</h2>
        </div>
      ))}
    </div>
  );
}

export default ScoreDisplay;