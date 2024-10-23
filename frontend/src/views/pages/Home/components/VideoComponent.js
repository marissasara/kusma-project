import React from 'react';
import { Col, Row } from 'react-bootstrap';
import ReactPlayer from 'react-player';

const VideoComponent = () => {
    const [played, setPlayed] = React.useState(0);
    const src =`https://nasionalfm.muzikfmrtm.com/hls/myStream.m3u8`
    return (
        <Row className="rounded" style={{'height' : '800px', 'backgroundColor' : '#000'}}>
            
                <ReactPlayer
                    onProgress={(progress) => {
                        setPlayed(progress.playedSeconds);
                    }}
                    url={src}
                    playing={true}
                    controls={true}
                    width="100%"
                    height="800px"
                />
        
        </Row>
    );
};

export default VideoComponent;