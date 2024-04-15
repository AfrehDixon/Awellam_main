import React from "react";
import Header from "../components/Header";
import { HiTruck } from "react-icons/hi";
import "./Choose.css";
import { TiBriefcase, TiFlash } from "react-icons/ti";

export default function Choose() {
	return (
		<div className="contain">
			<Header title="Why choose Us" subtitle="Choose US for a Reason" />
			<div className="choose">
				<div className="choose-item ">
					{/* <HiTruck size={40} /> */}
					<TiBriefcase
						size={80}
						className="self-center bg-blue-300 ml-24 p-1 rounded-lg mb-2"
					/>
					<h2>Unmatched Expertise and Quality</h2>
					<p>
						Our team boasts decades of collective experience in the construction
						and building materials industry. Whether you are embarking on a
						residential renovation or a large-scale commercial project, our
						commitment to excellence guarantees that you receive the highest
						caliber materials and services, every time.
					</p>
				</div>
				<div className="choose-item">
					<HiTruck
						size={80}
						className="self-center bg-blue-300 ml-24 p-1 rounded-lg mb-2"
					/>
					<h2>Customer-Centric Approach</h2>
					<p>
						At our core, we prioritize the satisfaction and success of our
						clients above all else. We believe in fostering transparent
						communication and collaboration throughout the entire process,
						keeping you informed and involved at every stage. You can trust us
						to go above and beyond to exceed your expectations.
					</p>
				</div>
				<div className="choose-item">
					<TiFlash
						size={80}
						className="self-center bg-blue-300 ml-24 p-1 rounded-lg mb-2"
					/>
					<h2>Reliability and Integrity</h2>
					<p>
						We understand the importance of deadlines and budgets in the
						construction industry, which is why we pride ourselves on our
						steadfast reliability and integrity. From prompt delivery of
						materials to adherence to project timelines, we ensure that your
						construction plans stay on track and within budget constraints.
						Honesty, transparency, and accountability are the cornerstones of
						our business ethos.
					</p>
				</div>
			</div>
		</div>
	);
}
