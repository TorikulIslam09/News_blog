import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Heder from '../Heder/Heder';
import Leftnav from '../Leftnav/Leftnav';
import Rightnav from '../Rightnav/Rightnav'
import {Outlet} from "react-router-dom";

const Layout = () => {
    return (
    <div className="">
        <Heder></Heder>
            <Container>
                <Row>
                    <Col lg={2}> 
                        <Leftnav></Leftnav>
                    </Col>
                    <Col lg={7}>
                        <Outlet></Outlet>
                    </Col>

                    <Col lg={3}> 
                        <Rightnav></Rightnav>
                    </Col>
                </Row>
            </Container>
    </div>
    );
};

export default Layout;