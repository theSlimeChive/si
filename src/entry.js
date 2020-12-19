import React from 'react';
import ReactDOM from 'react-dom';

/* This is the entry file to the web project, it should display the navbar, the HeadlineBlock, the NewsGrid, and the Footer */

import Navbar from './components/Navbar/navbar'
class Root extends React.Component {
    render() {
        return (
            <div>
                <Navbar/>
            </div>
        )
    }
}

ReactDOM.render(<Root />, document.getElementById('root'));