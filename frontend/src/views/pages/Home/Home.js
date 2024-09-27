import React from 'react';
import BannerComponent from '../../layouts/GuestLayout/BannerComponent';
import { Row,Col } from 'react-bootstrap';
import CardComponent from '../../layouts/GuestLayout/CardComponent';
import ReactPlayer from 'react-player';
import VideoComponent from '../../layouts/HomeLayout/VideoComponent';

const Home = () => {
    const [played, setPlayed] = React.useState(0);
    const src =`https://nasionalfm.muzikfmrtm.com/hls/myStream.m3u8`
    return (
        <div>
            <Row>
                <BannerComponent />
            </Row>

            <Row className='mt-4'>
                <CardComponent />
            </Row>
            <Row className="mt-4">
                <Col xs={12} md={8} className="border border-1 p-3 rounded mb-3">
                    <VideoComponent />
                </Col>

                <Col xs={12} md={4} className="border border-1 p-3 rounded">
                    <h2>Chatroom</h2>
                    <iframe src="https://deadsimplechat.com/3Nmi1rTcx" width="100%" height="600px"></iframe>
                </Col>
            </Row>

            
        </div>
    );
};

export default Home;