const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd825f6ccc4msh5c52f4fbeced2a9p13985fjsne7ef710dac4e',
		'X-RapidAPI-Host': 'odds.p.rapidapi.com'
	}
};


export const getScores = () => {
    fetch('https://odds.p.rapidapi.com/v4/sports/baseball_mlb/scores?daysFrom=3', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err))
};
  
	


