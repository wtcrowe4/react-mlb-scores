import './App.css';
import background from './splash.jpg';
//import { useEffect, useState } from 'react';
//import { Nav, Navbar, Tab, Tabs } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//Components
import Home from './components/Home';
import Scores from './components/Scores';
//import MLBScores from './components/MLBScores';
// import NFLScores from './components/NFLScores';
// import NCAAScores from './components/NCAAScores';
// import MLSScores from './components/MLSScores';
// import NHLScores from './components/NHLScores';

function App(props) {
   

  return (
    <div className="App">
      <header className="App-header" backgroundimage={background}>
        <h1>Sports</h1>
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
