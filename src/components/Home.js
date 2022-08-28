import '../App.css';
import background from '../splash.jpg';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Scores from './Scores';


const Home = () => {
    return (
        <div className="container">
            <div className="container">
                <img src={background} alt='splash' />
            </div>
        </div>
    )
}


export default Home;