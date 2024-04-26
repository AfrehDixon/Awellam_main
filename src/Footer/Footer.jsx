import { TiSocialFacebook, TiSocialInstagram, TiSocialLinkedin, TiSocialTwitter } from "react-icons/ti";
import logo2 from "../assets/logo2.png";
import "./Footer.css";

export default function Footer() {
	return (
		<div className="">
			<div className="footer">
				<div className="footer1">
					<img src={logo2} alt="" />
					<p>
						Awellam Company Limited is a company providing topnotch services in
						building constructions and civil engineering with more than a decade
						of experience in real estates, building custom homes, townhouses,
						condominiums, and apartments etc.
					</p>
				</div>
				<div className="footer2 ">
					<h2 className="font-bold uppercase">Navigate</h2>
					<ul>
						<li>Home</li>
						<li>About</li>
						<li>Contact us</li>
						<li>Services</li>
					</ul>
				</div>
				<div className="footer3">
					<h2 className="">CONTACT US</h2>
					<h1>Opposite Community 25 Mall, Tema</h1>
					<h1>0244-541775</h1>
					<h1>info@awellam.com</h1>
				</div>
				<div className="footer4">
					<h2 className="uppercase">Socials</h2>
					<TiSocialTwitter className="" size={25} />
					<TiSocialFacebook className="" size={25} />
					<TiSocialLinkedin className="" size={25} />
					<TiSocialInstagram className="" size={25} />
				</div>
			</div>
		</div>
	);
}
