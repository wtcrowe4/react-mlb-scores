


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_KEY,
		'X-RapidAPI-Host': 'odds.p.rapidapi.com'
	}
};


export const getScores = () => {
    fetch('https://odds.p.rapidapi.com/v4/sports/baseball_mlb/scores?daysFrom=3', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err))
};
  
	


