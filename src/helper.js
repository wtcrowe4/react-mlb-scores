// import { useState, useEffect } from 'react';
// import axios from 'axios'



// const Helper = (props) => {
	
// 		//const state = useState({ data: [], scores: [], odds: [], sport: '', daysFrom: 3 });
// 		//const sport = state.sport
// 		const sport = 'baseball_mlb'
// 		//const daysFrom = state.daysFrom  (Must be 1-3)
// 		const oddsURL = `https://odds.p.rapidapi.com/v4/sports/${sport}/odds?daysFrom=3`  
// 		const scoresURL = `https://odds.p.rapidapi.com/v4/sports/${sport}/scores?daysFrom=3`
// 		const RapidAPIKey = process.env.REACT_APP_RAPIDAPIKEY 
// 		const API = {
// 			method: 'GET',
// 			headers: {	
// 				'X-RapidAPI-Key': RapidAPIKey,
// 				'X-RapidAPI-Host': 'odds.p.rapidapi.com'
// 			},
// 			params: {
// 				daysFrom: 'daysFrom'
// 			},
// 			url:  oddsURL || scoresURL 
// 		}
// 		const fetchData = async () => {
// 			const response = await axios(API)
// 			return response.data
// 		}

// 		axios.request(API).then(response => {
// 			console.log(response)
// 		}).catch(err => {	
// 			console.log(err)
// 		}, [])

// 		return fetchData;
	
// 	}

	

	







// // const options = {
// // 	method: 'GET',
// // 	headers: {
// // 		'X-RapidAPI-Key': RapidAPIKey,
// // 		'X-RapidAPI-Host': 'odds.p.rapidapi.com'
// // 	}
// // };


// // export const getScores = () => {
// //     fetch('https://odds.p.rapidapi.com/v4/sports/baseball_mlb/scores?daysFrom=3', options)
// // 	.then(response => response.json())
// // 	.then(response => console.log(response))
// // 	.catch(err => console.error(err))
// // };
  
	
// export default Helper;

import axios from 'axios';


const fetchSearch = async (sport) => {
	const response = await axios.get(`'https://odds.p.rapidapi.com/v4/sports/${sport}/odds?regions=us&oddsFormat=decimal&markets=h2h%2Cspreads&dateFormat=iso'`, {
	headers: {
	  'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPIKEY,
	  'X-RapidAPI-Host': 'odds.p.rapidapi.com'
	}
  })
  return response.data
}

const wrapPromise = (promise) => {
	let status = 'pending'
  	let result 
  	let suspender = promise.then(
		(res) => {
		status = 'success'
		result = res
		},
		(err) => {
		status = 'error'
		result = err
		}
  	)
  return {
	read() {
	  if (status === 'pending') {
		throw suspender
	  } else if (status === 'error') {
		throw result
	  } else if (status === 'success') {
		return result
	  }
	}
  }
}

export const createResource = (sport) => {
	return wrapPromise(fetchSearch('sport'))
}