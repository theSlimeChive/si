/* This Component will be a grid of GeneralHeadlines that are returned as one component
    NEEDED: GeneralHeadlines, React Hooks, Functional Components 
    The data will come from props as an array to display called generalNews.    
*/
import React from 'react'
import { CardDeck } from 'react-bootstrap';
import GeneralHeadline from './GeneralHeadline/GeneralHeadline'

const NewsGrid = (props) => {
    const { articles } = props;

    return (
        <CardDeck>
            {articles.map(article => {
                return <GeneralHeadline article={article} />
            })}
        </CardDeck>
    )
}

module.exports = NewsGrid;