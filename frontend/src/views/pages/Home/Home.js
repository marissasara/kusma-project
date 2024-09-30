import React from 'react';
import { Row,Col } from 'react-bootstrap';

import VideoComponent from './components/VideoComponent';
import CardComponent from './components/CardComponent';
import DeejayComponent from './components/DeejayComponent';
import BannerComponent from './components/BannerComponent';
import ChatroomComponent from './components/ChatroomComponent';
import PollComponent from './components/PollComponent';

const Home = () => {

    return (
        <div>
            <Row>
                <BannerComponent />
            </Row>

            <Row className="mt-4 d-none d-sm-flex">
                {/* <CardComponent /> */}
                <DeejayComponent />
            </Row>
            <Row className="mt-4">
                <Col xs={12} md={8} className="border border-1 p-3 rounded mb-3">
                    <VideoComponent />
                </Col>

                <Col xs={12} md={4} className="border border-1 p-3 rounded d-none d-sm-flex">
                    <ChatroomComponent />
                </Col>
            </Row>

            <Row className="mt-4 d-none d-sm-flex">
                {/* <CardComponent /> */}
             
                <Col xs={12} md={4} className="border border-1 p-3 rounded mb-3 p-4">
                    <h2>Carta NASIONALfm 10</h2>
                    <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris elementum interdum lacus, scelerisque dapibus massa pharetra quis. Pellentesque eleifend augue eros, eget sagittis justo vehicula at. Aliquam rutrum luctus porttitor. Ut commodo non libero quis feugiat. Nullam auctor nisi non tempus laoreet. Fusce dictum pretium leo vitae varius. In consectetur vitae metus nec volutpat.

Pellentesque sollicitudin erat at nunc pellentesque volutpat. Donec laoreet urna sed massa hendrerit, vel semper nisi mollis. Sed tempus, ipsum et venenatis tempus, massa eros gravida urna, a commodo arcu nulla ut libero. Duis eros libero, pellentesque vel ullamcorper quis, tempor sit amet metus. Integer molestie rhoncus turpis at consequat. Pellentesque sed ipsum velit. Nunc ut rutrum enim, in fringilla nisi. Vestibulum nec sem ullamcorper arcu luctus luctus nec in arcu. Phasellus in neque a ligula imperdiet semper. Vestibulum finibus dolor vitae dui vehicula ullamcorper.
                    </span>
                </Col>

                <Col xs={12} md={8} className="border border-1 p-3 rounded d-none d-sm-flex">
                    <PollComponent />
                </Col>
            </Row>

        </div>
    );
};

export default Home;