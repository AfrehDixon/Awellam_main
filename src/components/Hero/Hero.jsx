// import React from 'react'

import Button from "../Button/Button";
import "./Hero.css";

export default function Hero ( { children } ) {
	return (
		// <div>
		// 	<div>children</div>
		// </div>
		<div className="hero contain">
			<div className="hero-text">
				<h1>
					Building the <span>Future</span>
				</h1>
				<h5>
					Experience unmatched quality in cement and building
					materials,delivered right to you
				</h5>
				<h5 className="hi">
					Our dedicated haulage service ensures reliablity and strenght in every
					delivery,Lets build a solid future together
				</h5>
			</div>
				<Button title="LEARN MORE"></Button>
			<div className="hero-btn">
				{/* <Button title="CONTACT US"></Button> */}

			</div>
		</div>
	);
}
