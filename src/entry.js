import React from 'react';
import ReactDOM from 'react-dom';

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