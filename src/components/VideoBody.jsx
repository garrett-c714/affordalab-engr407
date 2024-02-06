import React from "react"

import Video from "./Video"

import centVidAsset from "../assets/vid-thumbnail.png"

const VideoBody = () => {

    const videos = [
	{
	    title: 'Kelvin Explains: Centrifugal "Force"',
	    desc: "The video companion to the Centripetal & Cengrifugal experiment in your starter kit! In this video, Kelvin explains why what we observe during this experiment may not be the same as what we expect to see, and why that happens.",
	    video: centVidAsset,
	    link: "https://youtu.be/-xy2qF15gXg"
	}
    ]
    
    return (
	<div className="video-body">
	    {videos.map(vid => <Video vid={vid} />)}
	</div>
    );
    
}

export default VideoBody;
