import Choose from "../choose/Choose";
import Header from "../components/Header";
import Hero from "../components/Hero/Hero";
import Layout from "../components/Layout/Layout";
import Mission from "../components/Mission/Mission";
import Service from "../components/Service/Service";
import Testimonials from "../components/Testimonials/Testimonials";
import Footer from '../../src/Footer/Footer'
import Button from "../components/Button/Button"
import { Children } from "react";


function Home() {
	return (
		<div className="">
			<Layout />
			<Hero>
				{/* <div className="hero contain">
					<div className="hero-text">
						<h1>
							Building the <span>Future</span>
						</h1>
						<h5>
							Experience unmatched quality in cement and building
							materials,delivered right to you
						</h5>
						<h5>
							Our dedicated haulage service ensures reliablity and strenght in
							every delivery,Lets build a solid future together
						</h5>
					</div>
					<div className="hero-btn">
						<Button title="CONTACT US"></Button>

						<Button title="LEARN MORE"></Button>
					</div>
				</div> */}
				{/* {Children} */}
			</Hero>
			<Header title="About Us" subtitle="Our Mission" />
			<Mission />
			<Service />
			<div className="main-choose ">
				<Choose />
			</div>
			<div>
				<Testimonials />
			</div>
			<div className="foot">
				<Footer />
			</div>
		</div>
	);
}

export default Home;
