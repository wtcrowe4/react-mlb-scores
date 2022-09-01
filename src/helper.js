import { useState, useEffect } from 'react';
import axios from 'axios'



const Helper = () => {
	const state = useState({ data: [], scores: [], odds: [], sport: '', daysFrom: 3 });
	const sport = state.sport
	const daysFrom = state.daysFrom
	const oddsURL = `https://odds.p.rapidapi.com/v4/sports/${sport}/odds?daysFrom=3`  
	const scoresURL = `https://odds.p.rapidapi.com/v4/sports/${sport}/scores?daysFrom=3`
	const RapidAPIKey = process.env.REACT_APP_RAPIDAPIKEY 
	const API = {
		method: 'GET',
		headers: {	
			'X-RapidAPI-Key': RapidAPIKey,
			'X-RapidAPI-Host': 'odds.p.rapidapi.com'
		},
		params: {
			daysFrom: 'daysFrom'
	 	},
	 	url:  oddsURL || scoresURL 
	}
	const fetchData = async () => {
		const response = await axios(API)
		return response.data
	}

	axios.request(API).then(response => {
		console.log(response)
	}).catch(err => {	
		console.log(err)
	}, [])

	return fetchData
}







// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': RapidAPIKey,
// 		'X-RapidAPI-Host': 'odds.p.rapidapi.com'
// 	}
// };


// export const getScores = () => {
//     fetch('https://odds.p.rapidapi.com/v4/sports/baseball_mlb/scores?daysFrom=3', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err))
// };
  
	
export default Helper;

