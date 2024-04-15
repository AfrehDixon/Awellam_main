// import React from "react";
// import { TiInputChecked } from "react-icons/ti";
// import { HiOutlineLightBulb } from "react-icons/hi";
import banner1 from "../../assets/banner1.jpg";
import "./Mission.css";
import { motion } from "framer-motion";

export default function Mission() {
	return (
		<div className="">
			<div className="mission contain">
				<img src={banner1} alt="" />
				<motion.div animate={{ x: [null, 100, 0] }} className="mission-content">
					<p>
						Awellam Company Limited is a company providing topnotch services in
						building constructions and civil engineering with more than a decade
						of experience in real estates, building custom homes, townhouses,
						condominiums, and apartments etc.
						<p>
							We are also major national suppliers of all round building and
							construction materials such as
						</p>
						{/* <span>
							<ul>
								<li>
									<TiInputChecked size={50} className="checked" />
									Cement
								</li>
								<li>
									<TiInputChecked size={50} className="checked" />
									Iron Rods
								</li>
								<li>
									<TiInputChecked size={50} className="checked" />
									Wood
								</li>
								<li>
									<TiInputChecked size={50} className="checked" />
									Blocks
								</li>
								<li>
									<TiInputChecked size={50} className="checked" />
									Tiles , etc
								</li>
							</ul>
						</span> */}
						Our continuous quest to remain a respectable construction company
						delivering beyond expectations and beyond the boarders of Ghana has
						madeprocuring projects at competitive pricing and delivering quality
						work within reasonable time frames our hallmark.
					</p>
					{/* <span className="mission-sub">
						
						<HiOutlineLightBulb className="vision" size={40}/>
						Mission
					</span>
					<p>
						We provide best all-round construction-related services & products
					</p>
					<span className="mission-sub">
						<HiOutlineLightBulb className="vision"    size={40}/>
						Vision
					</span>
					<p>Fulfilling an enduring Legacy built on Trust & Dependability</p> */}
					<button className="btn">Know more</button>
					<motion.button
						initial={{ opacity: 0.6 }}
						whileHover={{
							scale: 1.2,
							transition: { duration: 1 },
						}}
						whileTap={{ scale: 0.9 }}
						whileInView={{ opacity: 1 }}
					/>
				</motion.div>
			</div>
		</div>
	);
}
