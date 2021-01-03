import React from 'react';
import { Card, Button } from 'react-bootstrap'
import './bigHeadline.scss'
/* 
    
    The Big Headline component is the biggest type of news article headline and shows an image, title, short bio, 
    and a link to read more
    The data is passed in props as an object

*/
const BigHeadline = (props) => {
    const { headline } = props;
    
    return (
        <Card id="bigHeadline">
            <Card.Img variant="top" src={headline.urlToImage} />
            <Card.Body>
                <Card.Title>{headline.title}</Card.Title>
                <Card.Text>{headline.description}</Card.Text>
                <Button variant="primary" href={headline.url}>Link to Article</Button>
            </Card.Body>
        </Card>
    )
    
}

module.exports = BigHeadline;