// import Hero from "../components/Hero/Hero";
// import ''
import hullage5 from "../assets/hullage5.jpg";
import vission from "../assets/vission.jpg";
import mission from "../assets/mission.jpg";
import Choose from "../choose/Choose";
import Footer from "../Footer/Footer";
import Testimonials from "../components/Testimonials/Testimonials";
// import '.'
import "./Aboutt.css";
function About() {
	return (
		<div>
			<div>
				<div className=" contain abouttt">
					<div className="hero-text">
						<h1>
							Know More{" "}
							<span className="text-blue-600 font-mono"> About Us</span>
						</h1>
						<h5 className="font-19">
							Awellam Company Limited has highly developed distribution channel
							along with the earnest dealers across the country
						</h5>
						{/* <h5>
							Our dedicated haulage service ensures reliablity and strenght in
							every delivery,Lets build a solid future together
						</h5> */}
					</div>
				</div>
				<div className="about-page">
					<img src={hullage5} alt="" />
					<div className="about-content">
						<h1>
							Reliable and Dedicated Cement Company for Your Construction.
						</h1>
						<p>
							Awellam Company Limited is a company providing topnotch services
							in building constructions and civil engineering with more than a
							decade of experience in real estates, building custom homes,
							townhouses, condominiums, and apartments etc.
							<span>
								Our continuous quest to remain a respectable construction
								company delivering beyond expectations and beyond the boarders
								of Ghana has madeprocuring projects at competitive pricing and
								delivering quality work within reasonable time frames our
								hallmark.
							</span>
							We are also major national suppliers of all round building and
							construction materials such as
							<ul>
								<li>Cement</li>
								<li>Iron Rods</li>
								<li>Wood</li>
								<li>Blocks</li>
								<li>Tiles</li>
							</ul>
						</p>
					</div>
				</div>
				<div className="miss">
					<div className="mission-page">
						<h2 className="mission-header ">Our Mission</h2>
						<img src={mission} alt="" />
						<p>
							We provide the best all-round construction-related services &
							products, catering to every aspect of your building needs. From
							top-quality materials to expert guidance and reliable services, we
							ensure excellence at every step of your construction journey. With
							our commitment to quality, innovation, and customer satisfaction,
							we strive to be your trusted partner in building the future.
						</p>
					</div>
					<div className="mission-page">
						<h2 className="mission-header">Our Vision</h2>
						<img src={vission} alt="" />
						<p>
							Fulfilling an enduring legacy built on trust and dependability, we
							are dedicated to upholding the highest standards in everything we
							do. With a rich history of reliability and a forward-thinking
							approach, we strive to exceed expectations and deliver exceptional
							results that stand the test of time. Trust us to be your steadfast
							partner in realizing your construction dreams.
						</p>
					</div>
				</div>
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
		</div>
	);
}

export default About;
