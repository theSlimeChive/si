const express = require('express');

const router = express.Router();

router.get('/', async (req, res) => {
    let sourcesArr = await makeSourceRequest('https://newsapi.org/v2/sources?language=en', defaultConfig)
    res.render('pages/sources', {
        sources: sourcesArr
    })
});