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
		    <img src={vid.video} alt="Video Thumbnail" />
		</div>
	    </div>
	    <hr />
	</div>
    );
    
}

export default Video;
