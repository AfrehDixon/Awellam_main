import "./Store.css";
import Footer from "../Footer/Footer";
import Choose from "../choose/Choose";
import banner1 from "../assets/banner1.jpg";
import hullage1 from "../assets/hullage1.jpg";
import { HiCheck } from "react-icons/hi";
export default function Store() {
	return (
		<div>
			<div>
				<div className=" contain store ">
					<div className="hero-text">
						<h1>Our Services</h1>
						<h5>
							To deliver cement around the country, Awellam Company Limited has
							highly developed distribution channel along with the earnest
							dealers across the country
						</h5>
						{/* <h5>
							Our dedicated haulage service ensures reliablity and strenght in
							every delivery,Lets build a solid future together
						</h5> */}
					</div>
				</div>
				<div className="serve-main">
					<div className="serve-card">
						<h1 className="mission-header">Cement Distribution</h1>
						<p>
							To deliver cement around the country, Awellam Company Limited has
							highly developed distribution channel along with the earnest
							dealers across the country. For immediate fulfilment of any kind
							of demand from anywhere in the country, the company maintains a
							robust supply-chain management towards the waterway and roadway
							both.
						</p>
					</div>
					<div className="serve-card">
						<h1 className="mission-header">The Channels</h1>
						<p>
							In Road Transport system, Awellam Company Ltd has a strong
							logistic capacity adequately covered trucks to supply cement
							swiftly against the immediate demand from anywhere around the
							country. Several bulk carriers are also counted in the
							distribution system; which is capable to deliver cement to large
							infrastructures. To ensure proper and hassle-free distribution of
							the products within a desired time, Awellam Company Limited has
							additional distribution points (depots) of its own around the
							country where users and buyers can directly access stock from to
							fulfill their immediate demands.
						</p>
					</div>
					<div className="serve-card">
						<h1 className="mission-header">Construction & Real Estate</h1>
						<p>
							Awellam Company Limited has been an active player in the building
							and construction industry in Ghana over the past decade. The
							company has worked on both public and private projects, in the
							areas of building works, renovation and civil engineering. We take
							quality and safety as an integral part of our operations in
							executing any project. Thus, our commitment to continuously
							provide the best services and also deliver high quality standards
							to our clients. It is also the company’s policy to ensure timely
							handover, minimise defects and material wastage, maintain a safe
							and healthy working environment, and to provide constant training
							to its staff so as to improve their level of expertise and
							workmanship.We continuously strive towards 100% customer
							satisfaction in all aspects such as cost, efficiency, duration and
							quality
						</p>
					</div>
					<div className="serve-card">
						<h1 className="mission-header new">Our Objective</h1>
						<p>
							Our management and execution philosophy include:{" "}
							<ul className="">
								<li>
									<HiCheck size={40} color="green" />
									Clear detail schedule and resource plan to meet client’s
									project objective
								</li>
								<li>
									<HiCheck size={40} color="green" />
									Clear detail schedule and resource plan to meet client’s
									project objective
								</li>
								<li>
									<HiCheck size={40} color="green" />
									Communicate clearly with all project stakeholders
								</li>
								<li>
									<HiCheck size={40} color="green" />
									Track project progress and fine-tune deviations
								</li>
								<li>
									<HiCheck size={40} color="green" />
									Supervise closely quality of all works done
								</li>
								<li>
									<HiCheck size={40} color="green" />
									Complete and commission projects on time
								</li>
							</ul>
						</p>
					</div>
					<div className="serve-card">
						<h1 className="mission-header">Builder City</h1>
						<img src={banner1} alt="iron-rod" />
						<p>
							The Awellam Builders City store provides you with the ability to
							directly and comfortably buy whatever building materials you need
							for your project irrespective of where you are in the world, and
							to have them delivered to your specified project site or location
							at the time that you need it. This platform removes the
							intervention of middlemen in the sourcing of building materials
							and allows you to have control on the amount you spend on raw
							materials for your projects.
						</p>
					</div>
					<div className="serve-card">
						<h1 className="mission-header">Hullage</h1>
						<img src={hullage1} alt="imgg" />
						<p>
							Our wide range of trucks and equipment, combined with our helpful
							and experienced staff, make us the perfect transport partner for
							all types of movement. Our locations across Ghana means we can
							offer competitive pricing for movements anywhere in Ghana, and
							because we operate around the clock and have your best interest at
							heart, we really are one of the most convenient and flexible
							haulage companies in the country.
						</p>
					</div>
				</div>
				<div className="main-choose ">
					<Choose />
				</div>
				<div className="foot">
					<Footer />
				</div>
			</div>
		</div>
		// </div>
	);
}
