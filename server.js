require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const axios = require('axios');
const cors = require('cors');
const RapidAPIKey = process.env.REACT_APP_RAPIDAPIKEY;
const oddsOrScores = 'odds'
const sport = 'baseball_mlb'
const API = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': RapidAPIKey,
        'X-RapidAPI-Host': `${oddsOrScores}.p.rapidapi.com`
    },
    params: {
        daysFrom: 'daysFrom'
    },
    url: `https://odds.p.rapidapi.com/v4/sports/${sport}/odds?regions=us&oddsFormat=decimal&markets=h2h%2Cspreads&dateFormat=iso`
};

app.use(cors());

app.get('/scores/mlbodds', (req, res) => {
    axios.request(API).then(response => {
        res.send(response.data);
    }).catch(err => {
        console.log(err)
    }, [])
});
