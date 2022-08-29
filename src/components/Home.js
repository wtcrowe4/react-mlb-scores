import '../App.css';
import background from '../images/splash.jpg';

const Home = () => {
    return (
        <div className="App">
              <button className="scoresbtn">
                    <a href="/scores" className="scoreslink">Get Scores</a>
                </button>
                <button className="oddsbtn">
                    <a href="/odds" className="oddslink">Get Odds</a>
                </button>
            <div className="container">
                
                <img src={background} alt='splash' />
              
            </div>
        </div>
    )
}


export default Home;