import React from 'react';
import BannerComponent from '../../layouts/GuestLayout/BannerComponent';
import { Row,Col } from 'react-bootstrap';
import CardComponent from '../../layouts/GuestLayout/CardComponent';

const Home = () => {
    return (
        <div>
            <Row>
                <BannerComponent />
            </Row>

            <Row className='mt-4'>
                <CardComponent />
            </Row>

            <Row className="mt-4">    
                <div className="d-flex flex-wrap justify-content-between">
                    <Col className="col-8 border border-1 p-3 rounded ">livestream</Col>
                    <Col className="col-4 border border-1 p-3 rounded">
                    <h2>Chatroom</h2>
                    <iframe src="https://deadsimplechat.com/3Nmi1rTcx" width="100%" height="600px"></iframe>
                    </Col>
                </div>
            </Row>
            
        </div>
    );
};

export default Home;