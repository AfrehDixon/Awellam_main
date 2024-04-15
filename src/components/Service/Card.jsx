// import React from 'react'
import hullage2 from "../../assets/hullage2.jpg";
import './Service.css'
export default function Card() {
	return (
		<div className="contain ">
			<div className="service">
				<img src={hullage2} alt="" className="imgg" />
				<p className="m-4">
					What are do are the sessente of what we offer Lorem ipsum dolor, sit
					amet consectetur adipisicing elit. Nam quam, nobis eveniet ad ullam
					dolor ipsam minima beatae, provident sunt totam similique facilis!
					Inventore eligendi quidem consequatur voluptatum, fuga minus!
				</p>
				<button className="bg-yellow-400 py-3 px-7 text-center rounded-md  relative left-0  ">
					Transport Service
				</button>
			</div>
		</div>
	);
}
