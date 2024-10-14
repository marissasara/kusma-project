import React from 'react';
import { Row,Col } from 'react-bootstrap';

import VideoComponent from './components/VideoComponent';
import CardComponent from './components/CardComponent';
import DeejayComponent from './components/DeejayComponent';
import BannerComponent from './components/BannerComponent';
import ChatroomComponent from './components/ChatroomComponent';
import VoteComponent from './components/VoteComponent';


const Home = () => {

    return (
        <>
            <Row className="mt-4 mb-4 ms-1">
                <BannerComponent />
            </Row>

            <Row className="mt-4 mb-4 ms-1">
                {/* <CardComponent /> */}
                <DeejayComponent />
            </Row>
            <hr />
            <Row className="mt-4 mb-4 ms-1">
                <Col  xs={12} md={8} className="border border-1 p-3 rounded mb-3">
                    <VideoComponent />
                </Col>

                <Col xs={12} md={4} className="border border-1 p-3 rounded d-none d-sm-flex">
                    <ChatroomComponent />
                </Col>
            </Row>

            <Row className="mt-4 mb-4 ms-1">
                {/* <CardComponent /> */}
                <VoteComponent />
            </Row>

        </>
    );
};

export default Home;