import React from "react"

import ShopFeatured from "./ShopFeatured"

const ShopGrid = () => {

    return (
	<div className="shop-grid">
	    <div className="shop-g shop-featured">
		<p className="shop-section-head">Featured:</p>
		<ShopFeatured />
	    </div>
	    <div className="shop-g shop-other">
		<p className="shop-section-head">Experiments: </p>
	    </div>
	</div>
    );
    
}

export default ShopGrid;
