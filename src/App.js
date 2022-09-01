import './App.css';
import background from './images/splash.jpg';

//import { useEffect, useState } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//Components
import Home from './components/Home';
import Scores from './components/Scores';
import Odds from './components/Odds';

import MLBOdds from './components/odds/MLBOdds';
import NFLOdds from './components/odds/NFLOdds';
import NCAAOdds from './components/odds/NCAAOdds';
import MLSOdds from './components/odds/MLSOdds';
import NHLOdds from './components/odds/NHLOdds';

import MLBScores from './components/scores/MLBScores';
import NFLScores from './components/scores/NFLScores';
import NCAAScores from './components/scores/NCAAScores';
import MLSScores from './components/scores/MLSScores';
import NHLScores from './components/scores/NHLScores';

function App(props) {
   

  return (
    <div className="App">
      <header className="App-header" backgroundimage={background}>
        <h1>Sports Book</h1>
        
        <Navbar className="navbar">
          <Nav className="nav">
            <Nav.Link className="navlink" href="/">Home</Nav.Link>
            <Nav.Link className="navlink" href="/scores">Get Scores</Nav.Link>
            <Nav.Link className="navlink" href="/odds">Get Odds</Nav.Link>
          </Nav>
        </Navbar>
      </header>
      <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/scores" element={<Scores />} />
            <Route path="/odds" element={<Odds />} />
            <Route path ="/odds/mlbodds" element={<MLBOdds />} />
            <Route path="/odds/nflodds" element={<NFLOdds />} />
            <Route path="/odds/ncaaodds" element={<NCAAOdds />} />
            <Route path="/odds/mlsodds" element={<MLSOdds />} />
            <Route path="/odds/nhlodds" element={<NHLOdds />} />
            <Route path="/scores/mlbscores" element={<MLBScores />} />
            <Route path="/scores/nflscores" element={<NFLScores />} />
            <Route path="/scores/ncaascores" element={<NCAAScores />} />
            <Route path="/scores/mlsscores" element={<MLSScores />} />
            <Route path="/scores/nhlscores" element={<NHLScores />} />
          </Routes>
        </Router> 
      <div className="container">    
      </div>
    </div>
  );

}

export default App;
