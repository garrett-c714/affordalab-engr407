import React from "react"

const Video = props => {

    const {vid} = props;
    
    return (
	<div className="video">
	    <hr />
	    <div className="vid-content">
		<div className="vid-c-text">
		    <p className="blops color-green">{vid.title}</p>
		    <p className="monst">{vid.desc}</p>
		</div>
		<div className="vid-c-vid">
		    <a href={vid.link} target="_blank"><img src={vid.video} alt="Video Thumbnail" /></a>
		</div>
	    </div>
	    <hr />
	</div>
    );
    
}

export default Video;
