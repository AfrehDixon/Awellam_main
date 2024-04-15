import './Contact.css'
import Footer from '../Footer/Footer';
import { GoInbox, GoLocation, GoMail, GoTelescope } from "react-icons/go";

export default function Contact() {
  return (
		<div>
			<div className=" contain contactt ">
				<div className="hero-text">
					<h1>Contact</h1>

					{/* <h5>
							Our dedicated haulage service ensures reliablity and strenght in
							every delivery,Lets build a solid future together
						</h5> */}
				</div>
			</div>

			<div className="contact">
				<div className="contact-col">
					<h3>
						Send us a message <GoMail className="contact-img" />
					</h3>
					<p>
						Please use the form below to contact Awellam Company Ltd. Providing
						as much information as possible will help us to respond to your
						enquiry more effectively. A member of our team will review your
						enquiry and get in touch at the earliest opportunity.
					</p>
					<ul>
						<li>
							<GoMail size={30} className="icon" />
							info@awellam.com
						</li>
						<li>
							<GoTelescope size={30} className="icon" />
							+233 244 541775
						</li>
						<li>
							<GoLocation size={30} className="icon" />
							Opposite Community 25 Mall, Tema
						</li>
					</ul>
				</div>
				<div className="contact-col">
					<form action="">
						<label htmlFor="">Your Name</label>
						<input type="text" placeholder="Enter your name" required />
						<label htmlFor="">Phone Number</label>
						<input type="tel" placeholder="Enter your name" required />
						<label htmlFor="">Write your message</label>
						<textarea
							name="message"
							id=""
							rows="10"
							placeholder="Enter you message"
							required
						></textarea>
						<button type="submit" className="btn">
							Submit
						</button>
					</form>
				</div>
			</div>
			<div className="foot">
				<Footer />
			</div>
		</div>
	);
}
