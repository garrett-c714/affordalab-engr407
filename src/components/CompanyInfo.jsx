import React from "react"

const CompanyInfo = () => {

    return (
	<div className="comp-info">
	    <hr />
	    <div className="comp-split-grid">
		<div className="comp-mission mission-border-right comp-content">
		    <p className="blops color-green">Our Mission:</p>
		    <p className="monst">Offering every curious young the chance to experience hands-on physics magic, at a price every school can accesibly afford.</p>
		</div>
		<div className="comp-about comp-content">
		    <p className="blops color-green">About Us:</p>
		    <p className="monst">We founded AffordaLab with a single, unifed purpose: To get more children interested in STEM, with a low barrier to entry. AffordaLab came to be with humble beginnings - from scraps in our univeristy's workshop.</p>
		</div>
	    </div>
	    <hr />
	</div>
    );

}

export default CompanyInfo;
