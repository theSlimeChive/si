import React from 'react';
import BigHeadline from '../../components/HeadlineBlock/BigHeadline/BigHeadline';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
/* 
    This component shows the headlines and news grid

*/


const Home = () => {
    return (
        <Container>
            <Row>
                <Col xs={7}>
                    <BigHeadline />
                </Col>
                <Col>Other Headlines</Col>
            </Row>
        </Container>
    )
}

module.exports = Home;