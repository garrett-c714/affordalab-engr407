import React from "react"

import {Link} from "react-router-dom"

const Navbar = () => {

    return (
	<div className="nav-width-full">
	    <div className="nav-stack-full">
		<hr />
		<div className="nav-width-center">
		    <Link to="/" className="nav-link">About</Link>
		<div className="color-green">|</div>
		<Link to="/shop" className="nav-link">Shop</Link>
		<div className="color-green">|</div>
		<Link to="/videos" className="nav-link">Videos</Link>
		</div>
		<hr />
	    </div>
	</div>
    );

}

export default Navbar;
