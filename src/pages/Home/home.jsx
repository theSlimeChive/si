import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Home = () => {
    return (
        <>
            <Container>
                <Row>
                    <Col xs={8}>Wider</Col>
                    <Col>Smaller</Col>
                </Row>
            </Container>

        </>
    )
}

module.exports = Home;