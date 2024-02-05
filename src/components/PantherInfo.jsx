import React from "react"

import pantherPic from "../assets/panther-shot.JPG"
import pantherPose from "../assets/panther-kit-1.JPG"
import pantherBlend from "../assets/panther-blend-1.JPG"

const PantherInfo = () => {

    return (
	<div className="panther-info">
	    <div className="panther-img">
		<img src={pantherPic} alt="Kelvin the Panther" />
	    </div>
	    <div className="panther-text">
		<p className="blops color-green">Kelvin The Panther:</p>
		<p className="monst">One of the driving goals of our company is to make physics teachable to teachers who may not have a strong grasp of the concepts themselves. This means providing our own instruction medium. Rather than adopting the "lecturer-in-front-of-a-whiteboard" model that so many Youtube teachers use, we wanted to come up with a way to connect to the students better. Kelvin's lectures break up the status quo of listening to a teacher talk, and provides a consistent, friendly, knowledgeable face to explain the conepts in a way they understand. Of course, teachers are always welcome to take their own approach to to explaining the concepts, but can rest assured they always have Kelvin to fall back on.</p>
		<div className="more-panther-pics">
		    <div className="more-pic">
			<img src={pantherPose} />
		    </div>
		    <div className="more-pic">
			<img src={pantherBlend} />
		    </div>
		</div>
	    </div>
	</div>
    );

}

export default PantherInfo;
