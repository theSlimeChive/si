import React from 'react';
import ReactDOM from 'react-dom';
import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';


/* This is the entry file to the web project, it should display the navbar, the HeadlineBlock, the NewsGrid, and the Footer */

import Navbar from './components/Navbar/navbar';
import Home from './pages/Home/home';
import Sources from './pages/Sources/sources';
import { makeRequest } from './controllers/helperFunctions/requests';
const defaultConfig = {
    headers: {
        'Content-Type': 'application/json', 
        'Authorization': '9c6963310bad43209ced74318e40b0a8'
    }, params: {
        'country': 'us'
    }
}
class Root extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: []
        }
    }
    async componentDidMount() {
        try {
            let _articles = await axios.get('https://newsapi.org/v2/top-headlines', defaultConfig)
            console.log(_articles)
        } catch(error) {
            console.log(error);
        }
        
    }
    render() {
        return (
            <Router>
                <Navbar />
                <Switch>
                    <Route path="/sources/:name" component={Sources}></Route>
                    <Route path="/buzzfeed">
                        <p>Buzzfeed</p>
                    </Route>
                    <Route path="/all">
                        <p>All Sources</p>
                    </Route>
                    <Route path="/" exact component={Home}></Route>
                </Switch>
            </Router>
        )
    }
}

ReactDOM.render(<Root />, document.getElementById('root'));