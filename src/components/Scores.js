import '../App.css';



const Scores = () => {
    return (
        <div className="App">
            <h2>Scores</h2>
            <div className="container">
                <a href="/scores/mlbscores" className="scoreslink">Get MLB Scores ⚾</a>
                <a href="/scores/nflscores" className="scoreslink">Get NFL Scores 🏈</a>
                <a href="/scores/ncaascores" className="scoreslink">Get NCAA Scores 🏈</a>
                <a href="/scores/mlsscores" className="scoreslink">Get MLS Scores ⚽</a>
                <a href="/scores/nhlscores" className="scoreslink">Get NHL Scores 🏒</a>
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