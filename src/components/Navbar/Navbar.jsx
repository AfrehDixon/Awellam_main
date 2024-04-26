import { Link } from "react-router-dom";
import logo2 from "../../assets/logo2.png";
import "./Navbar.css";
import { HiEyeOff, HiMenu } from "react-icons/hi";
import { useState, useEffect } from "react";
import { MdClose } from "react-icons/md";

export default function Navbar() {
	const [sticky, setsticky] = useState(false);
	// const location= useLocation()

	useEffect(() => {
		window.addEventListener("scroll", () => {
			window.scrollY > 50 ? setsticky(true) : setsticky(false);
		});
	});

	const [mobilemenu, setmobile] = useState(false);

	const hide = () => {
		mobilemenu ? setmobile(false) : setmobile(true);
	};

	return (
		<div className="">
			<header className={`navbar contain ${sticky ? "dark-nav" : ""}`}>
				<img src={logo2} alt="logo" />
				<ul className={mobilemenu ? "" : "hide"}>
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
				<div className="menu">
					{mobilemenu ? (
						<MdClose
							size={40}
							onClick={hide}
							className="hover: cursor-pointer"
						/>
					) : (
						<HiMenu
							size={40}
							onClick={hide}
							className="hover: cursor-pointer"
						/>
					)}
					{/* ()=> ToggleIsNav(!ToggleNav) */}
				</div>
			</header>
		</div>
	);
}
