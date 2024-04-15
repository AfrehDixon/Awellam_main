import { Link,useLocation } from "react-router-dom";
import logo2 from "../../assets/logo2.png";
import "./Navbar.css";
import { HiMenu } from "react-icons/hi";
export default function Navbar () {
  // const location= useLocation()

	return (
		<div className="">
			<header className="navbar contain">
				<img src={logo2} alt="logo" />
				<ul className="nav">
					<li>
						<Link to="/"> Home </Link>
					</li>
					<li>
						<Link to="/about"> About </Link>
					</li>
					<li>
						<Link to="/service"> Service </Link>
					</li>
					<li>
						<Link to="/contact"> Contact </Link>
					</li>
				</ul>
				<HiMenu size={80} />
			</header>
		</div>
	);
}
