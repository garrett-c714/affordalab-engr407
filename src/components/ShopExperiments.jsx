import React from "react"

import Experiment from "./Experiment"

import collisionImg from "../assets/soon-collisions.jpg"
import potentialImg from "../assets/soon-potential.jpg"
import staticImg from "../assets/static-uncovered.jpg"

const ShopExperiments = () => {

    const experiments = [
	{
	    image: collisionImg,
	    title: "Collisions, Impulse, and Momentum"
	},
	{
	    image: potentialImg,
	    title: "Potential Energy: Gravitataional, Elastic, and Chemical"
	},
	{
	    image: staticImg,
	    title: "Electric Charge, Electrostatics"
	}
    ];
    
    return (
	<div className="exp-container">
	    {experiments.map(exp => <Experiment exp={exp} />)}
	</div>
    );

}


export default ShopExperiments;
