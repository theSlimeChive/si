const express = require('express');

const makeRequest = require('./helperFunctions/requests');
const defaultConfig = require('./helperFunctions/APIConfig');

const router = express.Router();

router.get('/', async (req, res) => {
    let sourcesArr = await makeRequest('Sources', 'https://newsapi.org/v2/sources?language=en', defaultConfig)
    res.render('pages/sources', {
        sources: sourcesArr
    })
});

router.get('/:name', async (req, res) => {
    let currConfig = {
        headers: {
            'Content-Type': 'application/json', 
            'Authorization': '9c6963310bad43209ced74318e40b0a8'
        },
        params: {
            sources: `${req.params.name}`
        }
    }
    let currentArticles = await makeRequest('Articles', 'http://newsapi.org/v2/top-headlines', currConfig);
    

    res.render("pages/sourcePage", {
        source: `${req.params.name}`,
        articles: currentArticles
    });    
})

module.exports = router;