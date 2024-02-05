import React from "react"

const Experiment = props  => {

    const {exp} = props;
    
    return (
	<div className="experiment">
	    <div className="experiment-img">
		<img src={exp.image} /> 
	    </div>
	    <div className="experiment-text">
		<p className="blops color-green">{exp.title}</p>
		<p className="monst">Coming Soon!</p>
	    </div>
	</div>
    );
    
}


export default Experiment;
