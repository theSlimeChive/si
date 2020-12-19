import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

/* This is the entry file to the web project, it should display the navbar, the HeadlineBlock, the NewsGrid, and the Footer */

import Bar from './components/Navbar/navbar.jsx'
import Home from './pages/Home/home';



class Root extends React.Component {
    render() {
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
}

ReactDOM.render(<Root />, document.getElementById('root'));