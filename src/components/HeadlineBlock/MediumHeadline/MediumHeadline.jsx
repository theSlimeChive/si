/* 

    The MediumHeadline component is the main display grid lesser option and shows the image, title, short bio, and link.
    Data is passed through props as an array called secondaryNews
*/
import React from 'react'
import { ListGroup, Button } from 'react-bootstrap'
 
const MediumHeadline = (props) => {
    const { subHeadlines } = props;

    return (
        <ListGroup as="ul">
            {subHeadlines.map(elem => {
                return (
                    <ListGroup.Item as="li" key={elem.publishedAt}>
                        <strong>{elem.title}</strong>
                        {elem.description}
                        <Button href={elem.url}>Link</Button>
                    </ListGroup.Item>)
            })}
        </ListGroup>
    )
}

module.exports = MediumHeadline;