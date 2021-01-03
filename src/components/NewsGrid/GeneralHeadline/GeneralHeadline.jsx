/* 

    The GeneralHeadline component is the regular sized news article inside the NewsGrid component 
    It shows the image, title, short bio and link
    the data is passed through props as an object called article.

*/
import React from 'react';
import { Card, Button } from 'react-bootstrap';


const GeneralHeadline = (props) => {
    const { article } = props;

    return (
        <Card>
            <Card.Body>
                <Card.Title>{article.title}</Card.Title>
                <Card.Text>{article.description}</Card.Text>
            </Card.Body>
            <Card.Footer>
                <Button href={article.url} variant="info">Link</Button>
            </Card.Footer>
        </Card>
    )
}

module.exports = GeneralHeadline;