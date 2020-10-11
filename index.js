const express = require("express");

const bodyParser = require("body-parser");

const makeRequest = require("./controllers/helperFunctions/requests");

const app = express();

const port = process.env.PORT || 1234;

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(__dirname + '/public'))




// this is where all the loaded API News Information is stored after the axios call
let articles = [];



const defaultConfig = {
    headers: {
        'Content-Type': 'application/json', 
        'Authorization': '9c6963310bad43209ced74318e40b0a8'
    }, params: {
        'country': 'us'
    }
}

app.get('/', async (req, res) => {

    articles = await makeRequest('Article', 'https://newsapi.org/v2/top-headlines', defaultConfig);
    let topFourHeadlines = await articles.splice(0, 4)
    res.render("pages/index", {
        articles: articles,
        headlines: topFourHeadlines
     });
});

/* app.get('/sources', async (req, res) => {

    let sourcesArr = await makeSourceRequest('https://newsapi.org/v2/sources?language=en', defaultConfig)
    res.render('pages/sources', {
        sources: sourcesArr
    })
}); */

app.get('/sources/:name', async (req, res) => {
    let currConfig = {
        headers: {
            'Content-Type': 'application/json', 
            'Authorization': '9c6963310bad43209ced74318e40b0a8'
        },
        params: {
            sources: `${req.params.name}`
        }
    }
    let currentArticles = await makeRequest('Article', 'http://newsapi.org/v2/top-headlines', currConfig);
    
    res.render("pages/sourcePage", {
        source: `${req.params.name}`,
        articles: currentArticles
    });    
})




app.listen(port, () => {
    console.log(`Project loaded on port ${port}`);
})
