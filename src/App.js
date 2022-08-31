import './App.css';
import background from './images/splash.jpg';

//import { useEffect, useState } from 'react';
//import { Nav, Navbar, Tab, Tabs } from 'react-bootstrap';
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
      </header>
      {/* <img src={background} alt='splash' /> */}
      {/* <Navbar className="navbar">
        <Nav className="nav">
          <Nav.Link href="#MLB">MLB</Nav.Link>
          <Nav.Link href="#NFL">NFL</Nav.Link>
          <Nav.Link href="#NCAA">NCAA</Nav.Link>
          <Nav.Link href="#MLS">MLS</Nav.Link>
          <Nav.Link href="#NHL">NHL</Nav.Link>
        </Nav>
      </Navbar> */}
      {/* <Tabs defaultActiveKey="MLB" id="controlled-tab-example">
        <Tab eventKey="MLB" title="MLB">
          <MLBScores />
        </Tab>
        <Tab eventKey="NFL" title="NFL" disabled>
          <NFLScores />
        </Tab>
        <Tab eventKey="NCAA" title="NCAA" disabled>
          <NCAAScores />
        </Tab>
        <Tab eventKey="MLS" title="MLS" disabled>
          <MLSScores />
        </Tab>
        <Tab eventKey="NHL" title="NHL" disabled>
          <NHLScores />
        </Tab>
      </Tabs> */}

      <div className="container">
       {/* <button onClick={}className='scoresbtn'>Go To Scores</button> */} 
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
        
        
        {/*<MLBScores />
         <NFLScores />
        <NCAAScores />
        <MLSScores /> */}
        {/* <NHLScores /> is currently not active */}
      </div>
    </div>
  );

}

export default App;
