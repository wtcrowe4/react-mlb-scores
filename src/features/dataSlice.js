import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const dataSlice = createSlice({
    name: 'data',
    initialState: {
        data: [],
        scores: [],
        odds: [],
        sport: '',
        daysFrom: 3
    },
    reducers: {
        setData: (state, action) => {
            state.data = action.payload;
        }, 
        setScores: (state, action) => {
            state.scores = action.payload;
        }, 
        setOdds: (state, action) => {
            state.odds = action.payload;
        }, 
        setSport: (state, action) => {
            state.sport = action.payload;
        },
        setDaysFrom: (state, action) => {
            state.daysFrom = action.payload;
        },
        clearData: (state) => {
            state.data = [];
            state.scores = [];
            state.odds = [];
            state.sport = '';
        }

    }
}
);

export const fetchData = async () => {
    const fetchDataThunk = async (dispatch, getState) => { 
        const state = getState();
        const sport = state.data.sport;
        const daysFrom = state.data.daysFrom;
        const oddsURL = `https://odds.p.rapidapi.com/v4/sports/${sport}/odds?daysFrom=${daysFrom}`  
        const scoresURL = `https://odds.p.rapidapi.com/v4/sports/${sport}/scores?daysFrom=${daysFrom}`
        const RapidAPIKey = process.env.REACT_APP_RAPIDAPIKEY
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': RapidAPIKey,
                'X-RapidAPI-Host': 'odds.p.rapidapi.com'
            },
            params: {
                daysFrom: daysFrom
            }
        };
        
            const oddsResponse = await axios.request(options, oddsURL);
            const scoresResponse = await axios.request(options, scoresURL);
            return {
                odds: oddsResponse.data,
                scores: scoresResponse.data
            }
    }
    return dispatch => {
        dispatch(fetchDataThunk());
    }
}

export const { setData, setScores, setOdds, setSport, setDaysFrom, clearData } = dataSlice.actions;

export default dataSlice.reducer;





