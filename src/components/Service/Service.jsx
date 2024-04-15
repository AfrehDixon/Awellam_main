import Header from "../Header";
// import Card from './Card'
import hullage2 from "../../assets/hullage2.jpg";
import "./Service.css";

export default function Service() {
	return (
		<div className="contain ">
			<Header title="What we do" subtitle="Our Services" />
			<div className="main-service">
				<div className="service">
					<img src={hullage2} alt="" className=" rounded-md" />
					<p className="m-4">
						To deliver cement around the country, Awellam Company Limited has
						highly developed distribution channel along with the earnest dealers
						across the country.
						{/* For immediate fulfilment of any kind of demand
						from anywhere in the country, the company maintains a robust
						supply-chain management towards the waterway and roadway both.nus! */}
					</p>
					<button className=" py-3 px-7 text-center rounded-md  relative left-0  ">
						Cement Distribution
					</button>
				</div>
				<div className="service">
					<img src={hullage2} alt="" className=" rounded-md" />
					<p className="m-4">
						The Awellam Builders City store provides you with the ability to
						directly and comfortably buy whatever building materials you need
						for your project irrespective of where you are in the world, and to
						have them delivered to your specified project site or location at
						the time that you need it.
					</p>
					<button className=" py-3 px-7 text-center rounded-md   ">
						Builders City
					</button>
				</div>
				<div className="service">
					<img src={hullage2} alt="" className=" rounded-md" />
					<p className="m-4">
						Our wide range of trucks and equipment, combined with our helpful
						and experienced staff, make us the perfect transport partner for all
						types of movement. Our locations across Ghana means we can offer
						competitive pricing for movements anywhere in Ghana.
					</p>
					<button className=" py-3 px-7 text-center rounded-md  relative left-0  ">
						Hullage Service
					</button>
				</div>
			</div>
		</div>
	);
}
