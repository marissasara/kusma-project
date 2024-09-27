import React from 'react';
import ReactPlayer from 'react-player';

const VideoComponent = () => {
    const [played, setPlayed] = React.useState(0);
    const src =`https://nasionalfm.muzikfmrtm.com/hls/myStream.m3u8`
    return (
        <div className="container">
            <div className="grid grid-cols-1 justify-center text-center">
                <div className="relative">
                <ReactPlayer
                    onProgress={(progress) => {
                        setPlayed(progress.playedSeconds);
                    }}
                    url={src}
                    playing={true}
                    controls={true}
                    width="100%"
                    height="auto"
                />
                </div>
            </div>
        </div>
    );
};

export default VideoComponent;