const express = require("express");

const bodyParser = require("body-parser");

const axios = require('axios').default;

const app = express();

const port = process.env.PORT || 1234;

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }))


// this is where all the loaded API News Information is stored after the axios call
var articles = [];

// this makes a GET Request to any valid path with header configurations
function makeGetRequest(path, config) {
    return new Promise((resolve, reject) => {
        axios.get(path, config)
        .then(response => {
            var result = response.data.articles;
            console.log(`Processing '${path}' `);
            resolve(result);
        }).catch(err => reject(err));
    })
}
// index route
app.get('/', async (req, res) => {
    const config = {
        headers: {
            'Content-Type': 'application/json', 
            
            'Authorization': '9c6963310bad43209ced74318e40b0a8'
        }, params: {
            'country': 'us' 
        }
    }
    articles = await makeGetRequest('https://newsapi.org/v2/top-headlines', config);
    res.render("index", {
        articles: articles
     });
});

app.listen(port, () => {
    console.log(`Project loaded on port ${port}`);
})
