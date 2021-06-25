import React from 'react';
import ReactDOM from 'react-dom';
import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


/* This is the entry file to the web project, it should display the navbar, the HeadlineBlock, the NewsGrid, and the Footer */

import Navbar from './components/Navbar/navbar'
class Root extends React.Component {
    render() {
        return (
            <Router>
                <Navbar/>
                <Switch>
                    <Route path="/cnn">
                        <p>CNN</p>
                    </Route>
                    <Route path="/buzzfeed">
                        <p>Buzzfeed</p>
                    </Route>
                    <Route path="/all">
                        <p>All Sources</p>
                    </Route>
                    <Route path="/" exact>
                        <p>Home</p>
                    </Route>
                </Switch>
            </Router>
        )
    }
}

ReactDOM.render(<Root />, document.getElementById('root'));