import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
/* 
    
    The Big Headline component is the biggest type of news article headline and shows an image, title, short bio, 
    and a link to read more
    The data is passed in props as an object

*/

const BigHeadline = () => {
    return (
        <Card>
            <Card.Img variant="top" src="#" />
            <Card.Body>
                <Card.Title>Test 1</Card.Title>
                <Card.Text>A quick bio</Card.Text>
                <Button variant="info">Read More</Button>
            </Card.Body>
        </Card>
    )
} 

module.exports = BigHeadline;