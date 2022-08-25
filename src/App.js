import './App.css';
import { getScores } from './helper';

function App() {
  const scores = getScores
  if(scores.length === 0) {
    return <div>Loading...</div>
  } else {
    console.log(scores)
  }
    
    



  return (
    <div className="App">
      <header className="App-header">
        <h1>MLB Scores</h1>
      </header>
      <div className="container">
        {/* {displayScores} */}
      
      
      </div>
    </div>
  );
}

export default App;
