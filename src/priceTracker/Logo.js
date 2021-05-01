import React from 'react';
import logo from '../images/logo.png';
import { Container, Row, Col } from 'reactstrap';

const Logo = () => {
    return (
        <>
            <Container>
                <Row>
                    <Col md="12" className="text-center mt-5">
                        <img src={logo} alt="Logo" />
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Logo;