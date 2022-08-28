import { useState, useEffect } from 'react';
import '../../App.css'


const MLBOdds = () => {
    const [oddsArray, setOddsArray] = useState([]);

    useEffect(() => {
        const RapidAPIKey = process.env.REACT_APP_RAPIDAPIKEY
        const options = {
            method: 'GET',
            headers: {
            'X-RapidAPI-Key': RapidAPIKey,
              'X-RapidAPI-Host': 'odds.p.rapidapi.com'
            }
        };
        fetch('https://odds.p.rapidapi.com/v4/sports/baseball_mlb/odds?regions=us&oddsFormat=decimal&markets=h2h%2Cspreads&dateFormat=iso', options)
        .then(response => response.json())
        .then(response => setOddsArray(response))
        .catch(err => console.error(err))
    }, []);

    if(oddsArray.length > 0 ) {
        console.log(oddsArray)
        const displayOdds = oddsArray.map(oddsArray => {
            //Format the time
            const startTime = new Date(oddsArray.commence_time);
            const hour = startTime.getHours();
            const minute = startTime.getMinutes();
            const formattedMinute = minute < 10 ? `0${minute}` : minute;
            const ampm = hour >= 12 ? 'PM' : 'AM';
            const formattedHour = hour % 12 || 12;
            const formattedTime = `${formattedHour}:${formattedMinute} ${ampm}`;
            //Get bookmaker and odds
            // const bookmakers = oddsArray.bookmakers.map(bookmaker => {
            //     const bookie = bookmaker.title
            //     console.log(bookie)
            //     return bookie
            // }
            
            
            // )
            // console.log(bookmakers)
            
            const bookmaker = oddsArray.bookmakers[0].title
            const homeOdds = oddsArray.bookmakers[0].markets[1].outcomes[0].point
            const awayOdds = oddsArray.bookmakers[0].markets[1].outcomes[1].point
                return (
             
                    <div className='singleGameDiv' key={oddsArray.id}>
                        <h4>{formattedTime}</h4>
                        {/* <h4>{bookmaker}</h4> */}
                        <div className='teamDiv'>
                            <h4>{oddsArray.away_team}</h4> 
                            <br></br>
                            <h4>{oddsArray.home_team}</h4>
                        </div>
                        <div className='scoreDiv'>
                            
                            <h4>{awayOdds}</h4>
                            <br></br>
                            <h4>{homeOdds}</h4>
                        </div>
                        
                    </div>
                    
                )
            }
        )
    return (
        <div className='MLBScores'>
            <title>MLB Odds</title>
            <h2>MLB Odds</h2>
            {displayOdds}
        </div>
    )
} else {
    return (
        <div className='MLBScores'>
            <title>MLB Odds</title>
            <h2>MLB</h2>
            <p>Loading...</p>
        </div>
    )
}
}

export default MLBOdds;
    
    