import React from 'react';
import ReactPlayer from 'react-player';

const VideoComponent = () => {
    const [played, setPlayed] = React.useState(0);
    const src =`https://nasionalfm.muzikfmrtm.com/hls/myStream.m3u8`
    return (
        <div className="container">
            <h2>Livestream</h2>
            <div className="">
                <div className="relative">
                <ReactPlayer
                    onProgress={(progress) => {
                        setPlayed(progress.playedSeconds);
                    }}
                    url={src}
                    playing={true}
                    controls={true}
                    width="100%"
                    height="600px"
                />
                </div>
            </div>
        </div>
    );
};

export default VideoComponent;