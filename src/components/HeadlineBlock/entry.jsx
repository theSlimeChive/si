import React from 'react'
import BigHeadline from './BigHeadline/BigHeadline';
import MediumHeadline from './MediumHeadline/MediumHeadline';
import { Container, Row, Col} from 'react-bootstrap'
import '../../public/css/main.css'
import './headlineBlock.scss'

/* 
    The Headline Block is the main display of top news.
    This Component will recieve an array of news called bigFour.
    This component should be a functional component 

*/

const HeadLineBlock = (props) => {
    const { headline, subHeadlines } = props;

    return (
        <div className="headlineBlock">
            <BigHeadline headline={headline} />
            <MediumHeadline subHeadlines={subHeadlines} />
        </div>
    )
}

module.exports = HeadLineBlock;