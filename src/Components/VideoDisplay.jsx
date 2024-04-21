import React from 'react';
import ReactPlayer from 'react-player';

const VideoDisplay = ({ videoLink, description }) => {
    return (
        <div className="video-container">
            <ReactPlayer
                url={videoLink}
                className="react-player"
                controls={true}
                width="100%"
                height="100%"
            />
            <p className="video-description">{description}</p>
        </div>
    );
};

export default VideoDisplay;
