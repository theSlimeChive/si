const express = require("express");

const bodyParser = require("body-parser");

const axios = require('axios').default;

const app = express();

const port = process.env.PORT || 1234;

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(__dirname + '/public'))

// this is where all the loaded API News Information is stored after the axios call
var articles = [];
var topFourHeadlines = []


const defaultConfig = {
    headers: {
        'Content-Type': 'application/json', 
        'Authorization': '9c6963310bad43209ced74318e40b0a8'
    }, params: {
        'country': 'us'
    }
}
// this makes a GET Request to any valid path with header configurations
function makeGetRequest(path, config) {
    
    return new Promise((resolve, reject) => {
        axios.get(path, config)
        .then(response => {
            var result = response.data.articles;
            console.log(`Processing '${path}' `);
            resolve(result);
        }).catch(err => {
            if (err.response) {
                console.log(error.response.status);
                console.log(error.response.data);
            } else if (err.request) {
                console.log(err.request);
            } else { 
                console.log(`Error: ${err.message} `);
            }
            reject(err); 
        });
    })
}
// index route
app.get('/', async (req, res) => {

    articles = await makeGetRequest('https://newsapi.org/v2/top-headlines', defaultConfig);
    topFourHeadlines = await articles.splice(0, 4)
    res.render("pages/index", {
        articles: articles,
        headlines: topFourHeadlines
     });
});

app.get('/sources', async (req, res) => {
    let newsSources = await makeGetRequest('https://newsapi.org/v2/sources?language=en', defaultConfig)
    res.render('pages/sources', { sources: newsSources });
});

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
    let currentArticles = await makeGetRequest('http://newsapi.org/v2/top-headlines', currConfig);
    
    res.render("pages/sourcePage", {
        source: `${req.params.name}`,
        articles: currentArticles
    });    
    
    
})




app.listen(port, () => {
    console.log(`Project loaded on port ${port}`);
})
