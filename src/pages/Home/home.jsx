import React, { useState, useEffect} from "react";
import { Container, Row, Col } from "react-bootstrap";
import HeadLineBlock from '../../components/HeadlineBlock/entry';
import NewsGrid from '../../components/NewsGrid/NewsGrid';


const Home = (props) => {
    const { articles } = props;
    // so in order to get the first 
    const bigHeadline = articles[0];
    articles.splice(0,1);
    const subHeadlines = articles.splice(0, 3);

    return (
            <Container>  
                <HeadLineBlock headline={bigHeadline} subHeadlines={subHeadlines}/>
                <NewsGrid articles={articles} />
            </Container>
       
    )
}

module.exports = Home;