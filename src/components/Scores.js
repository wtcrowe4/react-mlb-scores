import '../App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MLBScores from './MLBScores';

const Scores = () => {
    return (
        <MLBScores />
        // <Router>
        // <Routes>
        //     <Route path="/scores" element={<MLBScores />} />
        // </Routes>
        // </Router>
    )
    }

export default Scores;