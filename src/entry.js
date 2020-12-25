import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import {makeRequest} from '../controllers/helperFunctions/requests';
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';

/* This is the entry file to the web project, it should display the navbar, the HeadlineBlock, the NewsGrid, and the Footer */

import Bar from './components/Navbar/navbar.jsx'
import Home from './pages/Home/home';

const defaultConfig = {
    headers: {
        'Content-Type': 'application/json', 
        'Authorization': '9c6963310bad43209ced74318e40b0a8'
    }, params: {
        'country': 'us'
    }
}

const Root = () => {
    const [articles, setArticles] = useState([]);

    const getPosts = async () => {
        let articles = await axios.get('https://newsapi.org/v2/top-headlines', defaultConfig)
        .then(res => {
            console.log(res.data.articles)
        })
    };
    
    useEffect(() => {
        getPosts();
    })
    return (
        <Router>
            <Bar/>
            <Switch>
                <Route path='/' exact>
                    <Home />
                </Route>
                <Route path='/two' exact>
                    {/* Source Page*/}
                </Route>
                <Route path='/three' exact>
                    {/* Content Page*/}
                </Route>
            </Switch>
        </Router>
    )
}

ReactDOM.render(<Root />, document.getElementById('root'));