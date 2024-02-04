import React from "react"

const Container = props  => {

    return (
	<div className="body-container">
	    {props.children}
	</div>
    );

}


export default Container;
