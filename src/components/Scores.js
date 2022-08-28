import '../App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MLBScores from './MLBScores';

const Scores = () => {
    return (
        <div className="App">
            <div className="container">
                <MLBScores />
            </div>
        </div>
        // <Router>
        // <Routes>
        //     <Route path="/scores" element={<MLBScores />} />
        // </Routes>
        // </Router>
    )
    }

export default Scores;