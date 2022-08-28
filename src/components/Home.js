import '../App.css';
import background from '../splash.jpg';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Scores from './Scores';


const Home = () => {
    return (
        <div className="App">
            <div className="container">
                <img src={background} alt='splash' />
                <button className="scoresbtn">
                    <a href="/scores" className="scoreslink">Get Scores</a>
                </button>
                <button className="oddsbtn">
                    <a href="/odds" className="oddslink">Get Odds</a>
                </button>
            </div>
        </div>
    )
}


export default Home;