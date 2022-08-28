import '../App.css';



const Odds = () => {
    return (
        
        <div className="App">
            <title>Sports Odds</title>
            <h2>Odds</h2>
            <div className="container">
                <a href="/mlbodds" className="oddslink">Get MLB Odds ⚾</a>
                <a href="/nflodds" className="oddslink">Get NFL Odds 🏈</a>
                <a href="/ncaaodds" className="oddslink">Get NCAA Odds 🏈</a>
                <a href="/mlsodds" className="oddslink">Get MLS Odds ⚽</a>
                <a href="/nhlodds" className="oddslink">Get NHL Odds 🏒</a>
            </div>
        </div>
    )
}

export default Odds;