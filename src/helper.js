//import { useState, useEffect } from 'react';
//create a helper file to store fetch functions


const helper = {
	  //create a helper function to fetch the data from the API
	  fetchScores: async (url) => {	
		const response = await fetch(url);
		const data = await response.json();
		return data;
	  },

	  fetchOdds: async (url) => {
		const response = await fetch(url);
		const data = await response.json();
		return data;
	  },
	  fetchMLB: async (url) => {
		const response = await fetch(url);
		const data = await response.json();
		return data;
	  },
	  fetchNFL: async (url) => {
		const response = await fetch(url);
		const data = await response.json();
		return data;
	  },
	  fetchNBA: async (url) => {
		const response = await fetch(url);
		const data = await response.json();
		return data;
	  },
	  fetchNHL: async (url) => {
		const response = await fetch(url);
		const data = await response.json();
		return data;
	  },
	  fetchMLS: async (url) => {
		const response = await fetch(url);
		const data = await response.json();
		return data;
	  },
	  fetchNCAA: async (url) => {
		const response = await fetch(url);
		const data = await response.json();
		return data;
	  }
	}




// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_KEY,
// 		'X-RapidAPI-Host': 'odds.p.rapidapi.com'
// 	}
// };


// export const getScores = () => {
//     fetch('https://odds.p.rapidapi.com/v4/sports/baseball_mlb/scores?daysFrom=3', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err))
// };
  
	
export default helper;

