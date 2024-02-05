import React from "react"

import {NavLink} from "react-router-dom"

const Navbar = () => {

    return (
	<div className="nav-width-full">
	    <div className="nav-stack-full">
		<hr />
		<div className="nav-width-center">
		    <NavLink id="nav-about" to="/" className="nav-link">About</NavLink>
		    <div className="color-green">|</div>
		    <NavLink to="/shop" className="nav-link">Shop</NavLink>
		    <div className="color-green">|</div>
		    <NavLink to="/videos" className="nav-link">Videos</NavLink>
		</div>
		<hr />
	    </div>
	</div>
    );

}

export default Navbar;
