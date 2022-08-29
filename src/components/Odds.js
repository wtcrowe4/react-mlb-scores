import '../App.css';



const Odds = () => {
    return (
        
        <div className="App">
            <title>Sports Odds</title>
            <h2>Odds</h2>
            <div className="container">
                <a href="/odds/mlbodds" className="oddslink">Get MLB Odds ⚾</a>
                <a href="/odds/nflodds" className="oddslink">Get NFL Odds 🏈</a>
                <a href="/odds/ncaaodds" className="oddslink">Get NCAA Odds 🏈</a>
                <a href="/odds/mlsodds" className="oddslink">Get MLS Odds ⚽</a>
                <a href="/odds/nhlodds" className="oddslink">Get NHL Odds 🏒</a>
            </div>
        </div>
    )
}

export default Odds;