const express = require("express");

const bodyParser = require("body-parser");

const axios = require('axios').default;

const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }))

// this is where all the loaded API News Information is stored after the axios call
var articles = [];

// index route
app.get('/', (req, res) => {
    const config = {
        headers: {
            'Content-Type': 'application/json', 
            // Authorization API KEY NEEDS to be hidden 
            'Authorization': '9c6963310bad43209ced74318e40b0a8'
        }, params: {
            'country': 'us' 
        }
    }
    axios.get('https://newsapi.org/v2/top-headlines', config)
    .then(response => {
        articles = response.data.articles;

        if (articles.length > -1) {
            console.log("Data Recieved!");
        }
    })
    .catch(error => console.error(error));
    res.render("index", {
        articles: articles
     });
});

app.listen(1234, () => {
    console.log("Up and running");
})
