import React from "react"

import starterKitImg from "../assets/starter-kit-1.JPG"

const ShopFeatured = () => {

    return (
	<div className="shop-feat">
	    <div className="f-grid f-img">
		<img className="feat-img" src={starterKitImg} alt="Starter Kit" />
	    </div>
	    <div className="f-grid f-text">
		<p className="blops color-green f-title">The Starter Kit:</p>
		<div className="f-text-desc">
		    <p className="monst">Our famous Affordalab Starter Kit! The Starter Kit contains our unique modular experiment platform, and several engaging experiments to get your students excited about learning Physics! Our Starter Kit also comes with our Continuity Guarantee, so you can rest assured that all new experiments our scientists cook up willl always be compatible with your starter kit, no matter when it was purchased.</p>
		</div>
		<div className="f-desc-foot">
		    <p className="buy-btn monst">Buy Now!</p>
		    <p>USD $199</p>
		    <div className="desc-foot-spacer"></div>
		</div>
	    </div>
	</div>
    );

}

export default ShopFeatured;
